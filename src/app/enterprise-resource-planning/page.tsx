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
  title: "Enterprise Resource Planning Services | DZ MARKETING SOLUTIONS PVT. LTD.",
  description:
    "Custom ERP implementation, process automation, financial ledgers, and supply chain integrations by DZ MARKETING SOLUTIONS PVT. LTD.",
  alternates: { canonical: "/enterprise-resource-planning" },
};

export default function EnterpriseResourcePlanningPage() {
  const service = servicesData.find((s) => s.id === "enterprise-resource-planning");
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
        title="Unify your operational data into one system."
        subtitle="Schedule an ERP operational audit with our enterprise systems specialists."
      />
    </>
  );
}
