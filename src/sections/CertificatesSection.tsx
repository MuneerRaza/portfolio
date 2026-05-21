import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CERTIFICATES } from "@/data/portfolio";
import Lightbox from "@/components/Lightbox";

gsap.registerPlugin(ScrollTrigger);

export default function CertificatesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [lightbox, setLightbox] = useState<{ open: boolean; index: number; imgIndex: number }>({
    open: false,
    index: 0,
    imgIndex: 0,
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

  const currentImages = CERTIFICATES[lightbox.index]?.images || [];

  const prevImg = () =>
    setLightbox((l) => ({ ...l, imgIndex: (l.imgIndex - 1 + currentImages.length) % currentImages.length }));

  const nextImg = () =>
    setLightbox((l) => ({ ...l, imgIndex: (l.imgIndex + 1) % currentImages.length }));

  return (
    <section
      id="certificates"
      ref={sectionRef}
      className="portfolio-section bg-[#121212] relative overflow-hidden"
      style={{ zIndex: 9 }}
    >
      <div className="flex items-center h-full px-20 py-16">
        <div className="max-w-7xl w-full mx-auto space-y-10">
          <div className="cert-animate flex items-baseline gap-4">
            <span className="section-number">09</span>
            <h2 className="text-4xl font-bold text-white tracking-tight">Certificates</h2>
            <div className="flex-1 h-px bg-white/5 ml-4" />
          </div>

          <div className="grid grid-cols-4 gap-4">
            {CERTIFICATES.map((cert, i) => (
              <button
                key={i}
                className="cert-animate card-glow border border-white/5 bg-[#1a1a1a] rounded-sm overflow-hidden text-left group cursor-pointer"
                onClick={() => setLightbox({ open: true, index: i, imgIndex: 0 })}
              >
                <div className="relative overflow-hidden h-28">
                  <img
                    src={cert.images[0]}
                    alt={cert.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div
                    className="absolute inset-0"
                    style={{ background: "linear-gradient(to top, rgba(18,18,18,0.8), transparent 60%)" }}
                  />
                  {cert.images.length > 1 && (
                    <span className="absolute top-2 right-2 text-[9px] bg-black/60 border border-white/10 text-white/50 px-1.5 py-0.5 rounded">
                      {cert.images.length}
                    </span>
                  )}
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
          images={currentImages}
          currentIndex={lightbox.imgIndex}
          onClose={() => setLightbox((l) => ({ ...l, open: false }))}
          onPrev={prevImg}
          onNext={nextImg}
          title={CERTIFICATES[lightbox.index].title}
        />
      )}
    </section>
  );
}
