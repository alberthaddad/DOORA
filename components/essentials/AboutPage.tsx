"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Recycle, Zap, Users, Heart, Leaf, Target, Globe, Briefcase } from "lucide-react";
import Link from "next/link";
import { Marquee } from "@/components/magicui/marquee";
import { ProblemCards } from "./ProblemCards";
import { SolutionCards } from "./SolutionCards";
import { Timeline } from "@/components/ui/timeline";
import Footer from "@/components/essentials/Footer";

function OurStoryTimeline() {
  const data = [
    {
      title: "",
      content: (
        <div>
          <p className="mb-12 text-sm md:text-base leading-relaxed text-foreground">
            &quot;At 17, I launched small businesses focused on giving clothes a longer life through upcycling and secondhand. That love for fashion took me to Paris, where I joined leading luxury groups to understand how the industry truly operated.
          </p>
          <p className="mb-12 text-sm md:text-base leading-relaxed text-foreground">
            But behind those glossy offices, sustainability and ethics were nothing more than buzzwords. Every strategy was built to drive overconsumption, and I was a part of that system.
          </p>
          <p className="mb-12 text-sm md:text-base leading-relaxed text-foreground">
            So I walked away and created DOORA, a platform that makes conscious fashion easy and accessible to anyone.
          </p>
          <p className="mb-12 text-sm md:text-base leading-relaxed text-foreground">
            I know sustainability may not be everyone&apos;s first concern, but at DOORA, it is.
          </p>
        </div>
      ),
    },
    {
      title: "",
      content: (
        <div>
          <p className="-mt-4 mb-12 text-sm md:text-base leading-relaxed text-foreground">
            My mission is simple: give people the possibility to enjoy fashion while still making ethical choices.&quot;
          </p>
          <div className="text-right mt-8 pt-6 border-t border-primary/20">
            <p className="text-lg font-semibold text-primary italic">– Andrea Tegho</p>
            <p className="text-sm mt-1 font-medium text-foreground">Founder</p>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="relative w-full overflow-clip">
      <Timeline data={data} />
    </div>
  );
}

export default function AboutPage() {
  const unSDGDataTop = [
    { image: "/images/E_WEB_01.png", title: "No Poverty", number: "1" },
    { image: "/images/E_WEB_05.png", title: "Gender Equality", number: "5" },
    { image: "/images/E_WEB_08.png", title: "Decent Work & Economic Growth", number: "8" },
  ];

  const unSDGDataBottom = [
    { image: "/images/E_WEB_09.png", title: "Industry, Innovation and Infrastructure", number: "9" },
    { image: "/images/E_WEB_12.png", title: "Responsible Consumption", number: "12" },
    { image: "/images/E_WEB_13.png", title: "Climate Action", number: "13" },
  ];

  return (
    <>
      {/* Infinite white background block */}
      <div className="fixed inset-0 bg-white -z-[9999]"></div>
      <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="px-4 bg-muted/30 h-[300px] flex">
        <div className="max-w-4xl mx-auto text-center w-full">
          <h1 className="text-5xl md:text-4xl lg:text-6xl font-black mb-6 font-title leading-tight text-primary uppercase pt-20">
            About Us
          </h1>
          <p className="text-xl max-w-2xl mx-auto" style={{color: 'oklch(0.2354 0.0041 84.59)'}}>
            Inspired by the Arabic word for &quot;circle&quot;, DOORA reflects our core mission 
            to drive circular fashion in the Middle East.
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4">
        {/* About Doora Section */}
        <section className="py-20">

          {/* Our Values Section */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl lg:text-6xl font-black mb-6 font-title leading-tight text-primary uppercase">
                Our Values
              </h3>
            </div>
            
            {/* Modern Values Design */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
              {/* Accessibility Value */}
              <Card className="text-center hover:shadow-md transition-all duration-200 h-full bg-muted/30">
                <CardContent className="pt-6">
                  {/* Icon and Title Section */}
                  <div className="flex flex-col items-center gap-4">
                    <div className="w-16 h-16 lg:w-20 lg:h-20 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-primary/15 transition-colors duration-300">
                      <Target className="h-8 w-8 lg:h-10 lg:w-10 text-primary" />
                    </div>
                    <div className="text-center">
                      <h4 className="text-2xl lg:text-3xl font-black text-primary uppercase tracking-wide mb-2">
                        Accessibility
                      </h4>
                      <div className="w-12 h-1 bg-primary rounded-full mx-auto mb-6"></div>
                    </div>
                  </div>
                  
                  {/* Content Section */}
                  <div className="flex-1 text-center">
                    <p className="text-base lg:text-lg leading-relaxed text-foreground">
                      DOORA is for everyone; all styles, all sizes, and most importantly all budgets. Whether you&apos;re a thrifter, a vintage lover, or a luxury shopper, you&apos;ll find what you&apos;re looking for.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Sustainability Value */}
              <Card className="text-center hover:shadow-md transition-all duration-200 h-full bg-muted/30">
                <CardContent className="pt-6">
                  {/* Icon and Title Section */}
                  <div className="flex flex-col items-center gap-4">
                    <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-2xl flex items-center justify-center"
                         style={{
                           backgroundColor: 'oklch(0.5354 0.0644 135.23 / 0.1)'
                         }}>
                      <Leaf className="h-8 w-8 lg:h-10 lg:w-10" style={{color: 'oklch(0.5354 0.0644 135.23)'}} />
                    </div>
                    <div className="text-center">
                      <h4 className="text-2xl lg:text-3xl font-black uppercase tracking-wide mb-2" style={{color: 'oklch(0.5354 0.0644 135.23)'}}>
                        Sustainability
                      </h4>
                      <div className="w-12 h-1 rounded-full mx-auto mb-6" style={{backgroundColor: 'oklch(0.5354 0.0644 135.23)'}}></div>
                    </div>
                  </div>
                  
                  {/* Content Section */}
                  <div className="flex-1 text-center">
                    <p className="text-base lg:text-lg leading-relaxed text-foreground">
                      We&apos;re fighting fast fashion by promoting a circular approach that gives clothes a longer life. We make conscious shopping affordable and easier than ever, breaking the stigma around secondhand fashion in the region.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* UN SDGs Marquee Section */}
          <div className="text-center mb-12" id="sustainability">
            <p className="text-xl md:text-2xl lg:text-3xl font-semibold text-primary mb-8">
              WE ALIGN WITH 6 OF THE UN&apos;S SUSTAINABLE DEVELOPMENT GOALS
            </p>
          </div>

          {/* UN SDG Images Marquee - 1 Row on Desktop, 2 Rows on Mobile */}
          <div className="relative mx-auto my-10 max-w-7xl">
            {/* Preload all images */}
            <div className="hidden">
              {[...unSDGDataTop, ...unSDGDataBottom].map((sdg, index) => (
                <Image
                  key={`preload-${index}`}
                  src={sdg.image}
                  alt={`UN SDG ${sdg.number}: ${sdg.title}`}
                  width={128}
                  height={128}
                  priority
                />
              ))}
            </div>

            {/* Desktop: Single row with all 6 SDGs */}
            <div className="hidden lg:block">
              <Marquee pauseOnHover className="[--duration:20s]">
                {[...unSDGDataTop, ...unSDGDataBottom].map((sdg, index) => (
                  <div key={`desktop-${index}`} className="w-32 h-32 mx-4 relative">
                    <Image
                      src={sdg.image}
                      alt={`UN SDG ${sdg.number}: ${sdg.title}`}
                      fill
                      className="object-cover rounded-lg"
                      priority
                    />
                  </div>
                ))}
              </Marquee>
            </div>

            {/* Mobile: 2 Rows */}
            <div className="lg:hidden">
              {/* Row 1 - Moving Right to Left (Top 3 icons) */}
              <Marquee pauseOnHover className="[--duration:20s] mb-4">
                {unSDGDataTop.map((sdg, index) => (
                  <div key={`row1-${index}`} className="w-32 h-32 mx-4 relative">
                    <Image
                      src={sdg.image}
                      alt={`UN SDG ${sdg.number}: ${sdg.title}`}
                      fill
                      className="object-cover rounded-lg"
                      priority
                    />
                  </div>
                ))}
              </Marquee>

              {/* Row 2 - Moving Left to Right (Bottom 3 icons) - Custom Reverse */}
              <div className="group flex overflow-hidden p-2 [--duration:20s] [--gap:1rem] [gap:var(--gap)]">
                {Array(4).fill(0).map((_, i) => (
                  <div
                    key={i}
                    className="flex shrink-0 justify-around [gap:var(--gap)] animate-marquee flex-row group-hover:[animation-play-state:paused]"
                    style={{ animationDirection: 'reverse' }}
                  >
                    {unSDGDataBottom.map((sdg, index) => (
                      <div key={`row2-${i}-${index}`} className="w-32 h-32 mx-4 relative">
                        <Image
                          src={sdg.image}
                          alt={`UN SDG ${sdg.number}: ${sdg.title}`}
                          fill
                          className="object-cover rounded-lg"
                          priority
                        />
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>

            {/* Fade Effects */}
            <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
          </div>
        </section>

        <Separator />

        {/* The Problem We're Solving Section */}
        <section className="py-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-6xl font-black mb-6 font-title leading-tight text-primary uppercase">The Problems</h2>
            <p className="text-lg max-w-3xl mx-auto text-foreground">
              The fashion world is full of contradictions. We have more than enough clothes to dress the next eight generations, yet fast fashion dominates.
            </p>
          </div>

          <div className="mb-12">
            <ProblemCards />
          </div>
          
          <div className="text-center mb-8">
            <h3 className="text-3xl md:text-4xl lg:text-6xl font-black mb-6 font-title leading-tight text-primary uppercase">Our Solutions</h3>
          </div>
          
          <div className="mb-2">
            <SolutionCards />
          </div>
        </section>

        {/* Our Story Section - Timeline */}
        <section className="py-20">
          <OurStoryTimeline />
        </section>
      </div>
      
      {/* Footer */}
      <Footer />
      </div>
    </>
  );
}


