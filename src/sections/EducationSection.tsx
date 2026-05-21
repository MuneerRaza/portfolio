import { useRef } from "react";
import { useReveal } from "../lib/reveal";
import SectionHead from "../components/SectionHead";

const COURSES = [
  "Generative AI", "Computer Vision", "Natural Language Processing", "Deep Learning",
  "Machine Learning", "Artificial Neural Networks", "Recommender Systems",
  "Data Structures & Algorithms", "Probability & Statistics", "Linear Algebra",
];

const INVOLVEMENT = [
  "Teaching Assistant, Deep Learning for Perception",
  "Lab Assistant, Programming Fundamentals",
  "App Development Head, ProCom",
  "IEEE Volunteer",
  "Star Performer, TLC Event",
];

export default function EducationSection() {
  const ref = useRef<HTMLElement>(null);
  useReveal(ref);

  return (
    <section id="education" ref={ref} className="panel-light">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 py-28 md:py-36">
        <SectionHead index="05" label="Education" title="Foundations." />

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          {/* degree */}
          <div className="lg:col-span-7">
            <div data-reveal className="border-t-2 border-ink pt-7">
              <div className="mono text-[11px] text-accent mb-3">2021–2025</div>
              <h3 className="font-display font-bold text-3xl md:text-[3rem] leading-[0.98] tracking-tight">
                BS Artificial Intelligence
              </h3>
              <div className="mono text-[12px] text-ink-soft mt-3">
                FAST National University (FAST-NUCES), Karachi
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-px mt-8 bg-ink/15 border border-ink/15">
                {[
                  { v: "3.60", l: "CGPA / 4.0" },
                  { v: "3rd", l: "of 60, Cum Laude" },
                  { v: "7.0", l: "IELTS Academic" },
                  { v: "4 yrs", l: "Full-time" },
                ].map((s) => (
                  <div key={s.l} className="bg-paper p-5">
                    <div className="font-display font-extrabold text-2xl md:text-3xl">{s.v}</div>
                    <div className="mono text-[9px] text-ink-soft mt-1.5 leading-snug">{s.l}</div>
                  </div>
                ))}
              </div>
            </div>

            <div data-reveal className="mt-12">
              <div className="mono text-[11px] text-ink-soft mb-5">Involvement & Leadership</div>
              <ul className="space-y-3">
                {INVOLVEMENT.map((it) => (
                  <li key={it} className="flex gap-3 text-[15px] text-ink-soft items-start">
                    <span className="mt-[9px] shrink-0 w-1.5 h-1.5 rounded-full bg-accent" />
                    {it}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* coursework */}
          <div data-reveal="right" className="lg:col-span-5">
            <div className="mono text-[11px] text-ink-soft mb-5">Key Coursework</div>
            <div className="flex flex-wrap gap-2.5">
              {COURSES.map((c) => (
                <span
                  key={c}
                  className="font-display font-semibold text-sm px-4 py-2.5 border border-ink/20 rounded-full hover:border-accent hover:text-accent transition-colors"
                >
                  {c}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
