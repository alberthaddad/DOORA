import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import ThemeToggle from "./ThemeToggle";

export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="text-2xl font-bold text-primary tracking-wider">
              DOORA
            </div>
            <p className="text-muted-foreground text-sm max-w-xs">
              From closet to closet. Making secondhand feel premium and NOT second best!
            </p>
            <p className="text-muted-foreground text-xs">
              📍 Currently launching in Lebanon<br />
              Expanding across the region soon
            </p>
          </div>

          {/* Shop Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Shop</h3>
            <div className="space-y-2 text-sm">
              <Link 
                href="/store" 
                className="block text-muted-foreground hover:text-primary transition-colors"
              >
                Browse Items
              </Link>
              <Link 
                href="/store?category=women" 
                className="block text-muted-foreground hover:text-primary transition-colors"
              >
                Women
              </Link>
              <Link 
                href="/store?category=men" 
                className="block text-muted-foreground hover:text-primary transition-colors"
              >
                Men
              </Link>
              <Link 
                href="/store?category=accessories" 
                className="block text-muted-foreground hover:text-primary transition-colors"
              >
                Accessories
              </Link>
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
                About Us
              </Link>
              <Link 
                href="/contact" 
                className="block text-muted-foreground hover:text-primary transition-colors"
              >
                Contact
              </Link>
              <Link 
                href="/careers" 
                className="block text-muted-foreground hover:text-primary transition-colors"
              >
                Careers
              </Link>
              <Link 
                href="/sustainability" 
                className="block text-muted-foreground hover:text-primary transition-colors"
              >
                Sustainability
              </Link>
            </div>
          </div>

          {/* Support Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Support</h3>
            <div className="space-y-2 text-sm">
              <Link 
                href="/help" 
                className="block text-muted-foreground hover:text-primary transition-colors"
              >
                Help Center
              </Link>
              <Link 
                href="/shipping" 
                className="block text-muted-foreground hover:text-primary transition-colors"
              >
                Shipping Info
              </Link>
              <Link 
                href="/returns" 
                className="block text-muted-foreground hover:text-primary transition-colors"
              >
                Returns
              </Link>
              <Link 
                href="/size-guide" 
                className="block text-muted-foreground hover:text-primary transition-colors"
              >
                Size Guide
              </Link>
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

          {/* Theme Toggle & App Download Links */}
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <div className="flex space-x-4">
              <div className="flex items-center space-x-2 px-3 py-2 bg-background border border-border rounded-lg hover:bg-muted/50 transition-colors cursor-pointer">
                <div className="text-xs">
                  <div className="text-muted-foreground">Download on the</div>
                  <div className="font-semibold text-foreground">App Store</div>
                </div>
              </div>
              <div className="flex items-center space-x-2 px-3 py-2 bg-background border border-border rounded-lg hover:bg-muted/50 transition-colors cursor-pointer">
                <div className="text-xs">
                  <div className="text-muted-foreground">Get it on</div>
                  <div className="font-semibold text-foreground">Google Play</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
