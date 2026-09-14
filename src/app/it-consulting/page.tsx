import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { servicesData } from "@/data/servicesData";
import { ServiceHero } from "@/components/services/ServiceHero";
import { ServiceProblem } from "@/components/services/ServiceProblem";
import { ServiceWhyChoose } from "@/components/services/ServiceWhyChoose";
import { ServiceBenefits } from "@/components/services/ServiceBenefits";
import { ServiceProcess } from "@/components/services/ServiceProcess";
import { ServiceCapabilities } from "@/components/services/ServiceCapabilities";
import { ServiceFAQ } from "@/components/services/ServiceFAQ";
import { ServiceCTA } from "@/components/services/ServiceCTA";

export const metadata: Metadata = {
  title: "IT Consulting Services | DZ MARKETING SOLUTIONS",
  description:
    "Strategic IT consulting, technology audits, architecture guidance, and digital transformation roadmaps by DZ MARKETING SOLUTIONS",
  alternates: { canonical: "/it-consulting" },
};

export default function ITConsultingPage() {
  const service = servicesData.find((s) => s.id === "it-consulting");
  if (!service) notFound();

  return (
    <>
      <ServiceHero service={service} />
      <ServiceProblem businessChallenge={service.businessChallenge} />
      <ServiceWhyChoose
        whyDZ={service.whyDZ}
        supportingImage={service.supportingImages[0]}
      />
      <ServiceBenefits benefits={service.benefits} />
      <ServiceProcess
        process={service.process}
        supportingImage={service.supportingImages[1]}
      />
      <ServiceCapabilities capabilities={service.capabilities} />
      <ServiceFAQ faq={service.faq} />
      <ServiceCTA
        title="Make confident technology decisions."
        subtitle="Connect with our independent technology advisors to align your IT strategy with business goals."
      />
    </>
  );
}


