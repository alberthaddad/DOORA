import PrivacyPolicy from "@/components/essentials/PrivacyPolicy";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - DOORA Data Protection & Privacy",
  description: "Learn how DOORA protects your privacy and handles your personal information. Our comprehensive privacy policy covers data collection, usage, and your rights as a user of our fashion marketplace.",
  keywords: [
    "DOORA privacy policy", "DOORA app privacy policy", "data protection", "privacy rights", "personal information",
    "DOORA data usage", "DOORA app data usage", "user privacy", "fashion marketplace privacy", "data security",
    "privacy rights Middle East", "DOORA GDPR", "DOORA app GDPR", "user data protection"
  ],
  openGraph: {
    title: "Privacy Policy - DOORA Data Protection & Privacy",
    description: "Learn how DOORA protects your privacy and handles your personal information.",
    url: "https://doora.app/privacy",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Privacy Policy - DOORA Data Protection & Privacy",
    description: "Learn how DOORA protects your privacy and handles your personal information.",
  },
  alternates: {
    canonical: "https://doora.app/privacy",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyPage() {
  return <PrivacyPolicy />;
}
