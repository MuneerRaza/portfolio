import { useRef, useState } from "react";
import { useReveal } from "../lib/reveal";
import SectionHead from "../components/SectionHead";
import Lightbox from "../components/Lightbox";
import { ACHIEVEMENTS } from "../data/portfolio";

export default function AchievementsSection() {
  const ref = useRef<HTMLElement>(null);
  useReveal(ref);
  const [active, setActive] = useState<string | null>(null);

  return (
    <section id="achievements" ref={ref} className="panel-light">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 py-28 md:py-36">
        <SectionHead index="07" label="Recognition" title="Wins & honors." />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5">
          {ACHIEVEMENTS.map((a) => (
            <button
              key={a.title}
              data-reveal
              onClick={() => setActive(a.images[0])}
              className="group text-left"
            >
              <div className="relative overflow-hidden border border-ink/15 aspect-[4/3] bg-paper-2">
                <img
                  src={a.images[0]}
                  alt={a.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-0 left-0 mono text-[9px] px-2 py-1 bg-accent text-paper">
                  {a.result}
                </span>
              </div>
              <div className="mt-3 font-display font-bold text-sm leading-tight group-hover:text-accent transition-colors">
                {a.title}
              </div>
            </button>
          ))}
        </div>
      </div>
      <Lightbox src={active} onClose={() => setActive(null)} />
    </section>
  );
}
