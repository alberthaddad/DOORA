import TermsOfService from "@/components/essentials/TermsOfService";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service - DOORA Platform Usage Guidelines",
  description: "Read DOORA's terms of service and platform usage guidelines. Understand your rights and responsibilities when using our secondhand fashion marketplace.",
  keywords: [
    "DOORA terms of service", "DOORA app terms of service", "platform guidelines", "user agreement", "terms and conditions",
    "DOORA rules", "DOORA app rules", "marketplace terms", "user responsibilities", "DOORA guidelines", "DOORA app guidelines",
    "fashion marketplace terms", "user agreement Middle East", "DOORA user terms", "DOORA app user terms"
  ],
  openGraph: {
    title: "Terms of Service - DOORA Platform Usage Guidelines",
    description: "Read DOORA's terms of service and platform usage guidelines.",
    url: "https://doora.app/terms",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Terms of Service - DOORA Platform Usage Guidelines",
    description: "Read DOORA's terms of service and platform usage guidelines.",
  },
  alternates: {
    canonical: "https://doora.app/terms",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function TermsPage() {
  return <TermsOfService />;
}
