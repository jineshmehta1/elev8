// app/layout.tsx

import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Elev8 Piano | Luxury Wedding & Event Pianist in Ireland",
    template: "%s | Elev8 Piano",
  },

  description:
    "Elev8 Piano provides luxury live piano music for wedding ceremonies, drinks receptions, and corporate events across Dublin, Wicklow, Kildare, and Clare.",

  keywords: [
    "Elev8 Piano",
    "Wedding Pianist Ireland",
    "Dublin Pianist",
    "Luxury Event Music",
    "Corporate Event Pianist",
    "Private Event Music",
    "Wedding Music Dublin",
    "Wedding Pianist Wicklow",
    "Wedding Pianist Kildare",
    "Live Piano Music",
    "Luxury Wedding Entertainment",
    "Cocktail Reception Music",
    "Ceremony Pianist",
    "Destination Wedding Music",
    "Ireland Wedding Pianist",
  ],

  metadataBase: new URL("https://www.elev8piano.com"),

  alternates: {
    canonical: "https://www.elev8piano.com",
  },

  authors: [
    {
      name: "Elev8 Piano",
      url: "https://www.elev8piano.com",
    },
  ],

  creator: "Elev8 Piano",
  publisher: "Elev8 Piano",

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "Elev8 Piano | Luxury Wedding & Event Pianist",
    description:
      "Elegant live piano performances for weddings, luxury events, private celebrations, and corporate occasions throughout Ireland.",

    url: "https://www.elev8piano.com",
    siteName: "Elev8 Piano",

    images: [
      {
        url: "https://www.elev8piano.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Elev8 Piano",
      },
    ],

    locale: "en_IE",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Elev8 Piano",
    description:
      "Luxury wedding and event piano performances throughout Ireland.",
    images: ["https://www.elev8piano.com/og-image.jpg"],
  },

  generator: "Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Favicons */}
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.webp" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.webp" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.webp" />
        <link rel="manifest" href="/site.webmanifest" />

        <meta name="theme-color" content="#0A0A0A" />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "LocalBusiness",
                name: "Elev8 Piano",
                url: "https://www.elev8piano.com",
                image: "https://www.elev8piano.com/og-image.webp",
                description:
                  "Luxury piano performances for weddings, corporate events, private celebrations, and destination occasions throughout Ireland.",

                telephone: "+353857512997",
                email: "elev8piano@gmail.com",

                address: {
                  "@type": "PostalAddress",
                  streetAddress: "Coach Lodge, Rear 59 Rathar Avenue, D6",
                  addressLocality: "Dublin",
                  addressCountry: "IE",
                },

                areaServed: [
                  "Dublin",
                  "Wicklow",
                  "Kildare",
                  "Ireland",
                ],

                priceRange: "€€€",

                sameAs: [
                  "https://www.instagram.com/elev8piano",
                  "https://www.youtube.com/@elev8piano"
                ]
              },

              {
                "@context": "https://schema.org",
                "@type": "FAQPage",
                mainEntity: [
                  {
                    "@type": "Question",
                    name: "Do you provide your own piano?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text:
                        "Yes. We can provide a premium stage piano and professional sound system, or perform on your venue's acoustic piano if available."
                    }
                  },
                  {
                    "@type": "Question",
                    name: "Can we request specific songs?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text:
                        "Absolutely. We are happy to learn special requests for weddings, private celebrations, and corporate events with sufficient notice."
                    }
                  },
                  {
                    "@type": "Question",
                    name: "What areas do you cover?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text:
                        "We regularly perform throughout Dublin, Wicklow, Kildare and across Ireland, including destination weddings and private events."
                    }
                  }
                ]
              }
            ]),
          }}
        />
      </head>

      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}