"use client";

import { useEffect, useState } from "react";
import CircularText from "./CircularText";

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Start fade out after 0.5 seconds for faster loading
    const fadeTimer = setTimeout(() => {
      setIsVisible(false);
    }, 500);

    // Remove completely after fade out - ensure it's fully gone
    const removeTimer = setTimeout(() => {
      setIsLoading(false);
    }, 800); // Much faster removal

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (!isLoading) return null;

  return (
    <div 
      className={`fixed inset-0 z-[9999] flex items-center justify-center transition-opacity duration-500 ease-out ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
      style={{ 
        backgroundColor: 'oklch(0.439 0.1032 35.98)',
        pointerEvents: isVisible ? 'auto' : 'none'
      }}
    >
      <div 
        className="animate-pulse"
        style={{ 
          '--primary': 'oklch(0.8631 0.0195 93.69)',
          color: 'oklch(0.8631 0.0195 93.69)'
        } as React.CSSProperties}
      >
        <CircularText
          text="CLOSET → CLOSET → "
          onHover="speedUp"
          spinDuration={20}
          className="mx-auto"
        />
      </div>
    </div>
  );
}
