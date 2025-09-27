"use client";

import { useEffect, useState } from "react";
import Header from "@/components/essentials/Header";
import Footer from "@/components/essentials/Footer";

interface AppContentProps {
  children: React.ReactNode;
}

export default function AppContent({ children }: AppContentProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Start showing content much earlier for faster perceived loading
    const showTimer = setTimeout(() => {
      setIsLoaded(true);
    }, 300); // Show content much earlier

    // Make content visible right when loading screen starts fading
    const visibleTimer = setTimeout(() => {
      setIsVisible(true);
    }, 600); // Align with new loading screen timing

    return () => {
      clearTimeout(showTimer);
      clearTimeout(visibleTimer);
    };
  }, []);

  return (
    <>
      {isLoaded && <Header />}
      {isLoaded && (
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
      )}
    </>
  );
}
