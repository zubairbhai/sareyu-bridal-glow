import { useI18n } from "@/lib/i18n";
import { SectionHeader } from "./SectionHeader";
import { Star } from "lucide-react";
import { Reveal } from "./Reveal";

const reviews = [
  { name: "Priya R.", role: "Bride · Hyderabad", text: "Mathangi made my wedding day unforgettable. The makeup felt feather-light yet stayed flawless from morning rituals to the reception." },
  { name: "Anjali K.", role: "Bride · Vijayawada", text: "Truly luxurious experience. She listened to every detail and crafted a look that felt so 'me'. The photographs are absolute magic." },
  { name: "Sneha M.", role: "Model", text: "One of the most professional artists I've worked with. Editorial-grade finish with so much care for skin." },
];

export function Testimonials() {
  const { t } = useI18n();
  return (
    <section id="testimonials" className="py-24 sm:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader eyebrow="Loved by clients" title={t("testimonials.title")} />
        <Reveal as="div" stagger staggerDelay={140} direction="up" distance={26}
          className="grid md:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <div key={i} className="rounded-3xl bg-card border border-border/60 p-8 shadow-card hover:shadow-elegant transition">
              <div className="flex gap-1 text-primary mb-4">
                {Array.from({ length: 5 }).map((_, k) => (
                  <Star key={k} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <p className="text-foreground/85 leading-relaxed italic">“{r.text}”</p>
              <div className="mt-6 pt-6 border-t border-border/60">
                <p className="font-display text-lg text-foreground">{r.name}</p>
                <p className="text-xs text-muted-foreground tracking-wide uppercase mt-1">{r.role}</p>
              </div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}