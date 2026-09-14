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
  title: "IT Application Development Services | DZ MARKETING SOLUTIONS",
  description:
    "Custom software engineering, modern web applications, API design, and legacy system modernization by DZ MARKETING SOLUTIONS",
  alternates: { canonical: "/application-development" },
};

export default function ApplicationDevelopmentPage() {
  const service = servicesData.find((s) => s.id === "application-development");
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
        title="Transform your business with custom software."
        subtitle="Talk to our senior full-stack engineering team to discuss your software architecture and feature roadmap."
      />
    </>
  );
}


