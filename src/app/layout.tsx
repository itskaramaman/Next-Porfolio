import type { Metadata } from "next";

import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

export const metadata: Metadata = {
  title: "Karamjeet Singh | Full Stack Developer Portfolio",
  description:
    "Explore Karamjeet Singh's portfolio showcasing expertise in Full Stack Development, Frontend and Backend Development, React, Next.js, JavaScript, and Software Development. Discover innovative projects, achievements, and industry-level skills.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body>
        <ThemeProvider attribute="class" defaultTheme="dark">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
