import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SmoothHashScroll from "./components/SmoothHashScroll";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000");

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "한세계여행사 - 크루즈 전문",
  description: "전세계 크루즈 여행 전문 여행사",
  openGraph: {
    title: "한세계여행사 - 크루즈 전문",
    description: "전세계 크루즈 여행 전문 여행사",
    images: [
      {
        url: "https://pub-f396f9b021ba403fb605a64e3824e612.r2.dev/og.webp?v=2",
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SmoothHashScroll />
        {children}
      </body>
    </html>
  );
}
