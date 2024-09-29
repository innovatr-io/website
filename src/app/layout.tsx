import type { Metadata } from "next";
import { Kode_Mono } from 'next/font/google';
import "./globals.css";

const kodeMono = Kode_Mono({
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
  variable: '--font-kode-mono',
});

export const metadata: Metadata = {
  title: "Innovatr - Revolutionizing Ownership",
  description: "Innovatr is a platform for fractional ownership of high-value assets and intellectual property.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${kodeMono.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
