import Image from "next/image";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";

export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div>
              <Image 
                src="/images/doora_logo_light.png" 
                alt="DOORA" 
                width={192}
                height={192}
                className="h-6 w-auto"
              />
            </div>
          </div>


          {/* Company Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Company</h3>
            <div className="space-y-2 text-sm">
              <Link 
                href="/about" 
                className="block text-muted-foreground hover:text-primary transition-colors"
              >
                About
              </Link>
              <Link 
                href="/contact" 
                className="block text-muted-foreground hover:text-primary transition-colors"
              >
                Contact
              </Link>
              <Link 
                href="/faq" 
                className="block text-muted-foreground hover:text-primary transition-colors"
              >
                FAQ
              </Link>
              <Link 
                href="/sustainability" 
                className="block text-muted-foreground hover:text-primary transition-colors"
              >
                Sustainability
              </Link>
              <a 
                href="https://www.instagram.com/doora.app?igsh=MWVxY2p2YjYxbHQwZg==" 
                target="_blank"
                rel="noopener noreferrer"
                className="block text-muted-foreground hover:text-primary transition-colors"
              >
                Instagram
              </a>
            </div>
          </div>

        </div>

        <Separator className="my-8" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 text-sm text-muted-foreground">
            <p>&copy; 2025 Doora. All rights reserved.</p>
            <div className="flex space-x-4">
              <Link 
                href="/privacy" 
                className="hover:text-primary transition-colors"
              >
                Privacy Policy
              </Link>
              <Link 
                href="/terms" 
                className="hover:text-primary transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}
