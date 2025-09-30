"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Mail, Phone, MapPin, Clock, MessageSquare, Users, Briefcase, Instagram, Linkedin, Youtube } from "lucide-react";
import Footer from "@/components/essentials/Footer";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    category: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const [submitError, setSubmitError] = useState('');

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Reset previous messages
    setSubmitMessage('');
    setSubmitError('');
    
    // Validate required fields
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setSubmitError('Please fill in all required fields');
      return;
    }

    // Validate email format
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setSubmitError('Please enter a valid email address');
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitMessage(data.message);
        // Reset form on success
        setFormData({
          name: "",
          email: "",
          subject: "",
          category: "",
          message: ""
        });
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
      {/* Infinite white background block */}
      <div className="fixed inset-0 bg-white -z-[9999]"></div>
      <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="px-4 bg-muted/30 h-[300px] flex">
        <div className="max-w-4xl mx-auto text-center w-full">
          <h1 className="text-5xl md:text-4xl lg:text-6xl font-black mb-6 font-title leading-tight text-primary uppercase pt-20">
            Get in Touch
          </h1>
          <p className="text-xl max-w-2xl mx-auto text-foreground">
            Questions? Ideas? We&apos;d love to chat. Reach out to the team anytime.
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 py-12">
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
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="name"
                        type="text"
                        placeholder="Your full name"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        className="text-xm placeholder:text-xs"
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your.email@example.com"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        className="text-xs placeholder:text-xs"
                        required
                      />
                    </div>
                  </div>

                  {/* Mobile: Full width category select */}
                  <div className="space-y-2 md:hidden">
                    <Label htmlFor="category">Category</Label>
                    <Select value={formData.category} onValueChange={(value) => handleInputChange("category", value)}>
                      <SelectTrigger className="text-xs w-full">
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

                  {/* Desktop: Category and Subject side by side */}
                  <div className="hidden md:grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="category">Category</Label>
                      <Select value={formData.category} onValueChange={(value) => handleInputChange("category", value)}>
                        <SelectTrigger className="text-xs">
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
                        value={formData.subject}
                        onChange={(e) => handleInputChange("subject", e.target.value)}
                        className="text-xs placeholder:text-xs"
                        required
                      />
                    </div>
                  </div>

                  {/* Mobile: Subject field */}
                  <div className="space-y-2 md:hidden">
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      type="text"
                      placeholder="Brief subject of your message"
                      value={formData.subject}
                      onChange={(e) => handleInputChange("subject", e.target.value)}
                      className="text-xs placeholder:text-xs"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us more about your inquiry..."
                      rows={6}
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      className="text-xs placeholder:text-xs"
                      required
                    />
                  </div>

                  {/* Success and Error Messages */}
                  {submitMessage && (
                    <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                      <p className="text-sm text-green-800 font-medium">
                        {submitMessage}
                      </p>
                    </div>
                  )}
                  {submitError && (
                    <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                      <p className="text-sm text-red-800 font-medium">
                        {submitError}
                      </p>
                    </div>
                  )}

                  <Button 
                    type="submit" 
                    className="w-full bg-primary hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending Message..." : "Send Message"}
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
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <Mail className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-medium text-foreground">Email</p>
                    <a 
                      href="mailto:contact@doora.app"
                      className="text-sm hover:text-primary transition-colors underline-offset-4 hover:underline text-foreground"
                    >
                      contact@doora.app
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Phone className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-medium text-foreground">Phone</p>
                    <a 
                      href="tel:+96170998701"
                      className="text-sm hover:text-primary transition-colors underline-offset-4 hover:underline text-foreground"
                    >
                      +961 70 998 701
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-medium text-foreground">Address</p>
                    <p className="text-sm text-foreground">
                      Beirut, Lebanon
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Clock className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-medium text-foreground">Business Hours</p>
                    <p className="text-sm text-foreground">
                      Monday - Friday: 9:00 AM - 6:00 PM<br />
                      Saturday - Sunday: Closed
                    </p>
                  </div>
                </div>

              </CardContent>
            </Card>

            {/* Follow Us */}
            <Card>
              <CardHeader>
                <CardTitle>Follow Us</CardTitle>
                <CardDescription>
                  We&apos;re more fun on social media!
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-2">
                  <a 
                    href="https://www.instagram.com/doora.app?igsh=MWVxY2p2YjYxbHQwZg==" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-muted transition-colors"
                    aria-label="Follow us on Instagram"
                  >
                    <svg className="h-4 w-4 text-primary" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                    <span className="text-sm text-foreground">Instagram</span>
                  </a>
                  <a 
                    href="https://www.linkedin.com/company/dooraapp" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-muted transition-colors"
                    aria-label="Follow us on LinkedIn"
                  >
                    <svg className="h-4 w-4 text-primary" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                    <span className="text-sm text-foreground">LinkedIn</span>
                  </a>
                  <a 
                    href="https://www.youtube.com/@DOORA_app" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-muted transition-colors"
                    aria-label="Follow us on YouTube"
                  >
                    <svg className="h-4 w-4 text-primary" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                    </svg>
                    <span className="text-sm text-foreground">YouTube</span>
                  </a>
                  <a 
                    href="https://www.tiktok.com/@doora_app?_t=ZN-8xeBR8u0Lzy&_r=1" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-muted transition-colors"
                    aria-label="Follow us on TikTok"
                  >
                    <svg className="h-4 w-4 text-primary" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                    </svg>
                    <span className="text-sm text-foreground">TikTok</span>
                  </a>
                  <a 
                    href="https://www.facebook.com/share/17FGWP1kkH/?mibextid=wwXIfr" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-muted transition-colors"
                    aria-label="Follow us on Facebook"
                  >
                    <svg className="h-4 w-4 text-primary" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                    <span className="text-sm text-foreground">Facebook</span>
                  </a>
                  <a 
                    href="https://www.pinterest.com/doora_app/_created/" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-muted transition-colors"
                    aria-label="Follow us on Pinterest"
                  >
                    <svg className="h-4 w-4 text-primary" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 4.84 2.87 8.97 6.95 10.79-.1-.92-.2-2.34.04-3.34.22-.95 1.44-6.04 1.44-6.04s-.37-.74-.37-1.83c0-1.71.99-2.99 2.22-2.99 1.05 0 1.56.79 1.56 1.74 0 1.06-.67 2.65-1.01 4.12-.29 1.23.61 2.23 1.8 2.23 2.16 0 3.82-2.28 3.82-5.57 0-2.91-2.09-4.94-5.07-4.94-3.45 0-5.47 2.59-5.47 5.27 0 1.04.4 2.16.9 2.77.1.12.11.22.08.34-.09.37-.29 1.23-.33 1.4-.05.22-.18.27-.41.16-1.54-.72-2.5-2.97-2.5-4.78 0-3.9 2.83-7.49 8.18-7.49 4.29 0 7.63 3.05 7.63 7.13 0 4.26-2.68 7.69-6.41 7.69-1.25 0-2.42-.64-2.82-1.4l-.77 2.93c-.28 1.08-1.03 2.44-1.54 3.26 1.15.35 2.37.55 3.64.55 6.63 0 12-5.37 12-12S18.63 0 12 0z"/>
                    </svg>
                    <span className="text-sm text-foreground">Pinterest</span>
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Partnership Section */}
        <Separator className="my-16" />
        
        <section className="text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Interested in Partnering with Us?
          </h2>
          <p className="text-lg max-w-2xl mx-auto mb-8 text-foreground">
            We&apos;re always looking for like-minded businesses and organizations to collaborate with. 
            Whether you&apos;re a delivery service, payment provider, or sustainability advocate, 
            let&apos;s explore how we can work together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
          </div>
        </section>
      </div>
      
      {/* Footer */}
      <Footer />
      </div>
    </>
  );
}
