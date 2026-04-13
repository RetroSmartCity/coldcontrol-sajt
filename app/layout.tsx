import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
      "Monitoring temperature u realnom vremenu za apoteke, hladnjače, restorane i druge objekte.",
    type: "website",
    locale: "sr_RS",
    siteName: "ColdControl Systems",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="sr"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-[#071521] text-white">{children}</body>
    </html>
  );
}