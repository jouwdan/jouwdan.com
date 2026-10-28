import type React from "react";
import "./globals.css";
import type { Metadata, Viewport } from "next";
import { Manrope, Instrument_Serif } from "next/font/google";
import "highlight.js/styles/github-dark.css";
import { Header } from "@/ui/layout/Header";
import { Footer } from "@/ui/layout/Footer";

const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope" });
const instrumentSerif = Instrument_Serif({ weight: "400", style: ["normal", "italic"], subsets: ["latin"], variable: "--font-instrument" });

export const metadata: Metadata = {
  metadataBase: new URL("https://jouwdan.com"),
  title: { default: "Jordan Harrison — Full-stack mind. Frontend heart.", template: "%s | Jordan Harrison" },
  description: "Frontend-led full-stack developer in Ireland. Thoughtful interfaces, open-source software, and projects that give something back. Explore Meith, Tutors, and more.",
  openGraph: { title: "Jordan Harrison — Full-stack mind. Frontend heart.", description: "Thoughtful digital experiences, from the first interaction to the infrastructure behind it. Explore my open-source work on Meith and Tutors.", type: "website", locale: "en_IE" },
  twitter: { card: "summary_large_image" },
};
export const viewport: Viewport = { themeColor: "#17191c", colorScheme: "dark" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" id="top" className="dark bg-background scroll-smooth">
      <body className={`${manrope.variable} ${instrumentSerif.variable} font-sans antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
