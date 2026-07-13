export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  cover: string;
  category: string;
  readTime: string;
  author: string;
  date: string;
  highlights: string[];
  content: string[];
};

export type ProjectItem = {
  slug: string;
  title: string;
  summary: string;
  cover: string;
  category: string;
  result: string;
  client: string;
  timeline: string;
  highlights: string[];
  content: string[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "partnerships-business-resilience",
    title: "Why strong partnerships improve business resilience",
    excerpt:
      "Organizations that invest in trusted partnerships tend to respond better to change and deliver more consistently.",
    cover:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80",
    category: "Insights",
    readTime: "5 min read",
    author: "Adam I. Ajao",
    date: "July 2026",
    highlights: [
      "Shared accountability strengthens delivery outcomes",
      "Clear communication reduces project friction",
      "Reliable collaborators improve resilience during change",
    ],
    content: [
      "Reliable partnerships create flexibility when markets shift and priorities change. Businesses that work with experienced collaborators are often better positioned to respond quickly, plan confidently, and protect service quality.",
      "At Beltline Global Services Limited, we believe strong collaboration is not only about delivery. It is about shared accountability, transparent communication, and consistent execution over time.",
      "That mindset is especially valuable for organizations balancing growth, compliance, and operational pressure. A dependable partner can reduce risk while helping teams stay focused on the bigger picture.",
      "In practical terms, this means fewer delays, smoother coordination, and stronger confidence in both short-term results and long-term growth strategies.",
    ],
  },
  {
    slug: "streamlined-logistics-operations",
    title: "The value of streamlined logistics in modern operations",
    excerpt:
      "Reliable coordination can save time, reduce stress, and improve overall delivery performance.",
    cover:
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1200&q=80",
    category: "Operations",
    readTime: "4 min read",
    author: "Beltline Operations Team",
    date: "June 2026",
    highlights: [
      "Better coordination reduces delays and confusion",
      "Clear workflow visibility improves decision-making",
      "Dependable execution supports client trust",
    ],
    content: [
      "Efficient logistics has become a competitive advantage. When operations are coordinated well, clients experience less disruption and teams can focus on strategic work.",
      "Good logistics is not only about movement. It is about timeliness, visibility, planning, and accurate handoffs between people and processes.",
      "For organizations with ambitious delivery targets, integrated support can make a measurable difference in cost control and confidence.",
      "The most successful service models combine planning discipline with responsive execution, creating a smoother experience for everyone involved.",
    ],
  },
  {
    slug: "technology-support-service-delivery",
    title: "How technology supports better service delivery",
    excerpt:
      "Integrated digital support can strengthen communication, accountability, and client experience.",
    cover:
      "https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=1200&q=80",
    category: "Technology",
    readTime: "6 min read",
    author: "Beltline Tech Advisory",
    date: "May 2026",
    highlights: [
      "Digital support improves client responsiveness",
      "Thoughtful systems unlock better reporting",
      "People and technology work best together",
    ],
    content: [
      "Technology can improve service delivery when it is paired with thoughtful processes and clear ownership. The goal is not just automation, but better outcomes for the end user.",
      "By combining reliable systems with experienced teams, organizations can create smoother workflows, faster response times, and stronger reporting structures.",
      "That blend of people and technology is a strong foundation for sustainable growth.",
      "When adopted with care, digital tools can strengthen accountability and create more confidence across every touchpoint.",
    ],
  },
];

export const projects: ProjectItem[] = [
  {
    slug: "operational-transformation-support",
    title: "Operational Transformation Support",
    summary:
      "Delivered strategic consulting support for improved workflow and business coordination.",
    cover:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80",
    category: "Consulting",
    result:
      "Improved delivery coordination and clearer planning across the engagement.",
    client: "Growth-focused enterprise",
    timeline: "3 months",
    highlights: [
      "Structured planning framework",
      "Improved interdepartmental coordination",
      "Clear execution milestones",
    ],
    content: [
      "The project focused on strengthening cross-functional coordination and supporting leadership decision-making with structured planning and communication.",
      "By simplifying reporting and establishing clearer operational milestones, the client gained better visibility over implementation progress and accountability.",
      "The result was a more resilient operating rhythm and stronger confidence in delivery outcomes.",
      "The engagement also provided a practical blueprint for future initiatives, helping the team scale more smoothly without losing control of execution quality.",
    ],
  },
  {
    slug: "digital-rollout-coordination",
    title: "Digital Rollout Coordination",
    summary:
      "Supported a technology-focused initiative with strong implementation and follow-through.",
    cover:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
    category: "IT Services",
    result: "Enabled smoother rollout planning and improved team alignment.",
    client: "Technology-led organization",
    timeline: "6 weeks",
    highlights: [
      "Implementation readiness planning",
      "Clear responsibility mapping",
      "Stronger adoption support",
    ],
    content: [
      "The assignment centered on supporting a digital transition with coordination, readiness planning, and structured communication.",
      "Our team helped map responsibilities, track priorities, and maintain momentum during implementation.",
      "This created a stronger foundation for adoption and long-term value realization.",
      "The project demonstrated how thoughtful coordination can reduce disruption and help teams adapt to new systems with greater confidence.",
    ],
  },
  {
    slug: "logistics-and-supply-execution",
    title: "Logistics and Supply Execution",
    summary:
      "Managed delivery and coordination support to ensure smooth operations and consistent service.",
    cover:
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1200&q=80",
    category: "Logistics",
    result: "Delivered dependable execution with fewer service interruptions.",
    client: "Operations-driven business",
    timeline: "2 months",
    highlights: [
      "Tighter delivery coordination",
      "Consistent supply visibility",
      "Reliable stakeholder communication",
    ],
    content: [
      "The engagement required careful coordination across delivery schedules, supplies, and stakeholder expectations.",
      "By bringing structure to the workflow and maintaining close communication, we supported a more reliable operating process for the client.",
      "The outcome was improved confidence in execution and better continuity in service delivery.",
      "It also highlighted the importance of proactive planning when fast-moving operational demands require steady oversight.",
    ],
  },
];
