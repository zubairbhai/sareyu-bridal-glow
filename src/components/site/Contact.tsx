import { useI18n } from "@/lib/i18n";
import { SectionHeader } from "./SectionHeader";
import { BRAND } from "@/lib/site-data";
import { Phone, Mail, Instagram, MessageCircle, MapPin } from "lucide-react";

export function Contact() {
  const { t } = useI18n();
  const items = [
    { icon: Phone, label: "Call", value: BRAND.phone, href: `tel:${BRAND.phoneRaw}` },
    { icon: MessageCircle, label: "WhatsApp", value: "Chat instantly", href: BRAND.whatsappBook },
    { icon: Mail, label: "Email", value: BRAND.email, href: `mailto:${BRAND.email}` },
    { icon: Instagram, label: "Instagram", value: `@${BRAND.instagram}`, href: BRAND.instagramUrl },
  ];
  return (
    <section id="contact" className="py-24 sm:py-32 bg-gradient-soft">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader eyebrow="Reach out" title={t("contact.title")} />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {items.map((it) => (
            <a
              key={it.label}
              href={it.href}
              target={it.href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="group rounded-3xl bg-card p-7 border border-border shadow-card hover:shadow-elegant hover:-translate-y-1 transition-all"
            >
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-4 ring-1 ring-primary/20 group-hover:bg-gradient-primary group-hover:ring-0 transition">
                <it.icon className="w-5 h-5 text-primary group-hover:text-primary-foreground transition" />
              </div>
              <p className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">{it.label}</p>
              <p className="mt-1 font-display text-xl text-foreground break-all">{it.value}</p>
            </a>
          ))}
        </div>
        <div className="mt-10 flex items-center justify-center gap-2 text-muted-foreground">
          <MapPin className="w-4 h-4 text-primary" />
          <span className="text-sm">Based in {BRAND.location}</span>
        </div>
      </div>
    </section>
  );
}