"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useEffect, useRef, useState } from "react";
import Iphone15Pro from "@/components/magicui/iphone-15-pro";
import TextType from "@/components/ui/TextType";
import { Marquee } from "@/components/magicui/marquee";
import { ArrowRight, Recycle, Shield, Users, Leaf, Heart, Star, Target, Mail, Phone, MapPin, Clock } from "lucide-react";


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
      <section className="pt-20 pb-32 px-4 lg:px-8 min-h-screen flex items-center">
        <div className="max-w-4xl lg:max-w-7xl mx-auto text-center w-full">
          <div className="mb-8 lg:mb-0 mt-16">
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
          
          <div className="font-accent text-sm md:text-lg lg:text-xl text-primary mb-20 tracking-wide uppercase">
            FROM CLOSET TO CLOSET
          </div>

          {/* Coming Soon Section */}
          <div className="mb-20">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-black text-primary mb-4 font-title uppercase">
              WE ARE LAUNCHING SOON
            </h2>
            
            <div className="flex flex-col sm:flex-row gap-3 justify-center max-w-md lg:max-w-lg mx-auto mb-3">
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
            
            <p className="text-xs text-muted-foreground ">
              No spam, just updates.
            </p>
          </div>
          
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
              Second hand is the solution.
            </p>
          </div>

          <h2 
            ref={descriptionRef}
            className="text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-2xl lg:max-w-4xl mx-auto mb-8 leading-relaxed animate-fade-in-up"
          >
            Whether you&apos;re clearing out your closet or browsing for unique finds, our fashion resale platform brings buyers and sellers togther in one simple, secure space.
          </h2>
          
          {/* iPhone 15 Component */}
          <div className="flex justify-center mt-8 mb-2">
            <div className="relative">
              <Iphone15Pro 
                className="w-80 h-auto"
                src="/images/Homepage.png"
              />
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-4xl lg:max-w-7xl mx-auto px-4 lg:px-8">

        {/* How It Works */}
        <section className="py-2">
          <div className="text-center mb-8">
             <h2 className="text-3xl md:text-4xl lg:text-6xl font-black mb-6 font-title leading-tight text-primary uppercase">
               Easy Listings
             </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Clear out your closet in 3 simple steps
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6 text-white font-bold text-2xl">
                1
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Take a Picture</h3>
              <p className="text-muted-foreground">
                (Make sure it's a good one)
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6 text-white font-bold text-2xl">
                2
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Set Your Price</h3>
              <p className="text-muted-foreground">
                And fill out a few more fields
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6 text-white font-bold text-2xl">
                3
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Sold!</h3>
               <p className="text-muted-foreground mb-12">
                 Package your item
                 <br />
                 and someone will pick it up
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
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Let's face it, the second hand shopping experience is not a pleasant one, it's either digging through a pile of clothes or trying to find the right instagram page.
            <br />
            We're changing that.
            <br />
            Ethical fashion has never been easier:
            </p>
          </div>
          
          <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
            {/* Row 1 - Mobile: Cards 1 & 2, Desktop: Cards 1, 2, 3 */}
            <Marquee pauseOnHover className="[--duration:20s]">
              <Card className="w-64 mx-4">
                <CardHeader className="flex items-center justify-center h-full">
                  <CardTitle className="text-center">AI-powered Trend Forecasting</CardTitle>
                </CardHeader>
              </Card>

              <Card className="w-64 mx-4">
                <CardHeader className="flex items-center justify-center h-full">
                  <CardTitle className="text-center">Personalized Recommendations</CardTitle>
                </CardHeader>
              </Card>

              {/* Desktop only - Card 3 */}
              <Card className="w-64 mx-4 hidden lg:block">
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
                  <Card className="w-64 mx-4 lg:hidden">
                    <CardHeader className="flex items-center justify-center h-full">
                      <CardTitle className="text-center">Search By Image</CardTitle>
                    </CardHeader>
                  </Card>

                  <Card className="w-64 mx-4">
                    <CardHeader className="flex items-center justify-center h-full">
                      <CardTitle className="text-center">Real Reviews</CardTitle>
                    </CardHeader>
                  </Card>

                  {/* Desktop only - Cards 5 & 6 */}
                  <Card className="w-64 mx-4 hidden lg:block">
                    <CardHeader className="flex items-center justify-center h-full">
                      <CardTitle className="text-center">Secure Payments</CardTitle>
                    </CardHeader>
                  </Card>

                  <Card className="w-64 mx-4 hidden lg:block">
                    <CardHeader className="flex items-center justify-center h-full">
                      <CardTitle className="text-center">Track Your Orders</CardTitle>
                    </CardHeader>
                  </Card>
                </div>
              ))}
            </div>

            {/* Row 3 - Mobile only - Cards 5 & 6 */}
            <Marquee pauseOnHover className="[--duration:20s] lg:hidden">
              <Card className="w-64 mx-4">
                <CardHeader className="flex items-center justify-center h-full">
                  <CardTitle className="text-center">Secure Payments</CardTitle>
                </CardHeader>
              </Card>

              <Card className="w-64 mx-4">
                <CardHeader className="flex items-center justify-center h-full">
                  <CardTitle className="text-center">Track Your Orders</CardTitle>
                </CardHeader>
              </Card>
            </Marquee>

            <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
          </div>
        </section>

      </div>
    </div>
  );
}
