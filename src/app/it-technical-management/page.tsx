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
  title: "IT Technical Management Services | DZ MARKETING SOLUTIONS PVT. LTD.",
  description:
    "Proactive IT technical management, server monitoring, network maintenance, and system operations support by DZ MARKETING SOLUTIONS PVT. LTD.",
  alternates: { canonical: "/it-technical-management" },
};

export default function ITTechnicalManagementPage() {
  const service = servicesData.find((s) => s.id === "it-technical-management");
  if (!service) notFound();

  return (
    <>
      <ServiceHero service={service} />
      <ServiceProblem businessChallenge={service.businessChallenge} />
      <ServiceWhyChoose
        whyAstrivion={service.whyAstrivion}
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
        title="Keep your critical IT systems running seamlessly."
        subtitle="Schedule a consultation with our senior technical management team today."
      />
    </>
  );
}
