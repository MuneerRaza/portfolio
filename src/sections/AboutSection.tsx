import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !contentRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from(contentRef.current!.children, {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="portfolio-section bg-[#141414] relative"
      style={{ zIndex: 2 }}
    >
      <div className="flex items-center h-full px-20 py-16">
        <div className="max-w-6xl w-full mx-auto">
          <div ref={contentRef} className="space-y-12">
            {/* Header */}
            <div className="flex items-baseline gap-4">
              <span className="section-number">02</span>
              <h2 className="text-4xl font-bold text-white tracking-tight">About</h2>
              <div className="flex-1 h-px bg-white/5 ml-4" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Bio */}
              <div className="space-y-6">
                <p className="text-white/70 text-base leading-relaxed font-light">
                  Associate ML Engineer at Softec Worldwide, where I build multi-agent workflow systems,
                  deploy open-source LLMs locally, and maintain production ML pipelines.
                  Published RADAR-Net at IACMC 2025.
                </p>
                <p className="text-white/70 text-base leading-relaxed font-light">
                  Graduated Cum Laude from FAST-NUCES with a BS in Artificial Intelligence,
                  ranked 3rd in a batch of 60. Won multiple national AI competitions.
                  I also freelance in mobile app development with Flutter and FastAPI.
                </p>

                <div className="flex gap-4 pt-2">
                  <a
                    href="https://github.com/MuneerRaza"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 border border-white/10 text-white/60 text-xs rounded-sm hover:border-[#fe9004]/40 hover:text-white transition-all tracking-wider uppercase"
                  >
                    GitHub
                  </a>
                  <a
                    href="https://linkedin.com/in/muneer-raza-"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 border border-white/10 text-white/60 text-xs rounded-sm hover:border-[#fe9004]/40 hover:text-white transition-all tracking-wider uppercase"
                  >
                    LinkedIn
                  </a>
                  <a
                    href="mailto:muneer.raza098@gmail.com"
                    className="px-4 py-2 border border-white/10 text-white/60 text-xs rounded-sm hover:border-[#fe9004]/40 hover:text-white transition-all tracking-wider uppercase"
                  >
                    Email
                  </a>
                </div>
              </div>

              {/* Stat Cards */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: "3.60", label: "CGPA / 4.0", sub: "FAST-NUCES" },
                  { value: "3rd", label: "Batch Rank", sub: "Out of 60" },
                  { value: "7.0", label: "IELTS Score", sub: "Academic" },
                  { value: "1", label: "Publication", sub: "IACMC 2025" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="card-glow p-6 rounded-sm border border-white/5 bg-[#1a1a1a] space-y-2"
                  >
                    <div className="text-3xl font-black text-[#fe9004]">{stat.value}</div>
                    <div className="text-sm font-medium text-white/80">{stat.label}</div>
                    <div className="text-xs text-white/30">{stat.sub}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
