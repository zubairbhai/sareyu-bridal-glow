import { useEffect, useRef } from "react";
import { VIDEOS } from "@/lib/site-data";
import { useI18n } from "@/lib/i18n";
import { SectionHeader } from "./SectionHeader";

function LazyVideo({ src }: { src: string }) {
  const ref = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            el.play().catch(() => {});
          } else {
            el.pause();
          }
        });
      },
      { threshold: 0.4 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div className="relative rounded-3xl overflow-hidden shadow-card hover:shadow-elegant transition aspect-[9/16] bg-foreground/5 w-[200px] sm:w-[230px] md:w-[260px] shrink-0">
      <video
        ref={ref}
        src={src}
        muted
        loop
        playsInline
        preload="metadata"
        controls
        className="w-full h-full object-cover object-top"
      />
    </div>
  );
}

export function Videos() {
  const { t } = useI18n();
  // Base 60s loop / 1.576x => ~38s
  const duration = 60 / 1.576;
  return (
    <section id="videos" className="py-24 sm:py-32 bg-gradient-soft">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader eyebrow="Reels" title={t("videos.title")} subtitle={t("videos.subtitle")} />
      </div>
      <div
        className="group relative overflow-hidden mt-2"
        style={{
          maskImage:
            "linear-gradient(to right, transparent, #000 6%, #000 94%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, #000 6%, #000 94%, transparent)",
        }}
      >
        <div
          className="flex gap-4 sm:gap-5 w-max marquee-track"
          style={{ animation: `videos-marquee ${duration}s linear infinite` }}
        >
          {[...VIDEOS, ...VIDEOS].map((v, i) => (
            <LazyVideo key={`${v}-${i}`} src={v} />
          ))}
        </div>
      </div>
    </section>
  );
}