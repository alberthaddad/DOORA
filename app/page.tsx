"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { useEffect, useRef, useState } from "react";
import TextType from "@/components/ui/TextType";
import { Marquee } from "@/components/magicui/marquee";
import Footer from "@/components/essentials/Footer";
import HeroPortal from "@/components/HeroPortal";


export default function Home() {
  const headlineRef = useRef<HTMLDivElement>(null);
  const solutionRef = useRef<HTMLParagraphElement>(null);
  const descriptionRef = useRef<HTMLHeadingElement>(null);
  const [emailValue, setEmailValue] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const [submitError, setSubmitError] = useState('');

  // Optimized preloading - critical above-the-fold images with mobile optimization
  useEffect(() => {
    // Preload critical images with mobile-optimized approach
    const criticalImages = [
      '/images/DOORA_TITLE_CORRECT.png',
      '/images/Hero BG Test.jpg'
    ];

    criticalImages.forEach(src => {
      const img = new window.Image();
      img.src = src;
      img.loading = 'eager';
      img.fetchPriority = 'high';
    });
  }, []);

  useEffect(() => {
    // High-performance IntersectionObserver with optimizations
    const observer = new IntersectionObserver(
      (entries) => {
        // Use requestAnimationFrame for optimal performance
        requestAnimationFrame(() => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('in-view');
              // Unobserve elements once they're animated to reduce overhead
              observer.unobserve(entry.target);
            }
          });
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );


    const headlineElement = headlineRef.current;
    const solutionElement = solutionRef.current;
    const descriptionElement = descriptionRef.current;

    if (headlineElement) {
      observer.observe(headlineElement);
    }
    if (solutionElement) {
      observer.observe(solutionElement);
    }
    if (descriptionElement) {
      observer.observe(descriptionElement);
    }

    return () => {
      if (headlineElement) {
        observer.unobserve(headlineElement);
      }
      if (solutionElement) {
        observer.unobserve(solutionElement);
      }
      if (descriptionElement) {
        observer.unobserve(descriptionElement);
      }
      observer.disconnect();
    };
  }, []);

  const handleEmailSubmit = async () => {
    // Reset previous messages
    setSubmitMessage('');
    setSubmitError('');

    // Check if value is provided
    if (!emailValue) {
      setSubmitError('Please enter an email address or phone number');
      return;
    }

    // Determine if it's an email or phone number
    const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailValue);
    const isPhone = /^[\d\s\-\+\(\)]+$/.test(emailValue);

    if (!isEmail && !isPhone) {
      setSubmitError('Please enter a valid email address or phone number');
      return;
    }

    setIsSubmitting(true);

    try {
      const payload = isEmail 
        ? { email: emailValue } 
        : { phone: emailValue };

      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
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
    <>
      <HeroPortal />
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="hero-section">
          {/* CONTENT */}
          <div className="hero-content">
          <div className="max-w-4xl lg:max-w-7xl mx-auto text-center w-full relative z-20">
            <div className="mb-8 lg:mb-8 mt-8">
              {/* Mobile/Tablet logos */}
              <Image 
                src="/images/DOORA_TITLE_CORRECT.png" 
                alt="DOORA" 
                width={300}
                height={300}
                className="max-h-40 md:max-h-48 lg:hidden w-auto mx-auto"
                style={{ maxHeight: '320px' }}
                priority
                loading="eager"
                quality={85}
                sizes="(max-width: 768px) 300px, (max-width: 1024px) 400px, 500px"
              />
              
              {/* Desktop logos - smaller size */}
              <Image 
                src="/images/DOORA_TITLE_CORRECT.png" 
                alt="DOORA" 
                width={1766}
                height={277}
                className="hidden lg:block w-auto mx-auto"
                style={{ height: '128px', maxHeight: '128px' }}
                priority
                loading="eager"
                quality={85}
                sizes="(min-width: 1024px) 800px, 0px"
              />
            </div>
            
            <div className="font-accent text-sm md:text-lg lg:text-xl mb-20 tracking-wide uppercase text-light-cream">
              FROM CLOSET TO CLOSET
            </div>

            {/* Coming Soon Section */}
            <div className="mb-20">
              <h2 className="text-xl md:text-2xl lg:text-3xl font-black mb-4 font-title uppercase text-light-cream">
                WE ARE LAUNCHING SOON
              </h2>

              <div className="flex flex-col sm:flex-row gap-4 justify-center sm:items-center max-w-md lg:max-w-lg mx-auto mb-4">
                <div className="flex-1 relative">
                  <input 
                    type="text" 
                    value={emailValue}
                    onChange={(e) => setEmailValue(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' && !isSubmitting) {
                        handleEmailSubmit();
                      }
                    }}
                    className="w-full px-4 py-3 border-border rounded-full focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground text-sm"
                  />
                  {emailValue === '' && (
                    <div className="absolute left-4 top-1/2 transform -translate-y-1/2 pointer-events-none text-sm placeholder-text">
                      <TextType 
                        text={["Enter your email or number", "Enter your email or number"]}
                        typingSpeed={100}
                        pauseDuration={3000}
                        showCursor={true}
                        cursorCharacter="|"
                        loop={true}
                      />
                    </div>
                  )}
                </div>
                <Button 
                  onClick={handleEmailSubmit}
                  disabled={isSubmitting}
                  className="bg-primary hover:bg-primary/90 px-6 py-3 rounded-full text-sm font-semibold whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Subscribing...' : 'Notify Me'}
                </Button>
              </div>

              {/* Success and Error Messages */}
              {submitMessage && (
                <p className="text-sm text-success font-medium mb-2">
                  {submitMessage}
                </p>
              )}
              {submitError && (
                <p className="text-sm text-error font-medium mb-2">
                  {submitError}
                </p>
              )}
              
              <p className="text-xs text-light-cream">
                No spam, just updates
              </p>
            </div>
          </div>
        </div>
        </section>

      {/* White Background Section */}
      <div className="bg-background relative">
        {/* Content Section */}
        <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl lg:max-w-7xl mx-auto text-center w-full">
          <div className="mb-12">
            <h1 
              ref={headlineRef}
              className="text-3xl md:text-4xl lg:text-6xl font-black mb-6 font-title leading-tight text-primary uppercase tracking-normal animate-fade-in-up"
            >
              Fast Fashion Isn&apos;t
                  <br />
              Your Only Option
                </h1>

            <p 
              ref={solutionRef}
              className="text-xl md:text-2xl lg:text-3xl font-semibold text-primary mb-8 animate-fade-in-up"
            >
              Secondhand Is The Solution
            </p>
          </div>

            <h2 
            ref={descriptionRef}
            className="text-lg md:text-xl lg:text-2xl max-w-2xl lg:max-w-4xl mx-auto mb-12 leading-relaxed animate-fade-in-up text-foreground"
          >
            Whether you&apos;re clearing out your closet or browsing for unique finds, our fashion resale platform connects thousands of closets in one simple, secure space.
          </h2>
          
          {/* Responsive iPhone Images */}
          <div className="flex justify-center mt-8">
            {/* Desktop: Two iPhones with dramatic size difference and positioning */}
            <div className="hidden lg:flex items-start justify-center relative">
              <div className="relative z-10 -mr-8 -mt-8">
                <Image 
                  src="/images/iphone_doora.png"
                  alt="DOORA App on iPhone"
                  width={280}
                  height={560}
                  className="w-72 h-auto"
                  loading="lazy"
                  quality={85}
                  sizes="(min-width: 1024px) 280px, 0px"
                />
              </div>
              <div className="relative z-20 -ml-20 mt-4">
                <Image 
                  src="/images/DOORA full presentation -left.png"
                  alt="DOORA App on iPhone (Angled)"
                  width={450}
                  height={900}
                  className="w-[390px] h-auto"
                  priority
                  quality={85}
                  sizes="(min-width: 1024px) 450px, 0px"
                />
              </div>
            </div>
            
            {/* Mobile: Single realistic iPhone */}
            <div className="relative lg:hidden">
              <Image 
                src="/images/DOORA full presentation-portrait.png"
                alt="DOORA App on iPhone"
                width={320}
                height={640}
                className="w-80 h-auto"
                priority
                quality={85}
                sizes="(max-width: 768px) 320px, (max-width: 1024px) 400px, 500px"
              />
            </div>
          </div>
          </div>
        </section>

        <div className="max-w-4xl lg:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* How It Works */}
        <section className="py-16 md:py-20">
          <div className="text-center mb-12">
             <h2 className="text-3xl md:text-4xl lg:text-6xl font-black mb-6 font-title leading-tight text-primary uppercase">
               Easy Listings
            </h2>
            <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed" style={{color: 'oklch(0.2354 0.0041 84.59)'}}>
              Clear out your closet in 3 simple steps
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6 text-white font-bold text-2xl">
                1
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Take a Pic&apos;</h3>
              <p className="text-foreground">
                Make sure it&apos;s a good one
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6 text-white font-bold text-2xl">
                2
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Price It</h3>
              <p className="text-foreground">
                And add a product description
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6 text-white font-bold text-2xl">
                3
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Sell it</h3>
               <p className="mb-12 text-foreground">
                 We&apos;ll notify you when it sells

              </p>
            </div>
          </div>
        </section>

        {/* Marquee Section */}
        <section className="py-16 md:py-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-6xl font-black mb-6 font-title leading-tight text-primary uppercase">
              Premium Shopping Experience
            </h2>
            <p className="text-lg md:text-xl lg:text-2xl max-w-2xl lg:max-w-4xl mx-auto mb-12 leading-relaxed text-foreground">
            Let&apos;s face it, secondhand shopping can be overwhelming. Digging through piles of clothes, scrolling through endless reseller pages....We&apos;re changing that. 
            <br />
            Sustainable shopping has never been easier:
            </p>
          </div>

          <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
            {/* Row 1 - Mobile: Cards 1 & 2, Desktop: Cards 1, 2, 3 */}
            <Marquee pauseOnHover className="[--duration:20s]">
              <Card className="w-64 mx-4 bg-muted/30">
                <CardHeader className="flex items-center justify-center h-full">
                  <CardTitle className="text-center">Smart Trend Forecasting</CardTitle>
                </CardHeader>
              </Card>

              <Card className="w-64 mx-4 bg-muted/30">
                <CardHeader className="flex items-center justify-center h-full">
                  <CardTitle className="text-center">Personalized Recommendations</CardTitle>
                </CardHeader>
              </Card>

              {/* Desktop only - Card 3 */}
              <Card className="w-64 mx-4 hidden lg:block bg-muted/30">
                <CardHeader className="flex items-center justify-center h-full">
                  <CardTitle className="text-center">Search By Image</CardTitle>
                </CardHeader>
              </Card>
            </Marquee>

            {/* Row 2 - Mobile: Cards 3 & 4, Desktop: Cards 4, 5, 6 - Custom Reverse */}
            <div className="group flex overflow-hidden p-2 [--duration:20s] [--gap:1rem] [gap:var(--gap)] translate-x-32">
              {Array(4).fill(0).map((_, i) => (
                <div
                  key={i}
                  className="flex shrink-0 justify-around [gap:var(--gap)] animate-marquee flex-row group-hover:[animation-play-state:paused]"
                  style={{ animationDirection: 'reverse' }}
                >
                  {/* Mobile only - Card 3 */}
                  <Card className="w-64 mx-4 lg:hidden bg-muted/30">
                    <CardHeader className="flex items-center justify-center h-full">
                      <CardTitle className="text-center">Search By Image</CardTitle>
                    </CardHeader>
                  </Card>

                  <Card className="w-64 mx-4 bg-muted/30">
                    <CardHeader className="flex items-center justify-center h-full">
                      <CardTitle className="text-center">Real Reviews</CardTitle>
                    </CardHeader>
                  </Card>

                  {/* Desktop only - Cards 5 & 6 */}
                  <Card className="w-64 mx-4 hidden lg:block bg-muted/30">
                    <CardHeader className="flex items-center justify-center h-full">
                      <CardTitle className="text-center">Secure Payments</CardTitle>
                    </CardHeader>
                  </Card>

                  <Card className="w-64 mx-4 hidden lg:block bg-muted/30">
                    <CardHeader className="flex items-center justify-center h-full">
                      <CardTitle className="text-center">Track Your Orders</CardTitle>
                    </CardHeader>
              </Card>
                </div>
              ))}
            </div>

            {/* Row 3 - Mobile only - Cards 5 & 6 */}
            <Marquee pauseOnHover className="[--duration:20s] lg:hidden">
              <Card className="w-64 mx-4 bg-muted/30">
                <CardHeader className="flex items-center justify-center h-full">
                  <CardTitle className="text-center">Secure Payments</CardTitle>
                </CardHeader>
              </Card>

              <Card className="w-64 mx-4 bg-muted/30">
                <CardHeader className="flex items-center justify-center h-full">
                  <CardTitle className="text-center">Track Your Orders</CardTitle>
                </CardHeader>
              </Card>
            </Marquee>

            <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
          </div>
          </section>

        {/* Added Content for SEOs */}
        <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 from-muted/20 via-background to-muted/30 relative overflow-hidden rounded-2xl mb-16">
          {/* Background decorative elements */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5"></div>
          <div className="absolute top-10 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl"></div>
          
          <div className="max-w-4xl lg:max-w-7xl mx-auto text-center w-full relative z-10">
            {/* Main heading with enhanced styling */}
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl lg:text-6xl font-black mb-6 font-title leading-tight text-primary uppercase tracking-normal">
                Your Circular Fashion Platform
              </h2>
              
              {/* Subtitle with accent line */}
              <div className="flex items-center justify-center mb-6">
                <div className="w-16 h-1 bg-primary rounded-full"></div>
              </div>
              
              <p className="text-xl md:text-2xl lg:text-3xl font-semibold text-primary mb-8 max-w-4xl mx-auto leading-relaxed">
                Designed To Make Secondhand Feel Premium And Not Second Best
              </p>
            </div>

            {/* Content with enhanced card styling */}
            <div className="bg-card/40 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-border/50 shadow-xl">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-lg md:text-xl lg:text-2xl leading-relaxed text-foreground mb-8">
                  The DOORA app is set to become the most user-friendly preloved fashion marketplace in the MENA region, starting with its launch in Lebanon. We make it easier than ever to buy and sell secondhand clothing at accessible prices, all while supporting a more ethical fashion future. From closet clean-outs to hidden gems, DOORA helps you refresh your closet without the waste.
                </h2>
                
                {/* Integrated CTA Section */}
                <div className="mt-8 pt-8 border-t border-border/30">
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-foreground mb-8">
                      Curious to know more?   
                    </h3>
                    <Link
                      href="/about"
                      className="inline-flex items-center justify-center px-8 py-3 border-2 border-primary text-base font-semibold rounded-lg text-white bg-primary hover:bg-primary/90 hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
                    >
                      About DOORA
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        </div>
        
        {/* Footer inside white background */}
        <Footer />
      </div>
      </div>
    </>
  );
}
