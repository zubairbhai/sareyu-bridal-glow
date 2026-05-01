import { Logo } from "./Logo";
import { BRAND } from "@/lib/site-data";
import { Instagram, Phone, Mail } from "lucide-react";
import { useI18n } from "@/lib/i18n";

export function Footer() {
  const { t } = useI18n();
  return (
    <footer className="bg-foreground text-white/80 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10">
        <div>
          <div className="[&_span]:text-white">
            <Logo size={48} />
          </div>
          <p className="mt-5 text-sm text-white/60 max-w-xs">
            {BRAND.tagline}. Premium bridal & editorial makeup by {BRAND.artist}.
          </p>
        </div>
        <div>
          <h4 className="font-display text-lg text-white mb-4">Explore</h4>
          <ul className="space-y-2 text-sm">
            {["services", "gallery", "videos", "booking", "contact"].map((s) => (
              <li key={s}>
                <a href={`#${s}`} className="hover:text-white transition capitalize">
                  {s}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-display text-lg text-white mb-4">Contact</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2"><Phone className="w-4 h-4 text-primary-glow" /> {BRAND.phone}</li>
            <li className="flex items-center gap-2"><Mail className="w-4 h-4 text-primary-glow" /> {BRAND.email}</li>
            <li className="flex items-center gap-2">
              <Instagram className="w-4 h-4 text-primary-glow" />
              <a href={BRAND.instagramUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white">@{BRAND.instagram}</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-12 pt-6 border-t border-white/10 max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/50">
        <p>© {new Date().getFullYear()} {BRAND.name}. {t("footer.rights")}</p>
        <p className="italic">{BRAND.tagline}</p>
      </div>
    </footer>
  );
}