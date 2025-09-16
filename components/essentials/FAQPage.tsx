"use client";

import Link from "next/link";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

export default function FAQPage() {
  return (
    <>
      <style jsx global>{`
        .faq-text-color {
          color: oklch(0.2354 0.0041 84.59) !important;
        }
        .faq-accordion-item {
          border: 1px solid rgba(var(--border), 0.3);
          border-radius: 0.5rem;
          background: rgba(var(--background), 0.5);
          transition: all 0.2s ease;
          margin-bottom: 0.5rem;
        }
        .faq-accordion-item:hover {
          background: rgba(var(--background), 0.8);
        }
        .faq-accordion-trigger {
          padding: 0.75rem 1rem;
          text-align: left;
          transition: all 0.2s ease;
        }
        .faq-accordion-trigger:hover {
          text-decoration: none;
        }
        .faq-accordion-trigger[data-state="open"] {
          background: rgba(var(--primary), 0.05);
          color: rgb(var(--primary));
        }
        .faq-accordion-content {
          padding: 0 1rem 0.75rem 1rem;
        }
      `}</style>
      <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl lg:text-6xl font-black font-title leading-tight text-primary uppercase mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed faq-text-color">
            Find answers to all of your questions about DOORA.
          </p>
        </div>
      </section>

      {/* Navigation Section */}
      <section className="py-12 px-4 bg-gradient-to-b from-muted/20 to-background border-b border-border/50">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-wrap gap-2 justify-center">
            <Button
              variant="outline"
              size="sm"
              onClick={() => document.getElementById('general')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-sm font-medium border-2 border-primary/20 hover:border-primary/40 hover:bg-primary/5 transition-all duration-200 rounded-lg px-4 py-2"
            >
              GENERAL
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => document.getElementById('buying')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-sm font-medium border-2 border-primary/20 hover:border-primary/40 hover:bg-primary/5 transition-all duration-200 rounded-lg px-4 py-2"
            >
              BUYING
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => document.getElementById('selling')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-sm font-medium border-2 border-primary/20 hover:border-primary/40 hover:bg-primary/5 transition-all duration-200 rounded-lg px-4 py-2"
            >
              SELLING
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => document.getElementById('shipping')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-sm font-medium border-2 border-primary/20 hover:border-primary/40 hover:bg-primary/5 transition-all duration-200 rounded-lg px-4 py-2"
            >
              SHIPPING & DELIVERY
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => document.getElementById('payments')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-sm font-medium border-2 border-primary/20 hover:border-primary/40 hover:bg-primary/5 transition-all duration-200 rounded-lg px-4 py-2"
            >
              PAYMENTS & FEES
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => document.getElementById('returns')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-sm font-medium border-2 border-primary/20 hover:border-primary/40 hover:bg-primary/5 transition-all duration-200 rounded-lg px-4 py-2"
            >
              RETURNS & DISPUTES
            </Button>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* FAQ Content */}
        <div className="space-y-12">
          {/* GENERAL Section */}
          <div id="general" className="bg-card/30 rounded-xl p-6 border border-border/50">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-1 h-8 bg-primary rounded-full"></div>
              <h2 className="text-2xl font-black font-title leading-tight text-primary uppercase">
                GENERAL
              </h2>
            </div>
            <Accordion type="single" collapsible className="w-full space-y-2">
              <AccordionItem value="general-1" className="faq-accordion-item">
                <AccordionTrigger className="faq-accordion-trigger">
                  What is DOORA?
                </AccordionTrigger>
                <AccordionContent className="faq-accordion-content">
                  <p className="faq-text-color leading-relaxed">
                    DOORA is a secondhand fashion marketplace where you can buy and sell unused or preloved clothes. Think of it as your digital thrift store, connecting thousands of closets to others.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="general-2" className="faq-accordion-item">
                <AccordionTrigger className="faq-accordion-trigger">
                  Is DOORA only for used items?
                </AccordionTrigger>
                <AccordionContent className="faq-accordion-content">
                  <p className="faq-text-color leading-relaxed">
                    No. Items don&apos;t have to be worn to be considered secondhand. Many sellers post brand-new pieces (sometimes even with tags). Each listing shows the product condition, and you can filter by condition (e.g. &ldquo;new with tags&rdquo;) to shop only what you want.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="general-3" className="faq-accordion-item">
                <AccordionTrigger className="faq-accordion-trigger">
                  Where is DOORA available?
                </AccordionTrigger>
                <AccordionContent className="faq-accordion-content">
                  <p className="faq-text-color leading-relaxed">
                    We&apos;re starting in Lebanon first and will expand across MENA next!
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="general-4" className="faq-accordion-item">
                <AccordionTrigger className="faq-accordion-trigger">
                  Who can use DOORA?
                </AccordionTrigger>
                <AccordionContent className="faq-accordion-content">
                  <p className="faq-text-color leading-relaxed">
                    Anyone living in Lebanon can create an account and start buying or selling except for manufacturers since our goal is to give clothes a second life, not contribute to overproduction.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="general-5" className="faq-accordion-item">
                <AccordionTrigger className="faq-accordion-trigger">
                  How can I use DOORA?
                </AccordionTrigger>
                <AccordionContent className="faq-accordion-content">
                  <p className="faq-text-color leading-relaxed">
                    DOORA is available as an iOS and Android app as well as a web version for desktop access.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="general-6" className="faq-accordion-item">
                <AccordionTrigger className="faq-accordion-trigger">
                  Why choose secondhand fashion?
                </AccordionTrigger>
                <AccordionContent className="faq-accordion-content">
                  <p className="faq-text-color leading-relaxed">
                    Trends come back. They always do. Instead of buying them new, you can find them secondhand, saving money and keeping clothes in use, not in landfills.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="general-7" className="faq-accordion-item">
                <AccordionTrigger className="faq-accordion-trigger">
                  What can I buy & sell on DOORA?
                </AccordionTrigger>
                <AccordionContent className="faq-accordion-content">
                  <p className="faq-text-color leading-relaxed">
                    DOORA is currently focused on fashion: clothes, shoes, and accessories for women, men and kids. Soon we&apos;ll expand into new categories.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="general-8" className="faq-accordion-item">
                <AccordionTrigger className="faq-accordion-trigger">
                  Is DOORA safe to use?
                </AccordionTrigger>
                <AccordionContent className="faq-accordion-content">
                  <p className="faq-text-color leading-relaxed">
                    DOORA keeps both buyers and sellers protected. Payments are processed securely, orders are tracked, and if something goes wrong, our team steps in.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          {/* BUYING Section */}
          <div id="buying" className="bg-card/30 rounded-xl p-6 border border-border/50">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-1 h-8 bg-primary rounded-full"></div>
              <h2 className="text-2xl font-black font-title leading-tight text-primary uppercase">
                BUYING
              </h2>
            </div>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="buying-1" className="faq-accordion-item">
                <AccordionTrigger className="faq-accordion-trigger">
                  How do I buy an item?
                </AccordionTrigger>
                <AccordionContent className="faq-accordion-content">
                  <div className="space-y-2 faq-text-color">
                    <p>Browse your personalized homepage or use our advanced filtering tools to find what you love.</p>
                    <p>Tap &ldquo;Buy Now&rdquo;, pay securely through us and wait for the seller to ship your order.</p>
                    <p className="text-sm italic faq-text-color">(We always recommend you read the item description carefully before purchasing and message the seller if you have questions or would like additional pictures)</p>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="buying-2" className="faq-accordion-item">
                <AccordionTrigger className="faq-accordion-trigger">
                  What extra fees am I paying?
                </AccordionTrigger>
                <AccordionContent className="faq-accordion-content">
                  <div className="space-y-2 faq-text-color">
                    <p>The following fees are calculated at checkout:</p>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      <li>A delivery fee ($4–$5)</li>
                      <li>A small Buyer Protection fee (covers you if your order never arrives, is damaged, or is not as described).</li>
                    </ul>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="buying-3" className="faq-accordion-item">
                <AccordionTrigger className="faq-accordion-trigger">
                  How much is delivery?
                </AccordionTrigger>
                <AccordionContent className="faq-accordion-content">
                  <p className="faq-text-color leading-relaxed">
                    Between $4–$5 all over Lebanon.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="buying-4" className="faq-accordion-item">
                <AccordionTrigger className="faq-accordion-trigger">
                  How long does delivery take?
                </AccordionTrigger>
                <AccordionContent className="faq-accordion-content">
                  <div className="space-y-2 faq-text-color">
                    <p>Sellers have up to 5 days to prepare your order (after which the order is automatically canceled)</p>
                    <p>Once picked up, delivery usually takes 1–4 business days depending on your location.</p>
                    <p>That means your order could arrive the same day, or up to 9 business days later at the latest. For express delivery, please contact our customer support.</p>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="buying-5" className="faq-accordion-item">
                <AccordionTrigger className="faq-accordion-trigger">
                  When do I pay?
                </AccordionTrigger>
                <AccordionContent className="faq-accordion-content">
                  <p className="faq-text-color leading-relaxed">
                    You pay at checkout. The seller only receives the payment after you confirm the item was delivered and is as described.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="buying-6" className="faq-accordion-item">
                <AccordionTrigger className="faq-accordion-trigger">
                  Are prices negotiable?
                </AccordionTrigger>
                <AccordionContent className="faq-accordion-content">
                  <p className="faq-text-color leading-relaxed">
                    It depends on the seller. Some listings are set as non-negotiable, while others allow negotiation. When price offers are possible, buyers and sellers can chat directly in the app to agree on a fair deal.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="buying-7" className="faq-accordion-item">
                <AccordionTrigger className="faq-accordion-trigger">
                  Can I return an item?
                </AccordionTrigger>
                <AccordionContent className="faq-accordion-content">
                  <p className="faq-text-color leading-relaxed">
                    Yes, depending on the seller&apos;s return settings and Buyer Protection. (See Returns & Disputes below.)
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          {/* SELLING Section */}
          <div id="selling" className="bg-card/30 rounded-xl p-6 border border-border/50">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-1 h-8 bg-primary rounded-full"></div>
              <h2 className="text-2xl font-black font-title leading-tight text-primary uppercase">
                SELLING
              </h2>
            </div>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="selling-1" className="faq-accordion-item">
                <AccordionTrigger className="faq-accordion-trigger">
                  How do I list an item?
                </AccordionTrigger>
                <AccordionContent className="faq-accordion-content">
                  <p className="faq-text-color leading-relaxed">
                    Sign up easily, upload photos, add details (brand, size, condition, price), and publish!
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="selling-2" className="faq-accordion-item">
                <AccordionTrigger className="faq-accordion-trigger">
                  Do I need to pay to list items?
                </AccordionTrigger>
                <AccordionContent className="faq-accordion-content">
                  <p className="faq-text-color leading-relaxed">
                    Nope, listing items on DOORA is totally free!
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="selling-3" className="faq-accordion-item">
                <AccordionTrigger className="faq-accordion-trigger">
                  Are all types of images allowed?
                </AccordionTrigger>
                <AccordionContent className="faq-accordion-content">
                  <p className="faq-text-color leading-relaxed">
                    Only real photos taken by you are allowed. No stock photos, AI generated images, or stolen pictures. Buyers need to see the real product they&apos;ll receive.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="selling-4" className="faq-accordion-item">
                <AccordionTrigger className="faq-accordion-trigger">
                  How do I send an order?
                </AccordionTrigger>
                <AccordionContent className="faq-accordion-content">
                  <p className="faq-text-color leading-relaxed">
                    Once your item sells, you have 5 days to prepare it. When ready, simply request a pickup and a courier will then pick it up directly from you.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="selling-5" className="faq-accordion-item">
                <AccordionTrigger className="faq-accordion-trigger">
                  How do I package my item?
                </AccordionTrigger>
                <AccordionContent className="faq-accordion-content">
                  <p className="faq-text-color leading-relaxed">
                    Once your item sells, you&apos;ll receive a prepaid shipping label by email. Print it, stick it on your package, and hand it to the courier.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="selling-6" className="faq-accordion-item">
                <AccordionTrigger className="faq-accordion-trigger">
                  How and when do I get paid?
                </AccordionTrigger>
                <AccordionContent className="faq-accordion-content">
                  <p className="faq-text-color leading-relaxed">
                    After the buyer confirms successful delivery and that everything is okay, your payment is transferred to your DOORA wallet. Payments will reflect in your wallet within minutes.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="selling-7" className="faq-accordion-item">
                <AccordionTrigger className="faq-accordion-trigger">
                  How can I make sure my item sells?
                </AccordionTrigger>
                <AccordionContent className="faq-accordion-content">
                  <div className="space-y-2 faq-text-color">
                    <p>Take clear photos in natural light, ideally against a simple background (modeled photos work even better). Write a detailed description and include as much information as possible (even measurements). The more details, the more confident buyers feel.</p>
                    <p>You can also use boosting to increase your item&apos;s visibility.</p>
                    <p>Finally, always respond quickly to buyers who request extra photos or information.</p>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          {/* SHIPPING & DELIVERY Section */}
          <div id="shipping" className="bg-card/30 rounded-xl p-6 border border-border/50">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-1 h-8 bg-primary rounded-full"></div>
              <h2 className="text-2xl font-black font-title leading-tight text-primary uppercase">
                SHIPPING & DELIVERY
              </h2>
            </div>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="shipping-1" className="faq-accordion-item">
                <AccordionTrigger className="faq-accordion-trigger">
                  Who handles delivery?
                </AccordionTrigger>
                <AccordionContent className="faq-accordion-content">
                  <p className="faq-text-color leading-relaxed">
                    We partner with trusted local couriers (Aramex).
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="shipping-2" className="faq-accordion-item">
                <AccordionTrigger className="faq-accordion-trigger">
                  Where do you deliver?
                </AccordionTrigger>
                <AccordionContent className="faq-accordion-content">
                  <p className="faq-text-color leading-relaxed">
                    All over Lebanon. Expansion across MENA is coming soon.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="shipping-3" className="faq-accordion-item">
                <AccordionTrigger className="faq-accordion-trigger">
                  Can I track my order?
                </AccordionTrigger>
                <AccordionContent className="faq-accordion-content">
                  <p className="faq-text-color leading-relaxed">
                    Yes, you&apos;ll get tracking updates by email and in-app once the seller ships your item.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="shipping-4" className="faq-accordion-item">
                <AccordionTrigger className="faq-accordion-trigger">
                  Can I try on the item at delivery?
                </AccordionTrigger>
                <AccordionContent className="faq-accordion-content">
                  <p className="faq-text-color leading-relaxed">
                    Unfortunately, couriers cannot wait at your door for safety and efficiency reasons.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="shipping-5" className="faq-accordion-item">
                <AccordionTrigger className="faq-accordion-trigger">
                  What if I miss the delivery?
                </AccordionTrigger>
                <AccordionContent className="faq-accordion-content">
                  <p className="faq-text-color leading-relaxed">
                    The courier will contact you to reschedule. You get up to 3 delivery attempts (call, message, or delivery). After that, the package is returned to the seller.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="shipping-6" className="faq-accordion-item">
                <AccordionTrigger className="faq-accordion-trigger">
                  Is DOORA&apos;s delivery sustainable?
                </AccordionTrigger>
                <AccordionContent className="faq-accordion-content">
                  <p className="faq-text-color leading-relaxed">
                    We&apos;re aware that traditional door-to-door delivery isn&apos;t sustainable enough. That&apos;s why we&apos;re working on greener, cheaper alternatives. In Lebanon, options are still limited, but as DOORA grows, we&apos;ll introduce more sustainable choices, including pickup and drop-off points.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          {/* PAYMENTS & FEES Section */}
          <div id="payments" className="bg-card/30 rounded-xl p-6 border border-border/50">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-1 h-8 bg-primary rounded-full"></div>
              <h2 className="text-2xl font-black font-title leading-tight text-primary uppercase">
                PAYMENTS & FEES
              </h2>
            </div>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="payments-1" className="faq-accordion-item">
                <AccordionTrigger className="faq-accordion-trigger">
                  How does money transfer work?
                </AccordionTrigger>
                <AccordionContent className="faq-accordion-content">
                  <p className="faq-text-color leading-relaxed">
                    The buyer pays at checkout. DOORA holds the money securely and only releases it to the in-app wallet of the seller after the buyer confirms everything is okay.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="payments-2" className="faq-accordion-item">
                <AccordionTrigger className="faq-accordion-trigger">
                  What payment methods are available?
                </AccordionTrigger>
                <AccordionContent className="faq-accordion-content">
                  <p className="faq-text-color leading-relaxed">
                    Credit/debit cards, mobile wallets, and cash on delivery.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="payments-3" className="faq-accordion-item">
                <AccordionTrigger className="faq-accordion-trigger">
                  How can I use my DOORA wallet?
                </AccordionTrigger>
                <AccordionContent className="faq-accordion-content">
                  <div className="space-y-2 faq-text-color">
                    <p>You can:</p>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      <li>Use it to buy items on DOORA</li>
                      <li>Spend it on in-app boosters (promoting your items)</li>
                      <li>Transfer it to your bank account or e-wallet</li>
                    </ul>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="payments-4" className="faq-accordion-item">
                <AccordionTrigger className="faq-accordion-trigger">
                  What is the Buyer Protection Fee?
                </AccordionTrigger>
                <AccordionContent className="faq-accordion-content">
                  <div className="space-y-2 faq-text-color">
                    <p>With every purchase, a small Buyer Protection fee is added. It covers the buyer if:</p>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      <li>The package never arrives</li>
                      <li>The package is damaged in transit</li>
                      <li>The item is not as described (counterfeit, wrong item, false description)</li>
                    </ul>
                    <p>In these cases, the buyer will be fully refunded (item price + delivery fee + Buyer Protection fee). Depending on the case, the buyer may need to return the item to the seller.</p>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          {/* RETURNS & DISPUTES Section */}
          <div id="returns" className="bg-card/30 rounded-xl p-6 border border-border/50">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-1 h-8 bg-primary rounded-full"></div>
              <h2 className="text-2xl font-black font-title leading-tight text-primary uppercase">
                RETURNS & DISPUTES
              </h2>
            </div>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="returns-1" className="faq-accordion-item">
                <AccordionTrigger className="faq-accordion-trigger">
                  Can I return an item on DOORA?
                </AccordionTrigger>
                <AccordionContent className="faq-accordion-content">
                  <div className="space-y-3 faq-text-color">
                    <p>Every seller can choose to accept or refuse returns in their account setting:</p>
                    <div className="space-y-2">
                      <p><strong>If the seller accepts returns:</strong></p>
                      <ul className="list-disc list-inside space-y-1 ml-4">
                        <li>You can return for any reason (wrong size, not as expected, change of mind).</li>
                        <li>Seller covers the return fee ($1 flat).</li>
                        <li>You&apos;ll need to print a label and schedule a pickup.</li>
                        <li>You&apos;ll then receive a refund (item price + buyer protection fee). Delivery fees are not refunded in this case.</li>
                      </ul>
                    </div>
                    <div className="space-y-2">
                      <p><strong>If the seller does not accept returns:</strong> The order falls under Buyer Protection conditions. Which means that returns/refunds are only possible if the item is not as described (fake, damaged, wrong item). You may be asked to provide proof (photos, videos, or other details) to support your claim.</p>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="returns-2" className="faq-accordion-item">
                <AccordionTrigger className="faq-accordion-trigger">
                  What if my item never arrives?
                </AccordionTrigger>
                <AccordionContent className="faq-accordion-content">
                  <p className="faq-text-color leading-relaxed">
                    You can open a dispute if your order is marked as delivered but is missing, and you&apos;ll get a full refund.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="returns-3" className="faq-accordion-item">
                <AccordionTrigger className="faq-accordion-trigger">
                  What if I receive a fake or counterfeit item?
                </AccordionTrigger>
                <AccordionContent className="faq-accordion-content">
                  <p className="faq-text-color leading-relaxed">
                    Report it immediately. Counterfeits are not tolerated on DOORA, and you&apos;ll be fully refunded.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="returns-4" className="faq-accordion-item">
                <AccordionTrigger className="faq-accordion-trigger">
                  What can I do if a return is not possible but I want a refund?
                </AccordionTrigger>
                <AccordionContent className="faq-accordion-content">
                  <p className="faq-text-color leading-relaxed">
                    If both buyer and seller agree, a partial refund can be arranged instead of a return + full refund. The buyer keeps the item and receives part of the money back, while the seller receives a partial payment. Refund amounts are calculated on a case-by-case basis and shown clearly during the dispute process.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="returns-5" className="faq-accordion-item">
                <AccordionTrigger className="faq-accordion-trigger">
                  How long do I have to report a problem?
                </AccordionTrigger>
                <AccordionContent className="faq-accordion-content">
                  <div className="space-y-2 faq-text-color">
                    <p>You must report an issue within 2 days of being notified that your order was delivered.</p>
                    <p><strong>Steps:</strong> Open your order conversation → Tap &ldquo;I have an issue&rdquo; → Follow the instructions.</p>
                    <p>If you don&apos;t report a problem within 2 days (or confirm that &ldquo;Everything is OK&rdquo;), the order is finalized and the seller is paid.</p>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="returns-6" className="faq-accordion-item">
                <AccordionTrigger className="faq-accordion-trigger">
                  What happens after I report a problem?
                </AccordionTrigger>
                <AccordionContent className="faq-accordion-content">
                  <div className="space-y-2 faq-text-color">
                    <p>The order is temporarily put on hold while our team reviews your case.</p>
                    <p>Once resolved, either your money is refunded or the payment is released to the seller.</p>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="returns-7" className="faq-accordion-item">
                <AccordionTrigger className="faq-accordion-trigger">
                  What if a return and refund isn&apos;t possible?
                </AccordionTrigger>
                <AccordionContent className="faq-accordion-content">
                  <p className="faq-text-color leading-relaxed">
                    If you can&apos;t return a product or get your money back, you can always resell the item on DOORA.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="mt-20 text-center bg-gradient-to-r from-primary/5 to-primary/10 rounded-2xl p-8 border border-primary/20">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Can&apos;t find what you&apos;re looking for?
          </h2>
          <p className="mb-6 faq-text-color max-w-2xl mx-auto">
            Get in touch with our support team.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-3 border-2 border-primary text-base font-semibold rounded-lg text-white bg-primary hover:bg-primary/90 hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            Contact Support
          </Link>
        </div>
      </div>
    </div>
    </>
  );
}

