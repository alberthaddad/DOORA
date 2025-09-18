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
    template: "%s | DOORA"
  },
  description: "DOORA is a secondhand fashion marketplace inspired by the Arabic word for 'circle'. Making secondhand feel premium and NOT second best!",
  keywords: ["secondhand fashion", "sustainable fashion", "circular fashion", "Middle East", "Lebanon", "fashion marketplace", "pre-owned clothing"],
  authors: [{ name: "DOORA Team" }],
  creator: "DOORA",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://DOORA.com",
    title: "DOORA - From Closet to Closet",
    description: "Making secondhand feel premium and NOT second best! Shop sustainable fashion in the Middle East.",
    siteName: "DOORA",
  },
  twitter: {
    card: "summary_large_image",
    title: "DOORA - From Closet to Closet",
    description: "Making secondhand feel premium and NOT second best! Shop sustainable fashion in the Middle East.",
    creator: "@DOORA",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: '/branding/favicons/DOORA LOGO-21.png',
    shortcut: '/branding/favicons/DOORA LOGO-21.png',
    apple: '/branding/favicons/DOORA LOGO-21.png',
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
