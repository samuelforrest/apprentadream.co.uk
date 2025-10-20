import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Apprentadream - Join the Community",
  description: "Skip the maybe, get the yes",
  icons: {
    icon: "/og.jpg",
    shortcut: "/og.jpg",
    apple: "/og.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-black">
      <body className={`${manrope.variable} antialiased font-sans bg-black`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
