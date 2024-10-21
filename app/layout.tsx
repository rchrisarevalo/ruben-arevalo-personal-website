import type { Metadata } from "next";
import "./globals.css";
import InitializeAnalytics from "./components/InitializeAnalytics";
import { Analytics } from "@vercel/analytics/react";
import InitializeAdSense from "./components/InitializeAdSense";

export const metadata: Metadata = {
  authors: {
    name: 'Ruben Arevalo'
  },
  title: "Ruben Arevalo - Software Engineer",
  description: "Software Engineer, coding hobbyist, and lover of sky photography",
  keywords: 'Ruben Arevalo, Ruben C. Arevalo, Software Developer, Ruben Arevalo Software Engineer',
  metadataBase: new URL('https://rubenarevalo.com')
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth focus:scroll-auto">
      <body
        className={`antialiased`}
      >
        {children}
        <InitializeAnalytics />
        <InitializeAdSense />
        <Analytics mode={'production'} />
      </body>
    </html>
  );
}
