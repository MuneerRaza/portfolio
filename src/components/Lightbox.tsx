import { useEffect } from "react";
import { X } from "lucide-react";

export default function Lightbox({ src, onClose }: { src: string | null; onClose: () => void }) {
  useEffect(() => {
    if (!src) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [src, onClose]);

  if (!src) return null;

  return (
    <div
      className="fixed inset-0 z-[10000] flex items-center justify-center p-6 md:p-16"
      style={{ background: "rgba(21,18,12,0.94)" }}
      onClick={onClose}
    >
      <button
        className="absolute top-6 right-6 grid place-items-center w-11 h-11 rounded-full border border-paper/30 text-paper hover:bg-accent hover:border-accent transition-colors"
        onClick={onClose}
        aria-label="Close"
      >
        <X size={18} />
      </button>
      <img
        src={src}
        alt=""
        className="max-w-full max-h-full object-contain shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      />
    </div>
  );
}
