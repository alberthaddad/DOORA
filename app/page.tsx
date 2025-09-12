import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowRight, Recycle, Shield, Users, Leaf, Heart, Star, Target, Mail, Phone, MapPin, Clock, MessageSquare, Briefcase } from "lucide-react";


export default function Home() {
  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <Badge className="mb-6 py-2 px-4 rounded-full border-primary/20 text-primary/90 hover:text-primary bg-primary/10 hover:bg-primary/20">
            📍 Now launching in Lebanon
          </Badge>
          
          <div className="font-title text-6xl md:text-8xl font-black text-primary mb-2 tracking-wider">
            DOORA
          </div>
          <div className="font-sans text-sm md:text-base font-bold text-primary mb-6 tracking-wide">
            FROM CLOSET TO CLOSET
          </div>
          
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
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">100%</div>
              <div className="text-sm text-muted-foreground">Sustainable</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">24/7</div>
              <div className="text-sm text-muted-foreground">Support</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">Safe</div>
              <div className="text-sm text-muted-foreground">Payments</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">Free</div>
              <div className="text-sm text-muted-foreground">To Join</div>
            </div>
          </div>

          {/* Coming Soon Section */}
          <div className="mt-16 pt-16 border-t border-border/20">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-4 font-accent">
                WE ARE LAUNCHING SOON
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Be the first to know when Doora goes live. Join our exclusive waitlist and get early access to the circular fashion revolution.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto">
                <input 
                  type="email" 
                  placeholder="Enter your email address" 
                  className="flex-1 px-6 py-4 border border-border rounded-full focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground text-base"
                />
                <Button className="bg-primary hover:bg-primary/90 px-8 py-4 rounded-full text-base font-semibold whitespace-nowrap">
                  Notify Me
                </Button>
              </div>
              
              <p className="text-sm text-muted-foreground mt-4">
                Join 5,000+ people already on our waitlist. No spam, just updates.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4">
        {/* Featured Categories */}
        <section className="py-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4 font-accent">
              Shop by Category
            </h2>
            <p className="text-lg text-muted-foreground">
              Find unique pieces across all fashion categories
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="group hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">👗</span>
                </div>
                <h3 className="font-semibold text-foreground mb-2">Women&apos;s Fashion</h3>
                <p className="text-sm text-muted-foreground">Dresses, tops, bottoms, and more</p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">👔</span>
                </div>
                <h3 className="font-semibold text-foreground mb-2">Men&apos;s Fashion</h3>
                <p className="text-sm text-muted-foreground">Shirts, pants, jackets, and accessories</p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">👜</span>
                </div>
                <h3 className="font-semibold text-foreground mb-2">Accessories</h3>
                <p className="text-sm text-muted-foreground">Bags, jewelry, shoes, and more</p>
              </CardContent>
            </Card>
          </div>
        </section>

        <Separator />

        {/* Why Choose Doora */}
        <section className="py-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-6xl font-bold mb-6 font-accent leading-tight">
              <span className="text-primary">Meet Doora.</span>
            </h2>
            <h3 className="text-xl md:text-3xl text-muted-foreground max-w-4xl mx-auto mb-6 leading-relaxed">
              Your sustainable fashion companion.
            </h3>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Designed for both individuals and small businesses, Doora offer trusted payments, eco-conscious delivery options, advanced filtering tools and a transparent review system, making it easier than ever to shop consciously.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Recycle className="h-6 w-6 text-primary" />
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

          {/* Testimonial Section - Inspired by Sellou */}
          <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-3xl p-8 md:p-12 text-center mt-16">
            <div className="max-w-3xl mx-auto">
              <p className="text-xl md:text-2xl font-medium text-foreground mb-6 leading-relaxed">
                &ldquo;Finally, an alternative to fast fashion! Doora helps me find unique pieces while shopping sustainably and guilt-free.&rdquo;
              </p>
              <p className="text-lg text-muted-foreground mb-6">Layla K. • Fashion Enthusiast</p>
              
              <div className="flex justify-center items-center gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-6 w-6 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              
              <div className="flex flex-col sm:flex-row justify-center items-center gap-6 text-base font-medium">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-primary rounded-full"></div>
                  4.9/5 Rating
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-secondary rounded-full"></div>
                  1.2K+ Reviews
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-primary rounded-full"></div>
                  Verified Buyers
                </div>
              </div>
            </div>
          </div>
        </section>

        <Separator />

        {/* How It Works */}
        <section className="py-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-6xl font-bold mb-6 font-accent leading-tight">
              <span className="text-foreground">One tap. Unlimited</span>
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
              <h3 className="text-xl font-semibold text-foreground mb-4">Discover & Connect</h3>
              <p className="text-muted-foreground">
                Connect with unique fashion pieces from verified sellers across the region
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6 text-white font-bold text-2xl">
                2
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Chat & Buy</h3>
              <p className="text-muted-foreground">
                Message sellers, negotiate prices, and complete secure transactions with our built-in tools
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6 text-white font-bold text-2xl">
                3
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Receive & Enjoy</h3>
              <p className="text-muted-foreground">
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
              <h3 className="text-2xl md:text-4xl font-bold text-foreground mb-4">
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
              <h3 className="text-2xl md:text-4xl font-bold text-foreground mb-4">
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
            <h3 className="text-xl md:text-2xl font-bold text-foreground mb-6">
              WE ALIGN WITH 6 OF THE UN&apos;S SUSTAINABLE DEVELOPMENT GOALS
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

        {/* CTA Section */}
        <section className="py-20 text-center bg-muted/30 rounded-2xl">
          <div className="max-w-2xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-foreground mb-4 font-accent">
              Ready to Join the Movement?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Be part of the circular fashion revolution. Join our community and be the first to know when we launch.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/register">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8">
                  Join the Waitlist
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/about">
                <Button size="lg" variant="outline" className="text-lg px-8">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <Separator />

        {/* Newsletter Section - The Doora Scoop */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-6xl font-bold mb-6 font-accent leading-tight">
              <span className="text-foreground">The Doora</span>
              <br />
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Scoop.</span>
            </h2>
            <h3 className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Sign up today to receive a blend of inspiration, insider stories, seller tips and 
              sustainable discoveries directly to your inbox.
            </h3>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto mb-6">
              <input 
                type="email" 
                placeholder="name@email.com" 
                className="flex-1 px-6 py-4 border border-border rounded-full focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground text-lg"
              />
              <Button className="bg-primary hover:bg-primary/90 px-8 py-4 rounded-full text-lg font-semibold">
                Subscribe
              </Button>
            </div>
            
            <p className="text-base text-muted-foreground">
              Join 5,000+ fashion lovers already in the know. Unsubscribe anytime.
            </p>
          </div>
        </section>

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
                      <p className="font-medium text-foreground">Email</p>
                      <p className="text-sm text-muted-foreground">hello@doora.com</p>
                      <p className="text-sm text-muted-foreground">support@doora.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Phone className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <p className="font-medium text-foreground">Phone</p>
                      <p className="text-sm text-muted-foreground">+961 XX XXX XXX</p>
                      <p className="text-xs text-muted-foreground">Available 9 AM - 6 PM (GMT+2)</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <p className="font-medium text-foreground">Address</p>
                      <p className="text-sm text-muted-foreground">
                        Beirut, Lebanon<br />
                        (Exact address coming soon)
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Clock className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <p className="font-medium text-foreground">Business Hours</p>
                      <p className="text-sm text-muted-foreground">
                        Monday - Friday: 9:00 AM - 6:00 PM<br />
                        Saturday: 10:00 AM - 4:00 PM<br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Links */}
              <Card>
                <CardHeader>
                  <CardTitle>Quick Links</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center gap-3">
                    <MessageSquare className="h-4 w-4 text-primary" />
                    <span className="text-sm text-muted-foreground">
                      Live Chat Support (Coming Soon)
                    </span>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Users className="h-4 w-4 text-primary" />
                    <span className="text-sm text-muted-foreground">
                      Community Forum (Coming Soon)
                    </span>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Briefcase className="h-4 w-4 text-primary" />
                    <span className="text-sm text-muted-foreground">
                      Business Partnerships
                    </span>
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
