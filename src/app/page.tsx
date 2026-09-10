import { Hero } from "@/components/home/Hero";
import { Stats } from "@/components/home/Stats";
import { AboutPreview } from "@/components/home/AboutPreview";
import { ServicesShowcase } from "@/components/home/ServicesShowcase";
import { Industries } from "@/components/home/Industries";
import { IndustryShowcase } from "@/components/home/IndustryShowcase";
import { GlobalPresence } from "@/components/home/GlobalPresence";
import { WhyChooseUsHome } from "@/components/home/WhyChooseUsHome";
import { Process } from "@/components/home/Process";
import { Technologies } from "@/components/home/Technologies";
import { Faq } from "@/components/home/Faq";
import { CTASection } from "@/components/ui/CTASection";

export default function HomePage() {
  return (
    <>
      <Hero />

      <Stats />

      <AboutPreview />

      <ServicesShowcase />

      <Industries />

      <IndustryShowcase />

      <GlobalPresence />

      <WhyChooseUsHome />

      <Process />

      <Technologies />

      <Faq />

      <CTASection
        title="Have a challenge worth solving?"
        description="Tell us what you're building, fixing or transforming."
        buttonLabel="Start a Conversation"
      />
    </>
  );
}