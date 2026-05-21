import { useEffect } from "react";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Nav from "./components/Nav";
import HeroSection from "./sections/HeroSection";
import AboutSection from "./sections/AboutSection";
import ExperienceSection from "./sections/ExperienceSection";
import ProjectsSection from "./sections/ProjectsSection";
import PublicationSection from "./sections/PublicationSection";
import EducationSection from "./sections/EducationSection";
import TechStackSection from "./sections/TechStackSection";
import AchievementsSection from "./sections/AchievementsSection";
import CertificatesSection from "./sections/CertificatesSection";
import ContactSection from "./sections/ContactSection";

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });
    lenis.on("scroll", ScrollTrigger.update);
    const raf = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);
    return () => {
      gsap.ticker.remove(raf);
      lenis.destroy();
    };
  }, []);

  return (
    <>
      <div className="grain" aria-hidden="true" />
      <Nav />
      <main className="relative z-10 text-ink">
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <PublicationSection />
        <EducationSection />
        <TechStackSection />
        <AchievementsSection />
        <CertificatesSection />
        <ContactSection />
      </main>
    </>
  );
}
