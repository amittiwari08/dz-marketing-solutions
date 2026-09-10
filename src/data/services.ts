export type Service = {
  id: string;
  number: string;
  title: string;
  shortDescription: string;
  description: string;
  icon: string;
  capabilities: string[];
  businessValue: string;
};

export const services: Service[] = [
  {
    id: "it-technical-management",
    number: "01",
    title: "IT Technical Management",
    shortDescription:
      "Day-to-day infrastructure and systems management so internal teams can focus on the work that matters.",
    description:
      "We manage the technical backbone of your business — servers, networks, security posture and vendor coordination — with clear reporting and predictable response times.",
    icon: "ServerCog",
    capabilities: [
      "Infrastructure monitoring & maintenance",
      "Network & endpoint management",
      "Vendor & license coordination",
      "Incident response & escalation",
    ],
    businessValue:
      "Fewer outages, lower overhead, and a single accountable partner for IT operations.",
  },

  {
    id: "digital-marketing",
    number: "02",
    title: "Digital Marketing",
    shortDescription:
      "Data-informed campaigns across search, social and content that connect your offer to the right audience.",
    description:
      "From SEO foundations to paid acquisition and lifecycle campaigns, we build marketing systems that compound rather than campaigns that expire.",
    icon: "TrendingUp",
    capabilities: [
      "SEO & content strategy",
      "Paid search & social campaigns",
      "Marketing analytics & attribution",
      "Conversion rate optimization",
    ],
    businessValue:
      "A measurable pipeline of demand instead of one-off marketing spend.",
  },

  {
    id: "it-consulting",
    number: "03",
    title: "IT Consulting",
    shortDescription:
      "Independent technical guidance on architecture, vendor selection and digital roadmaps.",
    description:
      "We assess your current systems, identify risk and opportunity, and produce a roadmap your internal teams or ours can execute against.",
    icon: "Compass",
    capabilities: [
      "Technology audits & assessments",
      "Architecture & platform strategy",
      "Vendor & build-vs-buy guidance",
      "Digital transformation roadmaps",
    ],
    businessValue:
      "Confident technology decisions backed by an independent, senior perspective.",
  },

  {
    id: "cloud-applications",
    number: "04",
    title: "Cloud Applications",
    shortDescription:
      "Cloud-native applications and migrations built for reliability, security and cost efficiency.",
    description:
      "We design, migrate and operate cloud applications on AWS, Azure and GCP with infrastructure-as-code, so environments stay reproducible and scalable.",
    icon: "CloudCog",
    capabilities: [
      "Cloud migration & modernization",
      "Infrastructure as code",
      "Auto-scaling & cost optimization",
      "Security & compliance hardening",
    ],
    businessValue:
      "Systems that scale with demand without scaling your operational risk.",
  },

  {
    id: "ui-ux-design",
    number: "05",
    title: "UI/UX Design",
    shortDescription:
      "Interfaces designed around how people actually work, tested and refined before a line of code ships.",
    description:
      "Our design process moves from research to wireframes to high-fidelity prototypes, validating decisions with real users at every stage.",
    icon: "PenTool",
    capabilities: [
      "User research & journey mapping",
      "Wireframing & prototyping",
      "Design systems",
      "Usability testing",
    ],
    businessValue:
      "Products people can use without training, support tickets, or friction.",
  },

  {
    id: "application-development",
    number: "06",
    title: "Application Development",
    shortDescription:
      "Custom web and desktop applications engineered for maintainability, not just launch day.",
    description:
      "We build software using modern, well-tested frameworks with automated testing and documentation, so it remains maintainable long after delivery.",
    icon: "Code2",
    capabilities: [
      "Custom web applications",
      "API design & integration",
      "Legacy system modernization",
      "Automated testing & CI/CD",
    ],
    businessValue:
      "Software your team can extend and maintain without starting over.",
  },

  {
    id: "erp",
    number: "07",
    title: "Enterprise Resource Planning",
    shortDescription:
      "ERP implementation and customization that fits how your operations actually run.",
    description:
      "We implement, customize and integrate ERP systems across finance, inventory and operations, minimizing disruption during rollout.",
    icon: "Boxes",
    capabilities: [
      "ERP implementation & rollout",
      "Custom modules & workflows",
      "Data migration",
      "Cross-system integration",
    ],
    businessValue:
      "One operational source of truth across finance, inventory and teams.",
  },

  {
    id: "mobile-app-development",
    number: "08",
    title: "Mobile App Development",
    shortDescription:
      "Native and cross-platform mobile applications for iOS and Android built from a shared codebase where practical.",
    description:
      "We develop performant mobile applications with offline support, push notifications and analytics baked in from day one.",
    icon: "Smartphone",
    capabilities: [
      "iOS & Android development",
      "Cross-platform (React Native)",
      "App store deployment",
      "Analytics & crash monitoring",
    ],
    businessValue:
      "A mobile presence that reaches customers without doubling your engineering cost.",
  },

  {
    id: "artificial-intelligence",
    number: "09",
    title: "Artificial Intelligence",
    shortDescription:
      "Applied AI — from automation to predictive models — integrated where it creates measurable value.",
    description:
      "We identify workflows where AI genuinely improves speed or accuracy, then build, evaluate and deploy models with clear guardrails.",
    icon: "BrainCircuit",
    capabilities: [
      "Process automation",
      "Predictive analytics",
      "Applied LLM integrations",
      "Model evaluation & monitoring",
    ],
    businessValue:
      "AI applied to specific bottlenecks, not bolted on for its own sake.",
  },

  {
    id: "graphic-design",
    number: "10",
    title: "Graphic Design",
    shortDescription:
      "Visual identity and brand assets that hold up across digital and print.",
    description:
      "From brand systems to marketing collateral, our design team builds visual assets that stay consistent across every channel you use.",
    icon: "Palette",
    capabilities: [
      "Brand identity & guidelines",
      "Marketing collateral",
      "Iconography & illustration",
      "Print & packaging design",
    ],
    businessValue:
      "A visual identity that looks intentional everywhere it appears.",
  },

  {
    id: "travel-solutions",
    number: "11",
    title: "Best Travel Solutions",
    shortDescription:
      "Booking engines, GDS integrations and travel platforms for agencies and travel-tech businesses.",
    description:
      "We build and integrate travel technology — booking engines, GDS/OTA connections and itinerary tools — for agencies and travel platforms.",
    icon: "Plane",
    capabilities: [
      "Booking engine development",
      "GDS & OTA integrations",
      "Itinerary & fare management",
      "Travel platform maintenance",
    ],
    businessValue:
      "A booking experience that keeps pace with modern travel platforms.",
  },
];