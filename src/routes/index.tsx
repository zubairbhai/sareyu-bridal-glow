import { createFileRoute } from "@tanstack/react-router";
import { I18nProvider } from "@/lib/i18n";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { Services } from "@/components/site/Services";
import { About } from "@/components/site/About";
import { Gallery } from "@/components/site/Gallery";
import { Videos } from "@/components/site/Videos";
import { Booking } from "@/components/site/Booking";
import { Testimonials } from "@/components/site/Testimonials";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { FloatingWhatsApp } from "@/components/site/FloatingWhatsApp";
import { LoadingScreen } from "@/components/site/LoadingScreen";
import { SmoothScroll } from "@/components/site/SmoothScroll";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <I18nProvider>
      <div className="min-h-screen bg-background">
        <LoadingScreen />
        <SmoothScroll />
        <Header />
        <main>
          <Hero />
          <Reveal direction="up" duration={1000}><Services /></Reveal>
          <Reveal direction="left" duration={1000} distance={36}><About /></Reveal>
          <Reveal direction="zoom" duration={1100}><Gallery /></Reveal>
          <Reveal direction="up" duration={1000}><Videos /></Reveal>
          <Reveal direction="right" duration={1000} distance={36}><Booking /></Reveal>
          <Reveal direction="fade" duration={1100}><Testimonials /></Reveal>
          <Reveal direction="up" duration={1000}><Contact /></Reveal>
        </main>
        <Footer />
        <FloatingWhatsApp />
      </div>
    </I18nProvider>
  );
}
