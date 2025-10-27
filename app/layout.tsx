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
  description:
    "Join the Apprentadream WhatsApp community today to network with current and future apprentices.",
  keywords: ["Apprentadream", "Dreamspire", "Join Apprentadream"],
  authors: [
    { name: "Apprentadream" },
    { name: "Cenk Mustafa" },
    { name: "Samuel Forrest", url: "https://samuelforrest.me" },
  ],
  alternates: {
    canonical: "https://apprentadream.co.uk",
  },
  twitter: {
    card: "summary_large_image",
    title: "Apprentadream - Join the Community",
    description:
      "Join the Apprentadream WhatsApp community today to network with current and future apprentices.",
    creator: "@Apprentadream", // replace with your real handle if you have one
    images: ["/og_image.jpg"],
  },

  creator: "Apprentadream",
  publisher: "Apprentadream",
  icons: {
    icon: "/og.jpg",
    shortcut: "/og.jpg",
    apple: "/og.jpg",
  },
  metadataBase: new URL("https://apprentadream.co.uk"),
  openGraph: {
    type: "website",
    locale: "en_GB",
    title: "Apprentadream - Join the Community",
    description:
      "Join the Apprentadream WhatsApp community today to network with current and future apprentices.",
    url: "https://apprentadream.co.uk",
    siteName: "Apprentadream",
    images: [
      {
        url: "/og_image",
        width: 1200,
        height: 630,
        alt: "Apprentadream - Join the Community",
        type: "image/png",
      },
    ],
  },
  other: {
    "application/ld+json": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "Apprentadream",
      url: "https://apprentadream.co.uk",
      logo: "https://apprentadream.co.uk/og.jpg",
      sameAs: [
        "https://www.linkedin.com/company/https-www-apprentadream-cenk-mustafa/",
        "https://www.instagram.com/apprentadream/",
      ],
      description:
        "Join the Apprentadream WhatsApp community today to network with current and future apprentices.",
    }),
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
