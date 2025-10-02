import AboutPage from "@/components/essentials/AboutPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About DOORA - The MENA Region's Premier Secondhand Fashion Marketplace",
  description: "Learn how DOORA is revolutionizing secondhand fashion in MENA. Making sustainable shopping accessible, premium, and NOT second best.",
  keywords: [
    "about DOORA", "about DOORA app", "DOORA story", "DOORA app story", "circular fashion Middle East", "sustainable fashion platform",
    "secondhand fashion mission", "fashion marketplace Lebanon", "DOORA team", "DOORA app team", "fashion sustainability",
    "pre-owned clothing platform", "fashion resale Middle East", "DOORA values", "DOORA app values", "fashion community"
  ],
  openGraph: {
    title: "About DOORA - Sustainable fashion in MENA",
    description: "Learn about DOORA's mission to drive circular fashion in the Middle East. From closet to closet, making secondhand feel premium and NOT second best.",
    url: "https://doora.app/about",
    type: "website",
    images: [
      {
        url: "https://doora.app/images/og-image-about.png",
        width: 1200,
        height: 630,
        alt: "About DOORA - Secondhand Fashion Marketplace",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About DOORA - The Middle East's Premier Secondhand Fashion Marketplace",
    description: "Learn about DOORA's mission to drive circular fashion in the Middle East. From closet to closet, making secondhand feel premium and NOT second best.",
    images: ["https://doora.app/images/twitter-card-about.png"],
  },
  alternates: {
    canonical: "https://doora.app/about",
  },
};

export default function About() {
  return <AboutPage />;
}
