"use client";

import { useEffect, useRef } from 'react';

interface ScrollStackItemProps {
  children: React.ReactNode;
  itemClassName?: string;
}

interface ScrollStackProps {
  children: React.ReactNode;
  className?: string;
  itemDistance?: number;
  useWindowScroll?: boolean;
}

export const ScrollStackItem = ({ children, itemClassName = '' }: ScrollStackItemProps) => (
  <div className={`scroll-stack-card bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-8 min-h-96 flex flex-col justify-center items-center text-center border border-gray-200 dark:border-gray-700 ${itemClassName}`.trim()}>
    {children}
  </div>
);

const ScrollStack = ({
  children,
  className = '',
  itemDistance = 200,
  useWindowScroll = true
}: ScrollStackProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const cards = Array.from(containerRef.current.querySelectorAll('.scroll-stack-card')) as HTMLElement[];
    if (!cards.length) return;

    const updateCards = () => {
      const scrollTop = window.scrollY;
      const viewportHeight = window.innerHeight;
      const stackPosition = viewportHeight * 0.5; // Stack at 50% of viewport

      cards.forEach((card, index) => {
        const cardRect = card.getBoundingClientRect();
        const cardTop = cardRect.top + scrollTop;
        const triggerPoint = cardTop - stackPosition;
        const stackOffset = index * 4; // 4px apart when stacked
        
        if (scrollTop >= triggerPoint) {
          // Card should be pinned and stacked
          const translateY = scrollTop - cardTop + stackPosition + stackOffset;
          const scale = Math.max(0.92, 1 - (index * 0.015));
          const rotation = index * 0.3;
          
          // Use transform translate instead of position sticky for smoother animation
          card.style.transform = `translate3d(0, ${translateY}px, 0) scale(${scale}) rotate(${rotation}deg)`;
          card.style.zIndex = (1000 - index).toString();
          card.style.transformOrigin = 'center top';
          card.style.position = 'relative';
        } else {
          // Card in normal flow
          card.style.transform = 'translate3d(0, 0, 0) scale(1) rotate(0deg)';
          card.style.zIndex = '1';
          card.style.position = 'static';
        }
      });
    };

    // Set up cards
    cards.forEach((card, index) => {
      card.style.marginBottom = `${itemDistance}px`;
      card.style.willChange = 'transform';
      card.style.backfaceVisibility = 'hidden';
      card.style.transition = 'transform 0.1s ease-out';
    });

    // Add scroll listener
    window.addEventListener('scroll', updateCards, { passive: true });
    updateCards(); // Initial call

    return () => {
      window.removeEventListener('scroll', updateCards);
      // Reset cards
      cards.forEach(card => {
        card.style.transform = '';
        card.style.position = '';
        card.style.zIndex = '';
      });
    };
  }, [itemDistance]);

  return (
    <div className={`scroll-stack-container ${className}`.trim()} ref={containerRef}>
      {children}
      {/* Spacer for clean release */}
      <div style={{ height: '100vh' }} />
    </div>
  );
};

export default ScrollStack;
export { ScrollStack, ScrollStackItem };
