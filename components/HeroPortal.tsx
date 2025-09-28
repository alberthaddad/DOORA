"use client";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

export default function HeroPortal() {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    // Use setTimeout for better mobile compatibility
    const timer = setTimeout(() => setMounted(true), 0);
    
    return () => {
      clearTimeout(timer);
    };
  }, []);
  
  if (!mounted) return null;

  return createPortal(
    <>
      <div className="hero-bg-fixed" />
      <div className="hero-overlay-fixed" />
    </>,
    document.body
  );
}
