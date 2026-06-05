import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ColdControl Systems | Monitoring temperature u realnom vremenu",
  description:
    "ColdControl Systems je profesionalan sistem za monitoring temperature u realnom vremenu, sa alarmima, cloud dashboard-om i pregledom više lokacija i senzora.",
  keywords: [
    "monitoring temperature",
    "praćenje temperature",
    "cold control",
    "wifi senzori temperature",
    "alarm temperature",
    "cloud dashboard",
    "apoteke temperatura",
    "hladnjače monitoring",
  ],
  openGraph: {
    title: "ColdControl Systems",
    description:
      "Profesionalan sistem za monitoring temperature u realnom vremenu sa alarmima, cloud dashboard-om i pregledom više lokacija.",
    url: "https://www.coldcontrol.app",
    siteName: "ColdControl Systems",
    locale: "sr_RS",
    type: "website",
  },
  icons: {
    icon: [
      { url: "/favicon-32.png", sizes: "32x32" },
      { url: "/favicon-64.png", sizes: "64x64" },
    ],
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="sr"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">

        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-VP8M68SE56"
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-VP8M68SE56');
          `}
        </Script>

        {/* Schema.org WebSite */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "ColdControl",
              url: "https://www.coldcontrol.app",
            }),
          }}
        />

        {/* Schema.org Navigation */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ItemList",
              itemListElement: [
                {
                  "@type": "SiteNavigationElement",
                  position: 1,
                  name: "Cene",
                  url: "https://www.coldcontrol.app/cene",
                },
                {
                  "@type": "SiteNavigationElement",
                  position: 2,
                  name: "Zakaži demo",
                  url: "https://www.coldcontrol.app/zakazi-demo",
                },
                {
                  "@type": "SiteNavigationElement",
                  position: 3,
                  name: "Ugovor",
                  url: "https://www.coldcontrol.app/primer-ugovora",
                },
              ],
            }),
          }}
        />

        {children}
      </body>
    </html>
  );
}