"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-background/80 backdrop-blur-sm border-b border-border/50 fixed top-0 left-0 right-0 z-50 shadow-lg">
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

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            <Link 
              href="/" 
              className="relative px-4 py-2 text-foreground hover:text-primary transition-all duration-300 font-medium cursor-pointer rounded-lg hover:bg-primary/5 group"
            >
              <span className="relative z-10">Home</span>
              <div className="absolute inset-0 bg-primary/10 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300 origin-center"></div>
            </Link>
            <Link 
              href="/about" 
              className="relative px-4 py-2 text-foreground hover:text-primary transition-all duration-300 font-medium cursor-pointer rounded-lg hover:bg-primary/5 group"
            >
              <span className="relative z-10">About Us</span>
              <div className="absolute inset-0 bg-primary/10 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300 origin-center"></div>
            </Link>
            <Link 
              href="/faq" 
              className="relative px-4 py-2 text-foreground hover:text-primary transition-all duration-300 font-medium cursor-pointer rounded-lg hover:bg-primary/5 group"
            >
              <span className="relative z-10">FAQ</span>
              <div className="absolute inset-0 bg-primary/10 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300 origin-center"></div>
            </Link>
            <Link 
              href="/contact" 
              className="relative px-4 py-2 text-foreground hover:text-primary transition-all duration-300 font-medium cursor-pointer rounded-lg hover:bg-primary/5 group"
            >
              <span className="relative z-10">Contact</span>
              <div className="absolute inset-0 bg-primary/10 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300 origin-center"></div>
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-border">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                href="/"
                className="block px-3 py-2 text-foreground hover:text-primary transition-colors font-medium cursor-pointer"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/about"
                className="block px-3 py-2 text-foreground hover:text-primary transition-colors font-medium cursor-pointer"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About Us
              </Link>
              <Link
                href="/faq"
                className="block px-3 py-2 text-foreground hover:text-primary transition-colors font-medium cursor-pointer"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                FAQ
              </Link>
              <Link
                href="/contact"
                className="block px-3 py-2 text-foreground hover:text-primary transition-colors font-medium cursor-pointer"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
