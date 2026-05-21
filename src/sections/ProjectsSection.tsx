import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import { useReveal } from "../lib/reveal";
import SectionHead from "../components/SectionHead";
import { FEATURED_PROJECTS, OTHER_PROJECTS } from "../data/portfolio";

export default function ProjectsSection() {
  const ref = useRef<HTMLElement>(null);
  useReveal(ref);

  return (
    <section id="projects" ref={ref} className="panel-light">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 py-28 md:py-36">
        <SectionHead index="03" label="Selected Work" title="Projects I've built." />

        <div className="border-t border-ink/15">
          {FEATURED_PROJECTS.map((p, i) => (
            <a
              key={p.title}
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              data-reveal
              className="group block py-10 md:py-12 px-3 -mx-3 border-b border-ink/15 hover:bg-card transition-colors duration-300"
            >
              <div className="grid md:grid-cols-12 gap-5 md:gap-8 items-start">
                <div className="md:col-span-1 mono text-[12px] text-ink-faint pt-2">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div className="md:col-span-7">
                  <h3 className="font-display font-bold text-3xl md:text-[3.4rem] leading-[0.95] tracking-tight flex items-start gap-3">
                    <span className="group-hover:text-accent transition-colors">{p.title}</span>
                    <ArrowUpRight
                      className="mt-1 md:mt-2 shrink-0 text-ink-faint group-hover:text-accent group-hover:translate-x-1 group-hover:-translate-y-1 transition-all"
                      size={26}
                    />
                  </h3>
                  <p className="mt-4 text-[15px] text-ink-soft leading-relaxed max-w-xl">
                    {p.description}
                  </p>
                </div>
                <div className="md:col-span-4">
                  <div className="mono text-[11px] text-accent mb-3">{p.tag}</div>
                  <div className="flex flex-wrap gap-2">
                    {p.tech.map((t) => (
                      <span
                        key={t}
                        className="mono text-[10px] px-2.5 py-1 border border-ink/25 rounded-full text-ink-soft"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* other projects */}
        <div data-reveal className="mt-14">
          <div className="mono text-[11px] text-ink-soft mb-5">More on GitHub</div>
          <div className="flex flex-wrap gap-3">
            {OTHER_PROJECTS.map((o) => (
              <a
                key={o.title}
                href={o.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 px-4 py-2.5 border border-ink/20 rounded-full hover:border-ink hover:bg-ink hover:text-paper transition-all"
              >
                <span className="font-display font-semibold text-sm">{o.title}</span>
                <ArrowUpRight size={14} className="text-ink-faint group-hover:text-paper transition-colors" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
