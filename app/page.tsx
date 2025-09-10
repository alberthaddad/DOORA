import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ArrowRight, Recycle, Shield, Users, Leaf, Heart, Star } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="max-w-6xl mx-auto text-center">
          <Badge className="mb-6 py-2 px-4 rounded-full border-primary/20 text-primary/90 hover:text-primary bg-primary/10 hover:bg-primary/20">
            📍 Now launching in Lebanon
          </Badge>
          
          <div className="font-title text-6xl md:text-8xl font-black text-primary mb-6 tracking-wider">
            DOORA
          </div>
          
                <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6 font-accent leading-tight">
                  From Closet to Closet.
                  <br />
                  <span className="text-foreground">Making secondhand</span>
                  <br />
                  <span className="text-secondary">feel premium.</span>
                </h1>

                <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8">
                  Shop consciously and join the circular fashion movement in the Middle East. 
                  <strong className="text-primary"> NOT second best</strong> — just better for everyone.
                </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link href="/store">
              <Button className="bg-primary hover:bg-primary/90 text-lg px-8">
                Start Shopping
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/about">
              <Button variant="outline" className="text-lg px-8">
                Learn More
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
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-accent leading-tight">
              Meet Doora.
              <br />
              <span className="text-2xl md:text-3xl text-muted-foreground font-normal">
                Your sustainable fashion companion.
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              No team, no tech headaches — just you, your style, and a community that gets it. 
              Doora is made for fashion lovers who move fast, buy smart, and keep things sustainable.
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
          <div className="bg-muted/30 rounded-2xl p-8 text-center mt-16">
            <div className="max-w-2xl mx-auto">
              <p className="text-lg md:text-xl text-foreground mb-4 italic">
                &ldquo;The best way to find unique fashion pieces while supporting sustainable shopping. Doora makes secondhand feel premium!&rdquo;
              </p>
              <p className="text-muted-foreground mb-4">Layla K. • Fashion Enthusiast</p>
              
              <div className="flex justify-center items-center gap-2 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              
              <div className="flex justify-center items-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  4.9/5 Rating
                </span>
                <span className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-secondary rounded-full"></div>
                  1.2K+ Reviews
                </span>
                <span className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  Verified Buyers
                </span>
              </div>
            </div>
          </div>
        </section>

        <Separator />

        {/* How It Works */}
        <section className="py-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-accent leading-tight">
              One tap. Unlimited
              <br />
              <span className="text-primary">fashion potential.</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Built with today&apos;s fashion lovers in mind. No complicated processes — just you, your style, 
              and a quick tap that connects you to sustainable fashion. Doora handles the rest.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6 text-white font-bold text-2xl">
                1
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Browse & Discover</h3>
              <p className="text-muted-foreground">
                Explore thousands of unique fashion pieces from verified sellers across the region
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

        {/* Newsletter Section - Inspired by Sellou */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-accent leading-tight">
              The Doora
              <br />
              <span className="text-primary">Scoop.</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Sign up today to receive a blend of inspiration, insider stories, seller tips and 
              sustainable discoveries directly to your inbox.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="name@email.com" 
                className="flex-1 px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground"
              />
              <Button className="bg-primary hover:bg-primary/90 px-6">
                Subscribe
              </Button>
            </div>
            
            <p className="text-sm text-muted-foreground mt-4">
              Join 5,000+ fashion lovers already in the know. Unsubscribe anytime.
            </p>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 text-center bg-muted/30 rounded-2xl">
          <div className="max-w-2xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-foreground mb-4 font-accent">
              Ready to Join the Movement?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Be part of the circular fashion revolution. Start buying and selling sustainably today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/register">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8">
                  Get Started Free
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/store">
                <Button size="lg" variant="outline" className="text-lg px-8">
                  Browse Items
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
