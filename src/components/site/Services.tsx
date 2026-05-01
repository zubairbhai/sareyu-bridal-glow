import { Crown, Sparkles, Camera, Heart, Gift, Plane } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { SectionHeader } from "./SectionHeader";
import { Reveal } from "./Reveal";

const services = [
  { icon: Crown, title: "Bridal Makeup", desc: "Signature bridal looks crafted to last from haldi to vidaai with luminous, photo-ready finish." },
  { icon: Sparkles, title: "Party Makeup", desc: "Glamorous evening looks for receptions, sangeet, and special celebrations." },
  { icon: Camera, title: "Model & Editorial", desc: "Editorial-grade makeup tailored for shoots, lookbooks, and fashion features." },
  { icon: Heart, title: "Pre-wedding Events", desc: "Mehendi, engagement, haldi, and pre-wedding shoot makeup with cohesive styling." },
  { icon: Gift, title: "Custom Packages", desc: "Bespoke packages crafted around your timeline, palette, and bridal vision." },
  { icon: Plane, title: "Travel Available", desc: "On-location services across Hyderabad — travel charges on request." },
];

export function Services() {
  const { t } = useI18n();
  return (
    <section id="services" className="relative py-24 sm:py-32 bg-gradient-soft">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader eyebrow="What we offer" title={t("services.title")} subtitle={t("services.subtitle")} />
        <Reveal as="div" stagger staggerDelay={90} direction="up" distance={24}
          className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {services.map((s, i) => (
            <div
              key={i}
              className="group relative p-8 rounded-3xl bg-card border border-border/60 shadow-card hover:shadow-elegant transition-all duration-500 hover:-translate-y-1"
            >
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-br from-primary/5 to-accent/5 pointer-events-none" />
              <div className="relative">
                <div className="w-14 h-14 rounded-2xl bg-gradient-primary/10 bg-primary/10 flex items-center justify-center mb-5 ring-1 ring-primary/20">
                  <s.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display text-2xl text-foreground mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </Reveal>
        <p className="mt-10 text-center text-sm text-muted-foreground italic">
          Bridal consultations available · Premium branded products only
        </p>
      </div>
    </section>
  );
}