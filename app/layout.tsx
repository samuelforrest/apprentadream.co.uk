import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";


const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Apprentadream",
  description: "Apprentadream is the place to achieve top apprenticeship offers",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${manrope.variable} antialiased font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
