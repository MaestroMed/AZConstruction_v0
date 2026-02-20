import { ImageResponse } from "next/og";
import { NextRequest } from "next/server";

export const runtime = "edge";

// Couleurs du design system
const COLORS = {
  navyDark: "#0a1628",
  cyan: "#06b6d4",
  cyanLight: "#22d3ee",
  white: "#ffffff",
  gray: "#94a3b8",
};

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    
    // Paramètres de l'image
    const title = searchParams.get("title") || "AZ Construction";
    const subtitle = searchParams.get("subtitle") || "L'acier sur mesure, vite et bien.";
    const type = searchParams.get("type") || "default"; // default, product, service, thermolaquage
    const badge = searchParams.get("badge") || "";
    
    // Charger la police
    const fontData = await fetch(
      new URL("https://fonts.gstatic.com/s/spacegrotesk/v15/V8mQoQDjQSkFtoMM3T6r8E7mF71Q-gOoraIAEj7oUXskPMBBSSJLm2E.ttf")
    ).then((res) => res.arrayBuffer());

    return new ImageResponse(
      (
        <div
          style={{
            height: "100%",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            backgroundColor: COLORS.navyDark,
            position: "relative",
            fontFamily: "Space Grotesk",
          }}
        >
          {/* Gradient background */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: `radial-gradient(ellipse at top right, ${COLORS.cyan}20 0%, transparent 50%), 
                           radial-gradient(ellipse at bottom left, ${COLORS.cyan}10 0%, transparent 50%)`,
            }}
          />
          
          {/* Grid pattern */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundImage: `linear-gradient(${COLORS.cyan}08 1px, transparent 1px), 
                               linear-gradient(90deg, ${COLORS.cyan}08 1px, transparent 1px)`,
              backgroundSize: "50px 50px",
            }}
          />

          {/* Content */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              padding: "60px",
              height: "100%",
              position: "relative",
            }}
          >
            {/* Header with logo */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              {/* Logo */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "16px",
                }}
              >
                <div
                  style={{
                    width: "60px",
                    height: "60px",
                    background: `linear-gradient(135deg, ${COLORS.cyan} 0%, ${COLORS.cyanLight} 100%)`,
                    borderRadius: "12px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "28px",
                    fontWeight: 700,
                    color: COLORS.white,
                  }}
                >
                  AZ
                </div>
                <span
                  style={{
                    fontSize: "28px",
                    fontWeight: 600,
                    color: COLORS.white,
                    letterSpacing: "-0.02em",
                  }}
                >
                  AZ Construction
                </span>
              </div>

              {/* Badge */}
              {badge && (
                <div
                  style={{
                    background: `linear-gradient(135deg, ${COLORS.cyan} 0%, ${COLORS.cyanLight} 100%)`,
                    color: COLORS.white,
                    padding: "10px 24px",
                    borderRadius: "100px",
                    fontSize: "18px",
                    fontWeight: 600,
                  }}
                >
                  {badge}
                </div>
              )}
            </div>

            {/* Main content */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "20px",
                maxWidth: "900px",
              }}
            >
              {/* Type indicator */}
              {type !== "default" && (
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                  }}
                >
                  <div
                    style={{
                      width: "8px",
                      height: "8px",
                      borderRadius: "50%",
                      backgroundColor: COLORS.cyan,
                    }}
                  />
                  <span
                    style={{
                      fontSize: "18px",
                      color: COLORS.cyan,
                      fontWeight: 500,
                      textTransform: "uppercase",
                      letterSpacing: "0.1em",
                    }}
                  >
                    {type === "product" && "Produit"}
                    {type === "service" && "Service"}
                    {type === "thermolaquage" && "Thermolaquage"}
                  </span>
                </div>
              )}

              {/* Title */}
              <h1
                style={{
                  fontSize: title.length > 40 ? "52px" : "64px",
                  fontWeight: 700,
                  color: COLORS.white,
                  lineHeight: 1.1,
                  margin: 0,
                  letterSpacing: "-0.02em",
                }}
              >
                {title}
              </h1>

              {/* Subtitle */}
              <p
                style={{
                  fontSize: "24px",
                  color: COLORS.gray,
                  margin: 0,
                  lineHeight: 1.4,
                }}
              >
                {subtitle}
              </p>
            </div>

            {/* Footer */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              {/* Features */}
              <div
                style={{
                  display: "flex",
                  gap: "32px",
                }}
              >
                {["Profilés Jansen", "Fabrication française", "1800m² d'atelier"].map(
                  (feature, i) => (
                    <div
                      key={i}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                      }}
                    >
                      <div
                        style={{
                          width: "6px",
                          height: "6px",
                          borderRadius: "50%",
                          backgroundColor: COLORS.cyan,
                        }}
                      />
                      <span
                        style={{
                          fontSize: "16px",
                          color: COLORS.gray,
                        }}
                      >
                        {feature}
                      </span>
                    </div>
                  )
                )}
              </div>

              {/* URL */}
              <span
                style={{
                  fontSize: "18px",
                  color: COLORS.cyan,
                  fontWeight: 500,
                }}
              >
                azconstruction.fr
              </span>
            </div>
          </div>

          {/* Decorative corner */}
          <div
            style={{
              position: "absolute",
              bottom: 0,
              right: 0,
              width: "200px",
              height: "200px",
              background: `linear-gradient(135deg, transparent 50%, ${COLORS.cyan}15 50%)`,
            }}
          />
        </div>
      ),
      {
        width: 1200,
        height: 630,
        fonts: [
          {
            name: "Space Grotesk",
            data: fontData,
            style: "normal",
            weight: 400,
          },
        ],
      }
    );
  } catch (e) {
    console.error("OG Image generation error:", e);
    return new Response("Failed to generate image", { status: 500 });
  }
}
