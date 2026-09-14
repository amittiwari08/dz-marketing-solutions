import Image from "next/image";
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
  title: "Cloud Application Services | DZ MARKETING SOLUTIONS",
  description:
    "Cloud-native application engineering, cloud migration, Infrastructure as Code, and auto-scaling cloud architectures by DZ MARKETING SOLUTIONS",
  alternates: { canonical: "/cloud-applications" },
};

export default function CloudApplicationsPage() {
  const service = servicesData.find((s) => s.id === "cloud-applications");
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
        title="Ready to build scalable cloud infrastructure?"
        subtitle="Consult our cloud architects to plan your cloud migration or cloud-native application deployment."
      />
    </>
  );
}


