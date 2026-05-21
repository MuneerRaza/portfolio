import { useRef } from "react";
import { ArrowUpRight, ArrowUp } from "lucide-react";
import { useReveal } from "../lib/reveal";

const CONTACTS = [
  { label: "Email", value: "muneer.raza098@gmail.com", href: "mailto:muneer.raza098@gmail.com" },
  { label: "GitHub", value: "github.com/MuneerRaza", href: "https://github.com/MuneerRaza" },
  { label: "LinkedIn", value: "linkedin.com/in/muneer-raza-", href: "https://linkedin.com/in/muneer-raza-" },
  { label: "Phone", value: "+92 319 7697663", href: "tel:+923197697663" },
];

export default function ContactSection() {
  const ref = useRef<HTMLElement>(null);
  useReveal(ref);

  return (
    <section id="contact" ref={ref} className="panel-dark text-paper">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 pt-28 md:pt-36 pb-10">
        <div data-reveal className="flex items-center gap-4 mb-10">
          <span className="mono text-[11px] text-accent">(09)</span>
          <span className="mono text-[11px] text-paper/60">Contact</span>
          <span className="flex-1 h-px bg-paper/20" />
        </div>

        <h2 data-reveal className="display text-paper" style={{ fontSize: "clamp(3rem, 11vw, 10rem)" }}>
          Let's<br />
          connect<span className="text-accent">.</span>
        </h2>

        <p data-reveal className="mt-8 max-w-lg text-[16px] text-paper/60 leading-relaxed">
          Open to AI engineering roles, agentic systems & LLM infrastructure work, and
          research collaborations. I'd be glad to talk.
        </p>

        <div className="mt-14 border-t border-paper/15">
          {CONTACTS.map((c) => (
            <a
              key={c.label}
              href={c.href}
              target={c.href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              data-reveal
              className="group flex items-center gap-4 py-6 border-b border-paper/15 hover:px-3 transition-all duration-300"
            >
              <span className="mono text-[10px] text-paper/40 w-20 md:w-24 shrink-0">{c.label}</span>
              <span className="font-display font-bold text-lg md:text-3xl flex-1 group-hover:text-accent transition-colors break-all">
                {c.value}
              </span>
              <ArrowUpRight
                className="text-paper/40 group-hover:text-accent group-hover:-translate-y-1 group-hover:translate-x-1 transition-all shrink-0"
                size={24}
              />
            </a>
          ))}
        </div>

        <div className="mt-16 flex flex-col md:flex-row md:items-center justify-between gap-5">
          <div className="mono text-[10px] text-paper/40">© 2026 Muneer Raza · AI Engineer</div>
          <div className="mono text-[10px] text-paper/40">Built with React, Three.js & GSAP</div>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="group flex items-center gap-2 mono text-[10px] text-paper/60 hover:text-accent transition-colors"
          >
            Back to top
            <span className="grid place-items-center w-7 h-7 rounded-full border border-paper/25 group-hover:border-accent transition-colors">
              <ArrowUp size={12} />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
