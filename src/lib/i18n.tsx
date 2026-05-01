import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Lang = "en" | "te" | "hi";

type Dict = Record<string, string>;

const translations: Record<Lang, Dict> = {
  en: {
    "nav.home": "Home",
    "nav.services": "Services",
    "nav.gallery": "Gallery",
    "nav.videos": "Videos",
    "nav.pricing": "Pricing",
    "nav.booking": "Booking",
    "nav.contact": "Contact",
    "cta.whatsapp": "Book on WhatsApp",
    "cta.gallery": "View Gallery",
    "hero.eyebrow": "Bridal Makeup Artist · Hyderabad",
    "hero.title": "Beauty That Feels Timeless",
    "hero.subtitle": "Sareyu by Mathangi Saraswathi — bridal & editorial makeup crafted with luxury, precision, and grace.",
    "services.title": "Signature Services",
    "services.subtitle": "Curated experiences for the modern bride and beyond.",
    "about.title": "About the Artist",
    "about.body": "Mathangi Saraswathi brings 3+ years of artistry, formal training certification, and an unwavering devotion to luxury bridal beauty. From intimate ceremonies to editorial shoots, every look is created with premium branded products and a personal touch that lasts in every photograph.",
    "gallery.title": "Portfolio",
    "gallery.subtitle": "A curated selection of bridal moments, editorial work, and behind-the-scenes craft.",
    "ba.title": "Before & After",
    "ba.subtitle": "Transformations defined by elegance and detail.",
    "videos.title": "Video Showcase",
    "videos.subtitle": "Cinematic glimpses from the chair.",
    "pricing.title": "Investment",
    "pricing.subtitle": "Bespoke pricing for bespoke beauty.",
    "pricing.contact": "Contact for pricing",
    "booking.title": "Book Your Appointment",
    "booking.note": "Any day, any time — subject to availability.",
    "booking.send": "Send via WhatsApp",
    "testimonials.title": "Client Feedback",
    "contact.title": "Get in Touch",
    "footer.rights": "All rights reserved.",
  },
  te: {
    "nav.home": "హోమ్",
    "nav.services": "సేవలు",
    "nav.gallery": "గ్యాలరీ",
    "nav.videos": "వీడియోలు",
    "nav.pricing": "ధరలు",
    "nav.booking": "బుకింగ్",
    "nav.contact": "సంప్రదించండి",
    "cta.whatsapp": "వాట్సాప్‌లో బుక్ చేయండి",
    "cta.gallery": "గ్యాలరీ చూడండి",
    "hero.eyebrow": "బ్రైడల్ మేకప్ ఆర్టిస్ట్ · హైదరాబాద్",
    "hero.title": "శాశ్వతంగా ఉండే అందం",
    "hero.subtitle": "సరెయు — మాతంగి సరస్వతి ద్వారా బ్రైడల్ & ఎడిటోరియల్ మేకప్.",
    "services.title": "ప్రత్యేక సేవలు",
    "services.subtitle": "ఆధునిక వధువు కోసం రూపొందించిన అనుభవాలు.",
    "about.title": "ఆర్టిస్ట్ గురించి",
    "about.body": "మాతంగి సరస్వతి 3+ సంవత్సరాల అనుభవం, శిక్షణ సర్టిఫికేట్‌తో లగ్జరీ బ్రైడల్ బ్యూటీలో నిష్ణాతురాలు. ప్రీమియం బ్రాండెడ్ ప్రొడక్ట్స్‌తో ప్రతి లుక్ ప్రత్యేకంగా రూపొందించబడుతుంది.",
    "gallery.title": "పోర్ట్‌ఫోలియో",
    "gallery.subtitle": "ఎంపిక చేసిన బ్రైడల్ క్షణాలు మరియు ఎడిటోరియల్ పని.",
    "ba.title": "ముందు & తరువాత",
    "ba.subtitle": "సొగసు మరియు వివరాలతో రూపాంతరాలు.",
    "videos.title": "వీడియో ప్రదర్శన",
    "videos.subtitle": "మేకప్ చైర్ నుండి సినిమాటిక్ సన్నివేశాలు.",
    "pricing.title": "పెట్టుబడి",
    "pricing.subtitle": "ప్రత్యేక అందం కోసం ప్రత్యేక ధరలు.",
    "pricing.contact": "ధరల కోసం సంప్రదించండి",
    "booking.title": "మీ అపాయింట్‌మెంట్ బుక్ చేయండి",
    "booking.note": "ఏ రోజు, ఏ సమయం అయినా — లభ్యతను బట్టి.",
    "booking.send": "వాట్సాప్ ద్వారా పంపండి",
    "testimonials.title": "క్లయింట్ ఫీడ్‌బ్యాక్",
    "contact.title": "సంప్రదించండి",
    "footer.rights": "అన్ని హక్కులూ రక్షించబడ్డాయి.",
  },
  hi: {
    "nav.home": "होम",
    "nav.services": "सेवाएँ",
    "nav.gallery": "गैलरी",
    "nav.videos": "वीडियो",
    "nav.pricing": "मूल्य",
    "nav.booking": "बुकिंग",
    "nav.contact": "संपर्क",
    "cta.whatsapp": "व्हाट्सएप पर बुक करें",
    "cta.gallery": "गैलरी देखें",
    "hero.eyebrow": "ब्राइडल मेकअप आर्टिस्ट · हैदराबाद",
    "hero.title": "सौंदर्य जो सदा रहे",
    "hero.subtitle": "सरेयु — मातंगी सरस्वती द्वारा ब्राइडल और एडिटोरियल मेकअप।",
    "services.title": "हस्ताक्षर सेवाएँ",
    "services.subtitle": "आधुनिक दुल्हन के लिए विशेष अनुभव।",
    "about.title": "कलाकार के बारे में",
    "about.body": "मातंगी सरस्वती 3+ वर्षों के अनुभव और प्रशिक्षण प्रमाणपत्र के साथ लक्ज़री ब्राइडल ब्यूटी में निपुण हैं। प्रीमियम ब्रांडेड उत्पादों के साथ हर लुक विशेष रूप से तैयार किया जाता है।",
    "gallery.title": "पोर्टफोलियो",
    "gallery.subtitle": "ब्राइडल पल और एडिटोरियल कार्य का चयन।",
    "ba.title": "पहले और बाद में",
    "ba.subtitle": "सुंदरता और विस्तार से परिभाषित परिवर्तन।",
    "videos.title": "वीडियो प्रदर्शन",
    "videos.subtitle": "मेकअप चेयर से सिनेमाई झलकियाँ।",
    "pricing.title": "निवेश",
    "pricing.subtitle": "विशेष सौंदर्य के लिए विशेष मूल्य।",
    "pricing.contact": "मूल्य के लिए संपर्क करें",
    "booking.title": "अपनी अपॉइंटमेंट बुक करें",
    "booking.note": "किसी भी दिन, किसी भी समय — उपलब्धता के अधीन।",
    "booking.send": "व्हाट्सएप के माध्यम से भेजें",
    "testimonials.title": "ग्राहक प्रतिक्रिया",
    "contact.title": "संपर्क करें",
    "footer.rights": "सर्वाधिकार सुरक्षित।",
  },
};

const I18nContext = createContext<{ lang: Lang; setLang: (l: Lang) => void; t: (k: string) => string }>({
  lang: "en",
  setLang: () => {},
  t: (k) => k,
});

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");
  useEffect(() => {
    if (typeof window === "undefined") return;
    const saved = localStorage.getItem("sareyu-lang") as Lang | null;
    if (saved && ["en", "te", "hi"].includes(saved)) setLangState(saved);
  }, []);
  const setLang = (l: Lang) => {
    setLangState(l);
    if (typeof window !== "undefined") localStorage.setItem("sareyu-lang", l);
  };
  const t = (k: string) => translations[lang][k] ?? translations.en[k] ?? k;
  return <I18nContext.Provider value={{ lang, setLang, t }}>{children}</I18nContext.Provider>;
}

export const useI18n = () => useContext(I18nContext);