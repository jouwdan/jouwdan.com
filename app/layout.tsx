import type React from "react";
import "./globals.css";
import type { Metadata, Viewport } from "next";
import { Mona_Sans, JetBrains_Mono } from "next/font/google";
import "highlight.js/styles/github-dark.css";
import { Header } from "@/ui/layout/Header";
import { Footer } from "@/ui/layout/Footer";

const monaSans = Mona_Sans({ subsets: ["latin"], axes: ["wdth"], variable: "--font-mona" });
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetbrains" });

const description =
  "Jordan Harrison is a frontend-led full-stack developer in Portlaoise, Ireland. He created Meith, open-source forum software, and rebuilt the interface of the Tutors learning platform.";

export const metadata: Metadata = {
  metadataBase: new URL("https://jouwdan.com"),
  title: { default: "Jordan Harrison — Full-stack mind. Frontend heart.", template: "%s | Jordan Harrison" },
  description,
  openGraph: { title: "Jordan Harrison — Full-stack mind. Frontend heart.", description, type: "website", locale: "en_IE" },
  twitter: { card: "summary_large_image" },
};

export const viewport: Viewport = { themeColor: "#141624", colorScheme: "dark" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" id="top" className="dark bg-background">
      <body className={`${monaSans.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
