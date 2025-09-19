"use client";

import Image from "next/image";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function Footer() {
  const [emailValue, setEmailValue] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const [submitError, setSubmitError] = useState('');

  const handleEmailSubmit = async () => {
    // Reset previous messages
    setSubmitMessage('');
    setSubmitError('');

    // Validate email
    if (!emailValue || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailValue)) {
      setSubmitError('Please enter a valid email address');
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: emailValue }),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitMessage(data.message);
        setEmailValue(''); // Clear the input on success
      } else {
        setSubmitError(data.error || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      setSubmitError('Network error. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-8">
        <div className="grid grid-cols-1 gap-8">
          {/* Mobile: Quick Links and Follow Us side by side */}
          <div className="md:hidden grid grid-cols-2 gap-8">
            {/* Quick Links */}
            <div className="space-y-4 text-center">
              <h3 className="text-xl font-black font-title leading-tight text-primary uppercase">Quick Links</h3>
              <div className="space-y-2 text-sm">
                <Link 
                  href="/" 
                  className="block hover:text-primary transition-colors"
                  style={{color: 'oklch(0.2354 0.0041 84.59)'}}
                >
                  Home
                </Link>
                <Link 
                  href="/about" 
                  className="block hover:text-primary transition-colors"
                  style={{color: 'oklch(0.2354 0.0041 84.59)'}}
                >
                  About Us
                </Link>
                <Link 
                  href="/contact" 
                  className="block hover:text-primary transition-colors"
                  style={{color: 'oklch(0.2354 0.0041 84.59)'}}
                >
                  Contact
                </Link>
                <Link 
                  href="/faq" 
                  className="block hover:text-primary transition-colors"
                  style={{color: 'oklch(0.2354 0.0041 84.59)'}}
                >
                  FAQ
                </Link>
              </div>
            </div>

            {/* Follow Us */}
            <div className="space-y-4 text-center">
              <h3 className="text-xl font-black font-title leading-tight text-primary uppercase">Follow Us</h3>
              <div className="flex justify-center space-x-2">
                <Button
                  variant="ghost"
                  size="sm"
                  asChild
                  className="h-8 w-8 p-0 hover:bg-primary/10"
                >
                  <a 
                    href="https://www.instagram.com/doora.app" 
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Follow us on Instagram"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  asChild
                  className="h-8 w-8 p-0 hover:bg-primary/10"
                >
                  <a 
                    href="https://www.tiktok.com/@doora_app" 
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Follow us on TikTok"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                    </svg>
                  </a>
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  asChild
                  className="h-8 w-8 p-0 hover:bg-primary/10"
                >
                  <a 
                    href="https://www.linkedin.com/company/dooraapp" 
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Follow us on LinkedIn"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  asChild
                  className="h-8 w-8 p-0 hover:bg-primary/10"
                >
                  <a 
                    href="https://www.youtube.com/@DOORA_app" 
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Follow us on YouTube"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                    </svg>
                  </a>
                </Button>
              </div>
            </div>
          </div>

          {/* Desktop: Full width layout without logo */}
          <div className="hidden md:block">
            <div className="flex justify-between items-start w-full gap-12">
              {/* Quick Links */}
              <div className="flex-1 text-center">
                <div className="space-y-4">
                  <h3 className="text-xl font-black font-title leading-tight text-primary uppercase">Quick Links</h3>
                  <div className="space-y-2 text-sm">
                    <Link 
                      href="/" 
                      className="block hover:text-primary transition-colors"
                      style={{color: 'oklch(0.2354 0.0041 84.59)'}}
                    >
                      Home
                    </Link>
                    <Link 
                      href="/about" 
                      className="block hover:text-primary transition-colors"
                      style={{color: 'oklch(0.2354 0.0041 84.59)'}}
                    >
                      About Us
                    </Link>
                    <Link 
                      href="/contact" 
                      className="block hover:text-primary transition-colors"
                      style={{color: 'oklch(0.2354 0.0041 84.59)'}}
                    >
                      Contact
                    </Link>
                    <Link 
                      href="/faq" 
                      className="block hover:text-primary transition-colors"
                      style={{color: 'oklch(0.2354 0.0041 84.59)'}}
                    >
                      FAQ
                    </Link>
                  </div>
                </div>
              </div>

              {/* Newsletter - Desktop */}
              <div className="flex-1 text-center">
                <div className="space-y-4">
                  <h3 className="text-xl font-black font-title leading-tight text-primary uppercase">Newsletter</h3>
                  <p className="text-sm" style={{color: 'oklch(0.2354 0.0041 84.59)'}}>
                    Sign up to our newsletter so that you never miss exciting new features and news.
                  </p>
                  <div className="flex flex-col gap-3 max-w-sm mx-auto">
                    <div className="relative">
                      <input 
                        type="email" 
                        placeholder="Enter your email"
                        value={emailValue}
                        onChange={(e) => setEmailValue(e.target.value)}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter' && !isSubmitting) {
                            handleEmailSubmit();
                          }
                        }}
                        className="w-full px-4 py-3 border border-border rounded-full focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground text-sm"
                      />
                    </div>
                    <Button 
                      onClick={handleEmailSubmit}
                      disabled={isSubmitting}
                      className="bg-primary hover:bg-primary/90 px-6 py-3 rounded-full text-sm font-semibold whitespace-nowrap text-white disabled:opacity-50"
                    >
                      {isSubmitting ? 'Subscribing...' : 'Subscribe'}
                    </Button>
                    {submitMessage && (
                      <p className="text-sm text-green-600 text-center">
                        {submitMessage}
                      </p>
                    )}
                    {submitError && (
                      <p className="text-sm text-red-600 text-center">
                        {submitError}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              {/* Follow Us */}
              <div className="flex-1 text-center">
                <div className="space-y-4">
                  <h3 className="text-xl font-black font-title leading-tight text-primary uppercase">Follow Us</h3>
                  <div className="flex justify-center space-x-2">
                    <Button
                      variant="ghost"
                      size="sm"
                      asChild
                      className="h-8 w-8 p-0 hover:bg-primary/10"
                    >
                      <a 
                        href="https://www.instagram.com/doora.app" 
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Follow us on Instagram"
                      >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                        </svg>
                      </a>
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      asChild
                      className="h-8 w-8 p-0 hover:bg-primary/10"
                    >
                      <a 
                        href="https://www.tiktok.com/@doora_app" 
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Follow us on TikTok"
                      >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                        </svg>
                      </a>
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      asChild
                      className="h-8 w-8 p-0 hover:bg-primary/10"
                    >
                      <a 
                        href="https://www.linkedin.com/company/dooraapp" 
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Follow us on LinkedIn"
                      >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                      </a>
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      asChild
                      className="h-8 w-8 p-0 hover:bg-primary/10"
                    >
                      <a 
                        href="https://www.youtube.com/@DOORA_app" 
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Follow us on YouTube"
                      >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                        </svg>
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        <Separator className="my-6" />


        {/* Newsletter Section - Mobile only */}
        <div className="md:hidden text-center mb-8">
          <h3 className="text-xl font-black font-title leading-tight text-primary uppercase mb-4">Newsletter</h3>
          <p className="text-sm mb-4" style={{color: 'oklch(0.2354 0.0041 84.59)'}}>
            Sign up to our newsletter so that you never miss exciting new features and news.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto">
            <div className="flex-1 relative">
              <input 
                type="email" 
                placeholder="Enter your email"
                value={emailValue}
                onChange={(e) => setEmailValue(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && !isSubmitting) {
                    handleEmailSubmit();
                  }
                }}
                className="w-full px-4 py-3 border border-border rounded-full focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground text-sm"
              />
            </div>
            <Button 
              onClick={handleEmailSubmit}
              disabled={isSubmitting}
              className="bg-primary hover:bg-primary/90 px-6 py-3 rounded-full text-sm font-semibold whitespace-nowrap text-white disabled:opacity-50"
            >
              {isSubmitting ? 'Subscribing...' : 'Subscribe'}
            </Button>
          </div>
          {submitMessage && (
            <p className="text-sm text-green-600 text-center mt-2">
              {submitMessage}
            </p>
          )}
          {submitError && (
            <p className="text-sm text-red-600 text-center mt-2">
              {submitError}
            </p>
          )}
        </div>


        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0">
          <div className="text-sm" style={{color: 'oklch(0.2354 0.0041 84.59)'}}>
            <p>&copy; 2025 Doora. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
