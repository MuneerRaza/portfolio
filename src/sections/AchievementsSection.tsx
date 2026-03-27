import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ACHIEVEMENTS } from "@/data/portfolio";
import Lightbox from "@/components/Lightbox";

gsap.registerPlugin(ScrollTrigger);

export default function AchievementsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [lightbox, setLightbox] = useState<{ open: boolean; index: number; imgIndex: number }>({
    open: false,
    index: 0,
    imgIndex: 0,
  });

  useEffect(() => {
    if (!sectionRef.current) return;
    const ctx = gsap.context(() => {
      gsap.from(".ach-animate", {
        y: 30,
        opacity: 0,
        duration: 0.6,
        stagger: 0.06,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const openLightbox = (index: number) => {
    setLightbox({ open: true, index, imgIndex: 0 });
  };

  const closeLightbox = () => setLightbox((l) => ({ ...l, open: false }));

  const prevImg = () =>
    setLightbox((l) => ({ ...l, imgIndex: Math.max(0, l.imgIndex - 1) }));

  const nextImg = () =>
    setLightbox((l) => ({ ...l, imgIndex: Math.min(0, l.imgIndex + 1) }));

  const currentAchievement = ACHIEVEMENTS[lightbox.index];

  return (
    <section
      id="achievements"
      ref={sectionRef}
      className="portfolio-section bg-[#121212] relative overflow-hidden"
      style={{ zIndex: 7 }}
    >
      <div className="flex flex-col h-full px-20 py-16">
        <div className="max-w-6xl w-full mx-auto space-y-10">
          <div className="ach-animate flex items-baseline gap-4">
            <span className="section-number">07</span>
            <h2 className="text-4xl font-bold text-white tracking-tight">Achievements</h2>
            <div className="flex-1 h-px bg-white/5 ml-4" />
          </div>

          <div className="grid grid-cols-4 gap-4">
            {ACHIEVEMENTS.map((ach, i) => (
              <button
                key={i}
                className="ach-animate card-glow border border-white/5 bg-[#1a1a1a] rounded-sm overflow-hidden text-left group"
                onClick={() => openLightbox(i)}
              >
                <div className="relative overflow-hidden h-36">
                  <img
                    src={ach.image}
                    alt={ach.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div
                    className="absolute inset-0"
                    style={{ background: "linear-gradient(to top, rgba(18,18,18,0.9), transparent 60%)" }}
                  />
                </div>
                <div className="p-4">
                  <div className="text-xs text-[#fe9004] font-semibold tracking-wide">{ach.result}</div>
                  <div className="text-sm text-white/80 mt-1 font-medium">{ach.title}</div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {lightbox.open && currentAchievement && (
        <Lightbox
          images={[currentAchievement.image]}
          currentIndex={lightbox.imgIndex}
          onClose={closeLightbox}
          onPrev={prevImg}
          onNext={nextImg}
          title={currentAchievement.title}
        />
      )}
    </section>
  );
}
