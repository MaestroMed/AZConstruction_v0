import { RateLimiterMemory } from "rate-limiter-flexible";
import { NextRequest, NextResponse } from "next/server";

// Rate limiters pour différents endpoints
const rateLimiters = {
  // API générale : 100 requêtes par minute
  api: new RateLimiterMemory({
    points: 100,
    duration: 60,
  }),
  // Auth : 10 tentatives par minute (protection brute force)
  auth: new RateLimiterMemory({
    points: 10,
    duration: 60,
  }),
  // Upload : 20 uploads par minute
  upload: new RateLimiterMemory({
    points: 20,
    duration: 60,
  }),
  // Devis/Contact : 5 soumissions par minute
  form: new RateLimiterMemory({
    points: 5,
    duration: 60,
  }),
};

type LimiterType = keyof typeof rateLimiters;

export async function rateLimit(
  request: NextRequest,
  type: LimiterType = "api"
): Promise<{ success: boolean; remaining: number }> {
  const ip = request.headers.get("x-forwarded-for") || 
             request.headers.get("x-real-ip") || 
             "anonymous";

  try {
    const result = await rateLimiters[type].consume(ip);
    return {
      success: true,
      remaining: result.remainingPoints,
    };
  } catch (error) {
    return {
      success: false,
      remaining: 0,
    };
  }
}

export function rateLimitResponse(): NextResponse {
  return NextResponse.json(
    { error: "Trop de requêtes. Veuillez réessayer plus tard." },
    {
      status: 429,
      headers: {
        "Retry-After": "60",
      },
    }
  );
}

// Helper pour les API routes
export async function withRateLimit(
  request: NextRequest,
  type: LimiterType = "api"
): Promise<NextResponse | null> {
  const { success } = await rateLimit(request, type);
  if (!success) {
    return rateLimitResponse();
  }
  return null;
}




