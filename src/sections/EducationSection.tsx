import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const COURSES = [
  "Generative AI", "Computer Vision", "NLP", "Deep Learning",
  "Machine Learning", "Neural Networks", "Recommender Systems",
  "DSA", "Probability & Stats", "Linear Algebra",
];

const INVOLVEMENTS = [
  "Teaching Assistant — Deep Learning for Perception",
  "Lab Assistant — Programming Fundamentals",
  "ProCom App Dev Head",
  "IEEE Volunteer",
  "Star Performer at TLC",
];

export default function EducationSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    const ctx = gsap.context(() => {
      gsap.from(".edu-animate", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
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
      id="education"
      ref={sectionRef}
      className="portfolio-section bg-[#141414] relative"
      style={{ zIndex: 8 }}
    >
      <div className="flex items-center h-full px-20 py-16">
        <div className="max-w-6xl w-full mx-auto space-y-12">
          <div className="edu-animate flex items-baseline gap-4">
            <span className="section-number">08</span>
            <h2 className="text-4xl font-bold text-white tracking-tight">Education</h2>
            <div className="flex-1 h-px bg-white/5 ml-4" />
          </div>

          <div className="grid grid-cols-2 gap-10">
            <div className="edu-animate space-y-6">
              <div className="card-glow p-8 border border-white/5 bg-[#1a1a1a] rounded-sm relative overflow-hidden">
                <div className="absolute top-0 left-0 bottom-0 w-1 bg-[#fe9004]" />
                <div className="pl-6 space-y-4">
                  <div>
                    <div className="text-xs text-[#fe9004] tracking-widest uppercase font-medium mb-2">
                      2021 — 2025
                    </div>
                    <h3 className="text-xl font-bold text-white">BS Artificial Intelligence</h3>
                    <p className="text-white/60 text-sm mt-1">FAST-NUCES, Karachi, Pakistan</p>
                  </div>
                  <div className="w-8 h-px bg-[#fe9004]/30" />
                  <div className="grid grid-cols-3 gap-4">
                    {[
                      { value: "3.60", label: "CGPA" },
                      { value: "3rd / 60", label: "Batch Rank" },
                      { value: "Cum Laude", label: "Honor" },
                    ].map((s) => (
                      <div key={s.label}>
                        <div className="text-lg font-black text-[#fe9004]">{s.value}</div>
                        <div className="text-xs text-white/30 mt-0.5">{s.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="edu-animate space-y-3">
                <div className="text-xs text-white/30 uppercase tracking-wider">Involvement</div>
                {INVOLVEMENTS.map((item) => (
                  <div key={item} className="flex gap-3 items-start">
                    <span className="text-[#fe9004] mt-1.5 shrink-0">
                      <svg width="5" height="5" viewBox="0 0 5 5" fill="currentColor">
                        <circle cx="2.5" cy="2.5" r="2.5" />
                      </svg>
                    </span>
                    <span className="text-white/60 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="edu-animate space-y-4">
              <div className="text-xs text-white/30 uppercase tracking-wider">Key Coursework</div>
              <div className="flex flex-wrap gap-2">
                {COURSES.map((course) => (
                  <span
                    key={course}
                    className="px-3 py-2 border border-white/5 bg-[#1a1a1a] text-white/60 text-sm rounded-sm hover:border-[#fe9004]/20 hover:text-white transition-all"
                  >
                    {course}
                  </span>
                ))}
              </div>

              <div className="mt-6 p-6 border border-[#fe9004]/10 bg-[#fe9004]/5 rounded-sm">
                <div className="text-xs text-[#fe9004] font-medium tracking-wider uppercase mb-3">
                  IELTS Academic
                </div>
                <div className="text-4xl font-black text-white">7.0</div>
                <div className="text-white/40 text-sm mt-1">Band Score</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
