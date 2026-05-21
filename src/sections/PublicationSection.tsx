import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import { useReveal } from "../lib/reveal";
import SectionHead from "../components/SectionHead";

const METRICS = [
  { k: "PSNR", v: "25.44", u: " dB", d: "Peak Signal-to-Noise Ratio" },
  { k: "SSIM", v: "0.8532", u: "", d: "Structural Similarity Index" },
  { k: "RMSE", v: "0.0549", u: "", d: "Root Mean Square Error" },
];

export default function PublicationSection() {
  const ref = useRef<HTMLElement>(null);
  useReveal(ref);

  return (
    <section id="publication" ref={ref} className="panel-dark text-paper">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 py-28 md:py-36">
        <SectionHead index="04" label="Research" title="Published work." dark />

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-7" data-reveal>
            <div className="mono text-[11px] text-accent mb-5">Conference Paper · IACMC 2025</div>
            <h3 className="font-display font-bold text-3xl md:text-[3rem] leading-[1.03] tracking-tight">
              RADAR-Net: RAindrop Diffusion-Attention Restoration Network
            </h3>
            <p className="mt-6 text-[15px] leading-relaxed text-paper/60 max-w-xl">
              A Transformer-based diffusion model with a multiscale attention mechanism
              and gated deconvolutional feed-forward design for robust raindrop removal
              from images. It outperforms existing methods on both synthetic and
              real-world benchmarks.
            </p>
            <a
              href="https://www.researchgate.net/publication/394032739"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 mt-8 px-6 py-3.5 bg-accent text-paper rounded-full mono text-[11px] hover:bg-paper hover:text-ink transition-colors"
            >
              Read the paper
              <ArrowUpRight size={15} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>

          <div data-reveal="right" className="lg:col-span-5 border border-paper/15">
            {METRICS.map((m) => (
              <div
                key={m.k}
                className="flex items-baseline gap-4 md:gap-6 px-6 py-6 border-b border-paper/15 last:border-b-0"
              >
                <div className="mono text-[11px] text-accent w-14 shrink-0">{m.k}</div>
                <div className="font-display font-extrabold text-3xl md:text-[2.6rem] leading-none">
                  {m.v}
                  <span className="text-base text-paper/40">{m.u}</span>
                </div>
                <div className="mono text-[9px] text-paper/40 ml-auto text-right hidden sm:block">
                  {m.d}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
