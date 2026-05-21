export default function SectionHead({
  index,
  label,
  title,
  dark = false,
}: {
  index: string;
  label: string;
  title: string;
  dark?: boolean;
}) {
  return (
    <div className="relative mb-14 md:mb-20">
      {/* oversized watermark digit — drifts on scroll (parallax) */}
      <span
        aria-hidden="true"
        data-parallax="130"
        className="pointer-events-none select-none absolute right-0 -top-[0.35em] font-display font-extrabold leading-none"
        style={{
          fontSize: "clamp(7rem, 19vw, 17rem)",
          color: dark ? "rgba(242,240,234,0.055)" : "rgba(21,18,12,0.05)",
          letterSpacing: "-0.05em",
        }}
      >
        {index}
      </span>

      <div data-reveal className="relative flex items-center gap-4 mb-6">
        <span className="mono text-[11px] text-accent">({index})</span>
        <span className={`mono text-[11px] ${dark ? "text-paper/60" : "text-ink-soft"}`}>
          {label}
        </span>
        <span className={`flex-1 h-px ${dark ? "bg-paper/20" : "bg-ink/15"}`} />
      </div>
      <h2
        data-reveal
        className={`relative display ${dark ? "text-paper" : "text-ink"}`}
        style={{ fontSize: "clamp(2.4rem, 6vw, 5.4rem)" }}
      >
        {title}
      </h2>
    </div>
  );
}
