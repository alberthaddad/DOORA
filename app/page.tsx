"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { useEffect, useRef, useState } from "react";
import TextType from "@/components/ui/TextType";
import { Marquee } from "@/components/magicui/marquee";


export default function Home() {
  const headlineRef = useRef<HTMLDivElement>(null);
  const solutionRef = useRef<HTMLParagraphElement>(null);
  const descriptionRef = useRef<HTMLHeadingElement>(null);
  const [emailValue, setEmailValue] = useState('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
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
    };
  }, []);

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Hero Section */}
      <section className="pt-2 pb-20 px-4 lg:px-8 h-[85vh] flex items-center bg-muted/30">
        <div className="max-w-4xl lg:max-w-7xl mx-auto text-center w-full">
          <div className="mb-8 lg:mb-0 mt-32">
            {/* Mobile/Tablet logos */}
            <Image 
              src="/images/doora_logo_light.png" 
              alt="DOORA" 
              width={300}
              height={300}
              className="max-h-40 md:max-h-48 lg:hidden w-auto mx-auto"
              style={{maxHeight: '320px'}}
            />
            
            {/* Desktop logos - smaller size */}
            <Image 
              src="/images/doora_logo_light_desktop.png" 
              alt="DOORA" 
              width={1766}
              height={277}
              className="hidden lg:block w-auto mx-auto"
              style={{height: '128px', maxHeight: '128px'}}
            />
          </div>
          
          <div className="font-accent text-sm md:text-lg lg:text-xl text-primary mb-20 lg:mt-8 tracking-wide uppercase">
            FROM CLOSET TO CLOSET
          </div>

          {/* Coming Soon Section */}
          <div className="mb-20">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-black text-primary mb-4 font-title uppercase">
                WE ARE LAUNCHING SOON
              </h2>
              
            <div className="flex flex-col sm:flex-row gap-3 justify-center sm:items-center max-w-md lg:max-w-lg mx-auto mb-3">
              <div className="flex-1 relative">
                <input 
                  type="email" 
                  value={emailValue}
                  onChange={(e) => setEmailValue(e.target.value)}
                  className="w-full px-4 py-3 border border-border rounded-full focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground text-sm"
                />
                {emailValue === '' && (
                  <div className="absolute left-4 top-1/2 transform -translate-y-1/2 pointer-events-none text-sm placeholder-text">
                    <TextType 
                      text={["Enter your email", "Get notified", "Join the waitlist"]}
                      typingSpeed={150}
                      pauseDuration={3000}
                      showCursor={true}
                      cursorCharacter="|"
                      loop={true}
                    />
                  </div>
                )}
              </div>
              <Button className="bg-primary hover:bg-primary/90 px-6 py-3 rounded-full text-sm font-semibold whitespace-nowrap">
                  Notify Me
                </Button>
              </div>
              
            <p className="text-xs" style={{color: 'oklch(0.2354 0.0041 84.59)'}}>
              No spam, just updates
            </p>
          </div>
        </div>
      </section>

      {/* Content Section without background */}
      <section className="py-20 px-4 lg:px-8 -mt-12">
        <div className="max-w-4xl lg:max-w-7xl mx-auto text-center w-full">
          <div className="pt-16 mb-8">
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
            className="text-lg md:text-xl lg:text-2xl max-w-2xl lg:max-w-4xl mx-auto mb-16 leading-relaxed animate-fade-in-up"
            style={{color: 'oklch(0.2354 0.0041 84.59)'}}
          >
            Whether you&apos;re clearing out your closet or browsing for unique finds, our fashion resale platform connects thousands of closets in one simple, secure space.
          </h2>
          
          {/* Responsive iPhone Images */}
          <div className="flex justify-center mt-8 mb-2">
            {/* Desktop: Two iPhones with dramatic size difference and positioning */}
            <div className="hidden lg:flex items-start justify-center relative">
              <div className="relative z-10 -mr-8 -mt-8">
                <Image 
                  src="/images/iphone_doora.png"
                  alt="DOORA App on iPhone"
                  width={280}
                  height={560}
                  className="w-72 h-auto"
                  priority
                />
              </div>
              <div className="relative z-20 -ml-20 mt-4">
                <Image 
                  src="/images/iphone_angled.png"
                  alt="DOORA App on iPhone (Angled)"
                  width={450}
                  height={900}
                  className="w-[390px] h-auto"
                  priority
                />
              </div>
            </div>
            
            {/* Mobile: Single realistic iPhone */}
            <div className="relative lg:hidden">
              <Image 
                src="/images/iphone_realistic.png"
                alt="DOORA App on iPhone"
                width={320}
                height={640}
                className="w-80 h-auto"
                priority
              />
            </div>
          </div>
          </div>
        </section>

      <div className="max-w-4xl lg:max-w-7xl mx-auto px-4 lg:px-8">

        {/* How It Works */}
        <section className="py-2 -mt-16">
          <div className="text-center mb-8">
             <h2 className="text-3xl md:text-4xl lg:text-6xl font-black mb-3 font-title leading-tight text-primary uppercase">
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
              <p style={{color: 'oklch(0.2354 0.0041 84.59)'}}>
                Make sure it&apos;s a good one
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6 text-white font-bold text-2xl">
                2
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Price It</h3>
              <p style={{color: 'oklch(0.2354 0.0041 84.59)'}}>
                And add a product description
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6 text-white font-bold text-2xl">
                3
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Sell it</h3>
               <p className="mb-12" style={{color: 'oklch(0.2354 0.0041 84.59)'}}>
                 We&apos;ll notify you when it sells

              </p>
            </div>
          </div>
        </section>

        {/* Marquee Section */}
        <section className="py-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-6xl font-black mb-6 font-title leading-tight text-primary uppercase">
              Premium Shopping Experience
            </h2>
            <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed" style={{color: 'oklch(0.2354 0.0041 84.59)'}}>
            Let&apos;s face it, secondhand shopping can be overwhelming. Digging through piles of clothes, scrolling through endless reseller pages....We&apos;re changing that. 
            <br />
            Sustainable shopping has never been easier:
            </p>
          </div>

          <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
            {/* Row 1 - Mobile: Cards 1 & 2, Desktop: Cards 1, 2, 3 */}
            <Marquee pauseOnHover className="[--duration:20s]">
              <Card className="w-64 mx-4 bg-muted/20">
                <CardHeader className="flex items-center justify-center h-full">
                  <CardTitle className="text-center">Smart Trend Forecasting</CardTitle>
                </CardHeader>
              </Card>

              <Card className="w-64 mx-4 bg-muted/20">
                <CardHeader className="flex items-center justify-center h-full">
                  <CardTitle className="text-center">Personalized Recommendations</CardTitle>
                </CardHeader>
              </Card>

              {/* Desktop only - Card 3 */}
              <Card className="w-64 mx-4 hidden lg:block bg-muted/20">
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
                  <Card className="w-64 mx-4 lg:hidden bg-muted/20">
                    <CardHeader className="flex items-center justify-center h-full">
                      <CardTitle className="text-center">Search By Image</CardTitle>
                    </CardHeader>
                  </Card>

                  <Card className="w-64 mx-4 bg-muted/20">
                    <CardHeader className="flex items-center justify-center h-full">
                      <CardTitle className="text-center">Real Reviews</CardTitle>
                    </CardHeader>
                  </Card>

                  {/* Desktop only - Cards 5 & 6 */}
                  <Card className="w-64 mx-4 hidden lg:block bg-muted/20">
                    <CardHeader className="flex items-center justify-center h-full">
                      <CardTitle className="text-center">Secure Payments</CardTitle>
                    </CardHeader>
                  </Card>

                  <Card className="w-64 mx-4 hidden lg:block bg-muted/20">
                    <CardHeader className="flex items-center justify-center h-full">
                      <CardTitle className="text-center">Track Your Orders</CardTitle>
                    </CardHeader>
              </Card>
                </div>
              ))}
            </div>

            {/* Row 3 - Mobile only - Cards 5 & 6 */}
            <Marquee pauseOnHover className="[--duration:20s] lg:hidden">
              <Card className="w-64 mx-4 bg-muted/20">
                <CardHeader className="flex items-center justify-center h-full">
                  <CardTitle className="text-center">Secure Payments</CardTitle>
                </CardHeader>
              </Card>

              <Card className="w-64 mx-4 bg-muted/20">
                <CardHeader className="flex items-center justify-center h-full">
                  <CardTitle className="text-center">Track Your Orders</CardTitle>
                </CardHeader>
              </Card>
            </Marquee>

            <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
          </div>
          
          {/* Title underneath Marquee */}
          <div className="text-center mt-32 mb-8">
            <p className="text-2xl md:text-4xl lg:text-4xl font-black mb-6 font-title leading-tight text-primary uppercase">
              DOORA Is Designed To Make Secondhand Feel Premium And NOT Second Best!
            </p>
          </div>
        </section>

      </div>
    </div>
  );
}
