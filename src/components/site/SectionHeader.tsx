export function SectionHeader({ eyebrow, title, subtitle, center = true }: { eyebrow?: string; title: string; subtitle?: string; center?: boolean }) {
  return (
    <div className={`mb-12 sm:mb-16 ${center ? "text-center mx-auto max-w-2xl" : ""}`}>
      {eyebrow && (
        <span className="inline-block text-[11px] sm:text-xs tracking-[0.25em] uppercase text-primary/80 font-medium mb-3">
          {eyebrow}
        </span>
      )}
      <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-foreground leading-tight">
        {title}
      </h2>
      {subtitle && <p className="mt-4 text-base sm:text-lg text-muted-foreground">{subtitle}</p>}
      <div className={`mt-6 h-px w-20 bg-gradient-primary ${center ? "mx-auto" : ""}`} />
    </div>
  );
}