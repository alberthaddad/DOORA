import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl lg:text-6xl font-black font-title leading-tight text-primary uppercase mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Find answers to common questions about DOORA, our platform, and how to get started.
          </p>
        </div>

        {/* FAQ Content */}
        <div className="space-y-6">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-left">
                What is DOORA?
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-muted-foreground">
                  Content will be added here. This is a placeholder for the FAQ content.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger className="text-left">
                How do I get started?
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-muted-foreground">
                  Content will be added here. This is a placeholder for the FAQ content.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger className="text-left">
                How does the selling process work?
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-muted-foreground">
                  Content will be added here. This is a placeholder for the FAQ content.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger className="text-left">
                What are your fees?
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-muted-foreground">
                  Content will be added here. This is a placeholder for the FAQ content.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
              <AccordionTrigger className="text-left">
                How do I contact support?
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-muted-foreground">
                  Content will be added here. This is a placeholder for the FAQ content.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        {/* Contact CTA */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Still have questions?
          </h2>
          <p className="text-muted-foreground mb-6">
            Can&apos;t find what you&apos;re looking for? Get in touch with our support team.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary/90 transition-colors"
          >
            Contact Support
          </a>
        </div>
      </div>
    </div>
  );
}
