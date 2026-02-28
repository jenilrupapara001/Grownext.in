import type { Metadata } from "next";
import { Lexend } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { VisualEditsMessenger } from "orchids-visual-edits";
import { Toaster } from "@/components/ui/sonner";
import { SmoothScroll } from "@/components/SmoothScroll";
import AuthProvider from "@/components/AuthProvider";
import Script from "next/script";

const lexend = Lexend({
  subsets: ["latin"],
  variable: "--font-lexend",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://grownext.in'),
  title: {
    default: 'Grownext | Official Alibaba.com Channel Partner in India',
    template: '%s | Grownext — Alibaba Partner India',
  },
  description:
    'Grownext is an Official Alibaba.com Channel Partner in India. We help Indian manufacturers & exporters sell globally — from seller account setup and store optimization to Alibaba Gold Supplier certification and B2B lead generation.',
  keywords: [
    'Alibaba.com partner India',
    'official Alibaba channel partner',
    'sell on Alibaba India',
    'Alibaba Gold Supplier India',
    'B2B export consultancy India',
    'export from India Alibaba',
    'Alibaba onboarding India',
    'global selling from India',
    'Alibaba channel partner Gujarat',
    'Alibaba channel partner Surat',
    'Indian exporter Alibaba',
    'Grownext export services',
  ],
  authors: [{ name: 'Grownext', url: 'https://grownext.in' }],
  creator: 'Grownext',
  publisher: 'Grownext',
  category: 'Business',
  alternates: {
    canonical: 'https://grownext.in',
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://grownext.in',
    siteName: 'Grownext',
    title: 'Grownext | Official Alibaba.com Channel Partner in India',
    description:
      'Empowering Indian manufacturers to reach global buyers through Alibaba.com. Official Channel Partner for onboarding, Gold Supplier certification, and export growth.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Grownext — Official Alibaba.com Partner in India',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Grownext | Official Alibaba.com Channel Partner in India',
    description:
      'Official Alibaba.com Channel Partner helping Indian exporters scale globally. Expert onboarding, optimization & B2B lead generation.',
    images: ['/og-image.png'],
    creator: '@grownextin',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/Logo.png',
    shortcut: '/Logo.png',
    apple: '/Logo.png',
  },
  verification: {
    google: 'ed433hH_zkLLIL0EpEGscoVdbgVpKWEDAJItd7Lb3z0',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${lexend.variable} font-sans antialiased bg-[#F9FAFB] text-gray-900`}>
        <AuthProvider>
          <SmoothScroll />
          <Navbar />
          <main className="pt-16 min-h-screen">
            {children}
          </main>
          <Footer />
          <Toaster position="top-center" />
          <VisualEditsMessenger />
        </AuthProvider>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-J8ET8XH71C"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-J8ET8XH71C', {
              page_path: window.location.pathname,
            });
          `}
        </Script>
        {/* Schema.org JSON-LD */}
        <Script id="schema-local-business" type="application/ld+json" strategy="afterInteractive">
          {`
            {
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Grownext",
              "image": "https://grownext.in/og-image.png",
              "@id": "https://grownext.in",
              "url": "https://grownext.in",
              "telephone": "+91-1234567890",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Official Alibaba Channel Partner Office",
                "addressLocality": "Surat",
                "addressRegion": "Gujarat",
                "postalCode": "395001",
                "addressCountry": "IN"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 21.1702,
                "longitude": 72.8311
              },
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday"
                ],
                "opens": "10:00",
                "closes": "19:00"
              },
              "sameAs": [
                "https://www.linkedin.com/company/grownext",
                "https://twitter.com/grownextin"
              ]
            }
          `}
        </Script>
        <Script id="schema-sitenavigation" type="application/ld+json" strategy="afterInteractive">
          {`
            {
              "@context": "https://schema.org",
              "@type": "ItemList",
              "itemListElement": [
                {
                  "@type": "SiteNavigationElement",
                  "position": 1,
                  "name": "Services",
                  "url": "https://grownext.in/services"
                },
                {
                  "@type": "SiteNavigationElement",
                  "position": 2,
                  "name": "Sectors",
                  "url": "https://grownext.in/sectors"
                },
                {
                  "@type": "SiteNavigationElement",
                  "position": 3,
                  "name": "Knowledge Hub",
                  "url": "https://grownext.in/blog"
                },
                {
                  "@type": "SiteNavigationElement",
                  "position": 4,
                  "name": "Company",
                  "url": "https://grownext.in/company"
                },
                {
                  "@type": "SiteNavigationElement",
                  "position": 5,
                  "name": "Contact",
                  "url": "https://grownext.in/contact"
                }
              ]
            }
          `}
        </Script>
        <Script id="schema-breadcrumbs" type="application/ld+json" strategy="afterInteractive">
          {`
            {
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Home",
                  "item": "https://grownext.in"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "Services",
                  "item": "https://grownext.in/services"
                },
                {
                  "@type": "ListItem",
                  "position": 3,
                  "name": "Sectors",
                  "item": "https://grownext.in/sectors"
                },
                {
                  "@type": "ListItem",
                  "position": 4,
                  "name": "Blog",
                  "item": "https://grownext.in/blog"
                }
              ]
            }
          `}
        </Script>
      </body>
    </html>
  );
}
