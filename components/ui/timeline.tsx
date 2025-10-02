"use client";
import {
  useMotionValueEvent,
  useScroll,
  useTransform,
  motion,
} from "motion/react";
import React, { useEffect, useRef, useState } from "react";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      className="w-full bg-background font-sans md:px-10"
      ref={containerRef}
    >
      <div className="max-w-7xl mx-auto pt-20 pb-8 px-4 md:px-8 lg:px-10">
        <h2 className="text-3xl md:text-4xl lg:text-6xl font-black mb-6 font-title leading-tight text-primary uppercase text-center">
          Our Story
        </h2>
      </div>

      <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-start pt-0 md:pt-0 md:gap-10"
          >
            <div className={`flex flex-col md:flex-row z-40 items-center self-start max-w-xs lg:max-w-sm md:w-full ${
              index === data.length - 1 ? 'relative' : 'sticky top-40'
            }`}>
              <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-background flex items-center justify-center">
                <div className="h-4 w-4 rounded-full bg-primary border border-primary/20 p-2" />
              </div>
              <h3 className="hidden md:block text-lg md:pl-20 md:text-2xl font-black text-primary font-title">
                {item.title}
              </h3>
            </div>

            <div className="relative pl-20 pr-4 md:pl-0 md:-ml-32 w-full">
              <h3 className="md:hidden block text-lg mb-4 text-left font-black text-primary font-title">
                {item.title}
              </h3>
              {item.content}{" "}
            </div>
          </div>
        ))}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-primary/20 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] "
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
              background: 'linear-gradient(to bottom, oklch(0.439 0.1032 35.98) 0%, oklch(0.2354 0.0041 84.59) 100%)'
            }}
            className="absolute inset-x-0 top-0  w-[2px] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};
