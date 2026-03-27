import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ArrowDown } from "lucide-react";

interface HeroSectionProps {
  onScrollDown: () => void;
}

export default function HeroSection({ onScrollDown }: HeroSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Entrance animations for hero elements (they live in App.tsx global-hero-content)
    const tl = gsap.timeline({ delay: 0.3 });
    tl.from("#hero-name", { y: 60, opacity: 0, duration: 1, ease: "power3.out" })
      .from("#hero-subtitle", { y: 30, opacity: 0, duration: 0.8, ease: "power3.out" }, "-=0.6")
      .from("#hero-portfolio-label", { y: 10, opacity: 0, duration: 0.6, ease: "power3.out" }, "-=0.6")
      .from("#hero-tagline", { y: 20, opacity: 0, duration: 0.8, ease: "power3.out" }, "-=0.5")
      .from("#hero-extra-image", { scale: 0.9, opacity: 0, duration: 1, ease: "power3.out" }, "-=0.8")
      .from("#hero-extra-content .flex", { y: 20, opacity: 0, duration: 0.7, ease: "power3.out", stagger: 0.15 }, "-=0.5")
      .from(containerRef.current?.querySelector(".scroll-btn") as Element, { opacity: 0, duration: 0.5 }, "-=0.2");

    return () => { tl.revert(); };
  }, []);

  return (
    <section
      id="hero"
      ref={containerRef}
      className="portfolio-section bg-[#121212] relative"
      style={{ zIndex: 1, boxShadow: "none", borderTop: "none" }}
    >
      {/* All hero content is rendered in App.tsx global-hero-content (fixed overlay) */}
      {/* This section is just the sticky container + scroll button */}
      <button onClick={onScrollDown}
        className="scroll-btn absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30 hover:text-[#fe9004] transition-colors group z-10">
        <span className="text-xs tracking-[0.3em] uppercase">Scroll</span>
        <ArrowDown size={14} className="group-hover:translate-y-1 transition-transform animate-bounce" />
      </button>
    </section>
  );
}
