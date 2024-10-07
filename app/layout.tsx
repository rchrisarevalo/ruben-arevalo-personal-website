import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  authors: {
    name: 'Ruben Arevalo'
  },
  title: "Ruben Arevalo",
  description: "Software Engineer",
  keywords: 'Ruben Arevalo, Ruben C. Arevalo, Software Developer, Ruben Arevalo Software Engineer'
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
      </body>
    </html>
  );
}
