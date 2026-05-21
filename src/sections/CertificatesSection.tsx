import { useRef, useState } from "react";
import { useReveal } from "../lib/reveal";
import SectionHead from "../components/SectionHead";
import Lightbox from "../components/Lightbox";
import { CERTIFICATES } from "../data/portfolio";

export default function CertificatesSection() {
  const ref = useRef<HTMLElement>(null);
  useReveal(ref);
  const [active, setActive] = useState<string | null>(null);

  return (
    <section id="certificates" ref={ref} className="panel-light">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 py-28 md:py-36">
        <SectionHead index="08" label="Credentials" title="Certificates." />

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-4">
          {CERTIFICATES.map((c) => (
            <button
              key={c.title}
              data-reveal
              onClick={() => setActive(c.images[0])}
              className="group text-left"
            >
              <div className="relative overflow-hidden border border-ink/15 aspect-[4/3] bg-paper">
                <img
                  src={c.images[0]}
                  alt={c.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="mt-2.5 mono text-[10px] text-ink-soft leading-snug group-hover:text-accent transition-colors">
                {c.title}
              </div>
            </button>
          ))}
        </div>
      </div>
      <Lightbox src={active} onClose={() => setActive(null)} />
    </section>
  );
}
