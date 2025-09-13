import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/essentials/Header";
import Footer from "@/components/essentials/Footer";
import LoadingScreen from "@/components/ui/LoadingScreen";
import AppContent from "@/components/ui/AppContent";

// Custom fonts based on Doora design system
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
    default: "Doora - From Closet to Closet",
    template: "%s | Doora"
  },
  description: "Doora is a secondhand fashion marketplace inspired by the Arabic word for 'circle'. Making secondhand feel premium and NOT second best!",
  keywords: ["secondhand fashion", "sustainable fashion", "circular fashion", "Middle East", "Lebanon", "fashion marketplace", "pre-owned clothing"],
  authors: [{ name: "Doora Team" }],
  creator: "Doora",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://doora.com",
    title: "Doora - From Closet to Closet",
    description: "Making secondhand feel premium and NOT second best! Shop sustainable fashion in the Middle East.",
    siteName: "Doora",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dora - From Closet to Closet",
    description: "Making secondhand feel premium and NOT second best! Shop sustainable fashion in the Middle East.",
    creator: "@doora",
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
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
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
