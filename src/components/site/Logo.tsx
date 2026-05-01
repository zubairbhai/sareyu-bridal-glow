import { BRAND } from "@/lib/site-data";

export function Logo({ size = 44, showText = true }: { size?: number; showText?: boolean }) {
  return (
    <a href="#home" className="flex items-center gap-3 group">
      <span
        className="inline-flex items-center justify-center rounded-full bg-white shadow-card ring-1 ring-primary/15 overflow-hidden transition-transform group-hover:scale-105"
        style={{ width: size, height: size }}
      >
        <img src={BRAND.logo} alt="Sareyu logo" className="w-full h-full object-cover" />
      </span>
      {showText && (
        <span className="flex flex-col leading-none">
          <span className="font-display text-xl sm:text-2xl tracking-wide text-foreground">{BRAND.name}</span>
          <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.18em] text-muted-foreground mt-1">
            {BRAND.tagline}
          </span>
        </span>
      )}
    </a>
  );
}