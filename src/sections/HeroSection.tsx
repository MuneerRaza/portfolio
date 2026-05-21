import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { PROFILE_IMAGE } from "../data/portfolio";

gsap.registerPlugin(ScrollTrigger);

export default function HeroSection() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.15 });
      tl.from(".h-photo", { clipPath: "inset(100% 0% 0% 0%)", duration: 1.1, ease: "power4.out" }, 0)
        .from(".h-line span", {
          yPercent: 115,
          duration: 1.05,
          ease: "power4.out",
          stagger: 0.12,
        }, 0.1)
        .from(".h-eyebrow", { opacity: 0, y: 16, duration: 0.7 }, 0.25)
        .from(".h-sub", { opacity: 0, y: 22, duration: 0.8 }, "-=0.5")
        .from(".h-cta", { opacity: 0, y: 18, duration: 0.7, stagger: 0.1 }, "-=0.5");

      // content drifts up + fades as the hero leaves
      gsap.to(".h-parallax", {
        yPercent: -18,
        opacity: 0.25,
        ease: "none",
        scrollTrigger: { trigger: ref.current, start: "top top", end: "bottom top", scrub: 0.5 },
      });
      // photo parallax within its frame
      gsap.fromTo(
        ".h-photo-img",
        { yPercent: -7 },
        {
          yPercent: 7,
          ease: "none",
          scrollTrigger: { trigger: ref.current, start: "top top", end: "bottom top", scrub: 0.5 },
        }
      );
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="hero"
      ref={ref}
      className="relative z-10 min-h-screen w-full overflow-hidden"
    >
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 min-h-screen flex items-center pt-28 pb-20">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center w-full">
          {/* text */}
          <div className="h-parallax lg:col-span-7 order-2 lg:order-1">
            <p className="h-eyebrow mono text-[11px] text-accent mb-6 flex items-center gap-3">
              <span className="inline-block w-8 h-px bg-accent" />
              Portfolio 2026 · AI / LLM Engineer
            </p>

            <h1 className="display text-ink" style={{ fontSize: "clamp(3rem, 8.6vw, 8rem)" }}>
              <span className="h-line block overflow-hidden">
                <span className="block">Muneer</span>
              </span>
              <span className="h-line block overflow-hidden">
                <span className="block">
                  Raza<span className="text-accent">.</span>
                </span>
              </span>
            </h1>

            <p className="h-sub mt-7 max-w-lg text-[16px] md:text-[17px] leading-relaxed text-ink-soft">
              AI Engineer at <span className="text-ink font-semibold">REDLUMB</span>. I build
              production AI systems: agentic workflows, LLM inference, and the
              infrastructure that makes them fast.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <button
                onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
                className="h-cta mono text-[11px] px-6 py-3.5 bg-ink text-paper rounded-full hover:bg-accent transition-colors"
              >
                View selected work
              </button>
              <button
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                className="h-cta mono text-[11px] px-6 py-3.5 border border-ink/25 rounded-full hover:border-ink transition-colors"
              >
                Get in touch
              </button>
            </div>
          </div>

          {/* photo */}
          <div className="lg:col-span-5 order-1 lg:order-2">
            <div className="h-photo relative w-[260px] sm:w-[320px] lg:w-full lg:max-w-[400px] mx-auto lg:ml-auto">
              <div
                className="absolute -bottom-3.5 -right-3.5 w-full h-full border border-accent"
                aria-hidden="true"
              />
              <div className="relative overflow-hidden aspect-[4/5]">
                <img
                  src={PROFILE_IMAGE}
                  alt="Muneer Raza"
                  className="h-photo-img absolute inset-x-0 -top-[8%] w-full h-[116%] object-cover grayscale-[0.12]"
                />
              </div>
              <div className="relative mt-3 flex items-center justify-between">
                <span className="mono text-[10px] text-ink-soft">Muneer Raza</span>
                <span className="mono text-[10px] text-ink-soft">Karachi, PK</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
