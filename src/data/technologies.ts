export type TechGroup = {
  category: string;
  items: string[];
};

export const technologies: TechGroup[] = [
  { category: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS"] },
  { category: "Backend", items: ["Node.js", "Python", "Java", ".NET"] },
  { category: "Mobile", items: ["React Native", "Swift", "Kotlin", "Flutter"] },
  { category: "Cloud", items: ["AWS", "Azure", "Google Cloud", "Vercel"] },
  { category: "AI / ML", items: ["PyTorch", "TensorFlow", "LLM APIs", "Vector Search"] },
  { category: "Database", items: ["PostgreSQL", "MongoDB", "Redis", "Snowflake"] },
  { category: "DevOps", items: ["Docker", "Kubernetes", "Terraform", "GitHub Actions"] },
  { category: "Integrations", items: ["REST & GraphQL", "Stripe", "Salesforce", "SAP"] },
];
