import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ExternalLink, Github } from "lucide-react";
import { FEATURED_PROJECTS, OTHER_PROJECTS } from "@/data/portfolio";
import { iconMap } from "./TechStackSection";

gsap.registerPlugin(ScrollTrigger);

export default function ProjectsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const [activeProject, setActiveProject] = useState(0);

  useEffect(() => {
    if (!containerRef.current) return;
    
    const ctx = gsap.context(() => {
      gsap.from(".proj-el", {
        y: 40, opacity: 0, duration: 0.8, stagger: 0.1, ease: "power3.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 80%" },
      });

      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top top",
        end: "bottom bottom",
        scrub: true,
        onUpdate: (self) => {
          const count = FEATURED_PROJECTS.length;
          let idx = Math.floor(self.progress * count);
          if (idx >= count) idx = count - 1;
          if (idx < 0) idx = 0;
          setActiveProject(idx);
        }
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  const project = FEATURED_PROJECTS[activeProject];

  // Helper to find icon by matching tech string to iconMap keys
  const getTechIcon = (techName: string) => {
    const key = `Si${techName.replace(/[^a-zA-Z]/g, "")}`;
    return iconMap[key] || iconMap[`Si${techName}`] || <span className="text-xs font-bold">{techName.slice(0, 2)}</span>;
  };

  return (
    <div id="projects" ref={containerRef} style={{ height: `${(FEATURED_PROJECTS.length + 1) * 100}vh`, position: "relative", zIndex: 4 }}>
    <section
      ref={sectionRef}
      className="portfolio-section bg-[#141414] relative"
    >
      <div className="flex h-full px-20 py-16">
        <div className="max-w-7xl w-full mx-auto flex flex-col justify-center">

          {/* Title + progress */}
          <div className="proj-el flex items-center gap-4 mb-2">
            <span className="section-number">04</span>
            <h2 className="text-3xl font-bold text-white tracking-tight">Projects</h2>
            <div className="flex-1 h-px bg-white/5 ml-4" />
            <span className="text-xs text-white/20 font-mono">
              {String(activeProject + 1).padStart(2, "0")} / {String(FEATURED_PROJECTS.length).padStart(2, "0")}
            </span>
          </div>

          {/* Progress bar */}
          <div className="proj-el w-full h-[2px] bg-white/5 mb-10 relative overflow-hidden rounded-full">
            <div
              className="absolute top-0 left-0 h-full bg-[#fe9004] rounded-full transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
              style={{
                width: `${((activeProject + 1) / FEATURED_PROJECTS.length) * 100}%`,
                boxShadow: "0 0 12px rgba(254,144,4,0.6)",
              }}
            />
          </div>

          {/* Main: big number | card with image */}
          <div className="proj-el grid grid-cols-12 gap-8 items-start">

            {/* Left: big flipping number + dots */}
            <div className="col-span-3 flex flex-col items-center">
              <div className="relative overflow-hidden h-[120px] w-full">
                <div
                  className="flex flex-col items-center transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
                  style={{ transform: `translateY(-${activeProject * 120}px)` }}
                >
                  {FEATURED_PROJECTS.map((_, i) => (
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

              <div className="flex gap-2 mt-4">
                {FEATURED_PROJECTS.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveProject(i)}
                    className="transition-all duration-500"
                    style={{
                      width: activeProject === i ? 24 : 8,
                      height: 8,
                      borderRadius: 4,
                      background: activeProject === i ? "#fe9004" : "rgba(255,255,255,0.08)",
                      boxShadow: activeProject === i ? "0 0 10px rgba(254,144,4,0.5)" : "none",
                    }}
                  />
                ))}
              </div>

              {/* Other projects below dots */}
              <div className="mt-8 w-full space-y-2">
                <span className="text-[10px] text-white/20 uppercase tracking-[0.15em]">More</span>
                {OTHER_PROJECTS.map((p) => (
                  <a key={p.title} href={p.link} target="_blank" rel="noopener noreferrer"
                    className="flex items-center justify-between p-2 border border-white/5 rounded-sm hover:border-[#fe9004]/20 transition-all group text-xs">
                    <span className="text-white/50 group-hover:text-white transition-colors">{p.title}</span>
                    <Github size={10} className="text-white/15 group-hover:text-[#fe9004] transition-colors" />
                  </a>
                ))}
              </div>
            </div>

            {/* Right: project card — no remount, content swaps in place */}
            <div key={activeProject} className="col-span-9 border border-white/5 bg-[#1a1a1a] rounded-sm overflow-hidden" style={{ animation: "contentSwap 0.5s cubic-bezier(0.22, 1, 0.36, 1)" }}>
              {/* Image area */}
              <div className="relative h-52 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-opacity duration-300"
                />
                <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, transparent 30%, #1a1a1a)" }} />
                <span className="absolute top-4 right-4 text-xs text-[#fe9004] border border-[#fe9004]/30 px-3 py-1 rounded-full bg-black/50 font-medium">
                  {project.tag}
                </span>
              </div>

              {/* Content */}
              <div className="p-8 space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-bold text-white tracking-tight">{project.title}</h3>
                  <a href={project.link} target="_blank" rel="noopener noreferrer"
                    className="text-white/30 hover:text-[#fe9004] transition-colors">
                    <ExternalLink size={18} />
                  </a>
                </div>
                <p className="text-white/55 text-sm leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tech.map((t) => (
                    <span key={t} className="tech-pill">
                      <span className="text-sm leading-none">{getTechIcon(t)}</span>
                      {t}
                    </span>
                  ))}
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
