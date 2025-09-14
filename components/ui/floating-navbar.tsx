"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { cn } from "@/lib/utils";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: React.ReactElement;
  }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hideTimeout, setHideTimeout] = useState<NodeJS.Timeout | null>(null);

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (hideTimeout) {
        clearTimeout(hideTimeout);
      }
    };
  }, [hideTimeout]);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      const direction = current! - scrollYProgress.getPrevious()!;

      if (scrollYProgress.get() < 0.05) {
        setVisible(false);
        if (hideTimeout) {
          clearTimeout(hideTimeout);
          setHideTimeout(null);
        }
      } else {
        if (direction < 0) {
          setVisible(true);
          // Clear any existing timeout
          if (hideTimeout) {
            clearTimeout(hideTimeout);
          }
        } else {
          // Set a timeout to hide after 3 seconds
          if (hideTimeout) {
            clearTimeout(hideTimeout);
          }
          const timeout = setTimeout(() => {
            setVisible(false);
          }, 3000); // 3 seconds
          setHideTimeout(timeout);
        }
      }
    }
  });

  return (
    <>
      {/* Background area that always covers the top */}
      <div 
        className="fixed top-0 left-0 right-0 h-16 z-40"
        style={{ 
          backgroundColor: 'oklch(0.9512 0.008 98.88)' // Match the exact background color
        }}
      />
      
      <AnimatePresence mode="wait">
        <motion.div
          initial={{
            opacity: 1,
            y: -100,
          }}
          animate={{
            y: visible ? 0 : -100,
            opacity: visible ? 1 : 0,
          }}
          transition={{
            duration: 0.2,
          }}
          className={cn(
            "border-b border-border fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out backdrop-blur-sm",
            className
          )}
          style={{ 
            backgroundColor: 'oklch(0.9512 0.008 98.88)' // Match the exact background color
          }}
        >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <Image 
                src="/images/doora_logo_light.png" 
                alt="DOORA" 
                width={96}
                height={96}
                className="h-3 w-auto"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link 
                href="/about" 
                className="text-foreground hover:text-primary transition-colors font-medium cursor-pointer"
              >
                About
              </Link>
              <Link 
                href="/faq" 
                className="text-foreground hover:text-primary transition-colors font-medium cursor-pointer"
              >
                FAQ
              </Link>
              <Link 
                href="/contact" 
                className="text-foreground hover:text-primary transition-colors font-medium cursor-pointer"
              >
                Contact
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
                  href="/about"
                  className="block px-3 py-2 text-foreground hover:text-primary transition-colors font-medium cursor-pointer"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  About
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
        </motion.div>
      </AnimatePresence>
    </>
  );
};
