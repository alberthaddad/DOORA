import Image from "next/image";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";

export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Mobile: Quick Links and Follow Us side by side */}
          <div className="md:hidden grid grid-cols-2 gap-8">
            {/* Quick Links */}
            <div className="space-y-4 text-center">
              <h3 className="text-2xl font-black font-title leading-tight text-primary uppercase">Quick Links</h3>
              <div className="space-y-2 text-sm">
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
              <h3 className="text-2xl font-black font-title leading-tight text-primary uppercase">Follow Us</h3>
              <div className="flex justify-center space-x-4">
                <a 
                  href="https://www.instagram.com/doora.app?igsh=MWVxY2p2YjYxbHQwZg==" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                  style={{color: 'oklch(0.2354 0.0041 84.59)'}}
                  aria-label="Follow us on Instagram"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a 
                  href="https://www.tiktok.com/@doora_app?_t=ZN-8xeBR8u0Lzy&_r=1" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                  style={{color: 'oklch(0.2354 0.0041 84.59)'}}
                  aria-label="Follow us on TikTok"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                  </svg>
                </a>
                <a 
                  href="https://www.linkedin.com/company/dooraapp" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                  style={{color: 'oklch(0.2354 0.0041 84.59)'}}
                  aria-label="Follow us on LinkedIn"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a 
                  href="https://www.youtube.com/@DOORA_app" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                  style={{color: 'oklch(0.2354 0.0041 84.59)'}}
                  aria-label="Follow us on YouTube"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
                <a 
                  href="https://www.pinterest.com/doora_app/?invite_code=a06b5bc249504557bb8b6b7a18ff5f63&sender=870743046613142810" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                  style={{color: 'oklch(0.2354 0.0041 84.59)'}}
                  aria-label="Follow us on Pinterest"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 19c-.721 0-1.418-.109-2.073-.312.286-.465.713-1.227.872-1.87.085-.35.51-2.138.51-2.138s-.13-.26-.13-.643c0-.602.349-1.051.783-1.051.369 0 .547.277.547.609 0 .37-.235.923-.356 1.435-.101.427.214.775.635.775.762 0 1.348-.803 1.348-1.963 0-1.026-.737-1.744-1.788-1.744-1.219 0-1.936.914-1.936 1.858 0 .368.141.761.317.959.035.042.04.079.03.122-.033.137-.107.433-.121.494-.019.078-.061.094-.14.057-.525-.244-.854-.999-.854-1.606 0-1.33 1.001-2.549 2.89-2.549 1.515 0 2.512 1.08 2.512 2.523 0 1.504-.948 2.712-2.26 2.712-.441 0-.858-.23-1.001-.63-.179-.75-.666-1.56-.989-2.18-.35-.66-.71-1.33-.71-1.79 0-.415.224-.796.688-.796.386 0 .688.29.688.677 0 .388-.131.969-.2 1.509-.057.346.174.628.515.628.62 0 1.092-.653 1.092-1.528 0-.625-.45-1.062-1.233-1.062-.982 0-1.79.99-1.79 2.31 0 .84.32 1.41.32 1.41s-1.12 4.73-1.32 5.57c-.1.4-.15.8-.15 1.2 0 1.1.9 2 2 2s2-.9 2-2c0-.5-.2-1-.5-1.4.3-.4.5-.9.5-1.4 0-.8-.7-1.5-1.5-1.5s-1.5.7-1.5 1.5c0 .3.1.6.3.8.2.2.3.5.3.8 0 .6-.5 1.1-1.1 1.1-.6 0-1.1-.5-1.1-1.1 0-.3.1-.6.3-.8.2-.2.3-.5.3-.8 0-.8-.7-1.5-1.5-1.5s-1.5.7-1.5 1.5c0 .5.2 1 .5 1.4.3.4.5.9.5 1.4 0 1.1.9 2 2 2s2-.9 2-2c0-.4-.05-.8-.15-1.2-.2-.84-1.32-5.57-1.32-5.57s.32-.57.32-1.41c0-1.32.808-2.31 1.79-2.31.783 0 1.233.437 1.233 1.062 0 .875-.472 1.528-1.092 1.528-.341 0-.572-.282-.515-.628.069-.54.2-1.121.2-1.509 0-.387-.302-.677-.688-.677-.464 0-.688.381-.688.796 0 .46.36 1.13.71 1.79.323.62.81 1.43.989 2.18.143.4.56.63 1.001.63 1.312 0 2.26-1.208 2.26-2.712 0-1.443-.997-2.523-2.512-2.523-1.889 0-2.89 1.219-2.89 2.549 0 .607.329 1.362.854 1.606.079.037.107.021.14-.057.014-.061.088-.357.121-.494.01-.043.005-.08-.03-.122-.176-.198-.317-.591-.317-.959 0-.944.717-1.858 1.936-1.858 1.051 0 1.788.718 1.788 1.744 0 .16-.586 1.963-1.348 1.963-.421 0-.736-.348-.635-.775.121-.512.356-1.065.356-1.435 0-.332-.178-.609-.547-.609-.434 0-.783.449-.783 1.051 0 .383.13.643.13.643s-.425 1.788-.51 2.138c-.159.643-.586 1.405-.872 1.87-.655.203-1.352.312-2.073.312z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Desktop: Original layout */}
          <div className="hidden md:contents">
            {/* Brand Section */}
            <div className="space-y-4 text-center md:text-left">
              <div>
                <Image 
                  src="/images/doora_logo_light.png" 
                  alt="DOORA" 
                  width={192}
                  height={192}
                  className="h-6 w-auto mx-auto md:mx-0"
                />
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4 text-center md:text-left">
              <h3 className="text-2xl font-black font-title leading-tight text-primary uppercase">Quick Links</h3>
              <div className="space-y-2 text-sm">
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
              <h3 className="text-2xl font-black font-title leading-tight text-primary uppercase">Follow Us</h3>
              <div className="flex justify-center space-x-4">
                <a 
                  href="https://www.instagram.com/doora.app?igsh=MWVxY2p2YjYxbHQwZg==" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                  style={{color: 'oklch(0.2354 0.0041 84.59)'}}
                  aria-label="Follow us on Instagram"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a 
                  href="https://www.tiktok.com/@doora_app?_t=ZN-8xeBR8u0Lzy&_r=1" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                  style={{color: 'oklch(0.2354 0.0041 84.59)'}}
                  aria-label="Follow us on TikTok"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                  </svg>
                </a>
                <a 
                  href="https://www.linkedin.com/company/dooraapp" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                  style={{color: 'oklch(0.2354 0.0041 84.59)'}}
                  aria-label="Follow us on LinkedIn"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a 
                  href="https://www.youtube.com/@DOORA_app" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                  style={{color: 'oklch(0.2354 0.0041 84.59)'}}
                  aria-label="Follow us on YouTube"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
                <a 
                  href="https://www.pinterest.com/doora_app/?invite_code=a06b5bc249504557bb8b6b7a18ff5f63&sender=870743046613142810" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                  style={{color: 'oklch(0.2354 0.0041 84.59)'}}
                  aria-label="Follow us on Pinterest"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 19c-.721 0-1.418-.109-2.073-.312.286-.465.713-1.227.872-1.87.085-.35.51-2.138.51-2.138s-.13-.26-.13-.643c0-.602.349-1.051.783-1.051.369 0 .547.277.547.609 0 .37-.235.923-.356 1.435-.101.427.214.775.635.775.762 0 1.348-.803 1.348-1.963 0-1.026-.737-1.744-1.788-1.744-1.219 0-1.936.914-1.936 1.858 0 .368.141.761.317.959.035.042.04.079.03.122-.033.137-.107.433-.121.494-.019.078-.061.094-.14.057-.525-.244-.854-.999-.854-1.606 0-1.33 1.001-2.549 2.89-2.549 1.515 0 2.512 1.08 2.512 2.523 0 1.504-.948 2.712-2.26 2.712-.441 0-.858-.23-1.001-.63-.179-.75-.666-1.56-.989-2.18-.35-.66-.71-1.33-.71-1.79 0-.415.224-.796.688-.796.386 0 .688.29.688.677 0 .388-.131.969-.2 1.509-.057.346.174.628.515.628.62 0 1.092-.653 1.092-1.528 0-.625-.45-1.062-1.233-1.062-.982 0-1.79.99-1.79 2.31 0 .84.32 1.41.32 1.41s-1.12 4.73-1.32 5.57c-.1.4-.15.8-.15 1.2 0 1.1.9 2 2 2s2-.9 2-2c0-.5-.2-1-.5-1.4.3-.4.5-.9.5-1.4 0-.8-.7-1.5-1.5-1.5s-1.5.7-1.5 1.5c0 .3.1.6.3.8.2.2.3.5.3.8 0 .6-.5 1.1-1.1 1.1-.6 0-1.1-.5-1.1-1.1 0-.3.1-.6.3-.8.2-.2.3-.5.3-.8 0-.8-.7-1.5-1.5-1.5s-1.5.7-1.5 1.5c0 .5.2 1 .5 1.4.3.4.5.9.5 1.4 0 1.1.9 2 2 2s2-.9 2-2c0-.4-.05-.8-.15-1.2-.2-.84-1.32-5.57-1.32-5.57s.32-.57.32-1.41c0-1.32.808-2.31 1.79-2.31.783 0 1.233.437 1.233 1.062 0 .875-.472 1.528-1.092 1.528-.341 0-.572-.282-.515-.628.069-.54.2-1.121.2-1.509 0-.387-.302-.677-.688-.677-.464 0-.688.381-.688.796 0 .46.36 1.13.71 1.79.323.62.81 1.43.989 2.18.143.4.56.63 1.001.63 1.312 0 2.26-1.208 2.26-2.712 0-1.443-.997-2.523-2.512-2.523-1.889 0-2.89 1.219-2.89 2.549 0 .607.329 1.362.854 1.606.079.037.107.021.14-.057.014-.061.088-.357.121-.494.01-.043.005-.08-.03-.122-.176-.198-.317-.591-.317-.959 0-.944.717-1.858 1.936-1.858 1.051 0 1.788.718 1.788 1.744 0 .16-.586 1.963-1.348 1.963-.421 0-.736-.348-.635-.775.121-.512.356-1.065.356-1.435 0-.332-.178-.609-.547-.609-.434 0-.783.449-.783 1.051 0 .383.13.643.13.643s-.425 1.788-.51 2.138c-.159.643-.586 1.405-.872 1.87-.655.203-1.352.312-2.073.312z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

        </div>

        <Separator className="my-8" />

        {/* Newsletter Section */}
        <div className="text-center mb-8">
          <h3 className="text-2xl font-black font-title leading-tight text-primary uppercase mb-4">Newsletter</h3>
          <p className="text-sm mb-4" style={{color: 'oklch(0.2354 0.0041 84.59)'}}>
            Sign up to our newsletter so that you never miss exciting new features and news.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto">
            <div className="flex-1 relative">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="w-full px-4 py-3 border border-border rounded-full focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground text-sm"
              />
            </div>
            <button className="bg-primary hover:bg-primary/90 px-6 py-3 rounded-full text-sm font-semibold whitespace-nowrap text-white">
              Subscribe
            </button>
          </div>
        </div>

        <Separator className="my-8" />

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
