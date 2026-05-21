import { useEffect, RefObject } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/* Section scroll effects:
   - [data-reveal]   → element rises / slides in once on scroll
   - [data-reveal="left|right"] → slides from the side
   - [data-parallax="120"] → element drifts ±120px through the viewport (scrubbed) */
export function useReveal(ref: RefObject<HTMLElement | null>) {
  useEffect(() => {
    const root = ref.current;
    if (!root) return;
    const ctx = gsap.context(() => {
      root.querySelectorAll<HTMLElement>("[data-reveal]").forEach((el) => {
        const mode = el.dataset.reveal;
        gsap.from(el, {
          y: mode === "left" || mode === "right" ? 0 : 38,
          x: mode === "left" ? -44 : mode === "right" ? 44 : 0,
          opacity: 0,
          duration: 0.95,
          ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 90%" },
        });
      });

      root.querySelectorAll<HTMLElement>("[data-parallax]").forEach((el) => {
        const amt = parseFloat(el.dataset.parallax || "100");
        gsap.fromTo(
          el,
          { y: amt },
          {
            y: -amt,
            ease: "none",
            scrollTrigger: {
              trigger: el,
              start: "top bottom",
              end: "bottom top",
              scrub: 0.6,
            },
          }
        );
      });
    }, root);
    return () => ctx.revert();
  }, [ref]);
}
