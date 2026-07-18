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
    title: "Why strong partnerships improve business resilience in Nigeria",
    excerpt:
      "Nigerian organizations that invest in trusted partnerships tend to respond better to market shifts and deliver more consistently.",
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
      "Reliable partnerships create flexibility when markets shift and priorities change. In Nigeria, businesses that work with experienced collaborators are often better positioned to respond quickly, plan confidently, and protect service quality.",
      "At Beltline Global Services Limited, we believe strong collaboration is not only about delivery. It is about shared accountability, transparent communication, and consistent execution over time.",
      "That mindset is especially valuable for Nigerian organizations balancing growth, compliance, and operational pressure. A dependable partner can reduce risk while helping teams stay focused on the bigger picture.",
      "In practical terms, this means fewer delays, smoother coordination, and stronger confidence in both short-term results and long-term growth strategies.",
    ],
  },
  {
    slug: "streamlined-logistics-operations",
    title: "The value of streamlined logistics in modern Nigerian operations",
    excerpt:
      "Reliable coordination can save time, reduce stress, and improve overall delivery performance across Nigeria.",
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
      "Efficient logistics has become a competitive advantage in Nigeria. When operations are coordinated well, clients experience less disruption and teams can focus on strategic work.",
      "Good logistics is not only about movement. It is about timeliness, visibility, planning, and accurate handoffs between people and processes.",
      "For Nigerian organizations with ambitious delivery targets, integrated support can make a measurable difference in cost control and confidence.",
      "The most successful service models combine planning discipline with responsive execution, creating a smoother experience for everyone involved.",
    ],
  },
  {
    slug: "technology-support-service-delivery",
    title: "How technology supports better service delivery for Nigerian businesses",
    excerpt:
      "Integrated digital support can strengthen communication, accountability, and client experience for Nigerian organizations.",
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
      "By combining reliable systems with experienced teams, Nigerian organizations can create smoother workflows, faster response times, and stronger reporting structures.",
      "That blend of people and technology is a strong foundation for sustainable growth in the Nigerian market.",
      "When adopted with care, digital tools can strengthen accountability and create more confidence across every touchpoint.",
    ],
  },
  {
    slug: "ai-strategy-for-nigerian-businesses",
    title: "AI strategy for Nigerian businesses: a practical guide",
    excerpt:
      "Nigerian organizations can start small with AI by focusing on clear problems, available data, and realistic outcomes.",
    cover:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&q=80",
    category: "AI & Strategy",
    readTime: "7 min read",
    author: "Adam I. Ajao",
    date: "July 2026",
    highlights: [
      "Start with a specific business problem",
      "Assess data readiness before investing",
      "Measure outcomes, not just activity",
    ],
    content: [
      "Artificial intelligence is most useful when it solves real business problems rather than adding complexity for its own sake. For many Nigerian organizations, the best first step is identifying a clear use case where AI can save time, reduce cost, or improve decision-making.",
      "Before adopting any AI tool, evaluate your data quality, team readiness, and existing workflows. Strong results come from matching the right solution to the right context.",
      "Practical AI adoption also means setting measurable goals. Track how AI affects response times, error rates, customer satisfaction, or revenue so you can justify future investment.",
      "With the right approach, AI becomes a competitive advantage rather than a technical distraction for Nigerian businesses.",
    ],
  },
  {
    slug: "data-driven-procurement",
    title: "Why data-driven procurement reduces risk for Nigerian businesses",
    excerpt:
      "Using analytics in sourcing and supplier management helps Nigerian organizations make smarter buying decisions.",
    cover:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80",
    category: "Procurement",
    readTime: "5 min read",
    author: "Beltline Advisory Team",
    date: "June 2026",
    highlights: [
      "Analytics improve supplier selection",
      "Better visibility reduces procurement risk",
      "Data supports stronger negotiation outcomes",
    ],
    content: [
      "Procurement decisions have a direct impact on cost, quality, and operational stability. When Nigerian teams rely only on intuition or habit, they risk missing better options or repeating past mistakes.",
      "Data-driven procurement introduces transparency into supplier performance, pricing trends, and delivery reliability. That visibility makes it easier to choose partners who consistently deliver value.",
      "Nigerian organizations that invest in procurement analytics also gain stronger negotiating positions because they can benchmark offers and track historical performance.",
      "Over time, this creates a more resilient supply chain and better financial outcomes for businesses operating in Nigeria.",
    ],
  },
  {
    slug: "event-marketing-in-the-ai-era",
    title: "Event marketing in the AI era: opportunities for Nigerian brands",
    excerpt:
      "AI tools are changing how Nigerian events are promoted, personalized, and measured for impact.",
    cover:
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1200&q=80",
    category: "Events",
    readTime: "5 min read",
    author: "Beltline Events Team",
    date: "May 2026",
    highlights: [
      "AI speeds up content creation for events",
      "Personalization improves audience engagement",
      "Better analytics improve post-event insights",
    ],
    content: [
      "Modern event marketing benefits from speed, personalization, and measurement. AI tools now help Nigerian teams create visuals, write copy, and automate follow-up communications faster than traditional methods.",
      "Personalization is especially powerful. AI can help tailor invitations, reminders, and post-event messages based on audience behavior and preferences.",
      "Measurement has also improved. With better analytics, Nigerian organizers can understand which channels drove attendance, which sessions generated the most engagement, and what follow-up actions delivered results.",
      "The result is more professional events with stronger ROI and better guest experiences for Nigerian audiences.",
    ],
  },
  {
    slug: "building-culture-around-ai-literacy",
    title: "Building a culture around AI literacy in Nigerian organizations",
    excerpt:
      "Nigerian organizations that train their teams on AI basics move faster and make better technology decisions.",
    cover:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80",
    category: "Education",
    readTime: "4 min read",
    author: "Beltline Training Team",
    date: "April 2026",
    highlights: [
      "Basic AI awareness reduces fear and resistance",
      "Practical training accelerates adoption",
      "Leadership buy-in drives cultural change",
    ],
    content: [
      "AI literacy is no longer optional. Nigerian teams that understand basic AI concepts are better equipped to identify opportunities, evaluate tools, and participate in transformation initiatives.",
      "Training should start with practical examples rather than abstract theory. Show Nigerian employees how AI can help with their daily tasks, from writing emails to analyzing reports.",
      "Leadership involvement matters. When executives model curiosity and support learning, the rest of the organization follows.",
      "Over time, an AI-literate culture becomes a strategic asset that supports innovation, efficiency, and talent retention in Nigerian businesses.",
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
