export type ServiceDetail = {
    slug: string;
    heroTitle: string;
    heroSubtitle: string;
    heroDescription: string;

    whyTitle: string;
    whyDescription: string;

    benefits: {
        title: string;
        description: string;
    }[];

    processTitle: string;
    processDescription: string;

    process: {
        number: string;
        title: string;
        description: string;
    }[];

    manageTitle: string;
    manageItems: string[];

    closingTitle: string;
    closingDescription: string;

    faqs: {
        question: string;
        answer: string;
    }[];
};

export const serviceDetails: Record<string, ServiceDetail> = {
    /* ================================================================
       01 — IT TECHNICAL MANAGEMENT
    ================================================================= */

    "it-technical-management": {
        slug: "it-technical-management",

        heroTitle: "Keep Your IT Systems Running Without Stress",

        heroSubtitle:
            "Reliable IT Technical Management from DZ MARKETING SOLUTIONS PVT. LTD.",

        heroDescription:
            "Your IT systems empower your business and when they fail, work stops. We monitor, maintain, and optimize your computers, networks, and servers, so you can focus on growth.",

        whyTitle:
            "Why Choose DZ MARKETING SOLUTIONS PVT. LTD. for IT Technical Management?",

        whyDescription:
            "Your IT systems empower your business and when they fail, work stops. We monitor, maintain, and optimize your computers, networks, and servers, so you can focus on growth. Our services are tailored for everyone–from startups to enterprises to keep your systems reliable and secure.",

        benefits: [
            {
                title: "Proactive Problem Prevention",
                description:
                    "We monitor your systems 24/7 to catch issues before they disrupt you. Our proactive ITIL services help you keep your operations smooth.",
            },
            {
                title: "Tailored Support For Any Business",
                description:
                    "We customize our IT management to fit your needs and also make sure you only pay for what you need making it truly about your business.",
            },
            {
                title: "Expert Team, Simple Solutions",
                description:
                    "Our team uses tools like Nagios and Zabbix and explains everything clearly without any requirement for tech specific knowledge to streamline IT operations for your company.",
            },
            {
                title: "Efficiency & Cost Savings",
                description:
                    "We optimize your IT to run faster and last longer cutting frequent maintenance costs. Our clients save thousands by avoiding unexpected repairs and downtime.",
            },
        ],

        processTitle: "You Bring The Idea. We Shape The Product",

        processDescription:
            "Our simple and transparent approach keeps your technology reliable while allowing your team to focus on what matters most.",

        process: [
            {
                number: "01",
                title: "We Assess Your Current Setup",
                description:
                    "Before we touch anything, we dive into your current setup. We assess what’s working, what’s not working, and what’s holding your team back. Then we map your systems, listen to your team, and design a hands-on technical management plan that supports how you work.",
            },
            {
                number: "02",
                title: "We Set Up Management Tools",
                description:
                    "Once the plan is in place, we handle the setup: configuring servers, securing networks, enabling monitoring, and connecting devices. We lay down a clean, secure, and reliable foundation for your day-to-day operations based on your cloud-based or on-premise operations.",
            },
            {
                number: "03",
                title: "We Keep Everything Running",
                description:
                    "We stay in the background and quietly take care of system health, security patches, performance monitoring, and updates. So, you’ll never have to guess who to call if something breaks as we’ll be already on it.",
            },
            {
                number: "04",
                title: "You Get Ongoing Support",
                description:
                    "We offer real help to your team whenever you run into problems. Our technical support team is available when you need them with a dedicated manager who knows your setup and speaks your language.",
            },
            {
                number: "05",
                title: "We Help You With Optimization",
                description:
                    "As your business evolves, we regularly review and fine-tune your systems. Our experts suggest improvements to keep your infrastructure efficient, secure, and scalable to help your IT setup grow with you.",
            },
        ],

        manageTitle: "We Manage",

        manageItems: [
            "Laptops, desktops, and mobile devices",
            "Servers (physical and virtual)",
            "Network equipment (routers, firewalls, switches)",
            "Microsoft 365, Google Workspace, and other platforms",
            "Cloud services and infrastructure",
            "Backup systems and recovery plans",
        ],

        closingTitle: "Take Tech Off Your Plate",

        closingDescription:
            "Tech isn’t your full-time job, but it’s ours. Let’s make sure your systems stop being a headache and start being a real strength.",

        faqs: [
            {
                question: "How quickly can you resolve IT issues?",
                answer:
                    "Our response depends on the severity and impact of the issue. Critical problems are prioritized immediately while standard requests are handled through our support process.",
            },
            {
                question: "What does IT Technical Management cost?",
                answer:
                    "Costs depend on your business size and needs. Contact us for a free quote tailored to you.",
            },
            {
                question: "Can you support small businesses?",
                answer:
                    "Yes. Our IT management services can be customized for startups, small businesses, growing companies, and enterprises.",
            },
            {
                question: "Do you work remotely or on-site?",
                answer:
                    "We can provide remote support and can work with businesses that require on-site technical assistance.",
            },
            {
                question: "Can you help us scale as we grow?",
                answer:
                    "Absolutely. We continuously review your infrastructure and recommend improvements so your IT environment can grow with your business.",
            },
            {
                question: "Do you replace my internal IT team?",
                answer:
                    "Not necessarily. We can complement your existing IT team, provide additional expertise, or manage specific areas of your technology environment.",
            },
        ],
    },

    /* ================================================================
       02 — DIGITAL MARKETING
    ================================================================= */

    "digital-marketing": {
        slug: "digital-marketing",

        heroTitle: "Grow Your Business With Smarter Digital Marketing",

        heroSubtitle:
            "Data-driven digital marketing solutions from DZ MARKETING SOLUTIONS PVT. LTD.",

        heroDescription:
            "We create focused digital marketing strategies that connect your business with the right audience, strengthen your online presence, and turn attention into measurable growth.",

        whyTitle: "Why Choose DZ MARKETING SOLUTIONS PVT. LTD. for Digital Marketing?",

        whyDescription:
            "Your customers are online. We help your business reach them with the right message, on the right platform, at the right time.",

        benefits: [
            {
                title: "Data-Driven Strategy",
                description:
                    "We use insights, analytics, and customer behavior to create marketing strategies based on measurable opportunities.",
            },
            {
                title: "Targeted Campaigns",
                description:
                    "Reach the audiences that matter most with campaigns designed around your business goals.",
            },
            {
                title: "Strong Online Presence",
                description:
                    "Build a consistent digital presence across search, social media, content, and other important channels.",
            },
            {
                title: "Measurable Growth",
                description:
                    "Track performance and continuously optimize campaigns to improve engagement, leads, and business results.",
            },
        ],

        processTitle: "From Strategy To Growth",

        processDescription:
            "We create a clear digital marketing roadmap and continuously optimize it around your business goals.",

        process: [
            {
                number: "01",
                title: "Understand Your Business",
                description:
                    "We learn about your business, audience, competitors, goals, and existing digital presence.",
            },
            {
                number: "02",
                title: "Build The Strategy",
                description:
                    "We create a practical marketing strategy based on your target audience and business objectives.",
            },
            {
                number: "03",
                title: "Launch Campaigns",
                description:
                    "We execute campaigns across relevant digital channels and create content designed to attract your audience.",
            },
            {
                number: "04",
                title: "Measure Performance",
                description:
                    "We track important metrics and identify opportunities for improvement.",
            },
            {
                number: "05",
                title: "Optimize For Growth",
                description:
                    "We continuously refine campaigns and strategies based on real performance data.",
            },
        ],

        manageTitle: "What We Manage",

        manageItems: [
            "Search Engine Optimization",
            "Social Media Marketing",
            "Content Marketing",
            "Paid Advertising",
            "Lead Generation",
            "Analytics & Performance Tracking",
        ],

        closingTitle: "Turn Attention Into Business",

        closingDescription:
            "Your digital presence should do more than look good. It should help your business grow.",

        faqs: [
            {
                question: "How long does digital marketing take to show results?",
                answer:
                    "Results vary by channel, industry, competition, and goals. We establish measurable milestones and continuously optimize performance.",
            },
            {
                question: "Can you work with our existing marketing team?",
                answer:
                    "Yes. We can complement your internal team or manage selected digital marketing activities.",
            },
            {
                question: "Do you provide SEO services?",
                answer:
                    "Yes. SEO can be included as part of a broader digital growth strategy.",
            },
            {
                question: "Can you manage paid advertising?",
                answer:
                    "Yes. We can plan, launch, monitor, and optimize paid digital campaigns.",
            },
        ],
    },

    /* ================================================================
       FALLBACK FOR REMAINING SERVICES
    ================================================================= */

    "it-consulting": {
        slug: "it-consulting",
        heroTitle: "Technology Consulting Built Around Your Business",
        heroSubtitle: "Practical IT consulting from DZ MARKETING SOLUTIONS PVT. LTD.",
        heroDescription:
            "Make better technology decisions with expert guidance designed around your business goals, technical environment, and future growth.",
        whyTitle: "Why Choose DZ MARKETING SOLUTIONS PVT. LTD. for IT Consulting?",
        whyDescription:
            "We help businesses understand their technology challenges, identify opportunities, and create practical roadmaps for improvement.",
        benefits: [
            {
                title: "Strategic Guidance",
                description:
                    "Clear technology recommendations aligned with your business objectives.",
            },
            {
                title: "Technical Expertise",
                description:
                    "Experienced guidance across modern IT infrastructure and digital technologies.",
            },
            {
                title: "Scalable Solutions",
                description:
                    "Technology plans designed to support your current needs and future growth.",
            },
            {
                title: "Better Decisions",
                description:
                    "Reduce technology uncertainty with practical, business-focused advice.",
            },
        ],
        processTitle: "From Challenge To Solution",
        processDescription:
            "We understand your requirements, evaluate your current environment, and create a roadmap.",
        process: [
            {
                number: "01",
                title: "Understand",
                description:
                    "We understand your business, challenges, existing systems, and goals.",
            },
            {
                number: "02",
                title: "Assess",
                description:
                    "We review your current technology environment and identify opportunities.",
            },
            {
                number: "03",
                title: "Plan",
                description:
                    "We create a clear and practical technology roadmap.",
            },
            {
                number: "04",
                title: "Implement",
                description:
                    "We help you execute the recommended improvements.",
            },
            {
                number: "05",
                title: "Optimize",
                description:
                    "We continuously review and improve your technology environment.",
            },
        ],
        manageTitle: "Our Consulting Areas",
        manageItems: [
            "IT Infrastructure",
            "Cloud Strategy",
            "Technology Roadmaps",
            "Digital Transformation",
            "Security & Compliance",
            "System Optimization",
        ],
        closingTitle: "Make Technology Work For You",
        closingDescription:
            "Get the clarity and technical direction you need to make smarter technology decisions.",
        faqs: [
            {
                question: "Do you work with existing IT teams?",
                answer:
                    "Yes. We can work alongside internal teams or provide independent technology guidance.",
            },
            {
                question: "Can you help with digital transformation?",
                answer:
                    "Yes. We can assess your current environment and create a roadmap for digital transformation.",
            },
            {
                question: "Do you support small businesses?",
                answer:
                    "Yes. Our consulting approach can be adapted to businesses of different sizes.",
            },
        ],
    },

    "cloud-applications": {
        slug: "cloud-applications",
        heroTitle: "Build Scalable Cloud Applications",
        heroSubtitle: "Modern cloud solutions from DZ MARKETING SOLUTIONS PVT. LTD.",
        heroDescription:
            "Create secure, scalable, and reliable cloud applications designed to support modern business operations.",
        whyTitle: "Why Choose DZ MARKETING SOLUTIONS PVT. LTD. for Cloud Applications?",
        whyDescription:
            "We help businesses modernize applications and infrastructure using scalable cloud technologies.",
        benefits: [
            {
                title: "Scalable Architecture",
                description:
                    "Build applications that can grow as your users and business grow.",
            },
            {
                title: "Secure Infrastructure",
                description:
                    "Design cloud environments with security and reliability in mind.",
            },
            {
                title: "Better Performance",
                description:
                    "Optimize applications and infrastructure for reliable performance.",
            },
            {
                title: "Cost Efficiency",
                description:
                    "Use cloud resources efficiently to control infrastructure costs.",
            },
        ],
        processTitle: "From Idea To Cloud",
        processDescription:
            "We plan, build, deploy, and optimize cloud applications around your business requirements.",
        process: [
            {
                number: "01",
                title: "Assess",
                description:
                    "We understand your application and infrastructure requirements.",
            },
            {
                number: "02",
                title: "Architect",
                description:
                    "We design a scalable cloud architecture.",
            },
            {
                number: "03",
                title: "Develop",
                description:
                    "We build and integrate your cloud application.",
            },
            {
                number: "04",
                title: "Deploy",
                description:
                    "We deploy your solution using a reliable cloud environment.",
            },
            {
                number: "05",
                title: "Optimize",
                description:
                    "We monitor and continuously improve performance and reliability.",
            },
        ],
        manageTitle: "Cloud Services",
        manageItems: [
            "Cloud Application Development",
            "Cloud Migration",
            "Cloud Infrastructure",
            "Application Modernization",
            "Cloud Security",
            "Monitoring & Optimization",
        ],
        closingTitle: "Ready For The Cloud?",
        closingDescription:
            "Modernize your applications and build an infrastructure that can grow with your business.",
        faqs: [
            {
                question: "Which cloud platforms do you support?",
                answer:
                    "We can work with major cloud platforms and select the architecture based on your requirements.",
            },
            {
                question: "Can you migrate existing applications?",
                answer:
                    "Yes. We can assess existing applications and create a migration strategy.",
            },
            {
                question: "Are cloud applications secure?",
                answer:
                    "Security is considered throughout architecture, development, deployment, and monitoring.",
            },
        ],
    },

    "application-development": {
        slug: "application-development",
        heroTitle: "Build Software That Actually Solves Problems",
        heroSubtitle:
            "Custom IT application development from DZ MARKETING SOLUTIONS PVT. LTD.",
        heroDescription:
            "We design and build applications tailored to your business goals, whether you need a tool for your team, a system for your customers, or a better way to manage your data.",
        whyTitle:
            "Why Choose DZ MARKETING SOLUTIONS PVT. LTD. for IT Application Development?",
        whyDescription:
            "We build custom web, mobile, and cloud applications designed to streamline work and support business growth.",
        benefits: [
            {
                title: "Tailored Apps",
                description:
                    "We create applications that suit your specific business requirements.",
            },
            {
                title: "User-Friendly Design",
                description:
                    "Applications are designed to be intuitive and easy to use.",
            },
            {
                title: "Scalable & Modern",
                description:
                    "Modern technologies help applications grow with your business.",
            },
            {
                title: "Proven Results",
                description:
                    "Custom applications can improve customer satisfaction and business efficiency.",
            },
        ],
        processTitle: "You Bring The Idea. We Shape The Product",
        processDescription:
            "From requirements and design to development, testing, launch, and optimization.",
        process: [
            {
                number: "01",
                title: "We Assess Your Needs",
                description:
                    "We listen to your goals and identify the requirements of your application.",
            },
            {
                number: "02",
                title: "We Design An Idea",
                description:
                    "We create a blueprint with user-friendly interfaces and robust architecture.",
            },
            {
                number: "03",
                title: "We Build And Test",
                description:
                    "We develop your application and test performance, security, and usability.",
            },
            {
                number: "04",
                title: "We Launch And Support",
                description:
                    "We help launch your application and support your team.",
            },
            {
                number: "05",
                title: "We Optimize For Growth",
                description:
                    "We add improvements and scalability as your business evolves.",
            },
        ],
        manageTitle: "What We Offer",
        manageItems: [
            "Web & Mobile Apps",
            "AI-Based Web Apps",
            "Cloud-Based Apps",
            "SaaS Solutions",
            "System Integration",
            "Maintenance & Support",
        ],
        closingTitle: "Build Software That Moves Your Business Forward",
        closingDescription:
            "No complex code. No unnecessary complexity. Just applications built around your business.",
        faqs: [
            {
                question: "How long does app development take?",
                answer:
                    "Most applications can take several months depending on complexity, integrations, and requirements.",
            },
            {
                question: "Can you build apps for startups?",
                answer:
                    "Yes. We create solutions for startups, SMEs, and larger businesses.",
            },
            {
                question: "What types of apps do you develop?",
                answer:
                    "We build web, mobile, cloud, SaaS, CRM, inventory, customer portal, and custom business applications.",
            },
            {
                question: "Are your applications secure?",
                answer:
                    "Yes. Security is considered throughout the development lifecycle.",
            },
            {
                question: "Can you integrate existing systems?",
                answer:
                    "Yes. We can connect applications with CRMs, ERPs, Microsoft 365, and other third-party systems.",
            },
        ],
    },
};