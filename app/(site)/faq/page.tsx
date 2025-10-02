import FAQPage from "@/components/essentials/FAQPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Frequently Asked Questions - DOORA Help Center",
  description: "Find answers to common questions about DOORA. Learn how to buy, sell, and navigate our secondhand fashion marketplace. Get help with shipping, payments, and more.",
  keywords: [
    "DOORA FAQ", "DOORA app FAQ", "DOORA help", "DOORA app help", "fashion marketplace FAQ", "secondhand shopping help",
    "DOORA questions", "DOORA app questions", "buying on DOORA", "buying on DOORA app", "selling on DOORA", "selling on DOORA app", "DOORA shipping", "DOORA app shipping",
    "DOORA payments", "DOORA app payments", "DOORA support", "DOORA app support", "fashion marketplace help", "DOORA guide", "DOORA app guide"
  ],
  openGraph: {
    title: "Frequently Asked Questions - DOORA Help Center",
    description: "Find answers to common questions about DOORA. Learn how to buy, sell, and navigate our secondhand fashion marketplace.",
    url: "https://doora.app/faq",
    type: "website",
    images: [
      {
        url: "https://doora.app/images/og-image-faq.png",
        width: 1200,
        height: 630,
        alt: "DOORA FAQ - Help Center",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Frequently Asked Questions - DOORA Help Center",
    description: "Find answers to common questions about DOORA. Learn how to buy, sell, and navigate our secondhand fashion marketplace.",
    images: ["https://doora.app/images/twitter-card-faq.png"],
  },
  alternates: {
    canonical: "https://doora.app/faq",
  },
};

export default function FAQ() {
  return <FAQPage />;
}


























