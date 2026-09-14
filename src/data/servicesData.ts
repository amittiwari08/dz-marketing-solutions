export type ServiceDetail = {
  id: string;
  route: string;
  number: string;
  title: string;
  category: string;
  shortDescription: string;
  heroTitle: string;
  heroSubtitle: string;
  mainImage: {
    url: string;
    alt: string;
  };
  heroImage: {
    url: string;
    alt: string;
  };
  supportingImages: Array<{
    url: string;
    alt: string;
  }>;
  businessChallenge: {
    title: string;
    description: string;
    points: string[];
  };
  whyDZ: {
    title: string;
    description: string;
    points: Array<{ title: string; text: string }>;
  };
  benefits: Array<{
    title: string;
    description: string;
  }>;
  process: Array<{
    step: string;
    title: string;
    description: string;
  }>;
  capabilities: Array<{
    title: string;
    description: string;
  }>;
  faq: Array<{
    question: string;
    answer: string;
  }>;
};

export const servicesData: ServiceDetail[] = [
  {
    id: "it-technical-management",
    route: "/it-technical-management",
    number: "01",
    title: "IT Technical Management",
    category: "Infrastructure & System Operations",
    shortDescription:
      "Day-to-day infrastructure and systems management so internal teams can focus on core business growth.",
    heroTitle: "Keep Your IT Systems Running Without Stress.",
    heroSubtitle:
      "Proactive infrastructure monitoring, network optimization, vendor coordination, and incident management for high-availability enterprise environments.",
    mainImage: {
      url: "/images/service-it-management.jpg",
      alt: "IT Technical Management systems operations control dashboard",
    },
    heroImage: {
      url: "/images/service-it-management.jpg",
      alt: "IT infrastructure management team reviewing system telemetry",
    },
    supportingImages: [
      {
        url: "/images/service-it-management-supplied.png",
        alt: "Enterprise infrastructure monitoring and security administration",
      },
      {
        url: "/images/industry-showcase.jpg",
        alt: "Technical management team collaborating on network operations",
      },
    ],
    businessChallenge: {
      title: "The Challenge of Unmanaged IT Operations",
      description:
        "Modern enterprise systems require constant vigilance. When technical infrastructure is managed reactively, businesses suffer from unexpected downtime, security vulnerabilities, and high overhead costs.",
      points: [
        "Unplanned server and network outages disrupting business productivity",
        "Vague accountability across multiple third-party hardware and software vendors",
        "Internal engineering resources consumed by maintenance rather than innovation",
        "Lack of centralized monitoring and proactive incident management",
      ],
    },
    whyDZ: {
      title: "Why Choose DZ MARKETING SOLUTIONS for Technical Management",
      description:
        "We act as your dedicated IT operational backbone. We combine proactive monitoring with rapid response workflows to keep your hardware, networks, and cloud environments performing seamlessly.",
      points: [
        {
          title: "Proactive Problem Prevention",
          text: "Continuous monitoring detects and resolves performance bottlenecks before they cause downtime.",
        },
        {
          title: "Single Point of Accountability",
          text: "We handle vendor escalations, licensing, hardware updates, and network maintenance in one unified service.",
        },
        {
          title: "Dedicated Operational Support",
          text: "Experienced systems engineers assigned directly to your infrastructure with clear escalation paths.",
        },
        {
          title: "Predictable Cost Structure",
          text: "Eliminate unexpected repair bills with transparent operational management models.",
        },
      ],
    },
    benefits: [
      {
        title: "Maximum System Availability",
        description:
          "Keep essential business applications and core network services accessible round-the-clock.",
      },
      {
        title: "Reduced Operational Risk",
        description:
          "Structured patch management, backup verification, and security monitoring mitigate data loss.",
      },
      {
        title: "Operational Cost Efficiency",
        description:
          "Lower total cost of ownership compared to building out internal 24/7 IT maintenance teams.",
      },
      {
        title: "Full Infrastructure Visibility",
        description:
          "Clear performance reports, inventory audits, and actionable telemetry on system health.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Infrastructure Audit",
        description:
          "We analyze your existing hardware, server topology, network configuration, and active software licenses.",
      },
      {
        step: "02",
        title: "Monitoring Deployment",
        description:
          "We configure real-time telemetry, automated alert thresholds, and centralized health dashboards.",
      },
      {
        step: "03",
        title: "Proactive Maintenance",
        description:
          "Regular patch management, security updates, data backup checks, and performance optimization.",
      },
      {
        step: "04",
        title: "Incident Escalation",
        description:
          "Rapid response to system anomalies with documented resolution procedures and root-cause analysis.",
      },
    ],
    capabilities: [
      {
        title: "Infrastructure Monitoring & Maintenance",
        description:
          "24/7 telemetry tracking server CPU, memory, storage, network traffic, and application responsiveness.",
      },
      {
        title: "Network & Endpoint Security Management",
        description:
          "Firewall configuration, VPN access management, endpoint protection, and security patch deployment.",
      },
      {
        title: "Vendor & License Coordination",
        description:
          "Managing third-party software agreements, hardware warranties, and ISP service level agreements.",
      },
      {
        title: "Disaster Recovery & Backup Management",
        description:
          "Automated off-site backup routines with regularly tested disaster recovery restoration procedures.",
      },
    ],
    faq: [
      {
        question: "How quickly does DZ MARKETING SOLUTIONS respond to critical IT incidents?",
        answer:
          "Our automated telemetry alerts our technical team immediately upon threshold breaches, ensuring rapid containment and resolution according to agreed response targets.",
      },
      {
        question: "Can DZ MARKETING SOLUTIONS manage both cloud and on-premise infrastructure?",
        answer:
          "Yes. We specialize in hybrid environments, providing unified operational management across physical server rooms, co-location facilities, and cloud providers.",
      },
      {
        question: "Will our internal team retain administrative control?",
        answer:
          "Absolutely. We work alongside your internal team, offering co-managed IT operations or full management while maintaining transparent access governance.",
      },
    ],
  },
  {
    id: "it-consulting",
    route: "/it-consulting",
    number: "02",
    title: "IT Consulting",
    category: "Strategy & Advisory",
    shortDescription:
      "Independent technical guidance on software architecture, vendor evaluation, and strategic technology roadmaps.",
    heroTitle: "Strategic Technology Advice Backed By Senior Expertise.",
    heroSubtitle:
      "Align your IT investments with long-term business goals through independent technology audits, platform strategy, and digital transformation roadmaps.",
    mainImage: {
      url: "/images/about-team.jpg",
      alt: "IT Consulting strategic business meeting and architecture planning",
    },
    heroImage: {
      url: "/images/about-team.jpg",
      alt: "Senior technology consultant guiding executive business planning",
    },
    supportingImages: [
      {
        url: "/images/hero-intro.jpg",
        alt: "Digital transformation strategy session and interactive dashboard",
      },
      {
        url: "/images/industry-showcase.jpg",
        alt: "Technology consulting team evaluating business growth metrics",
      },
    ],
    businessChallenge: {
      title: "Navigating Complex Technology Decisions",
      description:
        "Choosing the wrong tech stack, overpaying for mismatched software licenses, or accumulating technical debt can stall company growth for years.",
      points: [
        "Uncertainty around build-vs-buy decisions for core enterprise applications",
        "Legacy software systems slowing down operational velocity and growth",
        "Disconnected software tools causing data silos and manual re-entry",
        "Lack of clear technical leadership during digital transformation initiatives",
      ],
    },
    whyDZ: {
      title: "Why Partner with DZ MARKETING SOLUTIONS for IT Consulting",
      description:
        "We provide vendor-neutral, practical guidance grounded in engineering reality. We bridge the gap between executive business vision and technical execution.",
      points: [
        {
          title: "Vendor-Neutral Perspective",
          text: "We evaluate tools and vendors purely based on what delivers maximum ROI for your organization.",
        },
        {
          title: "Senior Engineering Advisory",
          text: "Our recommendations come from seasoned technology leaders with hands-on architecture experience.",
        },
        {
          title: "Actionable Digital Roadmaps",
          text: "We deliver concrete implementation plans with clear timelines, resource needs, and milestone tracking.",
        },
        {
          title: "Risk-Mitigated Architecture",
          text: "Prioritize security, compliance, and scalability before committing capital to engineering builds.",
        },
      ],
    },
    benefits: [
      {
        title: "Confident Decision Making",
        description:
          "Make high-stakes technology choices backed by thorough technical evaluation and financial analysis.",
      },
      {
        title: "Capital Optimization",
        description:
          "Avoid expensive custom builds where off-the-shelf platforms suffice, and eliminate redundant software licenses.",
      },
      {
        title: "Accelerated Transformation",
        description:
          "Streamline modern software adoption with proven architectural patterns and governance frameworks.",
      },
      {
        title: "Future-Proofed Systems",
        description:
          "Design software and data pipelines built to scale seamlessly as market demands evolve.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Discovery & Assessment",
        description:
          "We interview key stakeholders and conduct deep technical audits of your current software and infrastructure.",
      },
      {
        step: "02",
        title: "Gap Analysis",
        description:
          "Identify performance bottlenecks, security exposure, scalability limits, and redundant operational costs.",
      },
      {
        step: "03",
        title: "Strategic Roadmap",
        description:
          "Formulate a prioritized technology roadmap detailing architecture, platform selection, budget, and timeline.",
      },
      {
        step: "04",
        title: "Governance & Execution Support",
        description:
          "Provide technical oversight during implementation to ensure adherence to architectural standards.",
      },
    ],
    capabilities: [
      {
        title: "Technology Audits & Risk Assessment",
        description:
          "Evaluating legacy codebases, infrastructure security, third-party vendor reliability, and scalability limits.",
      },
      {
        title: "Platform & Build-vs-Buy Evaluation",
        description:
          "Objective financial and architectural comparison between custom development and enterprise SaaS platforms.",
      },
      {
        title: "Digital Transformation Roadmaps",
        description:
          "Multi-year technology strategies aligned with business expansion, team hiring, and market shifts.",
      },
      {
        title: "Enterprise Systems Integration Strategy",
        description:
          "Designing robust API contracts and data exchange pipelines across ERP, CRM, and custom internal systems.",
      },
    ],
    faq: [
      {
        question: "How long does a typical IT consulting engagement take?",
        answer:
          "Initial technology assessments and strategic roadmaps typically take 2 to 4 weeks depending on organizational size and system complexity.",
      },
      {
        question: "Does DZ MARKETING SOLUTIONS assist with vendor negotiations?",
        answer:
          "Yes. We assist during RFPs, technical evaluations, and contract negotiations to ensure favorable SLAs and technical terms.",
      },
      {
        question: "Can DZ MARKETING SOLUTIONS execute the recommended technology roadmap?",
        answer:
          "Yes. Our engineering and cloud teams can execute the implementation directly, or mentor your internal engineers through the transition.",
      },
    ],
  },
  {
    id: "cloud-applications",
    route: "/cloud-applications",
    number: "03",
    title: "Cloud Applications",
    category: "Cloud Infrastructure & Engineering",
    shortDescription:
      "Modern, cloud-native applications and serverless migrations built for resilience, security, and elasticity.",
    heroTitle: "Scalable Cloud Architecture Built for Business Reliability.",
    heroSubtitle:
      "Design, build, and modernize cloud applications on leading cloud platforms using Infrastructure as Code, containerization, and auto-scaling architecture.",
    mainImage: {
      url: "/images/service-cloud-mesh.jpg",
      alt: "Cloud Applications infrastructure topology and cloud mesh visual",
    },
    heroImage: {
      url: "/images/service-cloud-mesh.jpg",
      alt: "Cloud architecture engineer configuring cloud native application stack",
    },
    supportingImages: [
      {
        url: "/images/hero-bg-cyber.jpg",
        alt: "Secure cloud microservices network and data connectivity visual",
      },
      {
        url: "/images/global-network-map.jpg",
        alt: "Global cloud deployment network and multi-region application node map",
      },
    ],
    businessChallenge: {
      title: "Overcoming Cloud Complexity & High Costs",
      description:
        "Migrating to the cloud without proper architecture often results in spiraling cloud bills, brittle deployments, and security misconfigurations.",
      points: [
        "Monolithic legacy applications struggling to handle peak traffic demand",
        "Unoptimized cloud instances causing excessive monthly cloud infrastructure spend",
        "Manual deployment procedures prone to human error and prolonged downtime",
        "Security compliance gaps in cloud resource permissions and network policies",
      ],
    },
    whyDZ: {
      title: "Why Choose DZ MARKETING SOLUTIONS for Cloud Applications",
      description:
        "We build cloud software using modern cloud-native patterns â€” Infrastructure as Code (IaC), containerization, and automated CI/CD pipelines for maximum elasticity.",
      points: [
        {
          title: "Infrastructure as Code (IaC)",
          text: "Environments are programmatically defined, making cloud setups fully reproducible and version-controlled.",
        },
        {
          title: "Continuous Cost Optimization",
          text: "Rightsizing compute instances, leveraging serverless resources, and eliminating idle cloud capacity.",
        },
        {
          title: "Automated Deployment Pipelines",
          text: "Zero-downtime blue/green or canary deployments built into your engineering workflow.",
        },
        {
          title: "Multi-Layered Cloud Security",
          text: "Strict Identity & Access Management (IAM), data encryption at rest and in transit, and continuous compliance checks.",
        },
      ],
    },
    benefits: [
      {
        title: "Seamless Elasticity",
        description:
          "Applications automatically scale resource capacity based on live traffic, maintaining lightning speed.",
      },
      {
        title: "High Operational Uptime",
        description:
          "Fault-tolerant multi-zone deployments prevent single points of hardware or network failure.",
      },
      {
        title: "Optimized Cloud Spend",
        description:
          "Pay only for active computing consumption through efficient auto-scaling and serverless resource usage.",
      },
      {
        title: "Accelerated Release Cycles",
        description:
          "Ship new software features to production safely and rapidly using automated deployment pipelines.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Cloud Readiness Review",
        description:
          "We evaluate application dependencies, database workloads, security requirements, and data storage needs.",
      },
      {
        step: "02",
        title: "Target Architecture Design",
        description:
          "Design microservices, serverless components, container clusters, and automated networking topologies.",
      },
      {
        step: "03",
        title: "Migration & Containerization",
        description:
          "Refactor applications into containers, script Infrastructure as Code templates, and conduct staging test runs.",
      },
      {
        step: "04",
        title: "Cutover & Telemetry",
        description:
          "Execute low-risk cloud cutover with real-time performance telemetry, log aggregation, and automated alerts.",
      },
    ],
    capabilities: [
      {
        title: "Cloud Migration & Application Modernization",
        description:
          "Transforming legacy desktop or monolithic applications into modern cloud-native SaaS platforms.",
      },
      {
        title: "Infrastructure as Code (IaC)",
        description:
          "Automating cloud environment provisioning using declarative tools like Terraform and CloudFormation.",
      },
      {
        title: "Containerization & Microservices",
        description:
          "Orchestrating scalable application services with Docker and Kubernetes for high availability.",
      },
      {
        title: "Cloud Security & Compliance Hardening",
        description:
          "Implementing VPC security groups, secrets management, encryption protocols, and audit logging.",
      },
    ],
    faq: [
      {
        question: "Which cloud providers does DZ MARKETING SOLUTIONS work with?",
        answer:
          "We work across major cloud platforms including Amazon Web Services (AWS), Microsoft Azure, and Google Cloud Platform (GCP).",
      },
      {
        question: "How do you ensure zero downtime during cloud migration?",
        answer:
          "We utilize database replication, blue/green environment deployment, and gradual traffic switching to ensure zero end-user disruption.",
      },
      {
        question: "Can you help reduce our current monthly cloud bill?",
        answer:
          "Yes. Our cloud finops assessment identifies overprovisioned resources, unattached storage volumes, and optimal reserved instance pricing.",
      },
    ],
  },
  {
    id: "application-development",
    route: "/application-development",
    number: "04",
    title: "IT Application Development",
    category: "Software Engineering & Web Apps",
    shortDescription:
      "Custom web, mobile, and desktop applications engineered for high performance, long-term maintainability, and clean UX.",
    heroTitle: "Custom Software Solutions Built For Performance And Scale.",
    heroSubtitle:
      "End-to-end full-stack software development â€” from modern web platforms and APIs to custom internal enterprise tools and mobile applications.",
    mainImage: {
      url: "/images/service-uiux.jpg",
      alt: "IT Application Development software code editor and UI design interface",
    },
    heroImage: {
      url: "/images/service-uiux.jpg",
      alt: "Software engineer coding clean web application interface",
    },
    supportingImages: [
      {
        url: "/images/featured-ai.jpg",
        alt: "Advanced application logic and artificial intelligence integration visual",
      },
      {
        url: "/images/hero-bg-robot.jpg",
        alt: "Futuristic software automation and interactive application UI screen",
      },
    ],
    businessChallenge: {
      title: "Overcoming Off-the-Shelf Software Limits",
      description:
        "Generic software often forces business processes to conform to rigid templates, leading to operational friction and missed market opportunities.",
      points: [
        "Inflexible SaaS tools that fail to accommodate unique workflow rules",
        "Legacy software systems built on outdated frameworks that are difficult to update",
        "Poor user experience driving down internal adoption and customer satisfaction",
        "Siloed tools requiring constant manual CSV exports and spreadsheet workarounds",
      ],
    },
    whyDZ: {
      title: "Why Choose DZ MARKETING SOLUTIONS for Application Development",
      description:
        "We build clean, maintainable software using modern frameworks, modular architecture, comprehensive test suites, and intuitive user interfaces.",
      points: [
        {
          title: "Clean Modern Architecture",
          text: "We write clean, documented code using TypeScript, React, Next.js, Node.js, and robust relational databases.",
        },
        {
          title: "User-Centered Experience Design",
          text: "Interactive interfaces designed for clarity, rapid workflow execution, and minimal user training.",
        },
        {
          title: "Automated Testing & CI/CD",
          text: "Continuous automated testing prevents regression bugs and ensures confidence in every release.",
        },
        {
          title: "Seamless API Integrations",
          text: "Connect your custom software directly into ERPs, payment gateways, CRMs, and third-party web services.",
        },
      ],
    },
    benefits: [
      {
        title: "Tailored to Your Operations",
        description:
          "Software built precisely around how your team works, eliminating manual workarounds.",
      },
      {
        title: "High Scalability & Speed",
        description:
          "Engineered for fast response times and efficient query performance under heavy user loads.",
      },
      {
        title: "Maintainable Codebase",
        description:
          "Clean code standards and comprehensive documentation ensure your team can extend software for years.",
      },
      {
        title: "Superior User Engagement",
        description:
          "Thoughtful UI/UX design keeps users focused and reduces task completion time.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Requirements & UX Wireframing",
        description:
          "Map core user journeys, data models, workflow specifications, and interactive UX wireframes.",
      },
      {
        step: "02",
        title: "Frontend & Backend Development",
        description:
          "Build scalable backend APIs and responsive frontend user interfaces using modern web technologies.",
      },
      {
        step: "03",
        title: "Integration & Automated QA",
        description:
          "Connect external services, perform security audits, and run unit and end-to-end test suites.",
      },
      {
        step: "04",
        title: "Deployment & Ongoing Iteration",
        description:
          "Launch application with automated CI/CD pipelines, monitor error logs, and deliver iterative feature enhancements.",
      },
    ],
    capabilities: [
      {
        title: "Custom Web Application Development",
        description:
          "Full-stack SaaS applications, client portals, administrative dashboards, and internal business platforms.",
      },
      {
        title: "REST & GraphQL API Architecture",
        description:
          "Secure, high-throughput backend APIs built for third-party integrations and multi-platform support.",
      },
      {
        title: "Legacy Code Refactoring & Modernization",
        description:
          "Upgrading outdated legacy codebases to modern TypeScript frameworks without business disruption.",
      },
      {
        title: "UI/UX Design & Frontend Engineering",
        description:
          "Crafting responsive design systems, accessible components, and intuitive interactive workflows.",
      },
    ],
    faq: [
      {
        question: "Does DZ MARKETING SOLUTIONS hand over full source code ownership?",
        answer:
          "Yes. Upon project completion, full intellectual property and repository ownership belong entirely to your organization.",
      },
      {
        question: "What tech stack does DZ MARKETING SOLUTIONS specialize in?",
        answer:
          "We specialize in modern web stacks including TypeScript, React, Next.js, Node.js, Python, PostgreSQL, REST/GraphQL APIs, and Docker containerization.",
      },
      {
        question: "Do you offer post-launch maintenance and updates?",
        answer:
          "Yes. We offer continuous software maintenance, feature development, server monitoring, and security update packages.",
      },
    ],
  },
  {
    id: "enterprise-resource-planning",
    route: "/enterprise-resource-planning",
    number: "05",
    title: "Enterprise Resource Planning",
    category: "ERP & Operations Engineering",
    shortDescription:
      "Integrated ERP implementations, custom workflow modules, and business process automation spanning operations, finance, and inventory.",
    heroTitle: "Unify Your Operations With Custom Enterprise ERP Solutions.",
    heroSubtitle:
      "Centralize financial management, inventory tracking, order fulfillment, and operational analytics into one single accountable source of truth.",
    mainImage: {
      url: "/images/service-erp-map.jpg",
      alt: "Enterprise Resource Planning ERP operational analytics dashboard",
    },
    heroImage: {
      url: "/images/service-erp-map.jpg",
      alt: "Enterprise business executive analyzing ERP financial workflow dashboard",
    },
    supportingImages: [
      {
        url: "/images/global-network-map.jpg",
        alt: "Global supply chain and enterprise resource tracking network map",
      },
      {
        url: "/images/industry-showcase.jpg",
        alt: "Enterprise operations team reviewing cross-departmental ERP analytics",
      },
    ],
    businessChallenge: {
      title: "The Costs of Fragmented Enterprise Data",
      description:
        "When finance, sales, inventory, and operations run on isolated spreadsheets and independent tools, leadership lacks real-time visibility into business performance.",
      points: [
        "Inaccurate inventory reporting leading to stockouts or excess holding costs",
        "Manual reconciliation across accounting systems, e-commerce, and logistics",
        "Delayed month-end financial reporting due to fragmented transaction records",
        "Inefficient operational workflows requiring repetitive data re-entry across teams",
      ],
    },
    whyDZ: {
      title: "Why Choose DZ MARKETING SOLUTIONS for ERP Engineering",
      description:
        "We implement, customize, and integrate Enterprise Resource Planning systems engineered specifically around how your business operations actually function.",
      points: [
        {
          title: "Single Source of Truth",
          text: "Connect finance, sales, purchasing, inventory, and human resources into one synchronized database.",
        },
        {
          title: "Custom Module Development",
          text: "We build custom ERP extensions and tailored workflows where standard modules fall short.",
        },
        {
          title: "Seamless System Integration",
          text: "Integrate ERP software with custom web portals, payment processors, and logistics APIs.",
        },
        {
          title: "Phased & Low-Risk Rollouts",
          text: "Structured data migration and module staging minimize operational downtime during transition.",
        },
      ],
    },
    benefits: [
      {
        title: "Real-Time Operational Visibility",
        description:
          "Live dashboards tracking inventory levels, order status, cash flow, and departmental key metrics.",
      },
      {
        title: "Automated Business Workflows",
        description:
          "Automate purchase order approvals, invoice generation, inventory reordering, and dispatch tracking.",
      },
      {
        title: "Faster Financial Reconciliation",
        description:
          "Accelerate accounting month-end closing through automated transaction matching and ledger reporting.",
      },
      {
        title: "Improved Inventory Turnover",
        description:
          "Optimize stock quantities based on predictive demand patterns and historical order cycles.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Process Mapping & Blueprinting",
        description:
          "We analyze your existing workflows across finance, inventory, sales, and supply chain logistics.",
      },
      {
        step: "02",
        title: "System Architecture & Customization",
        description:
          "Configure core ERP modules, custom fields, approval chains, financial ledgers, and API connectors.",
      },
      {
        step: "03",
        title: "Data Migration & Validation",
        description:
          "Cleanse, transform, and import historical customer, vendor, product, and financial records into the new system.",
      },
      {
        step: "04",
        title: "User Training & Production Go-Live",
        description:
          "Conduct role-based team training, run parallel validation testing, and execute seamless production deployment.",
      },
    ],
    capabilities: [
      {
        title: "ERP Implementation & Customization",
        description:
          "Implementing and customizing open and enterprise ERP frameworks to match complex operational rules.",
      },
      {
        title: "Inventory & Supply Chain Automation",
        description:
          "Real-time stock tracking, multi-warehouse management, automated reorder thresholds, and supplier management.",
      },
      {
        title: "Financial Ledgers & Reporting Systems",
        description:
          "Automated general ledger, accounts payable, accounts receivable, tax compliance, and executive reporting.",
      },
      {
        title: "Custom Module & API Connector Build",
        description:
          "Developing proprietary software extensions, custom reporting tools, and e-commerce/CRM integrations.",
      },
    ],
    faq: [
      {
        question: "How long does an ERP implementation take?",
        answer:
          "Timelines depend on scope and module count. Standard deployments take 6 to 12 weeks with phased module rollouts.",
      },
      {
        question: "How do you handle migration of legacy business data?",
        answer:
          "We write custom ETL scripts to extract, sanitize, and validate legacy data before running dry-run test migrations to guarantee 100% data integrity.",
      },
      {
        question: "Can the ERP system integrate with our existing website or app?",
        answer:
          "Yes. We build custom API connectors to sync orders, inventory, pricing, and customer records bidirectionally.",
      },
    ],
  },
];

