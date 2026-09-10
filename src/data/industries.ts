export type Industry = {
  id: string;
  name: string;
  icon: string; // lucide-react icon name
  description: string;
};

export const industries: Industry[] = [
  {
    id: "banking-finance",
    name: "Banking & Finance",
    icon: "Landmark",
    description: "Secure, compliant systems for payments, lending and core banking workflows.",
  },
  {
    id: "education",
    name: "Education & E-Learning",
    icon: "GraduationCap",
    description: "Learning platforms and administrative systems built for scale and accessibility.",
  },
  {
    id: "healthcare",
    name: "Healthcare",
    icon: "HeartPulse",
    description: "Patient-facing and operational software designed around data sensitivity.",
  },
  {
    id: "travel-tourism",
    name: "Travel & Tourism",
    icon: "PlaneTakeoff",
    description: "Booking engines and itinerary platforms that keep pace with modern travel.",
  },
  {
    id: "isv",
    name: "ISV Companies",
    icon: "AppWindow",
    description: "Engineering support and infrastructure for independent software vendors.",
  },
  {
    id: "media-entertainment",
    name: "Media & Entertainment",
    icon: "Clapperboard",
    description: "Content platforms and delivery systems built for scale and reliability.",
  },
  {
    id: "ecommerce",
    name: "E-Commerce",
    icon: "ShoppingCart",
    description: "Storefronts, checkout systems and integrations that convert and scale.",
  },
  {
    id: "blockchain",
    name: "Blockchain",
    icon: "Link2",
    description: "Applied blockchain engineering for businesses with a genuine use case.",
  },
  {
    id: "cloud-devops",
    name: "Cloud & DevOps",
    icon: "CloudCog",
    description: "Infrastructure automation and cloud architecture built for reliability.",
  },
  {
    id: "cms",
    name: "CMS",
    icon: "LayoutTemplate",
    description: "Content management systems tailored to how your teams actually publish.",
  },
];
