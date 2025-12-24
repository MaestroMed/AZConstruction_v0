"use client";

import Script from "next/script";

export function PlausibleAnalytics() {
  const domain = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN;
  
  if (!domain) return null;

  return (
    <Script
      defer
      data-domain={domain}
      src="https://plausible.io/js/script.js"
      strategy="afterInteractive"
    />
  );
}

export function GoogleAnalytics() {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;
  
  if (!gaId) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${gaId}');
        `}
      </Script>
    </>
  );
}

// Export combined component
export function Analytics() {
  return (
    <>
      <PlausibleAnalytics />
      <GoogleAnalytics />
    </>
  );
}







