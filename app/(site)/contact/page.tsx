import ContactPage from "@/components/essentials/ContactPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact DOORA - Get in Touch with Us",
  description: "Get in touch with DOORA. We'd love to hear from you about partnerships, support, or general inquiries. Contact us for business partnerships, customer support, or media inquiries.",
  keywords: [
    "contact DOORA", "contact DOORA app", "DOORA support", "DOORA app support", "business partnerships", "customer service",
    "DOORA team contact", "DOORA app team contact", "fashion marketplace support", "DOORA inquiries", "DOORA app inquiries", "partnership opportunities",
    "DOORA help", "DOORA app help", "customer support Middle East", "DOORA contact form", "DOORA app contact form", "fashion platform support"
  ],
  openGraph: {
    title: "Contact DOORA - Get in Touch with Our Team",
    description: "Get in touch with DOORA. We'd love to hear from you about partnerships, support, or general inquiries.",
    url: "https://doora.app/contact",
    type: "website",
    images: [
      {
        url: "https://doora.app/images/og-image-contact.png",
        width: 1200,
        height: 630,
        alt: "Contact DOORA - Fashion Marketplace Support",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact DOORA - Get in Touch with Our Team",
    description: "Get in touch with DOORA. We'd love to hear from you about partnerships, support, or general inquiries.",
    images: ["https://doora.app/images/twitter-card-contact.png"],
  },
  alternates: {
    canonical: "https://doora.app/contact",
  },
};

export default function Contact() {
  return <ContactPage />;
}
