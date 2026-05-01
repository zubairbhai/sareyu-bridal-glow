import { useState } from "react";
import { useI18n } from "@/lib/i18n";
import { SectionHeader } from "./SectionHeader";
import { BRAND } from "@/lib/site-data";
import { MessageCircle } from "lucide-react";

export function Booking() {
  const { t } = useI18n();
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    date: "",
    service: "Bridal Makeup",
    location: "",
    message: "",
  });

  const handle = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value.slice(0, 500) }));

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hi Sareyu, I'd like to book a makeup appointment.%0A%0A` +
      `*Name:* ${encodeURIComponent(form.name)}%0A` +
      `*Phone:* ${encodeURIComponent(form.phone)}%0A` +
      `*Email:* ${encodeURIComponent(form.email)}%0A` +
      `*Event Date:* ${encodeURIComponent(form.date)}%0A` +
      `*Service:* ${encodeURIComponent(form.service)}%0A` +
      `*Location:* ${encodeURIComponent(form.location)}%0A` +
      `*Message:* ${encodeURIComponent(form.message)}`;
    window.open(`https://wa.me/${BRAND.phoneRaw}?text=${text}`, "_blank");
  };

  const minDate = (() => {
    const d = new Date();
    d.setDate(d.getDate() + 1);
    return d.toISOString().split("T")[0];
  })();

  const inputCls =
    "w-full h-12 px-4 rounded-xl bg-background border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none text-sm text-foreground placeholder:text-muted-foreground transition";

  return (
    <section id="booking" className="py-24 sm:py-32 bg-gradient-luxe relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,white,transparent_60%)] opacity-20" />
      <div className="relative max-w-6xl mx-auto px-6 grid lg:grid-cols-5 gap-10 items-start">
        <div className="lg:col-span-2 text-white">
          <span className="inline-block text-xs tracking-[0.25em] uppercase text-white/80 font-medium mb-3">
            Booking
          </span>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl leading-tight">{t("booking.title")}</h2>
          <p className="mt-5 text-white/85 text-base">{t("booking.note")}</p>
          <a
            href={BRAND.whatsappBook}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 px-6 h-12 rounded-full bg-white text-primary font-semibold shadow-elegant hover:scale-[1.03] transition"
          >
            <MessageCircle className="w-4 h-4" />
            Quick WhatsApp
          </a>
        </div>
        <form onSubmit={submit} className="lg:col-span-3 bg-card rounded-3xl p-6 sm:p-8 shadow-elegant grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input required maxLength={100} placeholder="Your name" value={form.name} onChange={handle("name")} className={inputCls} />
          <input required maxLength={20} placeholder="Phone" value={form.phone} onChange={handle("phone")} className={inputCls} />
          <input type="email" maxLength={120} placeholder="Email" value={form.email} onChange={handle("email")} className={`${inputCls} sm:col-span-2`} />
          <input type="date" min={minDate} value={form.date} onChange={handle("date")} className={inputCls} />
          <select value={form.service} onChange={handle("service")} className={inputCls}>
            <option>Bridal Makeup</option>
            <option>Party Makeup</option>
            <option>Pre-wedding / Event</option>
            <option>Model / Editorial</option>
            <option>Custom Package</option>
          </select>
          <input maxLength={120} placeholder="Event location" value={form.location} onChange={handle("location")} className={`${inputCls} sm:col-span-2`} />
          <textarea maxLength={500} placeholder="Tell us about your event…" value={form.message} onChange={handle("message")} rows={4} className={`${inputCls} h-auto py-3 sm:col-span-2`} />
          <button
            type="submit"
            className="sm:col-span-2 inline-flex items-center justify-center gap-2 h-12 rounded-xl bg-gradient-primary text-primary-foreground font-semibold shadow-soft hover:shadow-elegant transition"
          >
            <MessageCircle className="w-4 h-4" />
            {t("booking.send")}
          </button>
        </form>
      </div>
    </section>
  );
}