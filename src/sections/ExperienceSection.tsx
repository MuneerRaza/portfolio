import { useEffect, useRef, useState, useCallback } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { EXPERIENCE } from "@/data/portfolio";

gsap.registerPlugin(ScrollTrigger);

export default function ExperienceSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const prevIndex = useRef(0);

  useEffect(() => {
    if (!containerRef.current) return;
    
    // We create a ScrollTrigger that SCRUBS through the items based on scroll progress
    const ctx = gsap.context(() => {
      // Entrance animations
      gsap.from(".exp-el", {
        y: 40, opacity: 0, duration: 0.8, stagger: 0.1, ease: "power3.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 80%" },
      });

      // Tie activeIndex to scroll progress within the tall container
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top top",
        end: "bottom bottom",
        scrub: true,
        onUpdate: (self) => {
          const count = EXPERIENCE.length;
          // Map progress 0→1 evenly across items, ensuring first item shows at start
          let idx = Math.floor(self.progress * count);
          if (idx >= count) idx = count - 1;
          if (idx < 0) idx = 0;
          setActiveIndex(idx);
        }
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  const active = EXPERIENCE[activeIndex];

  return (
    <div id="experience" ref={containerRef} style={{ height: `${(EXPERIENCE.length + 1) * 100}vh`, position: "relative", zIndex: 3 }}>
    <section
      ref={sectionRef}
      className="portfolio-section bg-[#121212] relative"
    >
      <div className="flex h-full px-20 py-16">
        <div className="max-w-7xl w-full mx-auto flex flex-col justify-center">

          {/* Top: section title + progress */}
          <div className="exp-el flex items-center gap-4 mb-2">
            <span className="section-number">03</span>
            <h2 className="text-3xl font-bold text-white tracking-tight">Experience</h2>
            <div className="flex-1 h-px bg-white/5 ml-4" />
            <span className="text-xs text-white/20 font-mono">
              {String(activeIndex + 1).padStart(2, "0")} / {String(EXPERIENCE.length).padStart(2, "0")}
            </span>
          </div>

          {/* Progress bar */}
          <div className="exp-el w-full h-[2px] bg-white/5 mb-10 relative overflow-hidden rounded-full">
            <div
              className="absolute top-0 left-0 h-full bg-[#fe9004] rounded-full transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
              style={{
                width: `${((activeIndex + 1) / EXPERIENCE.length) * 100}%`,
                boxShadow: "0 0 12px rgba(254,144,4,0.6)",
              }}
            />
          </div>

          {/* Main grid: big number | content card */}
          <div className="exp-el grid grid-cols-12 gap-8 items-start">

            {/* Left: big flipping number */}
            <div className="col-span-3 flex flex-col items-center">
              <div className="relative overflow-hidden h-[120px] w-full">
                <div
                  className="flex flex-col items-center transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
                  style={{ transform: `translateY(-${activeIndex * 120}px)` }}
                >
                  {EXPERIENCE.map((_, i) => (
                    <div
                      key={i}
                      className="h-[120px] flex items-center justify-center text-[7rem] font-black leading-none select-none"
                      style={{
                        color: "transparent",
                        WebkitTextStroke: "2px rgba(254, 144, 4, 0.15)",
                      }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </div>
                  ))}
                </div>
              </div>

              {/* Dot indicators */}
              <div className="flex gap-2 mt-4">
                {EXPERIENCE.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveIndex(i)}
                    className="transition-all duration-500"
                    style={{
                      width: activeIndex === i ? 24 : 8,
                      height: 8,
                      borderRadius: 4,
                      background: activeIndex === i ? "#fe9004" : "rgba(255,255,255,0.08)",
                      boxShadow: activeIndex === i ? "0 0 10px rgba(254,144,4,0.5)" : "none",
                    }}
                  />
                ))}
              </div>

              <p className="text-[10px] text-white/15 mt-4 uppercase tracking-[0.2em]">Scroll to navigate</p>
            </div>

            {/* Right: experience card — fixed min-height prevents layout shift */}
            <div className="col-span-9">
              <div key={activeIndex} className="border border-white/5 bg-[#1a1a1a] rounded-sm p-8 relative min-h-[320px]" style={{ animation: "contentSwap 0.5s cubic-bezier(0.22, 1, 0.36, 1)" }}>
                {/* Period badge */}
                <div className="absolute top-6 right-6">
                  <span className="text-xs font-mono text-[#fe9004]/40 border border-[#fe9004]/15 px-3 py-1 rounded-full">
                    {active.period}
                  </span>
                </div>

                <div className="space-y-5">
                  <div>
                    <h3 className="text-2xl font-bold text-white tracking-tight">{active.role}</h3>
                    <p className="text-[#fe9004] text-sm font-medium mt-1">{active.company}</p>
                    <p className="text-white/25 text-xs mt-0.5">{active.location}</p>
                  </div>

                  <div className="w-16 h-px bg-[#fe9004]/20" />

                  <ul className="space-y-3">
                    {active.points.map((point, i) => (
                      <li key={i} className="flex gap-3 items-start">
                        <span className="text-[#fe9004] mt-1.5 shrink-0">
                          <svg width="6" height="6" viewBox="0 0 6 6" fill="currentColor"><circle cx="3" cy="3" r="3" /></svg>
                        </span>
                        <span className="text-white/65 text-sm leading-relaxed">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  );
}
