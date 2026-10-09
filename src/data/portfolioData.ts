import { StatMetric, ServiceDetail, CaseStudy, FaqItem, Testimonial, LaunchReadinessQuestion } from '../types';

export const CONTACT_INFO = {
  name: 'AxentAI Labs',
  founder: 'Shivam Kushwaha — Founder & CEO, Axentailabs',
  role: 'Founder & CEO — Axentailabs',
  company: 'Axentailabs',
  website: 'https://axentailabs.com',
  phone: '+91 91111 83136',
  email: 'shivamkushwaha5202@gmail.com',
  calendlyUrl: 'https://app.cal.com/shivam-kushwaha-2fovpp/book-a-growth-strategy-call-with-shivam',
  whatsappUrl: 'https://wa.me/919111183136',
  whatsapp: 'https://wa.me/919111183136',
  personalLinkedIn: 'https://www.linkedin.com/company/axentailabs/',
  companyLinkedIn: 'https://www.linkedin.com/company/axentailabs/',
  agencyLinkedIn: 'https://www.linkedin.com/company/axentailabs/',
  xTwitter: 'https://x.com',
  location: 'Global / Remote'
};

export const STAT_METRICS: StatMetric[] = [];

export const SERVICES_DATA: ServiceDetail[] = [
  {
    id: 'product-hunt-launch',
    title: 'Product Hunt Launch Support',
    tagline: 'Strategic launch positioning, asset preparation, and real-time coordination for legitimate front-page visibility.',
    icon: 'Rocket',
    badge: 'Launch Execution',
    description: 'Product Hunt is a premier stage for modern software discovery. We provide strategic, hands-on launch support—from narrative framing and visual asset preparation to pre-launch community mobilization and launch-day coordination—centered on genuine user enthusiasm, never manipulated votes.',
    deliverables: [
      'Product Hunt launch strategy',
      'Pre-launch planning',
      'Launch-day support',
      'Community outreach',
      'Content preparation',
      'Launch visibility strategy',
      'Post-launch engagement'
    ],
    resultsMetric: 'Structured Launch Momentum & Front-Page Visibility',
    idealFor: 'SaaS startups, developer tools, AI products, and innovative digital apps ready for market introduction.',
    featured: true,
    portfolioUrl: '/portfolio'
  },
  {
    id: 'linkedin-personal-branding',
    title: 'LinkedIn Personal Branding',
    tagline: 'Transform founder insights into executive authority, network leverage, and high-value inbound conversations.',
    icon: 'UserCheck',
    badge: 'Executive Presence',
    description: 'We help founders, CEOs, and company leaders position themselves as clear category authorities. Through bespoke narrative architecture, consistent editorial planning, and sharp POV content, we build personal brands that compound trust and create lasting business momentum.',
    deliverables: [
      'Personal branding strategy',
      'Profile positioning',
      'Content strategy',
      'Founder and executive branding',
      'Authority building',
      'Consistent content planning'
    ],
    resultsMetric: 'Executive Authority & Founder Pipeline',
    idealFor: 'Tech founders, startup CEOs, and executive leaders seeking organic credibility and network influence.',
    featured: true
  },
  {
    id: 'linkedin-page-handling',
    title: 'LinkedIn Page Handling',
    tagline: 'Full-cycle company page operations designed to build brand affinity, engage target buyers, and retain industry mindshare.',
    icon: 'Share2',
    badge: 'Brand Management',
    description: 'A comprehensive, end-to-end management service for company LinkedIn pages. We take ownership of planning, editorial production, scheduling, daily audience interaction, and monthly strategic iteration so your brand maintains a steady, authoritative presence.',
    deliverables: [
      'Complete LinkedIn page management',
      'Content planning',
      'Post creation',
      'Publishing',
      'Community management',
      'Performance tracking',
      'Monthly growth strategy'
    ],
    resultsMetric: 'Brand Engagement & Consistent Output',
    idealFor: 'B2B startups and growing companies wanting active, polished company page management without internal overhead.',
    featured: true
  },
  {
    id: 'linkedin-organic-engagement',
    title: 'LinkedIn Organic Engagement Support',
    tagline: 'Authentic relationship-building and strategic discussions across target industry ecosystems—100% human, zero bots or spam.',
    icon: 'Sparkles',
    badge: 'Organic Distribution',
    description: 'Real audience interaction is the backbone of organic reach on LinkedIn. We facilitate genuine, high-context conversations in your industry domain, participating in relevant discussions, supporting content distribution, and building authentic community relationships with strict anti-spam ethics.',
    deliverables: [
      'Genuine organic engagement',
      'Relevant audience interaction',
      'Comment strategy',
      'Content distribution support',
      'Community engagement',
      'Organic visibility growth'
    ],
    resultsMetric: 'Contextual Reach & Community Relationships',
    idealFor: 'Founders and brands looking to deepen audience relationships and expand organic impressions ethically.',
    featured: false
  },
  {
    id: 'influencer-marketing',
    title: 'Influencer Marketing',
    tagline: 'Vetted, high-relevance creator partnerships across LinkedIn, X (Twitter), and Instagram that drive qualified attention.',
    icon: 'Megaphone',
    badge: 'Creator Campaigns',
    description: 'Paid influencer campaigns that actually convert. We discover and vet relevant creator voices across LinkedIn, X, and Instagram, manage outreach, negotiate terms, coordinate sponsored content, and track performance end-to-end to ensure your message reaches real decision-makers.',
    deliverables: [
      'Influencer discovery',
      'Creator selection',
      'Campaign strategy',
      'Outreach and coordination',
      'Sponsored content',
      'Campaign management',
      'Performance tracking & reporting'
    ],
    resultsMetric: 'Targeted Creator Distribution across LinkedIn, X & Instagram',
    idealFor: 'Growth-stage companies and funded startups seeking curated creator amplification with clear attribution.',
    featured: false
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'case-study-b2b-saas',
    productName: 'B2B Workflow Platform',
    tagline: 'Founder Personal Branding & LinkedIn Page Growth',
    category: 'SaaS',
    badgeRank: 'Founder Positioning',
    totalUpvotes: 850,
    featuredHunter: 'AxentAI Labs Strategy',
    impressions: '420,000+',
    newSignups: '180+ Inbound Requests',
    xEngagement: 'Consistent weekly reach',
    linkedinReach: '320% Audience Growth',
    founderName: 'Alex Rivera',
    founderTitle: 'CEO & Co-Founder',
    founderAvatar: 'AR',
    testimonial: 'AxentAI Labs translated our complex product thesis into compelling founder perspectives on LinkedIn. Inbound sales conversations increased without running expensive paid media.',
    summary: 'A seed-stage B2B enterprise startup struggling with low social visibility and zero founder presence transitioned into a recognized voice in their niche through strategic LinkedIn personal branding and weekly page handling.',
    keyStrategy: 'Clarified founder POV, established consistent 4x weekly content cadence, and engaged thoughtfully in key industry discussions.'
  },
  {
    id: 'case-study-devtools-launch',
    productName: 'Developer Productivity Suite',
    tagline: 'Product Hunt Launch Support & Community Outreach',
    category: 'Dev Tool',
    badgeRank: 'Top Contender Launch',
    totalUpvotes: 940,
    featuredHunter: 'AxentAI Labs Launch Ops',
    impressions: '650,000+',
    newSignups: '2,800+ Beta Signups',
    xEngagement: 'Organic Developer Discussions',
    linkedinReach: 'Strong Founder Amplification',
    founderName: 'Elena Rostova',
    founderTitle: 'Head of Growth',
    founderAvatar: 'ER',
    testimonial: 'Their launch preparation was meticulous. From the teaser narrative to 24-hour launch-day coordination, AxentAI Labs gave our release the strategic structure it deserved.',
    summary: 'Engineered a 4-week structured pre-launch and launch campaign on Product Hunt, driving sustained front-page visibility and thousands of genuine product trials.',
    keyStrategy: 'High-clarity gallery framing, interactive demo positioning, transparent maker story, and real community outreach across target tech channels.'
  },
  {
    id: 'case-study-creator-syndication',
    productName: 'Modern Collaboration Tool',
    tagline: 'Multi-Channel Creator Campaign on LinkedIn & X',
    category: 'Productivity',
    badgeRank: 'Curated Campaign',
    totalUpvotes: 720,
    featuredHunter: 'AxentAI Labs Partnerships',
    impressions: '1,200,000+',
    newSignups: '950+ Team Accounts',
    xEngagement: 'High-Intent Engagement',
    linkedinReach: 'Multi-Creator Reach',
    founderName: 'Marcus Chen',
    founderTitle: 'Founder',
    founderAvatar: 'MC',
    testimonial: 'Instead of spray-and-pray ads, AxentAI Labs hand-picked 8 creators who genuinely use productivity software. The conversion rate and credibility were exceptional.',
    summary: 'Orchestrated a coordinated creator sponsorship across LinkedIn and X, vetting influencers for genuine technical relevance rather than vanity follower counts.',
    keyStrategy: 'Rigorous creator vetting, custom narrative briefs, staggered release schedule, and UTM-tracked performance attribution.'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'testimonial-1',
    name: 'Alex Rivera',
    role: 'Founder & CEO',
    company: 'B2B Enterprise SaaS',
    avatar: 'AR',
    quote: 'AxentAI Labs helped us build a genuine presence on LinkedIn from scratch. Rather than generic corporate updates, our founder content now consistently sparks conversations with prospective enterprise customers.',
    platform: 'linkedin',
    highlight: 'Executive Authority & Consistent Inbound Leads',
    verifiedLaunch: 'Founder Personal Branding Partner'
  },
  {
    id: 'testimonial-2',
    name: 'Elena Rostova',
    role: 'Co-Founder & Head of Growth',
    company: 'Developer Tooling Startup',
    avatar: 'ER',
    quote: 'The launch support provided by AxentAI Labs for our Product Hunt release was exceptional. They handled positioning, assets, and launch-day coordination with complete professionalism and transparent ethics.',
    platform: 'producthunt',
    highlight: 'Front-Page Visibility & 2,800+ Beta Users',
    verifiedLaunch: 'Product Hunt Launch Execution'
  },
  {
    id: 'testimonial-3',
    name: 'Marcus Chen',
    role: 'Founder',
    company: 'Collaboration Tech',
    avatar: 'MC',
    quote: 'Their influencer marketing workflow is the cleanest I have seen. They identified vetted creators on LinkedIn and X whose audiences matched our ICP exactly. Every deliverable was executed on schedule.',
    platform: 'x',
    highlight: 'Targeted Creator Campaign & Verified ROI',
    verifiedLaunch: 'Creator Marketing Sprint'
  }
];

export const FAQ_DATA: FaqItem[] = [
  {
    id: 'faq-1',
    category: 'X & LinkedIn',
    question: 'How do you approach LinkedIn Personal Branding for founders?',
    answer: 'We start with an in-depth brand and perspective discovery session to understand your unique founder thesis, domain experience, and business objectives. We then define your profile positioning, establish a high-signal content strategy, craft posts in your authentic voice, and maintain a consistent publication and engagement cadence.'
  },
  {
    id: 'faq-2',
    category: 'X & LinkedIn',
    question: 'What is the difference between LinkedIn Page Handling and Personal Branding?',
    answer: 'LinkedIn Personal Branding focuses on the individual founder or executive voice—building human connection, thought leadership, and trust. LinkedIn Page Handling manages the official company entity—handling announcement posts, product milestones, employer branding, community management, and consistent company visibility.'
  },
  {
    id: 'faq-3',
    category: 'X & LinkedIn',
    question: 'What is your philosophy on LinkedIn Organic Engagement Support?',
    answer: 'We strictly practice genuine, contextual engagement. We do not use automation bots, spam pods, fake comments, or purchased interactions. Our team participates in meaningful, industry-relevant discussions where your insights genuinely add value, fostering real professional relationships and sustainable algorithmic reach.'
  },
  {
    id: 'faq-4',
    category: 'Product Hunt',
    question: 'How do you support a Product Hunt launch without manipulating votes?',
    answer: 'Legitimate Product Hunt success comes from superior positioning, clear storytelling, polished preview media, active pre-launch community preparation, and real-time coordination throughout the 24-hour cycle. We do not purchase votes or engage in artificial tactics. We ensure your product is showcased to genuine tech enthusiasts and early adopters who appreciate great software.'
  },
  {
    id: 'faq-5',
    category: 'Influencer Marketing',
    question: 'Across which platforms do you coordinate influencer campaigns?',
    answer: 'We coordinate targeted paid influencer marketing campaigns across LinkedIn, X (Twitter), and Instagram. We run a rigorous six-stage process: Discover, Vet, Negotiate, Campaign Management, Performance Tracking, and Comprehensive Reporting.'
  },
  {
    id: 'faq-6',
    category: 'Pricing & Process',
    question: 'How do we get started working with AxentAI Labs?',
    answer: 'We begin with a strategic discovery call to review your current digital presence, target audience, and growth objectives. From there, we design a customized roadmap spanning our core offerings—whether that is dedicated personal branding, company page management, launch support, or creator syndication.'
  }
];

export const LAUNCH_READINESS_QUESTIONS: LaunchReadinessQuestion[] = [
  {
    id: 1,
    question: 'What is your current pre-launch subscriber or waitlist size?',
    options: [
      { text: 'Under 100 people / Just getting started', points: 10, tip: 'We focus on building early interest through founder positioning and community outreach.' },
      { text: '100 - 500 active waitlist subscribers', points: 20, tip: 'A solid baseline! We nurture them with structured preview teasers.' },
      { text: '500+ enthusiastic beta users', points: 30, tip: 'Strong foundation for a coordinated, front-page launch sprint.' }
    ]
  },
  {
    id: 2,
    question: 'How would you describe your founder LinkedIn presence?',
    options: [
      { text: 'Inactive or rarely posting', points: 10, tip: 'We establish an executive personal branding foundation and content cadence.' },
      { text: 'Occasional posts with moderate engagement', points: 20, tip: 'We refine positioning and introduce structured thought-leadership formats.' },
      { text: 'Active with an established following', points: 30, tip: 'We scale your authority with strategic distribution and targeted engagement.' }
    ]
  },
  {
    id: 3,
    question: 'What is your primary growth priority over the next 90 days?',
    options: [
      { text: 'Building founder credibility and executive authority', points: 20, tip: 'LinkedIn Personal Branding is the primary lever.' },
      { text: 'A major product release or Product Hunt launch', points: 25, tip: 'End-to-end Product Hunt launch strategy and asset preparation.' },
      { text: 'Multi-channel awareness via creators on LinkedIn & X', points: 25, tip: 'Targeted creator marketing campaign with rigorous vetting.' }
    ]
  }
];
