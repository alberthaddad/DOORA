import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Recycle, Globe, Users, Heart, Leaf, Target } from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-6xl font-bold text-primary mb-6 tracking-wider">
            DOORA
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            From Closet to Closet
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Inspired by the Arabic word for &quot;circle&quot;, Doora reflects our core mission 
            to drive circular fashion and transform the way we buy and sell in the Middle East.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/store">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Start Shopping
              </Button>
            </Link>
            <Link href="/register">
              <Button size="lg" variant="outline">
                Join the Movement
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4">
        {/* Mission Section */}
        <section className="py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Our Mission</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Making secondhand feel premium and NOT second best! We&apos;re on a mission to make 
              circular fashion the norm in the Middle East, one piece at a time.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-4">
                The Problem We&apos;re Solving
              </h3>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Despite being one of the world&apos;s fastest-growing fashion markets, the Middle East 
                  remains underserved when it comes to sustainable fashion options.
                </p>
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

        <Separator />

        {/* Core Values Section */}
        <section className="py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Core Values</h2>
            <p className="text-lg text-muted-foreground">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Leaf className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <CardTitle>01. Sustainability</CardTitle>
                    <Badge variant="secondary" className="mt-1">Core Value</Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Fight fast fashion by promoting a circular but affordable approach that gives 
                  clothes a longer life. We&apos;re committed to reducing environmental impact while 
                  making sustainable fashion accessible to everyone.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Target className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <CardTitle>02. Accessibility</CardTitle>
                    <Badge variant="secondary" className="mt-1">Core Value</Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  All styles, all sizes, and most importantly, all budgets. Whether you&apos;re a thrifter, 
                  a vintage lover, or a luxury shopper, you will definitely find what you&apos;re 
                  looking for on our platform.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        <Separator />

        {/* Regional Expansion Section */}
        <section className="py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Regional Expansion</h2>
            <p className="text-lg text-muted-foreground">
              Currently launching in Lebanon, expanding across the region soon
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span className="text-2xl">🇱🇧</span>
                  Lebanon
                </CardTitle>
                <CardDescription>Current Launch Market</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Our home base and first market. Testing and refining our platform 
                  with Lebanese fashion enthusiasts.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span className="text-2xl">🌍</span>
                  MENA Region
                </CardTitle>
                <CardDescription>Expansion Phase 1</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Expanding to key markets across the Middle East and North Africa, 
                  adapting to local preferences and regulations.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span className="text-2xl">🚀</span>
                  Beyond
                </CardTitle>
                <CardDescription>Future Vision</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Our long-term vision includes expanding to other emerging markets 
                  where sustainable fashion can make a real impact.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        <Separator />

        {/* Platform Features Section */}
        <section className="py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">What Makes Us Different</h2>
            <p className="text-lg text-muted-foreground">
              A comprehensive platform designed for the modern secondhand fashion market
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="p-4 bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔍</span>
              </div>
              <h3 className="font-semibold text-foreground mb-2">Smart Search</h3>
              <p className="text-sm text-muted-foreground">
                Advanced filters and AI-powered recommendations help you find exactly what you&apos;re looking for
              </p>
            </div>

            <div className="text-center">
              <div className="p-4 bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💬</span>
              </div>
              <h3 className="font-semibold text-foreground mb-2">Integrated Chat</h3>
              <p className="text-sm text-muted-foreground">
                Seamless communication with built-in negotiation tools and transaction management
              </p>
            </div>

            <div className="text-center">
              <div className="p-4 bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔒</span>
              </div>
              <h3 className="font-semibold text-foreground mb-2">Secure Payments</h3>
              <p className="text-sm text-muted-foreground">
                Escrow system and multiple payment options ensure safe transactions for everyone
              </p>
            </div>

            <div className="text-center">
              <div className="p-4 bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🚚</span>
              </div>
              <h3 className="font-semibold text-foreground mb-2">Smart Delivery</h3>
              <p className="text-sm text-muted-foreground">
                Integrated with local delivery partners for fast and sustainable shipping options
              </p>
            </div>

            <div className="text-center">
              <div className="p-4 bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⭐</span>
              </div>
              <h3 className="font-semibold text-foreground mb-2">Trust System</h3>
              <p className="text-sm text-muted-foreground">
                Comprehensive review and verification system builds trust in our community
              </p>
            </div>

            <div className="text-center">
              <div className="p-4 bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📱</span>
              </div>
              <h3 className="font-semibold text-foreground mb-2">Multi-Platform</h3>
              <p className="text-sm text-muted-foreground">
                Available on web, iOS, and Android with seamless synchronization across devices
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Ready to Join the Movement?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Be part of the circular fashion revolution in the Middle East. 
              Start buying and selling sustainably today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/register">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  Create Your Account
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline">
                  Get in Touch
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
