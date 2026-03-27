import { useEffect, useState, useCallback } from "react";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import NavSidebar from "@/components/NavSidebar";
import HeroSection from "@/sections/HeroSection";
import AboutSection from "@/sections/AboutSection";
import ExperienceSection from "@/sections/ExperienceSection";
import ProjectsSection from "@/sections/ProjectsSection";
import PublicationSection from "@/sections/PublicationSection";
import TechStackSection from "@/sections/TechStackSection";
import AchievementsSection from "@/sections/AchievementsSection";
import EducationSection from "@/sections/EducationSection";
import CertificatesSection from "@/sections/CertificatesSection";
import ContactSection from "@/sections/ContactSection";

gsap.registerPlugin(ScrollTrigger);

const SECTION_IDS = [
  "hero", "about", "experience", "projects", "publication",
  "techstack", "achievements", "education", "certificates", "contact",
];

// Global lenis reference for sections to pause/resume
declare global {
  interface Window { __lenis?: Lenis; }
}

export default function App() {
  const [activeSection, setActiveSection] = useState(0);
  const [showMinibar, setShowMinibar] = useState(false);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.4,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    window.__lenis = lenis;

    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add((time) => lenis.raf(time * 1000));
    gsap.ticker.lagSmoothing(0);

    lenis.on("scroll", () => {
      SECTION_IDS.forEach((id, i) => {
        const el = document.getElementById(id);
        if (!el) return;
        const rect = el.getBoundingClientRect();
        if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
          setActiveSection(i);
        }
      });
      setShowMinibar(window.scrollY > window.innerHeight * 0.5);
    });

    // Hero → Navbar MORPH: actual hero elements shrink and move up to become the navbar
    const ctx = gsap.context(() => {
      const aboutSection = document.getElementById("about");
      if (aboutSection) {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: aboutSection,
            start: "top bottom",
            end: "top top",
            scrub: true,
          }
        });

        // Calculate positions dynamically
        const nameEl = document.getElementById("hero-name");
        const nameRect = nameEl?.getBoundingClientRect();
        const nameTop = nameRect ? nameRect.top : 188;
        // With scale 0.3 + transformOrigin "left top", scaled name is ~25px tall
        // Target: name top at ~16px (centered in 56px bar)
        const nameY = -(nameTop - 16) + 60;

        const subtitleEl = document.getElementById("hero-subtitle");
        const subtitleRect = subtitleEl?.getBoundingClientRect();
        const subtitleTop = subtitleRect ? subtitleRect.top : 280;
        // Target: subtitle at ~20px from top
        const subtitleY = -(subtitleTop - 20) + 30;

        // Hide PORTFOLIO label
        tl.to("#hero-portfolio-label", { opacity: 0, ease: "none", duration: 0.3 }, 0);

        // Move NAME directly to navbar position + scale down
        tl.to("#hero-name", { y: nameY, scale: 0.3, transformOrigin: "left top", ease: "none" }, 0);

        // Fade out subtitle (only name goes to navbar, not subtitle)
        tl.to("#hero-subtitle", { opacity: 0, ease: "none", duration: 0.4 }, 0);

        // Fade out extra content + image early
        tl.to("#hero-extra-content", { opacity: 0, ease: "none", duration: 0.5 }, 0);
        tl.to("#hero-extra-image", { opacity: 0, ease: "none", duration: 0.5 }, 0);

        // Shrink container + add navbar styling
        tl.to("#global-hero-content", {
          height: 56,
          backgroundColor: "rgba(18, 18, 18, 0.92)",
          backdropFilter: "blur(16px) saturate(1.5)",
          borderBottom: "1px solid rgba(254, 144, 4, 0.1)",
          ease: "none"
        }, 0);

        // Show social links in navbar (in second half)
        tl.to("#hero-socials", { opacity: 1, ease: "none" }, 0.5);
      }
    });

    return () => { 
      ctx.revert();
      lenis.destroy(); 
      window.__lenis = undefined; 
    };
  }, []);

  const navigateToSection = useCallback((index: number) => {
    const el = document.getElementById(SECTION_IDS[index]);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <>
      <div className="grain" aria-hidden="true" />
      <div className="top-glow-bar" aria-hidden="true" />
      <div className="grid-lines" aria-hidden="true" />

      {/* Global Hero / Minibar — ALL hero content lives here, morphs into navbar on scroll */}
      <div
        id="global-hero-content"
        className="fixed top-0 left-0 right-0 pointer-events-none z-[100] overflow-hidden"
        style={{ height: "100vh" }}
      >
        <div id="hero-transform-wrapper" className="flex items-center w-full px-20 relative h-[100vh]">
          <div className="flex flex-col lg:flex-row items-center gap-16 max-w-6xl w-full mx-auto pl-[25px]">
            {/* Left column: name + extra content */}
            <div className="flex-1">
              <div id="hero-text-layout" className="flex flex-col justify-center">
                <p id="hero-portfolio-label" className="section-number tracking-[0.3em] text-[#fe9004]/60 font-medium text-xs mb-6">
                  PORTFOLIO — 2025
                </p>
                <div className="flex flex-col" id="hero-name-wrapper">
                  <h1 id="hero-name" className="text-[clamp(2.5rem,6vw,5.5rem)] font-black tracking-tight text-white leading-[0.95]" style={{ transformOrigin: "left center" }}>
                    Muneer <span className="text-[#fe9004]" id="hero-name-last">Raza</span>
                  </h1>
                </div>
                <p id="hero-subtitle" className="text-xl font-light text-white/70 tracking-widest uppercase mt-4" style={{ transformOrigin: "left center" }}>
                  AI Software Engineer
                </p>
              </div>

              {/* Extra content — fades out during morph */}
              <div id="hero-extra-content" className="mt-8" style={{ pointerEvents: "auto" }}>
                <p id="hero-tagline" className="text-white/50 text-sm leading-relaxed max-w-md font-light">
                  Training, deploying and monitoring AI systems.<br />
                  Specialized in computer vision, NLP, and building<br />
                  autonomous AI agents.
                </p>
                <div className="flex gap-4 pt-6">
                  <button onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
                    className="px-6 py-3 bg-[#fe9004] text-[#121212] font-semibold text-sm rounded-sm hover:shadow-[0_0_20px_rgba(254,144,4,0.4)] transition-all duration-300 tracking-wide uppercase">
                    View Projects
                  </button>
                  <button onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                    className="px-6 py-3 border border-[#fe9004]/30 text-white/80 font-medium text-sm rounded-sm hover:border-[#fe9004] hover:text-white transition-all duration-300 tracking-wide uppercase">
                    Contact Me
                  </button>
                </div>
                <div className="flex gap-8 pt-6">
                  {[
                    { label: "CGPA", value: "3.60" },
                    { label: "Rank", value: "3rd / 60" },
                    { label: "IELTS", value: "7.0" },
                    { label: "Publications", value: "1" },
                  ].map((stat) => (
                    <div key={stat.label}>
                      <div className="text-2xl font-bold text-[#fe9004]">{stat.value}</div>
                      <div className="text-xs text-white/40 uppercase tracking-wider mt-0.5">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right column: profile image */}
            <div id="hero-extra-image" className="shrink-0" style={{ pointerEvents: "auto" }}>
              <div className="relative">
                <div className="absolute inset-0 rounded-sm"
                  style={{ boxShadow: "0 0 60px rgba(254, 144, 4, 0.15), inset 0 0 30px rgba(254, 144, 4, 0.05)", border: "1px solid rgba(254, 144, 4, 0.2)" }} />
                <img src="https://placehold.co/400x500/121212/fe9004?text=Profile+Photo" alt="Muneer Raza"
                  className="w-[240px] h-[300px] object-cover" style={{ filter: "grayscale(100%) contrast(1.1)" }} />
                <div className="absolute bottom-0 left-0 right-0 h-1/3"
                  style={{ background: "linear-gradient(to top, rgba(18,18,18,0.8), transparent)" }} />
              </div>
            </div>
          </div>

          {/* Social Links — fade in as navbar forms, positioned at top for navbar */}
          <div id="hero-socials" className="absolute right-20 flex items-center gap-6 opacity-0" style={{ pointerEvents: "auto", top: "18px" }}>
            {["GitHub", "LinkedIn", "Email"].map((l) => (
              <a key={l} href={l === "GitHub" ? "https://github.com/MuneerRaza" : l === "LinkedIn" ? "https://linkedin.com/in/muneer-raza-" : "mailto:muneer.raza098@gmail.com"}
                target="_blank" rel="noopener noreferrer"
                className="text-[10px] text-white/40 hover:text-[#fe9004] transition-colors uppercase tracking-widest font-medium">
                {l}
              </a>
            ))}
          </div>
        </div>
      </div>

      <NavSidebar activeSection={activeSection} onNavigate={navigateToSection} />

      <HeroSection onScrollDown={() => navigateToSection(1)} />
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <PublicationSection />
      <TechStackSection />
      <AchievementsSection />
      <EducationSection />
      <CertificatesSection />
      <ContactSection />
    </>
  );
}
