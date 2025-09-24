"use client";

import { useEffect, useState } from "react";
import Footer from "@/components/essentials/Footer";

interface AppContentProps {
  children: React.ReactNode;
}

export default function AppContent({ children }: AppContentProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Start showing content earlier
    const showTimer = setTimeout(() => {
      setIsLoaded(true);
    }, 1800); // Show content before loading screen starts fading

    // Make content visible right when loading screen starts fading
    const visibleTimer = setTimeout(() => {
      setIsVisible(true);
    }, 2100); // Slight delay after loading screen fade starts

    return () => {
      clearTimeout(showTimer);
      clearTimeout(visibleTimer);
    };
  }, []);

  if (!isLoaded) return null;

  return (
    <div 
      className={`transition-opacity duration-500 ease-out ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <main className="pt-16">
        {children}
      </main>
      <Footer />
    </div>
  );
}
