import Link from "next/link";
import Image from "next/image";
import MobileMenu from "./MobileMenu";

/**
 * Server-side rendered Header component
 * Navigation links are in the initial HTML for SEO
 * Mobile menu is client-side for interactivity
 */
export default function HeaderWrapper() {
  return (
    <header 
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border/50 shadow-lg"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-18">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="relative overflow-hidden rounded-lg p-1">
              <Image 
                src="/images/doora_logo_light_desktop.png" 
                alt="DOORA" 
                width={100}
                height={16}
                className="h-5 w-auto"
                priority
                quality={100}
              />
            </div>
          </Link>

          {/* Desktop Navigation - Server-side rendered for SEO */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              href="/about" 
              className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
            >
              About
            </Link>
            <Link 
              href="/contact" 
              className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
            >
              Contact
            </Link>
            <Link 
              href="/faq" 
              className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
            >
              FAQ
            </Link>
          </nav>

          {/* Mobile Menu - Client-side for interactivity */}
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}


