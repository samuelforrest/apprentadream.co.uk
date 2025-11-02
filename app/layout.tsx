import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import Script from "next/script";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Apprentadream - Join the UK's fastest-growing Apprenticeship community",
  description:
    "Join the Apprentadream WhatsApp community today to network with current and future apprentices. 2,300+ members, 4 offers/member.",
  keywords: ["Apprentadream", "Dreamspire", "Join Apprentadream"],
  authors: [
    { name: "Apprentadream", url: "https://apprentadream.co.uk" },
    { name: "Cenk Mustafa", url: "https://www.linkedin.com/in/cenk-mustafa-41934b251/" },
    { name: "Samuel Forrest", url: "https://samuelforrest.me" },
  ],
  alternates: {
    canonical: "https://apprentadream.co.uk",
  },
  twitter: {
    card: "summary_large_image",
    title: "Apprentadream - Join the UK's fastest-growing Apprenticeship community",
    description:
      "Join the Apprentadream WhatsApp community today to network with current and future apprentices. 2,300+ members, 4 offers/member.",
    creator: "@apprentadream",
    images: ["/og_image.jpg"],
  },
  robots: {
    index: true, // allow index
    follow: true, // allow follow links
    noimageindex: true, // block transparent
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
    title: "Apprentadream - Join the UK's fastest-growing Apprenticeship community",
    description:
      "Join the Apprentadream WhatsApp community today to network with current and future apprentices. 2,300+ members, 4 offers/member.",
    url: "https://apprentadream.co.uk",
    siteName: "Apprentadream",
    images: [
      {
        url: "/og_image",
        width: 1200,
        height: 630,
        alt: "Apprentadream - Join the UK's fastest-growing Apprenticeship community",
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
        "Join the Apprentadream WhatsApp community today to network with current and future apprentices. 2,300+ members, 4 offers/member.",
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
      <head>
        <link rel="preload" href="/ad.png" as="image" type="image/png" />
        <meta name="apple-mobile-web-app-title" content="Apprentadream" />
      </head>
      <body className={`${manrope.variable} antialiased font-sans bg-black`}>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-SHPMM18JFR"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-SHPMM18JFR');
          `}
        </Script>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
