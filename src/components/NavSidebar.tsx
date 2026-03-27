import { NAV_SECTIONS } from "@/data/portfolio";

interface NavSidebarProps {
  activeSection: number;
  onNavigate: (index: number) => void;
}

export default function NavSidebar({ activeSection, onNavigate }: NavSidebarProps) {
  return (
    <>
      <nav className="nav-sidebar">
        {NAV_SECTIONS.map((section, i) => (
          <button
            key={section.id}
            className={`nav-dot ${activeSection === i ? "active" : ""}`}
            onClick={() => onNavigate(i)}
            aria-label={section.label}
          >
            <span className="nav-tooltip">{section.label}</span>
          </button>
        ))}
      </nav>
      <div className="right-sidebar">
        <a
          href="https://github.com/MuneerRaza"
          target="_blank"
          rel="noopener noreferrer"
          className="vertical-text hover:text-[#fe9004] transition-colors"
        >
          GitHub
        </a>
        <div style={{ width: 1, height: 60, background: "rgba(255,255,255,0.08)" }} />
        <a
          href="https://linkedin.com/in/muneer-raza-"
          target="_blank"
          rel="noopener noreferrer"
          className="vertical-text hover:text-[#fe9004] transition-colors"
        >
          LinkedIn
        </a>
        <div style={{ width: 1, height: 60, background: "rgba(255,255,255,0.08)" }} />
        <span className="vertical-text">Karachi, PK</span>
      </div>
    </>
  );
}
