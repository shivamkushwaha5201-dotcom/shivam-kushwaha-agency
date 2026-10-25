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
    tagline: 'Strategic positioning, launch-day coordination, and organic distribution for technology startups.',
    icon: 'Rocket',
    badge: 'Flagship Service · ~65% Focus',
    description: 'A successful Product Hunt launch requires disciplined preparation and real-time execution. We help founders refine product positioning, prepare launch assets, coordinate launch-day outreach, and build an organic distribution plan without artificial tactics or false promises.',
    deliverables: [
      'Pre-launch positioning and strategy',
      'Product page and tagline feedback',
      'Launch asset planning',
      'Launch-day coordination',
      'Organic community outreach and distribution',
      'Post-launch review'
    ],
    resultsMetric: 'Flagship Focus · 30+ Coordinated Launches',
    idealFor: 'SaaS founders, devtools, AI startups, and makers preparing for a coordinated, organic Product Hunt release.',
    featured: true,
    portfolioUrl: '/portfolio'
  },
  {
    id: 'linkedin-personal-branding',
    title: 'LinkedIn Personal Branding & Founder Positioning',
    tagline: 'Turn founder experience into executive authority, trust, and inbound opportunities.',
    icon: 'UserCheck',
    badge: 'Founder Positioning',
    description: 'Helps founders and executives articulate their domain expertise into high-signal perspectives that build trust, authority, and inbound business interest.',
    deliverables: [
      'Founder voice & narrative positioning',
      'Strategic executive profile optimization',
      'Weekly high-signal post writing & scheduling',
      'Meaningful industry network interaction'
    ],
    resultsMetric: 'Executive Authority & High-Trust Inbound',
    idealFor: 'Tech founders, venture-backed leaders, and startup executives seeking genuine organic influence.',
    featured: false
  },
  {
    id: 'linkedin-page-handling',
    title: 'LinkedIn Company Page Management',
    tagline: 'Consistent B2B brand storytelling, product updates, and company credibility.',
    icon: 'Share2',
    badge: 'Company Presence',
    description: 'Complete management of your company’s LinkedIn presence to keep your brand active, professional, and trustworthy for prospects, investors, and talent.',
    deliverables: [
      'Monthly editorial calendar & publication schedule',
      'Product release announcements & company milestones',
      'Audience comment moderation & engagement',
      'Monthly performance, reach, and follower reporting'
    ],
    resultsMetric: 'Credible Company Brand Presence',
    idealFor: 'B2B startups and growing tech companies looking for polished page operations without internal overhead.',
    featured: false
  },
  {
    id: 'social-media-management',
    title: 'Social Media Management & Content Strategy',
    tagline: 'Build a dependable social presence with platform-tailored content and active community touchpoints.',
    icon: 'Layers',
    badge: 'Content Strategy',
    description: 'Develops and executes a clear multi-channel content strategy that maintains an authentic brand voice and nurtures ongoing community interaction.',
    deliverables: [
      'Cross-platform content strategy & theme planning',
      'Platform-tailored copy and creative visual assets',
      'Consistent editorial scheduling & publishing',
      'Community moderation, replies, and engagement reviews'
    ],
    resultsMetric: 'Cross-Platform Consistency & Engagement',
    idealFor: 'Startups and SaaS companies seeking dependable social distribution while founders focus on building.',
    featured: false
  },
  {
    id: 'influencer-marketing',
    title: 'Influencer Marketing & Creator Partnerships',
    tagline: 'Vetted collaborations with niche tech creators who test and advocate your product.',
    icon: 'Megaphone',
    badge: 'Creator Partnerships',
    description: 'Connects your software with relevant tech creators and niche influencers who can showcase your product to genuine engineers and early adopters.',
    deliverables: [
      'Niche creator identification & audience vetting',
      'Campaign brief creation & narrative alignment',
      'Partnership coordination & deliverable review',
      'Performance, link click, and attribution tracking'
    ],
    resultsMetric: 'Targeted Creator Introductions',
    idealFor: 'Growth-stage SaaS and tech products looking for credible third-party demonstrations and reviews.',
    featured: false
  },
  {
    id: 'x-growth-distribution',
    title: 'X (Twitter) Growth & Distribution',
    tagline: 'Engage the tech community through build-in-public updates, threads, and ecosystem discussions.',
    icon: 'Sparkles',
    badge: 'Tech Distribution',
    description: 'Reaches early adopters, developers, and tech builders through high-signal build-in-public threads, release announcements, and ecosystem dialogue.',
    deliverables: [
      'Build-in-public hook & thread copywriting',
      'Feature demo previews & release announcements',
      'Active participation in relevant tech conversations',
      'Ecosystem networking with founders & developers'
    ],
    resultsMetric: 'Active Tech Community Presence',
    idealFor: 'Developers, AI builders, and founders building in public and seeking early tech adopters.',
    featured: false
  },
  {
    id: 'brand-visibility-organic-growth',
    title: 'Organic Brand Visibility & Audience Growth',
    tagline: 'Expand audience reach through ethical, context-first distribution across relevant channels.',
    icon: 'TrendingUp',
    badge: 'Organic Distribution',
    description: 'Expands your brand reach across high-intent developer communities, tech subreddits, and relevant industry channels through helpful, context-first participation.',
    deliverables: [
      'Target community & channel identification',
      'Contextual discussion participation & technical replies',
      'Subreddit & developer hub organic outreach',
      'Sustainable organic reach compounding & reporting'
    ],
    resultsMetric: 'Durable Multi-Channel Visibility',
    idealFor: 'Startups wanting sustainable audience growth without constant reliance on paid advertisements.',
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
