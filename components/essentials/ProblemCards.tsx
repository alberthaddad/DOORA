"use client";

import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useOutsideClick } from "@/hooks/use-outside-click";
import { AlertTriangle, Globe, Users, ShoppingBag, Zap } from "lucide-react";

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
              layoutId={`card-${active.title}-${id}`}
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
          <motion.div
            layoutId={`card-${card.title}-${id}`}
            key={`card-${card.title}-${id}`}
            onClick={() => setActive(card)}
            className="p-4 flex items-center justify-between hover:bg-muted/30 rounded-lg cursor-pointer transition-colors group"
          >
            <div className="flex items-center gap-3 flex-1 max-w-[calc(100%-60px)]">
              <motion.div layoutId={`image-${card.title}-${id}`} className="flex-shrink-0">
                <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  {card.icon}
                </div>
              </motion.div>
              <div className="flex-1 min-w-0">
                <motion.h3
                  layoutId={`title-${card.title}-${id}`}
                  className="font-semibold text-base mb-1 truncate"
                  style={{color: 'oklch(0.2354 0.0041 84.59)'}}
                >
                  {card.title}
                </motion.h3>
                <motion.p
                  layoutId={`description-${card.description}-${id}`}
                  className="text-sm truncate"
                  style={{color: 'oklch(0.2354 0.0041 84.59)'}}
                >
                  {card.description}
                </motion.p>
              </div>
            </div>
            <motion.button
              layoutId={`button-${card.title}-${id}`}
              className="w-8 h-8 rounded-full font-bold bg-primary hover:bg-primary/90 text-white transition-colors flex-shrink-0 flex items-center justify-center ml-2"
            >
              &gt;
            </motion.button>
          </motion.div>
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
    title: "Fast Fashion Overconsumption",
    description: "Waste and environmental damage",
    icon: <AlertTriangle className="h-7 w-7 text-primary" />,
    ctaText: ">",
    ctaLink: "#",
    content: () => {
      return (
        <div className="space-y-4">
          <p>
            The fashion world is full of contradictions. We have more than enough clothes to dress the next eight generations, yet fast fashion dominates. Fueled by fleeting microtrends, this cycle of overconsumption creates immense waste and environmental damage.
          </p>
          <p>
            Every year, millions of tons of clothing end up in landfills, while the fashion industry continues to produce at an unsustainable rate. The environmental cost is staggering, from water pollution to carbon emissions.
          </p>
        </div>
      );
    },
  },
  {
    title: "Trends vs Quality",
    description: "Timeless pieces exist, waiting to be found",
    icon: <Zap className="h-7 w-7 text-primary" />,
    ctaText: ">",
    ctaLink: "#",
    content: () => {
      return (
        <div className="space-y-4">
          <p>
            Trends are a cycle, not a race. The styles of the past always come back, but the quality doesn't. We believe in keeping great clothes in circulation because the timeless, well-made pieces you're looking for already exist, they're just waiting to be found.
          </p>
          <p>
            Instead of chasing every microtrend, we focus on pieces that stand the test of time. Quality over quantity, style over speed.
          </p>
        </div>
      );
    },
  },
  {
    title: "Regional Market Gap",
    description: "Middle East lacks sustainable options",
    icon: <Globe className="h-7 w-7 text-primary" />,
    ctaText: ">",
    ctaLink: "#",
    content: () => {
      return (
        <div className="space-y-4">
          <p>
            Despite being one of the world's fastest-growing fashion markets, the Middle East remains underserved when it comes to sustainable fashion options.
          </p>
          <p>
            While other regions have embraced secondhand fashion, the Middle East has been left behind, with limited options for conscious consumers who want to make sustainable choices.
          </p>
        </div>
      );
    },
  },
  {
    title: "Fragmented Experience",
    description: "Broken secondhand shopping ecosystem",
    icon: <Users className="h-7 w-7 text-primary" />,
    ctaText: ">",
    ctaLink: "#",
    content: () => {
      return (
        <div className="space-y-4">
          <p>
            The secondhand shopping experience is fragmented and frustrating for both buyers and sellers. Thousands of resellers struggle with processes, visibility, and lack of business features, while buyers struggle with trust, filtering, and shopping experience.
          </p>
          <p>
            From Instagram pages to scattered marketplaces, there's no unified platform that makes secondhand shopping easy, trustworthy, and enjoyable for everyone involved.
          </p>
        </div>
      );
    },
  },
  {
    title: "The Fast Fashion Fallback",
    description: "Convenience over conscience",
    icon: <ShoppingBag className="h-7 w-7 text-primary" />,
    ctaText: ">",
    ctaLink: "#",
    content: () => {
      return (
        <div className="space-y-4">
          <p>
            This is why people turn to fast fashion: it's a cheap and convenient option when no other solution exists in the region. Until now.
          </p>
          <p>
            When sustainable options are hard to find, expensive, or unreliable, fast fashion becomes the default choice. We're changing that by making sustainable fashion accessible, affordable, and enjoyable.
          </p>
        </div>
      );
    },
  },
];
