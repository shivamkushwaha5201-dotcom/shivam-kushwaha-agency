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
    title: 'Product Hunt Launch Strategy & Support',
    tagline: 'Refine positioning, prepare launch assets, coordinate launch day, and build a strategic distribution plan.',
    icon: 'Rocket',
    badge: 'Flagship Offering',
    description: 'A successful launch takes more than publishing a product page. We help founders refine their positioning, prepare launch assets, coordinate launch-day communication, connect with relevant communities, and build a thoughtful distribution plan.',
    deliverables: [
      'Pre-launch strategy and positioning',
      'Product page and tagline feedback',
      'Launch asset planning',
      'Launch-day coordination',
      'Relevant community outreach',
      'Cross-platform distribution',
      'Post-launch performance review'
    ],
    resultsMetric: 'Flagship Launch Execution & Sustainable Momentum',
    idealFor: 'SaaS founders, devtools, AI startups, and modern products seeking front-page category introduction.',
    featured: true,
    portfolioUrl: '/portfolio'
  },
  {
    id: 'linkedin-personal-branding',
    title: 'LinkedIn Personal Branding & Founder Positioning',
    tagline: 'Help founders and executives build credibility through strategic positioning, content planning, and consistent professional visibility.',
    icon: 'UserCheck',
    badge: 'Founder Positioning',
    description: 'Help founders and executives build credibility through strategic positioning, content planning, thought leadership, and consistent professional visibility.',
    deliverables: [
      'Founder perspective & voice discovery',
      'Strategic executive profile positioning',
      'Editorial content roadmap & hooks',
      'Thought-leadership essays & retrospectives',
      'Meaningful industry network interaction',
      'Consistent weekly publication rhythm'
    ],
    resultsMetric: 'Executive Authority & High-Trust Inbound Conversations',
    idealFor: 'Tech founders, venture-backed leaders, and startup executives seeking genuine organic influence.',
    featured: true
  },
  {
    id: 'linkedin-page-handling',
    title: 'LinkedIn Company Page Management',
    tagline: 'Manage company page content, publishing schedules, brand messaging, audience engagement, and organic visibility.',
    icon: 'Share2',
    badge: 'Brand Management',
    description: 'Manage company page content, publishing schedules, brand messaging, audience engagement, and organic visibility.',
    deliverables: [
      'Company page narrative architecture',
      'Consistent publishing schedule & calendar',
      'Feature announcements & milestone posts',
      'Audience interaction & comment management',
      'Employer branding & culture storytelling',
      'Monthly engagement & growth reporting'
    ],
    resultsMetric: 'Brand Affinity & Active Industry Mindshare',
    idealFor: 'Growing SaaS companies and tech brands needing polished, reliable page operations without internal overhead.',
    featured: true
  },
  {
    id: 'social-media-management',
    title: 'Social Media Management & Content Strategy',
    tagline: 'Build a consistent social presence through content strategy, platform-specific publishing, and community engagement.',
    icon: 'Layers',
    badge: 'Content Strategy',
    description: 'Build a consistent social presence through content strategy, platform-specific publishing, community engagement, and performance reviews.',
    deliverables: [
      'Multi-channel content strategy & pillar design',
      'Platform-tailored copy and visual assets',
      'Editorial scheduling & timely publishing',
      'Active community engagement & replies',
      'Trend monitoring & contextual relevance',
      'Performance analysis & iterative optimization'
    ],
    resultsMetric: 'Cross-Platform Brand Consistency & Engaged Followers',
    idealFor: 'Tech companies and startups seeking a dependable, high-quality social presence across platforms.',
    featured: true
  },
  {
    id: 'influencer-marketing',
    title: 'Influencer Marketing & Creator Partnerships',
    tagline: 'Connect relevant brands with creators and niche influencers for suitable collaborations, campaign planning, and audience reach.',
    icon: 'Megaphone',
    badge: 'Creator Partnerships',
    description: 'Connect relevant brands with creators and niche influencers for suitable collaborations, campaign planning, and audience reach.',
    deliverables: [
      'Niche creator discovery & audience vetting',
      'Collaboration strategy & narrative briefs',
      'Contract negotiation & term alignment',
      'Campaign management & content review',
      'Multi-platform sponsored rollout',
      'Performance tracking & attribution reports'
    ],
    resultsMetric: 'Curated Creator Advocacy & Qualified Early Adopters',
    idealFor: 'Growth-stage startups and consumer/B2B apps looking for credible third-party demonstrations.',
    featured: true
  },
  {
    id: 'x-growth-distribution',
    title: 'X (Twitter) Growth & Distribution',
    tagline: 'Develop platform-specific content, founder communication, community participation, and distribution strategies for technology brands.',
    icon: 'Sparkles',
    badge: 'Distribution Engine',
    description: 'Develop platform-specific content, founder communication, community participation, and distribution strategies for technology brands.',
    deliverables: [
      'High-signal build-in-public threads',
      'Feature releases & video demo previews',
      'Active tech community discourse & replies',
      'Founder POV communication & commentary',
      'Real-time launch countdown momentum',
      'Audience discovery & developer relationships'
    ],
    resultsMetric: 'Tech Community Resonance & Organic Viral Distribution',
    idealFor: 'Developers, AI builders, and SaaS founders building in public and seeking early tech adopters.',
    featured: true
  },
  {
    id: 'brand-visibility-organic-growth',
    title: 'Brand Visibility & Organic Audience Growth',
    tagline: 'Build visibility that actually matters through ethical, context-first distribution across high-intent communities.',
    icon: 'TrendingUp',
    badge: 'Organic Distribution',
    description: 'Extend your brand’s reach through LinkedIn content, X communication, company page management, creator collaborations, and relevant communities.',
    deliverables: [
      'Ecosystem mapping & community identification',
      'Contextual discussion participation',
      'Targeted subreddit and developer hub outreach',
      'Collaborative co-marketing initiatives',
      'Long-term organic reach compounding',
      'Ethical, human-first relationship building'
    ],
    resultsMetric: 'Sustainable Organic Footprint & Qualified Brand Recognition',
    idealFor: 'Startups wanting to build lasting visibility beyond transient ad spend or single-day spikes.',
    featured: false
  },
  {
    id: 'website-development',
    title: 'Website Development & Digital Presence',
    tagline: 'Create modern, responsive websites that communicate a brand’s value clearly and provide a professional digital presence.',
    icon: 'Globe',
    badge: 'Digital Presence',
    description: 'Create modern, responsive websites that communicate a brand’s value clearly and provide a professional digital presence.',
    deliverables: [
      'High-conversion landing page architecture',
      'Modern, responsive responsive design & typography',
      'Brand messaging & value proposition clarity',
      'Performance optimization & rapid load times',
      'SEO foundations & social share metadata',
      'Smooth interactive user experiences'
    ],
    resultsMetric: 'Clear Value Proposition & Professional Digital Foundation',
    idealFor: 'Founders launching products or repositioning their company with an authoritative digital home.',
    featured: true
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
    id: 'testimonial-dounia-b',
    name: 'Dounia B.',
    role: 'Founder',
    company: 'Oktomer',
    avatar: 'DB',
    quote: 'Shivam has extensive knowledge of how to boost your brand and product visibility and put your business in the spotlight.\n\nHe guided and supported me throughout my recent launch of Oktomer on Product Hunt. He knows the platform inside out and has all the right tips and insights to help you make the most of it.\n\nHe even encouraged me to try new things I was initially hesitant about, which turned out to be great ideas!',
    paragraphs: [
      'Shivam has extensive knowledge of how to boost your brand and product visibility and put your business in the spotlight.',
      'He guided and supported me throughout my recent launch of Oktomer on Product Hunt. He knows the platform inside out and has all the right tips and insights to help you make the most of it.',
      'He even encouraged me to try new things I was initially hesitant about, which turned out to be great ideas!'
    ],
    platform: 'producthunt',
    highlight: 'Product Hunt Launch Support & Spotlight Visibility',
    verifiedLaunch: 'Oktomer Product Hunt Launch',
    linkedinUrl: 'https://www.linkedin.com/in/dounia-boughalem-4aab22108'
  },
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
