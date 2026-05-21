import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TECH_STACK } from "@/data/portfolio";
import {
  SiPytorch, SiTensorflow, SiOpencv, SiNumpy, SiPandas, SiScikitlearn,
  SiPython, SiDart, SiHuggingface, SiOllama,
  SiFastapi, SiFlask, SiFlutter, SiStreamlit,
  SiPostgresql, SiMongodb, SiSupabase, SiFirebase, SiDocker, SiGit, SiLinux,
  SiLangchain, SiSpacy,
} from "react-icons/si";

gsap.registerPlugin(ScrollTrigger);

export const iconMap: Record<string, React.ReactNode> = {
  SiPytorch: <SiPytorch />,
  SiTensorflow: <SiTensorflow />,
  SiOpencv: <SiOpencv />,
  SiNumpy: <SiNumpy />,
  SiPandas: <SiPandas />,
  SiScikitlearn: <SiScikitlearn />,
  SiPython: <SiPython />,
  SiDart: <SiDart />,
  SiCsharpCustom: <span className="text-[#fe9004] font-bold text-xs">C#</span>,
  SiJavaCustom: <span className="text-[#fe9004] font-bold text-xs">Java</span>,
  SiFastapi: <SiFastapi />,
  SiFlask: <SiFlask />,
  SiFlutter: <SiFlutter />,
  SiStreamlit: <SiStreamlit />,
  SiPostgresql: <SiPostgresql />,
  SiMongodb: <SiMongodb />,
  SiSupabase: <SiSupabase />,
  SiFirebase: <SiFirebase />,
  SiDocker: <SiDocker />,
  SiGit: <SiGit />,
  SiLinux: <SiLinux />,
  SiLangchain: <SiLangchain />,
  SiSpacy: <SiSpacy />,
  SiHuggingface: <SiHuggingface />,
  SiLlama: <span className="text-[#fe9004] font-bold text-xs">Li</span>,
  SiOllama: <SiOllama />,
  SiMlflow: <span className="text-[#fe9004] font-bold text-xs">ML</span>,
  SiPydantic: <span className="text-[#fe9004] font-bold text-xs">Py</span>,
  SiUltralytics: <span className="text-[#fe9004] font-bold text-xs">UL</span>,
  SiDiffusers: <span className="text-[#fe9004] font-bold text-xs">Di</span>,
  SiVllm: <span className="text-[#fe9004] font-bold text-xs">vL</span>,
  SiLlamacpp: <span className="text-[#fe9004] font-bold text-xs">cpp</span>,
  SiExllama: <span className="text-[#fe9004] font-bold text-xs">Ex</span>,
  SiFlashattn: <span className="text-[#fe9004] font-bold text-xs">FA</span>,
  SiTensorrt: <span className="text-[#fe9004] font-bold text-xs">RT</span>,
};

export default function TechStackSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    const ctx = gsap.context(() => {
      gsap.from(".tech-animate", {
        y: 30,
        opacity: 0,
        duration: 0.6,
        stagger: 0.08,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="techstack"
      ref={sectionRef}
      className="portfolio-section bg-[#141414] relative overflow-hidden"
      style={{ zIndex: 6 }}
    >
      <div className="flex items-center h-full px-20 py-16">
        <div className="max-w-7xl w-full mx-auto space-y-10">
          <div className="tech-animate flex items-baseline gap-4">
            <span className="section-number">06</span>
            <h2 className="text-4xl font-bold text-white tracking-tight">Tech Stack</h2>
            <div className="flex-1 h-px bg-white/5 ml-4" />
          </div>

          <div className="space-y-8">
            {TECH_STACK.map((category) => (
              <div key={category.category} className="tech-animate space-y-4">
                <div className="flex items-center gap-4">
                  <span className="text-xs text-[#fe9004] font-medium tracking-[0.2em] uppercase">
                    {category.category}
                  </span>
                  <div className="flex-1 h-px bg-white/5" />
                </div>
                <div className="flex flex-wrap gap-3">
                  {category.items.map((item) => (
                    <div
                      key={item.name}
                      className="card-glow flex items-center gap-2 px-4 py-3 border border-white/5 bg-[#1a1a1a] rounded-sm hover:border-[#fe9004]/20 transition-all"
                    >
                      <span className="text-[#fe9004] text-base">
                        {iconMap[item.icon] ?? <span className="text-xs font-bold">{item.name.slice(0, 2)}</span>}
                      </span>
                      <span className="text-white/70 text-sm font-medium">{item.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
