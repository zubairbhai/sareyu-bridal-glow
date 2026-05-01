import { useEffect, useRef, useState } from "react";
import { HERO_SLIDES, HERO_DESKTOP_IMAGES, BRAND } from "@/lib/site-data";
import { useI18n } from "@/lib/i18n";
import { MessageCircle, ArrowDown } from "lucide-react";

export function Hero() {
  const { t } = useI18n();
  const [active, setActive] = useState(0);
  const [desktopActive, setDesktopActive] = useState(0);
  const videoRefs = useRef<Array<HTMLVideoElement | null>>([]);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const slide = HERO_SLIDES[active];
    let duration = 5500;
    if (slide.type === "video") {
      const v = videoRefs.current[active];
      if (v) {
        v.currentTime = 0;
        v.play().catch(() => {});
        duration = 7500;
      }
    }
    // Pause other videos
    videoRefs.current.forEach((v, i) => {
      if (v && i !== active) v.pause();
    });
    timerRef.current = setTimeout(() => {
      setActive((a) => (a + 1) % HERO_SLIDES.length);
    }, duration);
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [active]);

  // Desktop image-only slideshow
  useEffect(() => {
    const id = setInterval(() => {
      setDesktopActive((a) => (a + 1) % HERO_DESKTOP_IMAGES.length);
    }, 6000);
    return () => clearInterval(id);
  }, []);

  return (
    <section
      id="home"
      className="relative w-full overflow-hidden h-[100svh] min-h-[560px] md:h-[88vh] md:max-h-[900px] lg:h-[92vh]"
    >
      {/* Mobile slides (existing media) */}
      <div className="absolute inset-0 md:hidden">
        {HERO_SLIDES.map((slide, i) => (
          <div
            key={i}
            className={`absolute inset-0 overflow-hidden transition-opacity duration-[1400ms] ease-in-out ${
              i === active ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            {slide.type === "image" ? (
              <img
                src={slide.src}
                alt={`Sareyu bridal makeup look ${i + 1} by Mathangi Saraswathi, Hyderabad`}
                className={`absolute inset-0 w-full h-full object-cover object-top ${i === active ? "animate-kenburns" : ""}`}
                loading={i === 0 ? "eager" : "lazy"}
              />
            ) : (
              <video
                ref={(el) => { videoRefs.current[i] = el; }}
                src={slide.src}
                muted
                autoPlay
                playsInline
                loop
                preload={i === 0 ? "metadata" : "none"}
                className="absolute inset-0 w-full h-full object-cover object-top"
              />
            )}
          </div>
        ))}
      </div>

      {/* Desktop slides (new images only) */}
      <div className="absolute inset-0 hidden md:block">
        {HERO_DESKTOP_IMAGES.map((src, i) => (
          <div
            key={i}
            className={`absolute inset-0 overflow-hidden transition-opacity duration-[1400ms] ease-in-out ${
              i === desktopActive ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            <img
              src={src}
              alt={`Premium bridal makeup portfolio ${i + 1} — Sareyu by Mathangi Saraswathi, Hyderabad`}
              className={`absolute inset-0 w-full h-full object-cover object-center ${i === desktopActive ? "animate-kenburns" : ""}`}
              loading={i === 0 ? "eager" : "lazy"}
            />
          </div>
        ))}
      </div>

      {/* Overlay (shared) */}
      <div className="absolute inset-0 z-20 pointer-events-none">
        <div className="absolute inset-0 z-20 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.25),rgba(0,0,0,0.15)_40%,rgba(0,0,0,0.55))]" />
        <div className="absolute inset-0 z-20 bg-gradient-to-tr from-primary/20 via-transparent to-accent/10" />
      </div>

      {/* Content */}
      <div className="relative z-30 h-full flex flex-col items-center justify-center text-center px-6 md:px-12 max-w-[1200px] mx-auto">
        <div className="animate-fade-in-up">
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/25 text-white/90 text-xs sm:text-sm tracking-[0.18em] uppercase">
            {t("hero.eyebrow")}
          </span>
        </div>
        <h1
          className="mt-6 font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white leading-[1.05] animate-fade-in-up"
          style={{ animationDelay: "0.15s" }}
        >
          {t("hero.title")}
        </h1>
        <p
          className="mt-6 max-w-2xl text-base sm:text-lg text-white/85 animate-fade-in-up"
          style={{ animationDelay: "0.3s" }}
        >
          {t("hero.subtitle")}
        </p>
        <div
          className="mt-10 flex flex-col sm:flex-row gap-4 animate-fade-in-up"
          style={{ animationDelay: "0.45s" }}
        >
          <a
            href={BRAND.whatsappBook}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-7 h-12 rounded-full bg-gradient-primary text-primary-foreground font-semibold shadow-elegant hover:scale-[1.03] transition-transform"
          >
            <MessageCircle className="w-4 h-4" />
            {t("cta.whatsapp")}
          </a>
          <a
            href="#gallery"
            className="inline-flex items-center justify-center gap-2 px-7 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/40 text-white font-semibold hover:bg-white/20 transition"
          >
            {t("cta.gallery")}
          </a>
        </div>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex gap-2">
        {HERO_SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            aria-label={`Slide ${i + 1}`}
            className={`h-1 rounded-full transition-all ${i === active ? "w-10 bg-white" : "w-5 bg-white/40"}`}
          />
        ))}
      </div>
      <ArrowDown className="absolute bottom-3 left-1/2 -translate-x-1/2 z-30 w-4 h-4 text-white/70 animate-bounce" />
    </section>
  );
}