import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";


const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Apprentadream - Join the Community",
  description: "Apprentadream is the community to achieve top apprenticeship offers",
  icons: {
    icon: "/ad.png",
    shortcut: "/ad.png",
    apple: "/ad.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-black">
      <body
        className={`${manrope.variable} antialiased font-sans bg-black`}
      >
        {children}
      </body>
    </html>
  );
}
