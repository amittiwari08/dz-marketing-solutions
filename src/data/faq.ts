export type FaqItem = {
  id: string;
  question: string;
  answer: string;
};

export const faqs: FaqItem[] = [
  {
    id: "approach",
    question: "How do you approach software projects?",
    answer:
      "We start by understanding the business problem, not the tech stack. Every engagement begins with discovery, moves through design and architecture, then into iterative, visible development cycles.",
  },
  {
    id: "customization",
    question: "Can solutions be customized to our business?",
    answer:
      "Yes. We rarely deploy off-the-shelf solutions unchanged — most engagements involve tailoring architecture, workflows and integrations to how your business actually operates.",
  },
  {
    id: "technologies",
    question: "What technologies do you work with?",
    answer:
      "Our teams work across modern web, mobile, cloud and AI stacks — including React, Next.js, Node.js, Python, AWS, Azure and applied LLM integrations. See our full capability list in the Technology section above.",
  },
  {
    id: "scalability",
    question: "How do you handle scalability?",
    answer:
      "We design for scale from the architecture stage — infrastructure as code, auto-scaling cloud environments and performance testing before launch, not as an afterthought once traffic grows.",
  },
  {
    id: "support",
    question: "Do you provide post-launch support?",
    answer:
      "Yes. We offer ongoing monitoring, maintenance and iteration after launch, so the system keeps working as your business and its requirements evolve.",
  },
];
