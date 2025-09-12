"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
<<<<<<< HEAD
import { ArrowRight, Recycle, Shield, Users, Leaf, Heart, Star, Globe, Target, Mail, Phone, MapPin, Clock, MessageSquare, Briefcase } from "lucide-react";
import { useEffect, useRef } from "react";
import Iphone15Pro from "@/components/magicui/iphone-15-pro";
import CircularText from "@/components/ui/CircularText";
import TextType from "@/components/ui/TextType";
=======
import { ArrowRight, Recycle, Shield, Users, Leaf, Heart, Star, Target, Mail, Phone, MapPin, Clock, MessageSquare, Briefcase } from "lucide-react";
>>>>>>> 4d474027643f0cc736cf530b5c1b6538f8ab194c


export default function Home() {
  const headlineRef = useRef<HTMLDivElement>(null);
  const solutionRef = useRef<HTMLParagraphElement>(null);
  const descriptionRef = useRef<HTMLHeadingElement>(null);

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

    if (headlineRef.current) {
      observer.observe(headlineRef.current);
    }
    if (solutionRef.current) {
      observer.observe(solutionRef.current);
    }
    if (descriptionRef.current) {
      observer.observe(descriptionRef.current);
    }

    return () => {
      if (headlineRef.current) {
        observer.unobserve(headlineRef.current);
      }
      if (solutionRef.current) {
        observer.unobserve(solutionRef.current);
      }
      if (descriptionRef.current) {
        observer.unobserve(descriptionRef.current);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Hero Section */}
      <section className="pt-20 pb-32 px-4 min-h-screen flex items-center">
        <div className="max-w-6xl mx-auto text-center w-full">
          
          <div className="mb-8 mt-8">
            <img 
              src="/images/doora_logo_light.png" 
              alt="DOORA" 
              className="max-h-20 md:max-h-32 w-auto mx-auto dark:hidden"
              style={{maxHeight: '250px'}}
            />
            <img 
              src="/images/doora_logo_dark.png" 
              alt="DOORA" 
              className="max-h-20 md:max-h-32 w-auto mx-auto hidden dark:block"
              style={{maxHeight: '250px'}}
            />
          </div>
          
          <div className="font-accent text-sm md:text-base text-primary dark:text-primary mb-12 tracking-wide uppercase">
            FROM CLOSET TO CLOSET
          </div>
          
<<<<<<< HEAD
          {/* Circular Text */}
          <div className="mb-12">
            <CircularText
              text="CLOSET → CLOSET → "
              onHover="speedUp"
              spinDuration={20}
              className="mx-auto"
            />
=======
          <h1 className="text-4xl md:text-7xl font-bold mb-8 font-accent leading-tight">
            <span className="text-primary">Fast Fashion</span>
            <br />
            <span className="text-foreground">Isn&apos;t Your</span>
            <br />
            <span className="bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">Only Option.</span>
          </h1>

          <h2 className="text-xl md:text-3xl text-muted-foreground max-w-4xl mx-auto mb-4 leading-relaxed">
            We&apos;re here to help you clear your closet, fill your wallet, and shop for unique pieces that feel like you. (Without the guilt)
          </h2>
          
          <h2 className="text-xl md:text-3xl font-semibold max-w-4xl mx-auto mb-8 leading-relaxed">
            <span className="text-primary">Join the circular fashion movement in the Middle East.</span>
          </h2>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link href="/about">
              <Button className="bg-primary hover:bg-primary/90 text-lg px-8">
                Learn More
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
>>>>>>> 4d474027643f0cc736cf530b5c1b6538f8ab194c
          </div>
          
          {/* Coming Soon Section */}
          <div className="mb-20">
            <h2 className="text-xl md:text-2xl font-black text-primary dark:text-primary mb-4 font-title uppercase">
              WE ARE LAUNCHING SOON
            </h2>
            
            <div className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto mb-3">
              <div className="flex-1 relative">
                <input 
                  type="email" 
                  className="w-full px-4 py-3 border border-border rounded-full focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground dark:text-foreground text-sm"
                />
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
              </div>
              <Button className="bg-primary hover:bg-primary/90 px-6 py-3 rounded-full text-sm font-semibold whitespace-nowrap">
                Notify Me
              </Button>
            </div>
            
            <p className="text-xs text-muted-foreground dark:text-muted-foreground ">
              No spam, just updates.
            </p>
          </div>
          
          <div className="pt-16 mb-8">
            <h1 
              ref={headlineRef}
              className="text-3xl md:text-4xl font-black mb-6 font-title leading-tight text-primary dark:text-primary uppercase tracking-normal animate-fade-in-up"
            >
              Fast Fashion Isn't
              <br />
              Your Only Option
            </h1>
            
            <p 
              ref={solutionRef}
              className="text-xl md:text-2xl font-semibold text-primary dark:text-primary mb-8 animate-fade-in-up"
            >
              Second hand is the solution.
            </p>
          </div>

          <h2 
            ref={descriptionRef}
            className="text-lg md:text-xl text-muted-foreground dark:text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed animate-fade-in-up"
          >
            Whether you're clearing out your closet or browsing for unique finds, our fashion resale platform brings buyers and sellers togther in one simple, secure space.
          </h2>
          
          {/* iPhone 15 Component */}
          <div className="flex justify-center mt-12 mb-8">
            <div className="relative">
              <Iphone15Pro 
                className="w-80 h-auto"
                src="/images/Homepage.png"
              />
            </div>
          </div>

        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4">

        {/* Why Choose Doora */}
        <section className="py-8">
          <div className="text-center mb-16">
            {/* Feature Badges */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary dark:text-primary">Green</div>
                <div className="text-sm text-muted-foreground dark:text-muted-foreground">Delivery</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary dark:text-primary">Free</div>
                <div className="text-sm text-muted-foreground dark:text-muted-foreground">To Sell</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary dark:text-primary">Safe</div>
                <div className="text-sm text-muted-foreground dark:text-muted-foreground">Payments</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary dark:text-primary">Real</div>
                <div className="text-sm text-muted-foreground dark:text-muted-foreground">Reviews</div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Recycle className="h-6 w-6 text-primary dark:text-primary" />
                </div>
                <CardTitle>Circular Fashion</CardTitle>
                <CardDescription>
                  Every purchase extends the life of clothing and reduces fashion waste
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Secure & Trusted</CardTitle>
                <CardDescription>
                  Verified sellers, secure payments, and buyer protection guarantee
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Local Community</CardTitle>
                <CardDescription>
                  Built for the Middle East with local payment methods and delivery
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Leaf className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Sustainability First</CardTitle>
                <CardDescription>
                  Track your environmental impact and contribute to a greener future
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Heart className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Premium Experience</CardTitle>
                <CardDescription>
                  Making secondhand feel premium with quality curation and service
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Star className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Smart Features</CardTitle>
                <CardDescription>
                  AI-powered search, price tracking, and personalized recommendations
                </CardDescription>
              </CardHeader>
            </Card>
          </div>

        </section>

        <Separator />

        {/* How It Works */}
        <section className="py-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-6xl font-bold mb-6 font-accent leading-tight">
              <span className="text-foreground dark:text-foreground">One tap. Unlimited</span>
              <br />
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">fashion potential.</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Built with today&apos;s fashion lovers in mind. No complicated processes — just you, your style, 
              and a quick tap that connects you to sustainable fashion. Doora handles the rest.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6 text-white font-bold text-2xl">
                1
              </div>
              <h3 className="text-xl font-semibold text-foreground dark:text-foreground mb-4">Discover & Connect</h3>
              <p className="text-muted-foreground dark:text-muted-foreground">
                Connect with unique fashion pieces from verified sellers across the region
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6 text-white font-bold text-2xl">
                2
              </div>
              <h3 className="text-xl font-semibold text-foreground dark:text-foreground mb-4">Chat & Buy</h3>
              <p className="text-muted-foreground dark:text-muted-foreground">
                Message sellers, negotiate prices, and complete secure transactions with our built-in tools
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6 text-white font-bold text-2xl">
                3
              </div>
              <h3 className="text-xl font-semibold text-foreground dark:text-foreground mb-4">Receive & Enjoy</h3>
              <p className="text-muted-foreground dark:text-muted-foreground">
                Get your items delivered safely and enjoy your new-to-you fashion finds
              </p>
            </div>
          </div>
        </section>

        <Separator />

        {/* About Section */}
        <section id="about" className="py-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-6xl font-bold mb-6 font-accent leading-tight">
              <span className="text-primary">About Doora</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Inspired by the Arabic word for &quot;circle&quot;, Doora reflects our core mission 
              to drive circular fashion and transform the way we buy and sell in the Middle East.
            </p>
          </div>

          {/* Our Story Section */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h3 className="text-2xl md:text-4xl font-bold text-foreground dark:text-foreground mb-4">
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Our Story</span>
              </h3>
            </div>

            <div className="max-w-4xl mx-auto space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                At 17, I launched two small businesses focused on upcycling and thrifting, driven by the belief that clothes deserve a second life. Later, I moved to Paris to pursue my dream of working in the fashion industry, joining leading fashion groups to learn how the industry truly operates.
              </p>
              <p>
                But inside these glossy offices, I quickly realized that sustainability was never more than a marketing line. Every strategy was designed to fuel overconsumption, pushing customers to buy more, faster, with little thought for the impact it has.
              </p>
<<<<<<< HEAD
              <p className="font-semibold text-foreground dark:text-foreground">
                I didn't want to be a part of that anymore.
=======
              <p className="font-semibold text-foreground">
                I didn&apos;t want to be a part of that anymore.
>>>>>>> 4d474027643f0cc736cf530b5c1b6538f8ab194c
              </p>
              <p>
                At the same time, I saw the need and the massive opportunity to build something different for the Middle East. A platform that gives everyone a chance to have fun with fashion, no matter their budget.
              </p>
<<<<<<< HEAD
              <p className="font-semibold text-foreground dark:text-foreground">
                That's why DOORA exists today.
=======
              <p className="font-semibold text-foreground">
                That&apos;s why DOORA exists today.
>>>>>>> 4d474027643f0cc736cf530b5c1b6538f8ab194c
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
              <h3 className="text-2xl md:text-4xl font-bold text-foreground dark:text-foreground mb-4">
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Our Values</span>
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

          {/* UN SDGs Section */}
          <div className="text-center">
<<<<<<< HEAD
            <h3 className="text-xl md:text-2xl font-bold text-foreground dark:text-foreground mb-6">
              WE ALIGN WITH 6 OF THE UN'S SUSTAINABLE DEVELOPMENT GOALS
=======
            <h3 className="text-xl md:text-2xl font-bold text-foreground mb-6">
              WE ALIGN WITH 6 OF THE UN&apos;S SUSTAINABLE DEVELOPMENT GOALS
>>>>>>> 4d474027643f0cc736cf530b5c1b6538f8ab194c
            </h3>
            <div className="flex flex-wrap justify-center gap-2 max-w-2xl mx-auto">
              <Badge variant="outline" className="text-sm">No Poverty</Badge>
              <Badge variant="outline" className="text-sm">Gender Equality</Badge>
              <Badge variant="outline" className="text-sm">Decent Work & Economic Growth</Badge>
              <Badge variant="outline" className="text-sm">Reduced Inequalities</Badge>
              <Badge variant="outline" className="text-sm">Responsible Consumption</Badge>
              <Badge variant="outline" className="text-sm">Climate Action</Badge>
            </div>
          </div>
        </section>

        <Separator />


        <Separator />


        <Separator />

        {/* Contact Section */}
        <section id="contact" className="py-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-6xl font-bold mb-6 font-accent leading-tight">
              <span className="text-primary">Get in Touch</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Have questions about Doora? Want to partner with us? We&apos;d love to hear from you. 
              Our team is here to help you make the most of circular fashion.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>Send us a Message</CardTitle>
                  <CardDescription>
                    Fill out the form below and we&apos;ll get back to you as soon as possible.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name</Label>
                        <Input
                          id="name"
                          type="text"
                          placeholder="Your full name"
                          required
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="your.email@example.com"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="category">Category</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a category" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="general">General Inquiry</SelectItem>
                          <SelectItem value="support">Customer Support</SelectItem>
                          <SelectItem value="business">Business Partnership</SelectItem>
                          <SelectItem value="press">Press & Media</SelectItem>
                          <SelectItem value="careers">Careers</SelectItem>
                          <SelectItem value="feedback">Feedback</SelectItem>
                          <SelectItem value="technical">Technical Issue</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Input
                        id="subject"
                        type="text"
                        placeholder="Brief subject of your message"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        placeholder="Tell us more about your inquiry..."
                        rows={6}
                        required
                      />
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full bg-primary hover:bg-primary/90"
                    >
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              {/* Contact Details */}
              <Card>
                <CardHeader>
                  <CardTitle>Contact Information</CardTitle>
                  <CardDescription>
                    Reach out to us through any of these channels
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Mail className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <p className="font-medium text-foreground dark:text-foreground">Email</p>
                      <p className="text-sm text-muted-foreground dark:text-muted-foreground">hello@doora.com</p>
                      <p className="text-sm text-muted-foreground dark:text-muted-foreground">support@doora.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Phone className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <p className="font-medium text-foreground dark:text-foreground">Phone</p>
                      <p className="text-sm text-muted-foreground dark:text-muted-foreground">+961 XX XXX XXX</p>
                      <p className="text-xs text-muted-foreground dark:text-muted-foreground">Available 9 AM - 6 PM (GMT+2)</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <p className="font-medium text-foreground dark:text-foreground">Address</p>
                      <p className="text-sm text-muted-foreground dark:text-muted-foreground">
                        Beirut, Lebanon<br />
                        (Exact address coming soon)
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Clock className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <p className="font-medium text-foreground dark:text-foreground">Business Hours</p>
                      <p className="text-sm text-muted-foreground dark:text-muted-foreground">
                        Monday - Friday: 9:00 AM - 6:00 PM<br />
                        Saturday: 10:00 AM - 4:00 PM<br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
