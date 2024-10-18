import type { Metadata } from "next";
import "./globals.css";
import InitializeAnalytics from "./components/InitializeAnalytics";
import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
  authors: {
    name: 'Ruben Arevalo'
  },
  title: "Ruben Arevalo",
  description: "Software Engineer",
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
        <Analytics mode={'production'} />
      </body>
    </html>
  );
}
