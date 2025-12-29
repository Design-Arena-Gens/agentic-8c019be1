import "./globals.css";
import type { Metadata } from "next";
import { League_Spartan, Inter } from "next/font/google";

const display = League_Spartan({
  subsets: ["latin"],
  variable: "--font-display"
});

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans"
});

export const metadata: Metadata = {
  title: "Circuit of Influence",
  description:
    "A dramatic one-minute 2D animation concept that explores how politics shapes technology futures."
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable}`}>
      <body className="bg-eclipse text-slate-100 min-h-screen">
        {children}
      </body>
    </html>
  );
}
