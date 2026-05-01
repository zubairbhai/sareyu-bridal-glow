import { useState, useMemo } from "react";
import { GALLERY } from "@/lib/site-data";
import { useI18n } from "@/lib/i18n";
import { SectionHeader } from "./SectionHeader";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { Reveal } from "./Reveal";

const CATEGORIES = ["All", "Bridal", "Working Shots", "Behind the Scenes", "Before/After"] as const;

export function Gallery() {
  const { t } = useI18n();
  const [filter, setFilter] = useState<(typeof CATEGORIES)[number]>("All");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const items = useMemo(
    () => (filter === "All" ? GALLERY : GALLERY.filter((g) => g.category === filter)),
    [filter]
  );

  const closeLb = () => setLightbox(null);
  const next = () => setLightbox((i) => (i === null ? null : (i + 1) % items.length));
  const prev = () => setLightbox((i) => (i === null ? null : (i - 1 + items.length) % items.length));

  return (
    <section id="gallery" className="py-24 sm:py-32 bg-gradient-soft">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader eyebrow="Portfolio" title={t("gallery.title")} subtitle={t("gallery.subtitle")} />

        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {CATEGORIES.map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={`px-4 h-9 rounded-full text-xs font-medium tracking-wide transition-all ${
                filter === c
                  ? "bg-gradient-primary text-primary-foreground shadow-soft"
                  : "bg-card border border-border text-foreground/70 hover:border-primary/40"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <Reveal as="div" stagger staggerDelay={70} direction="zoom" duration={900}
          className="columns-1 sm:columns-2 lg:columns-3 gap-5 [column-fill:_balance]">
          {items.map((g, i) => (
            <button
              key={g.src}
              onClick={() => setLightbox(i)}
              className="mb-5 block w-full break-inside-avoid group relative overflow-hidden rounded-2xl shadow-card hover:shadow-elegant transition-shadow"
            >
              <img
                src={g.src}
                alt={`${g.category} makeup`}
                loading="lazy"
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                <span className="text-white text-xs uppercase tracking-widest">{g.category}</span>
              </div>
            </button>
          ))}
        </Reveal>
      </div>

      {lightbox !== null && (
        <div className="fixed inset-0 z-[60] bg-foreground/95 flex items-center justify-center p-4 animate-fade-in-up" onClick={closeLb}>
          <button onClick={closeLb} className="absolute top-5 right-5 text-white/80 hover:text-white p-2" aria-label="Close">
            <X className="w-6 h-6" />
          </button>
          <button onClick={(e) => { e.stopPropagation(); prev(); }} className="absolute left-3 sm:left-8 text-white/80 hover:text-white p-2" aria-label="Previous">
            <ChevronLeft className="w-8 h-8" />
          </button>
          <img
            src={items[lightbox].src}
            alt=""
            className="max-h-[88vh] max-w-[92vw] object-contain rounded-xl shadow-elegant"
            onClick={(e) => e.stopPropagation()}
          />
          <button onClick={(e) => { e.stopPropagation(); next(); }} className="absolute right-3 sm:right-8 text-white/80 hover:text-white p-2" aria-label="Next">
            <ChevronRight className="w-8 h-8" />
          </button>
        </div>
      )}
    </section>
  );
}