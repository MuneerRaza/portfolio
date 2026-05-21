import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Mail, Github, Linkedin, Phone } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const CONTACT_ITEMS = [
  {
    icon: <Mail size={20} />,
    label: "Email",
    value: "muneer.raza098@gmail.com",
    href: "mailto:muneer.raza098@gmail.com",
  },
  {
    icon: <Github size={20} />,
    label: "GitHub",
    value: "github.com/MuneerRaza",
    href: "https://github.com/MuneerRaza",
  },
  {
    icon: <Linkedin size={20} />,
    label: "LinkedIn",
    value: "linkedin.com/in/muneer-raza-",
    href: "https://linkedin.com/in/muneer-raza-",
  },
  {
    icon: <Phone size={20} />,
    label: "Phone",
    value: "+92 319 7697663",
    href: "tel:+923197697663",
  },
];

export default function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    const ctx = gsap.context(() => {
      gsap.from(".contact-animate", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="portfolio-section bg-[#141414] relative"
      style={{ zIndex: 10 }}
    >
      <div className="flex items-center h-full px-20 py-16">
        <div className="max-w-7xl w-full mx-auto flex flex-col h-full">
          <div className="contact-animate flex items-baseline gap-4 mb-12">
            <span className="section-number">10</span>
            <h2 className="text-4xl font-bold text-white tracking-tight">Contact</h2>
            <div className="flex-1 h-px bg-white/5 ml-4" />
          </div>

          <div className="flex flex-col items-center justify-center flex-1 space-y-12">
            <div className="contact-animate text-center space-y-4 max-w-xl">
              <h3 className="text-3xl font-bold text-white">
                Let's <span className="text-[#fe9004]">connect</span>
              </h3>
              <p className="text-white/50 text-sm leading-relaxed">
                Open to conversations on AI engineering roles, agentic systems and
                LLM infrastructure, and research collaborations. Reach out — I'd be
                glad to talk.
              </p>
            </div>

            <div className="contact-animate grid grid-cols-2 gap-4 w-full max-w-2xl">
              {CONTACT_ITEMS.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="card-glow flex items-center gap-4 p-5 border border-white/5 bg-[#1a1a1a] rounded-sm hover:border-[#fe9004]/30 group transition-all"
                >
                  <div className="w-10 h-10 rounded-sm border border-white/5 bg-[#222] flex items-center justify-center text-[#fe9004] shrink-0 group-hover:bg-[#fe9004]/10 transition-colors">
                    {item.icon}
                  </div>
                  <div>
                    <div className="text-xs text-white/30 uppercase tracking-wider">{item.label}</div>
                    <div className="text-sm text-white/70 group-hover:text-white transition-colors mt-0.5 font-medium">
                      {item.value}
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Footer */}
          <div className="contact-animate border-t border-white/5 pt-6 flex items-center justify-between">
            <div className="text-xs text-white/20">
              Muneer Raza — AI Software Engineer — Karachi, Pakistan
            </div>
            <div className="flex gap-6">
              {["Hero", "About", "Experience", "Projects", "Publication", "Tech Stack", "Achievements", "Education", "Certificates", "Contact"].map((label) => (
                <button
                  key={label}
                  onClick={() => {
                    const el = document.getElementById(label.toLowerCase().replace(" ", "").replace("techstack", "techstack").replace("tech stack", "techstack"));
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="text-xs text-white/20 hover:text-[#fe9004] transition-colors"
                >
                  {label}
                </button>
              ))}
            </div>
            <div className="flex gap-4">
              <a href="https://github.com/MuneerRaza" target="_blank" rel="noopener noreferrer" className="text-white/20 hover:text-[#fe9004] transition-colors">
                <Github size={14} />
              </a>
              <a href="https://linkedin.com/in/muneer-raza-" target="_blank" rel="noopener noreferrer" className="text-white/20 hover:text-[#fe9004] transition-colors">
                <Linkedin size={14} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
