"use client";

import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useOutsideClick } from "@/hooks/use-outside-click";
import { Recycle, Users, Sparkles, Shield } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const CloseIcon = () => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z"
      fill="currentColor"
      fillRule="evenodd"
      clipRule="evenodd"
    ></path>
  </svg>
);

const ExpandIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" className="w-4 h-4" style={{transform: 'scaleX(-1)'}}>
    <path d="M408 64L552 64C565.3 64 576 74.7 576 88L576 232C576 241.7 570.2 250.5 561.2 254.2C552.2 257.9 541.9 255.9 535 249L496 210L409 297C399.6 306.4 384.4 306.4 375.1 297L343.1 265C333.7 255.6 333.7 240.4 343.1 231.1L430.1 144.1L391.1 105.1C384.2 98.2 382.2 87.9 385.9 78.9C389.6 69.9 398.3 64 408 64zM232 576L88 576C74.7 576 64 565.3 64 552L64 408C64 398.3 69.8 389.5 78.8 385.8C87.8 382.1 98.1 384.2 105 391L144 430L231 343C240.4 333.6 255.6 333.6 264.9 343L296.9 375C306.3 384.4 306.3 399.6 296.9 408.9L209.9 495.9L248.9 534.9C255.8 541.8 257.8 552.1 254.1 561.1C250.4 570.1 241.7 576 232 576z" fill="currentColor"/>
  </svg>
);


export function SolutionCards() {
  const [active, setActive] = useState<(typeof cards)[number] | boolean | null>(
    null
  );
  const ref = useRef<HTMLDivElement>(null);
  const id = useId();
  const [dragY, setDragY] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  const handleDragStart = (event: any) => {
    setIsDragging(true);
    setDragY(event.clientY);
  };

  const handleDrag = (event: any) => {
    if (!isDragging) return;
    const deltaY = event.clientY - dragY;
    if (deltaY > 50) {
      setActive(null);
      setIsDragging(false);
    }
  };

  const handleDragEnd = () => {
    setIsDragging(false);
    setDragY(0);
  };

  return (
    <>
      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 h-full w-full z-10"
            onClick={() => setActive(null)}
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0 flex items-center justify-center z-[100] p-4">
            <motion.div
              ref={ref}
              className="w-full max-w-2xl bg-background border border-border rounded-2xl overflow-hidden shadow-2xl"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.2 }}
              drag="y"
              dragConstraints={{ top: 0, bottom: 0 }}
              dragElastic={0.2}
              onDragStart={handleDragStart}
              onDrag={handleDrag}
              onDragEnd={handleDragEnd}
              dragMomentum={false}
            >
              <div className="bg-muted/20 p-6">
                {/* Drag handle indicator */}
                <div className="flex justify-center mb-4">
                  <div className="w-8 h-1 bg-muted-foreground/30 rounded-full"></div>
                </div>
                <div className="flex justify-between items-start">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center">
                      {active.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-black text-primary uppercase mb-2">
                        {active.title}
                      </h3>
                      <p className="text-sm font-medium" style={{color: 'oklch(0.2354 0.0041 84.59)'}}>
                        {active.description}
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => setActive(null)}
                    className="w-8 h-8 rounded-full bg-muted hover:bg-muted/80 flex items-center justify-center transition-colors"
                  >
                    <CloseIcon />
                  </button>
                </div>
              </div>

              <div className="p-6">
                <div className="text-base leading-relaxed space-y-4" style={{color: 'oklch(0.2354 0.0041 84.59)'}}>
                  {typeof active.content === "function"
                    ? active.content()
                    : active.content}
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
      <div className="grid grid-cols-2 gap-4">
        {cards.map((card, index) => (
          <Card 
            key={`card-${card.title}-${id}`}
            onClick={() => setActive(card)}
            className="text-center cursor-pointer hover:shadow-md transition-all duration-200 relative bg-muted/20"
          >
            <CardContent className="pt-6">
              {/* Expand icon in top right */}
              <div className="absolute top-3 right-3 text-primary/70 hover:text-primary transition-colors">
                <ExpandIcon />
              </div>
              
              <div className="w-12 h-12 text-primary mx-auto mb-4 flex items-center justify-center">
                {card.icon}
              </div>
              <h4 className="font-semibold text-foreground mb-2">{card.title}</h4>
              <p className="text-sm mt-2" style={{color: 'oklch(0.2354 0.0041 84.59)'}}>
                {card.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </>
  );
}

const cards = [
  {
    title: "Circular Fashion",
    description: "Extend life, reduce waste",
    icon: <Recycle className="h-12 w-12 text-primary" />,
    ctaText: "❯",
    ctaLink: "#",
    content: () => {
      return (
        <div className="space-y-4">
          <p>
            By giving clothes a second life, we extend their lifespan and keep them out of landfills. This is a simple, effective way to reduce waste and make a positive impact, one garment at a time.
          </p>
        </div>
      );
    },
  },
  {
    title: "Mindful",
    description: "Affordable and ethical",
    icon: <Users className="h-12 w-12 text-primary" />,
    ctaText: "❯",
    ctaLink: "#",
    content: () => {
      return (
        <div className="space-y-4">
          <p>
            We prove that affordable and ethical shopping can go together. Our platform makes it possible to shop consciously, with pieces available for as little as a dollar. By choosing secondhand, you can build a high-quality, unique wardrobe without the high cost or negative impact on people and the planet.
          </p>
        </div>
      );
    },
  },
  {
    title: "Trust",
    description: "Safe & seamless process",
    icon: <Shield className="h-12 w-12 text-primary" />,
    ctaText: "❯",
    ctaLink: "#",
    content: () => {
      return (
        <div className="space-y-4">
          <p>
            We manage all logistics, from secure payments to reliable shipping. Our secure and transparent process ensures a smooth and reliable experience for both buyers and sellers.
          </p>
        </div>
      );
    },
  },
  {
    title: "Beyond Trends",
    description: "Timeless pieces that feel like you",
    icon: <Sparkles className="h-12 w-12 text-primary" />,
    ctaText: "❯",
    ctaLink: "#",
    content: () => {
      return (
        <div className="space-y-4">
          <p>
            Fast fashion pushes everyone to look and dress the same. We want you to stand out. Our platform is a treasure trove where you can discover one-of-a-kind pieces that truly express who you are. We believe style should be a fun and personal journey, not a race to keep up with trends.
          </p>
        </div>
      );
    },
  },
 
];
