import type React from "react";
import "./globals.css";
import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import { ThemeProvider } from "@/ui/theme/theme-provider";
import "highlight.js/styles/github-dark.css";
import { Header } from "@/ui/layout/Header";
import { footerData, headerData } from "@/ui/data/site-data";
import { Footer } from "@/ui/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const poppins = Poppins({
  weight: ["600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-heading",
});

export const metadata: Metadata = {
  title: "Jordan Harrison | Enterprise Digital Experience specialist",
  description:
    "Personal website of Jordan Harrison, a creative software developer specializing in enterprise digital experiences",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${poppins.variable} font-sans antialiased`}>
        <ThemeProvider>
          <Header
            logoText={headerData.logoText}
            logoInitials={headerData.logoInitials}
            navLinks={headerData.navLinks}
          />
          {children}
          <Footer name={footerData.name} year={footerData.year} />
        </ThemeProvider>
      </body>
    </html>
  );
}
