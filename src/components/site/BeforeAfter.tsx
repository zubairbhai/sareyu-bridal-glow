import { BEFORE_AFTER } from "@/lib/site-data";
import { useI18n } from "@/lib/i18n";
import { SectionHeader } from "./SectionHeader";
import { Sparkles } from "lucide-react";

export function BeforeAfter() {
  const { t } = useI18n();
  return (
    <section id="before-after" className="py-24 sm:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader eyebrow="Transformations" title={t("ba.title")} subtitle={t("ba.subtitle")} />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {BEFORE_AFTER.map((b, i) => (
            <div key={i} className="group relative rounded-3xl overflow-hidden shadow-card hover:shadow-elegant transition">
              <img src={b.src} alt={`Transformation ${i + 1}`} loading="lazy" className="w-full h-[420px] object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/90 backdrop-blur text-xs font-medium text-primary">
                <Sparkles className="w-3 h-3" /> Before · After
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}