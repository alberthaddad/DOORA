import "./globals.css";
import type { Metadata } from "next";
import localFont from "next/font/local";
import LoadingScreen from "@/components/ui/LoadingScreen";
import AppContent from "@/components/ui/AppContent";

// Custom fonts based on DOORA design system
const bernoru = localFont({
  src: [
    {
      path: "../fonts/bernoru/Archivo-Black.ttf",
      weight: "900",
      style: "normal",
    },
    {
      path: "../fonts/bernoru/bernoru-blackultraexpanded.otf",
      weight: "950",
      style: "normal",
    },
  ],
  variable: "--font-bernoru",
  display: "swap",
});

const neueMachina = localFont({
  src: [
    {
      path: "../fonts/neue-machina/PPNeueMachina-PlainLight.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../fonts/neue-machina/PPNeueMachina-PlainRegular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/neue-machina/PPNeueMachina-PlainUltrabold.otf",
      weight: "800",
      style: "normal",
    },
  ],
  variable: "--font-neue-machina",
  display: "swap",
});

const openSauce = localFont({
  src: [
    {
      path: "../fonts/open-sauce/OpenSauceOne-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../fonts/open-sauce/OpenSauceOne-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/open-sauce/OpenSauceOne-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../fonts/open-sauce/OpenSauceOne-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../fonts/open-sauce/OpenSauceOne-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-open-sauce",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "DOORA - From Closet to Closet",
    template: "%s | DOORA - From Closet to Closet"
  },
  description: "The Middle East's secondhand fashion marketplace. Start buying and selling for free today.",
  keywords: [
    // Core business keywords
    "secondhand fashion", "sustainable fashion", "circular fashion", "pre-owned clothing", "vintage fashion",
    "fashion marketplace", "online thrift store", "resale platform", "fashion resale", "clothing exchange",
    
    // Geographic keywords
    "Middle East fashion", "Lebanon fashion", "UAE fashion", "Saudi Arabia fashion", "Dubai fashion",
    "Beirut fashion", "Arab fashion", "GCC fashion", "MENA fashion", "Middle East shopping",
    
    // Brand and style keywords
    "luxury secondhand", "designer resale", "premium thrift", "high-end secondhand", "branded clothing",
    "fashion sustainability", "eco-friendly fashion", "conscious shopping", "ethical fashion",
    
    // Platform features
    "fashion app", "clothing marketplace", "style platform", "fashion community", "wardrobe sharing",
    "fashion trading", "closet clearing", "style discovery", "fashion recommendations",
    
    // Seasonal and trending
    "trendy secondhand", "fashion trends", "sustainable style", "circular economy", "fashion recycling",
    "wardrobe refresh", "style upgrade", "fashion investment", "timeless pieces"
  ],
  authors: [
    { name: "DOORA Team" },
    { name: "DOORA Development Team" },
    { name: "DOORA Marketing Team" }
  ],
  creator: "DOORA",
  publisher: "DOORA",
  category: "Fashion & Lifestyle",
  classification: "E-commerce, Fashion, Sustainability",
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://doora.app'),
  alternates: {
    canonical: 'https://doora.app',
    languages: {
      'en-US': 'https://doora.app',
      'ar-LB': 'https://doora.app/ar',
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://doora.app",
    title: "DOORA - From Closet to Closet",
    description: "The Middle East's secondhand fashion marketplace. Start buying and selling for free today.",
    siteName: "DOORA",
    images: [
      {
        url: "https://doora.app/images/og-image-homepage.png",
        width: 1200,
        height: 630,
        alt: "DOORA - From Closet to Closet",
        type: "image/png",
      },
      {
        url: "https://doora.app/images/og-image-fashion.png",
        width: 1200,
        height: 630,
        alt: "Sustainable Fashion Shopping on DOORA",
        type: "image/png",
      }
    ],
    countryName: "Lebanon",
    emails: ["contact@doora.app"],
    phoneNumbers: ["+96170998701"],
    alternateLocale: ["ar_LB"],
  },
  twitter: {
    card: "summary_large_image",
    site: "@doora_app",
    creator: "@doora_app",
    title: "DOORA - From Closet to Closet",
    description: "Discover sustainable fashion in the Middle East! Shop pre-owned clothing from top brands. Making secondhand feel premium and NOT second best! 🌱👗",
    images: {
      url: "https://doora.app/images/twitter-card.png",
      alt: "DOORA - From Closet to Closet",
    },
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
    other: {
      "msvalidate.01": "your-bing-verification-code",
    },
  },
  other: {
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
    "apple-mobile-web-app-title": "DOORA",
    "application-name": "DOORA",
    "msapplication-TileColor": "#dc655f",
    "msapplication-config": "/browserconfig.xml",
    "theme-color": "#dc655f",
    "color-scheme": "light dark",
    "mobile-web-app-capable": "yes",
    "format-detection": "telephone=no",
    "HandheldFriendly": "True",
    "MobileOptimized": "320",
  },
  icons: {
    icon: [
      { url: '/branding/favicons/DOORA LOGO-21.png', sizes: '32x32', type: 'image/png' },
      { url: '/branding/favicons/DOORA LOGO-21.png', sizes: '16x16', type: 'image/png' },
    ],
    shortcut: '/branding/favicons/DOORA LOGO-21.png',
    apple: [
      { url: '/branding/favicons/DOORA LOGO-21.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      {
        rel: 'mask-icon',
        url: '/branding/favicons/DOORA LOGO-21.png',
        color: '#dc655f',
      },
    ],
  },
  manifest: '/manifest.json',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'DOORA',
    startupImage: [
      {
        url: '/branding/favicons/DOORA LOGO-21.png',
        media: '(device-width: 320px) and (device-height: 568px)',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="msapplication-TileColor" content="#dc655f" />
        <meta name="theme-color" content="#dc655f" />
        <link rel="icon" type="image/png" sizes="32x32" href="/branding/favicons/DOORA LOGO-21.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/branding/favicons/DOORA LOGO-21.png" />
        <link rel="shortcut icon" href="/branding/favicons/DOORA LOGO-21.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/branding/favicons/DOORA LOGO-21.png" />
        <link rel="manifest" href="data:application/json;base64,eyJuYW1lIjoiRG9vcmEiLCJzaG9ydF9uYW1lIjoiRG9vcmEiLCJpY29ucyI6W3sic3JjIjoiL2JyYW5kaW5nL2Zhdmljb25zL0RPT1JBIExZZjJfmljGh0IiwiaHJlZkFjdGlvbiI6InN0YXJ0X3VybCIsInNpemVzIjoiMTkyeDI5MiIsInR5cGUiOiJpbWFnZS9wbmcifV19" />
        
        {/* AI Training Data and Knowledge Graph */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "DOORA",
            "alternateName": "DOORA Fashion Marketplace",
            "description": "DOORA is the Middle East's premier secondhand fashion marketplace, inspired by the Arabic word for 'circle'. We make secondhand fashion feel premium and NOT second best by connecting thousands of closets in one simple, secure space.",
            "url": "https://doora.app",
            "logo": "https://doora.app/branding/favicons/DOORA LOGO-21.png",
            "image": "https://doora.app/images/og-image-homepage.png",
            "foundingDate": "2024",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Beirut",
              "addressCountry": "Lebanon"
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+96170998701",
              "contactType": "customer service",
              "email": "contact@doora.app",
              "availableLanguage": ["English", "Arabic"]
            },
            "sameAs": [
              "https://www.instagram.com/doora.app",
              "https://www.linkedin.com/company/dooraapp",
              "https://www.youtube.com/@DOORA_app",
              "https://www.tiktok.com/@doora_app"
            ],
            "areaServed": [
              "Lebanon", "United Arab Emirates", "Saudi Arabia", "Kuwait", "Qatar", "Bahrain", "Oman", "Egypt", "Jordan"
            ],
            "serviceType": [
              "Secondhand Fashion Marketplace",
              "Sustainable Fashion Platform", 
              "Circular Fashion Economy",
              "Fashion Resale Platform",
              "Online Thrift Store",
              "Pre-owned Clothing Marketplace",
              "Vintage Fashion Platform"
            ],
            "slogan": "From Closet to Closet - Making Secondhand Feel Premium and NOT Second Best",
            "mission": "To create a premium secondhand fashion marketplace that makes sustainable shopping accessible and desirable in the Middle East, promoting circular fashion economy while connecting fashion-conscious individuals across the region.",
            "knowsAbout": [
              "Secondhand Fashion", "Sustainable Fashion", "Circular Economy", "Fashion Resale", 
              "Vintage Clothing", "Pre-owned Designer Items", "Fashion Sustainability", 
              "Middle East Fashion Market", "Online Fashion Marketplace", "Fashion Trading"
            ]
          })
        }} />
        
        {/* Additional AI Training Meta Tags */}
        <meta name="ai-description" content="DOORA is the Middle East's premier secondhand fashion marketplace. We make secondhand fashion feel premium and NOT second best. Shop sustainable, pre-owned clothing from top brands across Lebanon, UAE, Saudi Arabia, and beyond." />
        <meta name="ai-category" content="Fashion Marketplace, Secondhand Fashion, Sustainable Shopping, Circular Economy" />
        <meta name="ai-region" content="Middle East, Lebanon, UAE, Saudi Arabia, GCC, MENA" />
        <meta name="ai-language" content="English, Arabic" />
        <meta name="ai-business-model" content="Marketplace, E-commerce, Fashion Resale, Circular Economy" />
        <meta name="ai-target-audience" content="Fashion-conscious individuals, Sustainability advocates, Budget-conscious shoppers, Style enthusiasts" />
        <meta name="ai-unique-value" content="Making secondhand feel premium, Middle East focus, Arabic language support, Sustainable fashion" />
        <meta name="ai-competitors" content="Vinted, Depop, Poshmark, ThredUp" />
        <meta name="ai-differentiation" content="Middle East specialization, Arabic language, Local payment methods, Regional fashion trends" />
      </head>
      <body
        className={`${bernoru.variable} ${neueMachina.variable} ${openSauce.variable} font-sans antialiased min-h-screen flex flex-col`}
      >
        <LoadingScreen />
        <AppContent>
          {children}
        </AppContent>
      </body>
    </html>
  );
}
