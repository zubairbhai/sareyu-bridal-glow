import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

import appCss from "../styles.css?url";

const SITE_URL = "https://sareyu-bridal-glow.lovable.app";
const OG_IMAGE = "https://res.cloudinary.com/dadu9qcfz/image/upload/v1777482222/IMG-20260429-WA0002_zto43i.jpg";
const TITLE = "Sareyu World — Best Bridal Makeup Artist, Hair & Nail Studio in Hyderabad | Mathangi Saraswathi";
const DESCRIPTION = "Sareyu World by Mathangi Saraswathi — top-rated bridal makeup artist, hair designer & nail artist in Hyderabad. Bridal makeup, party makeup, HD airbrush, hairstyling, nail art & on-location services. Book Sareyu Makeup Artist today.";
const KEYWORDS = [
  "Sareyu", "Sareyu World", "Sareyu Makeup", "Sareyu Makeup Artist", "Sareyu Bridal", "Sareyu Hyderabad",
  "Sareyu by Mathangi", "Sareyu Saraswathi", "Mathangi Saraswathi", "Mathangi Saraswathi makeup artist",
  "Saraswathi Mathangi MUA", "Sareyu studio", "Sareyu salon", "Sareyu beauty",
  "makeup artist Hyderabad", "best makeup artist Hyderabad", "top makeup artist Hyderabad",
  "bridal makeup artist Hyderabad", "best bridal makeup artist Hyderabad", "luxury bridal makeup Hyderabad",
  "south indian bridal makeup", "telugu bridal makeup artist", "north indian bridal makeup Hyderabad",
  "christian bridal makeup Hyderabad", "muslim bridal makeup Hyderabad", "nikkah makeup artist",
  "engagement makeup artist Hyderabad", "reception makeup Hyderabad", "haldi makeup", "mehendi makeup",
  "sangeet makeup artist", "pre-wedding makeup", "pre-wedding shoot makeup",
  "party makeup artist Hyderabad", "birthday makeup artist", "anniversary makeup",
  "HD makeup artist Hyderabad", "airbrush makeup Hyderabad", "HD airbrush makeup",
  "celebrity makeup artist Hyderabad", "freelance makeup artist Hyderabad", "professional MUA Hyderabad",
  "editorial makeup artist", "model makeup artist", "fashion makeup artist", "photoshoot makeup artist",
  "on-location makeup artist Hyderabad", "destination wedding makeup artist",
  "makeup artist near me", "makeup artist in Jubilee Hills", "makeup artist in Banjara Hills",
  "makeup artist in Gachibowli", "makeup artist in Madhapur", "makeup artist in Kondapur",
  "makeup artist Secunderabad", "makeup artist Vijayawada", "makeup artist Telangana",
  "hair designer Hyderabad", "bridal hair stylist Hyderabad", "hairstylist Hyderabad",
  "bridal hairstyles", "hair styling for bride", "wedding hair designer", "hair updo artist",
  "south indian bridal hair", "hair extensions stylist", "hair and makeup artist Hyderabad",
  "nail artist Hyderabad", "nail painter Hyderabad", "bridal nail art", "gel nails Hyderabad",
  "acrylic nails Hyderabad", "nail extensions Hyderabad", "nail studio Hyderabad",
  "nail designer", "wedding nail art", "nail technician Hyderabad",
  "bridal beauty studio", "bridal package Hyderabad", "complete bridal package",
  "saree draping Hyderabad", "bridal styling Hyderabad", "bridal makeover Hyderabad",
  "luxury beauty salon Hyderabad", "premium makeup studio Hyderabad",
].join(", ");

const STRUCTURED_DATA = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BeautySalon",
      "@id": `${SITE_URL}/#business`,
      name: "Sareyu",
      alternateName: "Sareyu by Mathangi Saraswathi",
      description: DESCRIPTION,
      url: SITE_URL,
      image: OG_IMAGE,
      logo: "https://res.cloudinary.com/dadu9qcfz/image/upload/v1777485113/IMG-20260429-WA0014_uub6e0.jpg",
      telephone: "+91-9133492986",
      email: "sareyu9133@gmail.com",
      priceRange: "₹₹₹",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Hyderabad",
        addressRegion: "Telangana",
        addressCountry: "IN",
      },
      areaServed: [
        { "@type": "City", name: "Hyderabad" },
        { "@type": "City", name: "Secunderabad" },
        { "@type": "City", name: "Vijayawada" },
      ],
      sameAs: ["https://instagram.com/saraswatimathangi"],
      founder: { "@id": `${SITE_URL}/#person` },
      makesOffer: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Bridal Makeup" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Party Makeup" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Engagement & Pre-wedding Makeup" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Model & Editorial Makeup" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Hair Styling & Bridal Hair Design" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Nail Art & Nail Extensions" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "HD Airbrush Makeup" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Saree Draping & Bridal Styling" } },
      ],
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "5",
        reviewCount: "32",
      },
    },
    {
      "@type": "Person",
      "@id": `${SITE_URL}/#person`,
      name: "Mathangi Saraswathi",
      jobTitle: "Bridal Makeup Artist, Hair Designer & Nail Artist",
      worksFor: { "@id": `${SITE_URL}/#business` },
      image: "https://res.cloudinary.com/dadu9qcfz/image/upload/v1777485113/IMG-20260429-WA0014_uub6e0.jpg",
      url: SITE_URL,
      sameAs: ["https://instagram.com/saraswatimathangi"],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "Sareyu",
      alternateName: ["Sareyu World", "Sareyu Makeup Artist", "Sareyu by Mathangi Saraswathi"],
      description: DESCRIPTION,
      publisher: { "@id": `${SITE_URL}/#business` },
      inLanguage: ["en", "te", "hi"],
    },
    {
      "@type": "FAQPage",
      "@id": `${SITE_URL}/#faq`,
      mainEntity: [
        {
          "@type": "Question",
          name: "Who is the best bridal makeup artist in Hyderabad?",
          acceptedAnswer: { "@type": "Answer", text: "Sareyu by Mathangi Saraswathi is a top-rated bridal makeup artist in Hyderabad, specialising in luxury bridal, party, HD airbrush makeup, hair design and nail art." },
        },
        {
          "@type": "Question",
          name: "Does Sareyu offer hair styling and nail art along with makeup?",
          acceptedAnswer: { "@type": "Answer", text: "Yes. Sareyu World offers complete bridal packages including makeup, bridal hair design, hairstyling, nail art and nail extensions, and saree draping." },
        },
        {
          "@type": "Question",
          name: "Does Sareyu provide on-location bridal makeup in Hyderabad?",
          acceptedAnswer: { "@type": "Answer", text: "Yes, Sareyu Makeup Artist offers on-location bridal makeup across Hyderabad, Secunderabad and nearby cities, with travel available for destination weddings." },
        },
        {
          "@type": "Question",
          name: "How can I book Sareyu for my wedding?",
          acceptedAnswer: { "@type": "Answer", text: "You can book Sareyu World by calling +91 9133492986 or messaging on WhatsApp directly from sareyu-bridal-glow.lovable.app." },
        },
      ],
    },
  ],
};

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1, viewport-fit=cover" },
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { name: "keywords", content: KEYWORDS },
      { name: "author", content: "Mathangi Saraswathi" },
      { name: "robots", content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" },
      { name: "googlebot", content: "index, follow, max-image-preview:large" },
      { name: "theme-color", content: "#1a0b1f" },
      { name: "format-detection", content: "telephone=yes" },
      { name: "geo.region", content: "IN-TG" },
      { name: "geo.placename", content: "Hyderabad" },
      { name: "rating", content: "General" },
      { property: "og:site_name", content: "Sareyu" },
      { property: "og:locale", content: "en_IN" },
      { property: "og:locale:alternate", content: "te_IN" },
      { property: "og:locale:alternate", content: "hi_IN" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: SITE_URL },
      { property: "og:image", content: OG_IMAGE },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: "Sareyu bridal makeup by Mathangi Saraswathi" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
      { name: "twitter:image", content: OG_IMAGE },
      { name: "twitter:image:alt", content: "Sareyu bridal makeup portfolio" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "canonical", href: SITE_URL },
      { rel: "icon", href: "/favicon.ico" },
      { rel: "apple-touch-icon", href: "https://res.cloudinary.com/dadu9qcfz/image/upload/v1777485113/IMG-20260429-WA0014_uub6e0.jpg" },
      { rel: "manifest", href: "/site.webmanifest" },
      { rel: "sitemap", type: "application/xml", href: "/sitemap.xml" },
      { rel: "alternate", hrefLang: "en", href: SITE_URL },
      { rel: "alternate", hrefLang: "te", href: SITE_URL },
      { rel: "alternate", hrefLang: "hi", href: SITE_URL },
      { rel: "alternate", hrefLang: "x-default", href: SITE_URL },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "preconnect", href: "https://res.cloudinary.com", crossOrigin: "anonymous" },
      { rel: "dns-prefetch", href: "https://res.cloudinary.com" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(STRUCTURED_DATA),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return <Outlet />;
}
