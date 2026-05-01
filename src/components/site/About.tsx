import { useI18n } from "@/lib/i18n";
import { Award, Sparkles, Users } from "lucide-react";
import { GALLERY, BRAND } from "@/lib/site-data";

export function About() {
  const { t } = useI18n();
  return (
    <section id="about" className="py-24 sm:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div className="relative">
          <div className="aspect-[4/5] rounded-[2rem] overflow-hidden shadow-elegant relative">
            <img src={GALLERY[0].src} alt="Mathangi Saraswathi" className="w-full h-full object-cover" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
          </div>
          <div className="absolute -bottom-6 -right-4 sm:-right-8 bg-card rounded-2xl shadow-elegant p-5 border border-border max-w-[220px]">
            <div className="flex items-center gap-3">
              <span className="w-12 h-12 rounded-full bg-white ring-1 ring-primary/20 overflow-hidden">
                <img src={BRAND.logo} alt="" className="w-full h-full object-cover" />
              </span>
              <div>
                <p className="font-display text-lg leading-none">{BRAND.artist}</p>
                <p className="text-xs text-muted-foreground mt-1">Lead Artist · {BRAND.location}</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <span className="inline-block text-xs tracking-[0.25em] uppercase text-primary/80 font-medium mb-3">
            {t("about.title")}
          </span>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-foreground leading-tight">
            Crafting bridal stories, <span className="text-gradient-luxe">one face at a time.</span>
          </h2>
          <p className="mt-6 text-base sm:text-lg text-muted-foreground leading-relaxed">
            {t("about.body")}
          </p>
          <div className="mt-10 grid grid-cols-3 gap-4">
            {[
              { icon: Award, label: "Years", value: "3+" },
              { icon: Users, label: "Happy Brides", value: "150+" },
              { icon: Sparkles, label: "Premium", value: "Brands" },
            ].map((s, i) => (
              <div key={i} className="rounded-2xl bg-secondary/60 p-5 text-center border border-border/60">
                <s.icon className="w-5 h-5 mx-auto text-primary mb-2" />
                <p className="font-display text-2xl text-foreground">{s.value}</p>
                <p className="text-[11px] uppercase tracking-widest text-muted-foreground mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}