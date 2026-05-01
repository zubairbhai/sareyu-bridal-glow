import { useI18n } from "@/lib/i18n";
import { SectionHeader } from "./SectionHeader";
import { BRAND } from "@/lib/site-data";
import { Check, MessageCircle } from "lucide-react";

const tiers = [
  {
    name: "Party Makeup",
    price: "Contact",
    blurb: "Perfect for receptions, sangeet & celebrations.",
    features: ["HD makeup", "Hairstyling", "Lashes included", "Touch-up kit"],
    featured: false,
  },
  {
    name: "Bridal Makeup",
    price: "On Request",
    blurb: "Signature bridal artistry for your most important day.",
    features: ["Premium HD/Airbrush", "Trial available", "Saree draping", "All-day touch-ups", "Pre-bridal consult"],
    featured: true,
  },
  {
    name: "Custom Packages",
    price: "Bespoke",
    blurb: "Multi-event & destination wedding packages.",
    features: ["All ceremonies covered", "Travel arranged", "Family makeup add-on", "Dedicated planning"],
    featured: false,
  },
];

export function Pricing() {
  const { t } = useI18n();
  return (
    <section id="pricing" className="py-24 sm:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader eyebrow="Investment" title={t("pricing.title")} subtitle={t("pricing.subtitle")} />
        <div className="grid md:grid-cols-3 gap-6">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative rounded-3xl p-8 flex flex-col transition-all duration-500 hover:-translate-y-1 ${
                tier.featured
                  ? "bg-gradient-luxe text-white shadow-elegant"
                  : "bg-card border border-border shadow-card"
              }`}
            >
              {tier.featured && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-white text-primary text-[10px] font-semibold uppercase tracking-widest shadow-soft">
                  Most Loved
                </span>
              )}
              <h3 className={`font-display text-3xl ${tier.featured ? "text-white" : "text-foreground"}`}>{tier.name}</h3>
              <p className={`mt-2 text-sm ${tier.featured ? "text-white/85" : "text-muted-foreground"}`}>{tier.blurb}</p>
              <p className={`mt-6 font-display text-4xl ${tier.featured ? "text-white" : "text-foreground"}`}>{tier.price}</p>
              <ul className="mt-6 space-y-3 flex-1">
                {tier.features.map((f) => (
                  <li key={f} className={`flex items-start gap-2 text-sm ${tier.featured ? "text-white/90" : "text-foreground/80"}`}>
                    <Check className={`w-4 h-4 mt-0.5 ${tier.featured ? "text-white" : "text-primary"}`} />
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href={BRAND.whatsappBook}
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-8 inline-flex items-center justify-center gap-2 h-11 rounded-full font-semibold text-sm transition ${
                  tier.featured
                    ? "bg-white text-primary hover:scale-[1.02]"
                    : "bg-gradient-primary text-primary-foreground hover:shadow-soft"
                }`}
              >
                <MessageCircle className="w-4 h-4" />
                {t("pricing.contact")}
              </a>
            </div>
          ))}
        </div>
        <p className="mt-8 text-center text-sm text-muted-foreground">
          Travel charges applicable for outstation & destination weddings.
        </p>
      </div>
    </section>
  );
}