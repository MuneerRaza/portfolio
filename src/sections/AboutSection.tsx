import { useRef } from "react";
import { useReveal } from "../lib/reveal";
import SectionHead from "../components/SectionHead";

const FACTS = [
  { v: "3.60", l: "CGPA, Cum Laude" },
  { v: "3rd", l: "Batch Rank / 60" },
  { v: "01", l: "Publication, IACMC 2025" },
  { v: "7.0", l: "IELTS Academic" },
];

export default function AboutSection() {
  const ref = useRef<HTMLElement>(null);
  useReveal(ref);

  return (
    <section id="about" ref={ref} className="panel-light">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 py-28 md:py-36">
        <SectionHead index="01" label="About" title="Engineer, builder, researcher." />

        <p
          data-reveal
          className="font-display font-medium text-2xl md:text-[2.15rem] leading-[1.24] tracking-tight max-w-[58rem]"
        >
          I'm an AI Engineer at REDLUMB, building agentic AI workflows into mobile
          apps. Before that, at Softec Worldwide, I built multi-agent systems,
          deployed open-source LLMs locally, and ran production ML pipelines.
        </p>

        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 mt-12">
          <p data-reveal className="lg:col-span-6 text-[16px] leading-relaxed text-ink-soft">
            I graduated Cum Laude in Artificial Intelligence from FAST-NUCES, ranked
            3rd of 60, and published RADAR-Net at IACMC 2025. Along the way I've won
            several national AI competitions. My focus is making large models
            genuinely fast and useful in production.
          </p>

          <div className="lg:col-span-6">
            <div
              data-reveal
              className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 gap-px bg-ink/15 border border-ink/15"
            >
              {FACTS.map((f) => (
                <div key={f.l} className="bg-paper p-6">
                  <div className="font-display font-extrabold text-3xl md:text-4xl text-ink">{f.v}</div>
                  <div className="mono text-[10px] text-ink-soft mt-2 leading-snug">{f.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
