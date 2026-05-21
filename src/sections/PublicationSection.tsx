import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ExternalLink } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function PublicationSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    const ctx = gsap.context(() => {
      gsap.from(".pub-animate", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
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
      id="publication"
      ref={sectionRef}
      className="portfolio-section bg-[#121212] relative"
      style={{ zIndex: 5 }}
    >
      <div className="flex items-center h-full px-20 py-16">
        <div className="max-w-7xl w-full mx-auto space-y-12">
          <div className="pub-animate flex items-baseline gap-4">
            <span className="section-number">05</span>
            <h2 className="text-4xl font-bold text-white tracking-tight">Publication</h2>
            <div className="flex-1 h-px bg-white/5 ml-4" />
          </div>

          <div className="pub-animate relative">
            <div
              className="card-glow p-10 border border-white/5 bg-[#1a1a1a] rounded-sm relative overflow-hidden"
            >
              {/* Orange accent line */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#fe9004] to-transparent opacity-40" />

              <div className="grid grid-cols-2 gap-12">
                <div className="space-y-6">
                  <div>
                    <span className="text-xs text-[#fe9004] font-medium tracking-wider uppercase">
                      Conference Paper — IACMC 2025
                    </span>
                    <h3 className="text-2xl font-bold text-white mt-3 leading-tight">
                      RADAR-Net: RAindrop Diffusion-Attention Restoration Network
                    </h3>
                  </div>
                  <p className="text-white/60 text-sm leading-relaxed">
                    Transformer-based diffusion model with multiscale attention mechanism for
                    high-quality raindrop removal from images. Achieves state-of-the-art
                    results on standard benchmarks.
                  </p>
                  <a
                    href="https://www.researchgate.net/publication/394032739"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#fe9004] text-[#121212] text-sm font-semibold rounded-sm hover:shadow-[0_0_20px_rgba(254,144,4,0.4)] transition-all"
                  >
                    Read Paper
                    <ExternalLink size={14} />
                  </a>
                </div>

                <div className="space-y-4">
                  <div className="text-xs text-white/30 uppercase tracking-wider font-medium mb-6">
                    Performance Metrics
                  </div>
                  {[
                    { label: "PSNR", value: "25.44 dB", desc: "Peak Signal-to-Noise Ratio" },
                    { label: "SSIM", value: "0.8532", desc: "Structural Similarity Index" },
                    { label: "RMSE", value: "0.0549", desc: "Root Mean Square Error" },
                  ].map((metric) => (
                    <div key={metric.label} className="flex items-center gap-6 p-4 border border-white/5 rounded-sm bg-[#222]">
                      <div className="w-16 text-xs text-[#fe9004] font-mono font-bold">{metric.label}</div>
                      <div className="text-2xl font-black text-white">{metric.value}</div>
                      <div className="text-xs text-white/30 ml-auto">{metric.desc}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
