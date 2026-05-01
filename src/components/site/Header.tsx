import { useEffect, useState } from "react";
import { Logo } from "./Logo";
import { BRAND } from "@/lib/site-data";
import { useI18n, type Lang } from "@/lib/i18n";
import { Menu, X, MessageCircle, Globe } from "lucide-react";

const NAV = [
  { id: "home", key: "nav.home" },
  { id: "services", key: "nav.services" },
  { id: "gallery", key: "nav.gallery" },
  { id: "videos", key: "nav.videos" },
  { id: "booking", key: "nav.booking" },
  { id: "contact", key: "nav.contact" },
];

export function Header() {
  const { t, lang, setLang } = useI18n();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const langs: { code: Lang; label: string }[] = [
    { code: "en", label: "EN" },
    { code: "te", label: "తె" },
    { code: "hi", label: "हि" },
  ];

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-background/85 backdrop-blur-xl shadow-soft" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 sm:h-20">
        <Logo size={scrolled ? 40 : 48} />
        <nav className="hidden lg:flex items-center gap-8">
          {NAV.map((n) => (
            <a
              key={n.id}
              href={`#${n.id}`}
              className="text-sm font-medium text-foreground/75 hover:text-primary transition-colors relative after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-primary after:transition-all hover:after:w-full"
            >
              {t(n.key)}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2 sm:gap-3">
          <div className="relative">
            <button
              onClick={() => setLangOpen((v) => !v)}
              className="inline-flex items-center gap-1 px-3 h-9 rounded-full border border-primary/20 text-xs font-medium text-foreground/80 hover:bg-primary/5 transition"
              aria-label="Change language"
            >
              <Globe className="w-3.5 h-3.5" />
              {langs.find((l) => l.code === lang)?.label}
            </button>
            {langOpen && (
              <div className="absolute right-0 mt-2 bg-card rounded-xl shadow-elegant border border-border overflow-hidden min-w-[110px]">
                {langs.map((l) => (
                  <button
                    key={l.code}
                    onClick={() => { setLang(l.code); setLangOpen(false); }}
                    className={`block w-full text-left px-4 py-2 text-sm hover:bg-primary/5 ${
                      lang === l.code ? "text-primary font-semibold" : "text-foreground/80"
                    }`}
                  >
                    {l.label} {l.code === "en" ? "English" : l.code === "te" ? "తెలుగు" : "हिन्दी"}
                  </button>
                ))}
              </div>
            )}
          </div>
          <a
            href={BRAND.whatsappBook}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 px-4 h-9 rounded-full bg-gradient-primary text-primary-foreground text-xs font-semibold shadow-soft hover:shadow-elegant transition-all hover:scale-[1.03]"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            {t("cta.whatsapp")}
          </a>
          <button
            className="lg:hidden p-2 rounded-md text-foreground"
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>
      {open && (
        <div className="lg:hidden bg-background/95 backdrop-blur-xl border-t border-border">
          <div className="px-6 py-4 flex flex-col gap-3">
            {NAV.map((n) => (
              <a
                key={n.id}
                href={`#${n.id}`}
                onClick={() => setOpen(false)}
                className="py-2 text-sm font-medium text-foreground/80 hover:text-primary"
              >
                {t(n.key)}
              </a>
            ))}
            <a
              href={BRAND.whatsappBook}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-center justify-center gap-2 h-11 rounded-full bg-gradient-primary text-primary-foreground text-sm font-semibold"
            >
              <MessageCircle className="w-4 h-4" />
              {t("cta.whatsapp")}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}