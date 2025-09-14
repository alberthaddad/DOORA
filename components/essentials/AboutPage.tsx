"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Recycle, Globe, Users, Heart, Leaf, Target } from "lucide-react";
import Link from "next/link";
import { Marquee } from "@/components/magicui/marquee";

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
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Separator className="mb-8" />
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Inspired by the Arabic word for &quot;circle&quot;, Doora reflects our core mission 
            to drive circular fashion and transform the way we buy and sell in the Middle East.
          </p>
          <Separator className="mt-8" />
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4">
        {/* About Doora Section */}
        <section className="py-20">

          {/* Our Story Section */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl lg:text-6xl font-black mb-6 font-title leading-tight text-primary uppercase">
                Our Story
              </h3>
            </div>

            <div className="max-w-4xl lg:max-w-6xl mx-auto space-y-6 text-lg lg:text-xl text-muted-foreground leading-relaxed">
              <p>
                At 17, I launched two small businesses focused on upcycling and thrifting, driven by the belief that clothes deserve a second life. Later, I moved to Paris to pursue my dream of working in the fashion industry, joining leading fashion groups to learn how the industry truly operates.
              </p>
              <p>
                But inside these glossy offices, I quickly realized that sustainability was never more than a marketing line. Every strategy was designed to fuel overconsumption, pushing customers to buy more, faster, with little thought for the impact it has.
              </p>
              <p className="font-semibold text-foreground">
                I didn&apos;t want to be a part of that anymore.
              </p>
              <p>
                At the same time, I saw the need and the massive opportunity to build something different for the Middle East. A platform that gives everyone a chance to have fun with fashion, no matter their budget.
              </p>
              <p className="font-semibold text-foreground">
                That&apos;s why DOORA exists today.
              </p>
              <p>
                I know sustainability isn&apos;t everyone&apos;s top priority, but at DOORA, it&apos;s at the heart of everything we do.
              </p>
              <p>
                If building this platform means people across the region can earn extra income, declutter their closets, and contribute to a more conscious way of consuming fashion, then that&apos;s exactly what I&apos;m here to do.
              </p>
              <div className="text-center mt-8">
                <p className="text-xl font-semibold text-primary italic">– Andrea Tegho –</p>
                <p className="text-sm text-muted-foreground mt-2">Founder & CEO</p>
              </div>
            </div>
          </div>

          {/* Our Values Section */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl lg:text-6xl font-black mb-6 font-title leading-tight text-primary uppercase">
                Our Values
              </h3>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <Card className="border-l-4 border-l-primary">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Target className="h-8 w-8 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">ACCESSIBILITY</CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    DOORA is for everyone: all styles, all sizes, and most importantly, all budgets. Whether you&apos;re a thrifter, a vintage lover, or a luxury shopper, you will definitely find what you&apos;re looking for. Our user friendly app and web platform simplify buying and selling, even for those less tech-savvy.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-secondary">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-secondary/10 rounded-lg">
                      <Leaf className="h-8 w-8 text-secondary" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">SUSTAINABILITY</CardTitle>
                      <Badge variant="secondary" className="mt-1">obviously</Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    We fight fast fashion by promoting a circular approach that gives clothes a longer life. We make conscious shopping easy and affordable, helping build a community that values sustainable fashion.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* UN SDGs Marquee Section */}
          <div className="text-center mb-12" id="sustainability">
            <h3 className="text-3xl md:text-4xl lg:text-6xl font-black mb-6 font-title leading-tight text-primary uppercase">
              WE ALIGN WITH 6 OF THE UN&apos;S SUSTAINABLE DEVELOPMENT GOALS
            </h3>
          </div>

          {/* UN SDG Images Marquee - 2 Rows */}
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

            {/* Fade Effects */}
            <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
          </div>
        </section>

        <Separator />

        {/* The Problem We're Solving Section */}
        <section className="py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-6xl font-black mb-6 font-title leading-tight text-primary uppercase">The Problem We&apos;re Solving</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Despite being one of the world&apos;s fastest-growing fashion markets, the Middle East 
              remains underserved when it comes to sustainable fashion options.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4 text-muted-foreground">
              <p>
                Thousands of informal sellers on Instagram struggle with processes, visibility, 
                and lack of business features, while buyers struggle with trust, filtering, 
                and shopping experience.
              </p>
              <p>
                Fast fashion companies continue to pollute the environment, while people turn 
                to them primarily due to price sensitivity.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <Card className="text-center">
                <CardContent className="pt-6">
                  <Recycle className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h4 className="font-semibold text-foreground">Circular Fashion</h4>
                  <p className="text-sm text-muted-foreground mt-2">
                    Extending the life of fashion items
                  </p>
                </CardContent>
              </Card>
              
              <Card className="text-center">
                <CardContent className="pt-6">
                  <Globe className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h4 className="font-semibold text-foreground">Regional Focus</h4>
                  <p className="text-sm text-muted-foreground mt-2">
                    Built for the MENA market
                  </p>
                </CardContent>
              </Card>
              
              <Card className="text-center">
                <CardContent className="pt-6">
                  <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h4 className="font-semibold text-foreground">Community</h4>
                  <p className="text-sm text-muted-foreground mt-2">
                    Connecting fashion lovers
                  </p>
                </CardContent>
              </Card>
              
              <Card className="text-center">
                <CardContent className="pt-6">
                  <Heart className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h4 className="font-semibold text-foreground">Trust</h4>
                  <p className="text-sm text-muted-foreground mt-2">
                    Safe and secure platform
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
