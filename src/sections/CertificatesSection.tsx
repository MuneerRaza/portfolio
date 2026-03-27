import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CERTIFICATES } from "@/data/portfolio";
import Lightbox from "@/components/Lightbox";

gsap.registerPlugin(ScrollTrigger);

export default function CertificatesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [lightbox, setLightbox] = useState<{ open: boolean; index: number }>({
    open: false,
    index: 0,
  });

  useEffect(() => {
    if (!sectionRef.current) return;
    const ctx = gsap.context(() => {
      gsap.from(".cert-animate", {
        y: 30,
        opacity: 0,
        duration: 0.6,
        stagger: 0.05,
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
      id="certificates"
      ref={sectionRef}
      className="portfolio-section bg-[#121212] relative overflow-hidden"
      style={{ zIndex: 9 }}
    >
      <div className="flex flex-col h-full px-20 py-16">
        <div className="max-w-6xl w-full mx-auto space-y-10">
          <div className="cert-animate flex items-baseline gap-4">
            <span className="section-number">09</span>
            <h2 className="text-4xl font-bold text-white tracking-tight">Certificates</h2>
            <div className="flex-1 h-px bg-white/5 ml-4" />
          </div>

          <div className="grid grid-cols-4 gap-4">
            {CERTIFICATES.map((cert, i) => (
              <button
                key={i}
                className="cert-animate card-glow border border-white/5 bg-[#1a1a1a] rounded-sm overflow-hidden text-left group"
                onClick={() => setLightbox({ open: true, index: i })}
              >
                <div className="relative overflow-hidden h-28">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div
                    className="absolute inset-0"
                    style={{ background: "linear-gradient(to top, rgba(18,18,18,0.8), transparent 60%)" }}
                  />
                </div>
                <div className="p-3">
                  <div className="text-xs text-white/60 font-medium leading-snug">{cert.title}</div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {lightbox.open && (
        <Lightbox
          images={[CERTIFICATES[lightbox.index].image]}
          currentIndex={0}
          onClose={() => setLightbox((l) => ({ ...l, open: false }))}
          onPrev={() => {}}
          onNext={() => {}}
          title={CERTIFICATES[lightbox.index].title}
        />
      )}
    </section>
  );
}
