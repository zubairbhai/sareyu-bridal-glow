import { useEffect, useState } from "react";
import { BRAND } from "@/lib/site-data";

export function LoadingScreen() {
  const [hidden, setHidden] = useState(false);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setFade(true), 1100);
    const t2 = setTimeout(() => setHidden(true), 1600);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  if (hidden) return null;

  return (
    <div
      aria-hidden="true"
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-[oklch(0.12_0.04_305)] transition-opacity duration-500 ${
        fade ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <div className="flex flex-col items-center gap-6">
        <div className="relative">
          <span className="absolute inset-0 rounded-full bg-gradient-luxe blur-2xl opacity-60 animate-pulse" />
          <span className="relative inline-flex items-center justify-center rounded-full bg-white shadow-elegant ring-2 ring-[oklch(0.78_0.11_85)]/60 overflow-hidden w-24 h-24 animate-fade-in-up">
            <img src={BRAND.logo} alt="Sareyu" className="w-full h-full object-cover" />
          </span>
        </div>
        <div className="relative overflow-hidden">
          <h1 className="font-display text-4xl sm:text-5xl tracking-wide text-white/90">
            {BRAND.name}
          </h1>
          <span className="loader-shimmer" />
        </div>
        <span className="text-[10px] uppercase tracking-[0.32em] text-white/50">
          {BRAND.tagline}
        </span>
      </div>
    </div>
  );
}