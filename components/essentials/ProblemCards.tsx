"use client";

import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useOutsideClick } from "@/hooks/use-outside-click";
import { Trash2, Globe, Frown, ShoppingBag, RotateCcw } from "lucide-react";

export function ProblemCards() {
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
      <div className="max-w-5xl mx-auto w-full space-y-2 px-4 lg:px-8">
        {cards.map((card, index) => (
          <div
            key={`card-${card.title}-${id}`}
            onClick={() => setActive(card)}
            className="p-4 flex items-center justify-between hover:bg-muted/30 rounded-lg cursor-pointer transition-colors group"
          >
            <div className="flex items-center gap-3 flex-1 max-w-[calc(100%-60px)]">
              <div className="flex-shrink-0">
                <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  {card.icon}
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <h3
                  className="font-semibold text-base mb-1 truncate"
                  style={{color: 'oklch(0.2354 0.0041 84.59)'}}
                >
                  {card.title}
                </h3>
                <p
                  className="text-sm truncate"
                  style={{color: 'oklch(0.2354 0.0041 84.59)'}}
                >
                  {card.description}
                </p>
              </div>
            </div>
            <button
              className="w-8 h-8 rounded-full font-bold bg-primary hover:bg-primary/90 text-white transition-colors flex-shrink-0 flex items-center justify-center ml-2"
            >
              ❯
            </button>
          </div>
        ))}
      </div>
    </>
  );
}

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.05,
        },
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-foreground"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};

const cards = [
  {
    title: "Overconsumption",
    description: "Environmental damage",
    icon: <Trash2 className="h-7 w-7 text-primary" />,
    ctaText: "❯",
    ctaLink: "#",
    content: () => {
      return (
        <div className="space-y-4">
          <p>
          Fast fashion&apos;s relentless cycle of microtrends encourages buying new clothes frequently and discarding them just as fast. This model creates Millions of tons of clothing that are sent to landfills each year, contributing to a global waste crisis.          </p>
          <p>
          From massive water usage and textile dyeing that contaminates waterways, to immense carbon emissions from manufacturing and transport, this constant demand for new, cheap clothes comes with a staggering environmental price tag.          </p>
        </div>
      );
    },
  },
  {
    title: "Trends vs Quality",
    description: "Shifting culture",
    icon: <RotateCcw className="h-7 w-7 text-primary" />,
    ctaText: "❯",
    ctaLink: "#",
    content: () => {
      return (
        <div className="space-y-4">
          <p>
            Trends are a cycle, not a race. The styles of the past always come back, but the quality doesn&apos;t. We believe in keeping great clothes in circulation because the timeless, well-made pieces you&apos;re looking for already exist, they&apos;re just waiting to be found.
          </p>
        </div>
      );
    },
  },
  {
    title: "Regional Market",
    description: "No sustainable options",
    icon: <Globe className="h-7 w-7 text-primary" />,
    ctaText: "❯",
    ctaLink: "#",
    content: () => {
      return (
        <div className="space-y-4">
          <p>
          Despite being one of the world&apos;s fastest-growing fashion markets, the Middle East remains underserved when it comes to sustainable shopping options. While other regions have embraced secondhand fashion, the Middle East has been left behind.          </p>
          <p>
          When local markets lack sustainable and affordable alternatives, fast fashion&apos;s low prices and wide availability make it the only practical option. It&apos;s a normal and rational response for people to choose the most accessible and cost-effective solution available to them. The real issue lies not with the consumer&apos;s decision, but with the lack of developed, sustainable solutions within the market.          </p>
        </div>
      );
    },
  },
  {
    title: "Poor Experience",
    description: "Secondhand shopping",
    icon: <Frown className="h-7 w-7 text-primary" />,
    ctaText: "❯",
    ctaLink: "#",
    content: () => {
      return (
        <div className="space-y-4">
          <p>
            The secondhand shopping experience is fragmented and frustrating for both buyers and sellers. Thousands of resellers struggle with processes, visibility, and lack of business features, while buyers struggle with trust, filtering, and shopping experience.
          </p>
          <p>
          This disjointed experience has prevented secondhand culture from growing, keeping it a niche hobby instead of a norm.
          </p>
        </div>
      );
    },
  },
  {
    title: "The Fast Fashion Fallback",
    description: "Convenience over conscience",
    icon: <ShoppingBag className="h-7 w-7 text-primary" />,
    ctaText: "❯",
    ctaLink: "#",
    content: () => {
      return (
        <div className="space-y-4">
          <p>
            This is why people turn to fast fashion: it&apos;s a cheap and convenient option when no other solution exists in the region. Until now.
          </p>
          <p>
            When sustainable options are hard to find, expensive, or unreliable, fast fashion becomes the default choice. We&apos;re changing that by making sustainable fashion accessible, affordable, and enjoyable.
          </p>
        </div>
      );
    },
  },
];
