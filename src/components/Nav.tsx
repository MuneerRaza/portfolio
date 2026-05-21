import { useEffect, useState } from "react";

const LINKS = [
  { label: "About", id: "about" },
  { label: "Work", id: "projects" },
  { label: "Research", id: "publication" },
  { label: "Stack", id: "techstack" },
];

function go(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export default function Nav() {
  const [solid, setSolid] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > window.innerHeight * 0.6);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="fixed top-0 inset-x-0 z-[500] transition-all duration-500"
      style={{
        background: solid ? "rgba(242,240,234,0.85)" : "transparent",
        backdropFilter: solid ? "blur(10px)" : "none",
        borderBottom: solid ? "1px solid rgba(21,18,12,0.1)" : "1px solid transparent",
      }}
    >
      <nav className="mx-auto max-w-[1400px] px-6 md:px-10 h-[68px] flex items-center justify-between">
        <button onClick={() => go("hero")} className="flex items-center gap-2.5 group" aria-label="Home">
          <span className="grid place-items-center w-7 h-7 bg-ink text-paper font-display font-extrabold text-sm rounded-[5px] group-hover:bg-accent transition-colors">
            M
          </span>
          <span className="font-display font-bold text-[15px] tracking-tight">Muneer Raza</span>
        </button>

        <div className="hidden md:flex items-center gap-8">
          {LINKS.map((l) => (
            <button
              key={l.id}
              onClick={() => go(l.id)}
              className="mono text-[11px] text-ink-soft hover:text-ink link-sweep"
            >
              {l.label}
            </button>
          ))}
        </div>

        <button
          onClick={() => go("contact")}
          className="mono text-[11px] px-4 py-2 bg-ink text-paper rounded-full hover:bg-accent transition-colors"
        >
          Get in touch
        </button>
      </nav>
    </header>
  );
}
