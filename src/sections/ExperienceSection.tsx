import { useRef } from "react";
import { useReveal } from "../lib/reveal";
import SectionHead from "../components/SectionHead";
import { EXPERIENCE } from "../data/portfolio";

export default function ExperienceSection() {
  const ref = useRef<HTMLElement>(null);
  useReveal(ref);

  return (
    <section id="experience" ref={ref} className="panel-light">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 py-28 md:py-36">
        <SectionHead index="02" label="Experience" title="Where I've worked." />

        <div className="border-t border-ink/15">
          {EXPERIENCE.map((job, i) => (
            <div
              key={i}
              data-reveal
              className="group grid md:grid-cols-12 gap-5 md:gap-10 py-9 md:py-11 px-3 -mx-3 border-b border-ink/15 hover:bg-card transition-colors duration-300"
            >
              <div className="md:col-span-3">
                <div className="mono text-[11px] text-accent">{job.period}</div>
                <div className="mono text-[10px] text-ink-faint mt-2">{job.location}</div>
              </div>
              <div className="md:col-span-9">
                <div className="flex items-baseline gap-3 flex-wrap">
                  <h3 className="font-display font-bold text-2xl md:text-[2.6rem] leading-none group-hover:text-accent transition-colors">
                    {job.role}
                  </h3>
                </div>
                <div className="mono text-[12px] text-ink-soft mt-2">{job.company}</div>
                <ul className="mt-5 space-y-2.5 max-w-3xl">
                  {job.points.map((p, j) => (
                    <li key={j} className="flex gap-3 text-[15px] text-ink-soft leading-relaxed">
                      <span className="mt-[9px] shrink-0 w-1.5 h-1.5 rounded-full bg-accent" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
