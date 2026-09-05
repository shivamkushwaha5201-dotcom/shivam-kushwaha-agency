import { StatMetric, ServiceDetail, CaseStudy, FaqItem, Testimonial, LaunchReadinessQuestion, SupportedLaunch } from '../types';

export const CONTACT_INFO = {
  name: 'AxentAI Labs',
  founder: 'Shivam Kushwaha — Founder, AXENT AI LABS',
  role: 'Founder — AxentAI Labs',
  company: 'AxentAI Labs',
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
    tagline: 'End-to-end launch strategy, positioning & war room support for front-page visibility.',
    icon: 'Rocket',
    badge: 'Flagship Launch',
    description: 'Complete end-to-end launch engineering on Product Hunt. From pre-launch teaser optimization to 24-hour launch day war room monitoring and community momentum.',
    deliverables: [
      'Product Hunt launch strategy',
      'Launch preparation & positioning',
      'Launch-day support',
      'Community engagement',
      'Product promotion',
      'Post-launch visibility'
    ],
    resultsMetric: 'Positioning, War Room & Leaderboard Strategy',
    idealFor: 'AI tools, SaaS startups, DevTools, and Mobile apps ready for massive viral exposure.',
    featured: true
  },
  {
    id: 'linkedin-smm',
    title: 'LinkedIn Social Media Management',
    tagline: 'Transform company & founder profiles into high-converting B2B inbound engines.',
    icon: 'Share2',
    badge: 'B2B Growth',
    description: 'Comprehensive LinkedIn organic growth and thought leadership execution. We craft high-retention carousels, founder breakdowns, and engagement strategies that build authority.',
    deliverables: [
      'Content strategy',
      'Post creation',
      'Founder/company positioning',
      'Engagement & comment strategy',
      'Audience growth',
      'Consistent content management'
    ],
    resultsMetric: 'Organic Reach & Inbound Lead Generation',
    idealFor: 'B2B SaaS, tech founders, consultants, and scale-ups wanting direct pipeline.',
    featured: true
  },
  {
    id: 'x-twitter-smm',
    title: 'X (Twitter) Social Media Management',
    tagline: 'Daily high-impact posts, viral threads, and tech community positioning.',
    icon: 'MessageSquare',
    badge: 'Viral Reach',
    description: 'Dominate tech Twitter with viral build-in-public storytelling, value-packed threads, snappy product teasers, and calculated engagement loops.',
    deliverables: [
      'X content strategy',
      'Daily posts',
      'Threads',
      'Engagement',
      'Community building',
      'Founder/startup positioning'
    ],
    resultsMetric: 'Daily Viral Threads & Engaged Tech Audience',
    idealFor: 'Founders building in public, AI startups, Web3, and developer tools.',
    featured: true
  },
  {
    id: 'reddit-marketing',
    title: 'Reddit Marketing',
    tagline: 'Authentic sub-community research, organic discovery & reputation engineering.',
    icon: 'Sparkles',
    badge: 'High Intent',
    description: 'Tap into Reddit’s highest-converting communities without getting banned. We research relevant subreddits, engage organically, and position your product as the natural solution.',
    deliverables: [
      'Reddit community research',
      'Organic community engagement',
      'Content strategy',
      'Product discovery',
      'Community-based promotion',
      'Reddit reputation building'
    ],
    resultsMetric: 'High-Intent Referral Discovery & Community Trust',
    idealFor: 'Consumer apps, developer tools, SaaS, and productivity solutions.',
    featured: false
  },
  {
    id: 'personal-branding',
    title: 'Personal Branding',
    tagline: 'Elevate founder authority and turn the creator-in-chief into a customer magnet.',
    icon: 'UserCheck',
    badge: 'Authority',
    description: 'People invest in and buy from founders they trust. We build your bespoke personal brand on LinkedIn and X through vulnerable storytelling, industry hot-takes, and visionary thought-leadership.',
    deliverables: [
      'Founder personal branding',
      'LinkedIn positioning',
      'X personal branding',
      'Thought-leadership content',
      'Founder storytelling',
      'Audience building'
    ],
    resultsMetric: 'Founder Authority & Investor Visibility',
    idealFor: 'Early-stage & venture-backed CEOs, solo founders, and agency leaders.',
    featured: false
  },
  {
    id: 'influencer-marketing',
    title: 'Influencer Marketing',
    tagline: 'Curated tech creator partnerships, outreach, and high-ROI sponsorships.',
    icon: 'Megaphone',
    badge: 'Creator Boost',
    description: 'Leverage our private roster of verified tech YouTubers, X creators, newsletter writers, and reviewers for authentic product walkthroughs with zero ad waste.',
    deliverables: [
      'Influencer/creator research',
      'Influencer outreach',
      'Campaign strategy',
      'Creator collaborations',
      'Campaign management',
      'Performance tracking'
    ],
    resultsMetric: 'Curated Tech Creator Partnerships',
    idealFor: 'Funded tech startups looking to scale customer acquisition rapidly.',
    featured: false
  },
  {
    id: 'instagram-marketing',
    title: 'Instagram Marketing',
    tagline: 'Visual brand storytelling, Reels/Carousels, and aesthetic creator campaigns.',
    icon: 'Globe',
    badge: 'Visual Growth',
    description: 'Engage visual and mobile audiences through dynamic Instagram reels, founder behind-the-scenes carousels, targeted creator collaborations, and community campaigns.',
    deliverables: [
      'Instagram content strategy',
      'Personal/company branding',
      'Content planning',
      'Audience engagement',
      'Creator collaborations',
      'Growth campaigns'
    ],
    resultsMetric: 'Visual Storytelling & Brand Engagement',
    idealFor: 'Design-led apps, consumer tech, lifestyle SaaS, and personal brand builders.',
    featured: false
  }
];

export const CASE_STUDIES: CaseStudy[] = [];

export const SUPPORTED_LAUNCHES: SupportedLaunch[] = [
  {
    id: 'enia-code',
    name: 'Enia Code',
    tagline: 'AI coding assistant & intelligent software development workbench',
    url: 'https://www.producthunt.com/products/enia-code',
    category: 'Developer Tools'
  },
  {
    id: 'storeclaw',
    name: 'StoreClaw',
    tagline: 'High-performance e-commerce catalog discovery & store extraction engine',
    url: 'https://www.producthunt.com/products/storeclaw',
    category: 'SaaS & B2B'
  },
  {
    id: 'outify',
    name: 'Outify',
    tagline: 'Multi-channel outbound pipeline and automated sales acceleration',
    url: 'https://www.producthunt.com/products/outify-2?launch=outify-2',
    category: 'SaaS & B2B'
  },
  {
    id: 'eddie',
    name: 'Eddie',
    tagline: 'Your AI video editor for rapid storytelling and social distribution',
    url: 'https://www.producthunt.com/products/eddie-your-ai-video-editor',
    category: 'AI & Machine Learning'
  },
  {
    id: 'ctruh-studio',
    name: 'Ctruh Studio',
    tagline: 'Web-based 3D spatial editor and immersive interactive scene creator',
    url: 'https://www.producthunt.com/products/ctruh-studio',
    category: 'Productivity & Design'
  },
  {
    id: 'hey-noah',
    name: 'Hey Noah',
    tagline: 'AI copilot for personal task execution and daily workflow automation',
    url: 'https://www.producthunt.com/products/hey-noah',
    category: 'AI & Machine Learning'
  },
  {
    id: 'ito-ai',
    name: 'Ito AI',
    tagline: 'AI code review platform that actively executes and stress-tests code',
    url: 'https://www.producthunt.com/products/ito-ai-code-review-that-runs-code',
    category: 'Developer Tools'
  },
  {
    id: 'browseract',
    name: 'BrowserAct',
    tagline: 'Headless browser automation and AI-driven web interaction runtime',
    url: 'https://www.producthunt.com/products/browseract',
    category: 'Developer Tools'
  },
  {
    id: 'clears',
    name: 'Clears',
    tagline: 'Distraction-free workspace utility designed to maintain deep focus',
    url: 'https://www.producthunt.com/products/clears?launch=clears',
    category: 'Productivity & Design'
  },
  {
    id: 'supernova-ai',
    name: 'Supernova AI',
    tagline: 'Autonomous AI agents for distributed team workflows and operations',
    url: 'https://www.producthunt.com/products/supernova-ai?launch=supernova-6',
    category: 'AI & Machine Learning'
  },
  {
    id: 'speko',
    name: 'Speko',
    tagline: 'High-fidelity AI voice synthesis and expressive audio generation',
    url: 'https://www.producthunt.com/products/speko',
    category: 'AI & Machine Learning'
  },
  {
    id: 'keplars',
    name: 'Keplars',
    tagline: 'Customer journey analytics and behavioral conversion intelligence',
    url: 'https://www.producthunt.com/products/keplars',
    category: 'SaaS & B2B'
  },
  {
    id: 'openui',
    name: 'OpenUI',
    tagline: 'Real-time component prototyping and open-source UI generator',
    url: 'https://www.producthunt.com/posts/openui-2',
    category: 'Developer Tools'
  },
  {
    id: 'your-next-store',
    name: 'Your Next Store',
    tagline: 'High-conversion Next.js ecommerce storefront architecture',
    url: 'https://www.producthunt.com/posts/your-next-store-5',
    category: 'Developer Tools'
  },
  {
    id: 'chronicle',
    name: 'Chronicle',
    tagline: 'Interactive presentation format crafted for modern venture storytelling',
    url: 'https://www.producthunt.com/products/chronicle-6?launch=chronicle-2-0',
    category: 'Productivity & Design'
  },
  {
    id: 'morphmind',
    name: 'MorphMind',
    tagline: 'Steerable generative AI platform with granular control parameters',
    url: 'https://www.producthunt.com/posts/morphmind-a-steerable-ai-platform',
    category: 'AI & Machine Learning'
  },
  {
    id: 'zooclaw',
    name: 'ZooClaw',
    tagline: 'Smart web scraping infrastructure and structured data extraction',
    url: 'https://www.producthunt.com/products/zooclaw',
    category: 'SaaS & B2B'
  },
  {
    id: 'lessie-ai',
    name: 'Lessie AI',
    tagline: 'Context-aware conversational assistant for smart knowledge retrieval',
    url: 'https://www.producthunt.com/posts/lessie-ai-2',
    category: 'AI & Machine Learning'
  },
  {
    id: 'nativebridge',
    name: 'NativeBridge',
    tagline: 'Seamless cross-platform native SDK bridging for modern mobile stacks',
    url: 'https://www.producthunt.com/products/nativebridge-2',
    category: 'Developer Tools'
  },
  {
    id: 'naptick-ai',
    name: 'Naptick AI',
    tagline: 'Intelligent calendar optimization and circadian energy scheduling',
    url: 'https://www.producthunt.com/posts/naptick-ai',
    category: 'Productivity & Design'
  },
  {
    id: 'huddle01-cloud',
    name: 'Huddle01 Cloud',
    tagline: 'Decentralized real-time RTC audio/video network for modern applications',
    url: 'https://www.producthunt.com/posts/huddle01-cloud-2',
    category: 'Infrastructure & Web3'
  },
  {
    id: 'mom-clock',
    name: 'Mom Clock',
    tagline: 'Household synchronization and intuitive family routine tracker',
    url: 'https://www.producthunt.com/posts/mom-clock',
    category: 'Productivity & Design'
  },
  {
    id: 'computable-gpu-index',
    name: 'Computable GPU Index (CGI)',
    tagline: 'Live global GPU availability benchmark and price comparison monitor',
    url: 'https://www.producthunt.com/posts/computable-gpu-index-cgi',
    category: 'Infrastructure & Web3'
  },
  {
    id: 'brandjet',
    name: 'BrandJet',
    tagline: 'Automated brand identity kit generator and instant marketing design kit',
    url: 'https://www.producthunt.com/posts/brandjet',
    category: 'Productivity & Design'
  },
  {
    id: 'olostep',
    name: 'Olostep',
    tagline: 'Fast web scraping API built specifically for AI agents and LLMs',
    url: 'https://www.producthunt.com/posts/olostep-2',
    category: 'Developer Tools'
  },
  {
    id: '1752vc-analyzer',
    name: '1752VC Pitch Deck Analyzer',
    tagline: 'AI-driven venture pitch deck feedback and investor readiness evaluation',
    url: 'https://www.producthunt.com/posts/1752vc-pitch-deck-analyzer',
    category: 'SaaS & B2B'
  },
  {
    id: 'caddi',
    name: 'Caddi',
    tagline: 'Browser shopping companion that automatically identifies savings and rebates',
    url: 'https://www.producthunt.com/posts/caddi-3',
    category: 'SaaS & B2B'
  },
  {
    id: 'skydive',
    name: 'Skydive',
    tagline: 'Asynchronous team collaboration and interactive workspace canvas',
    url: 'https://www.producthunt.com/posts/skydive',
    category: 'Productivity & Design'
  }
];

export const TESTIMONIALS: Testimonial[] = [];

export const FAQ_DATA: FaqItem[] = [
  {
    id: 'faq-1',
    category: 'Product Hunt',
    question: 'Why should I launch with AxentAI Labs?',
    answer: 'We bring battle-tested launch mechanics: precision scheduling, high-converting thumbnail psychology, maker comment copywriting, anti-spam algorithm protection, and active war room guidance throughout the entire 24-hour Product Hunt cycle with cross-platform amplification on X and LinkedIn.'
  },
  {
    id: 'faq-2',
    category: 'Product Hunt',
    question: 'How far in advance should we start preparing for our Product Hunt launch?',
    answer: 'The ideal window is 3 to 4 weeks before your target launch date. This allows us to set up your Product Hunt "Coming Soon" teaser page, warm up your social channels with build-in-public content, and coordinate launch day support with early beta users and tech communities.'
  },
  {
    id: 'faq-3',
    category: 'X & LinkedIn',
    question: 'How do you handle LinkedIn, X & Reddit social media management?',
    answer: 'We conduct an in-depth founder discovery session to extract your authentic voice, unique technical opinions, and battle stories. We manage post creation, thread writing, daily engagement, and sub-community positioning that converts followers into paying customers.'
  },
  {
    id: 'faq-4',
    category: 'Influencer Marketing',
    question: 'How do you structure creator and influencer collaborations?',
    answer: 'We run every creator through rigorous multi-point vetting: historical engagement rates, comment quality audits, authentic audience demographics, and past sponsorship CTRs. We manage outreach, briefs, contracts, and track ROI end-to-end.'
  },
  {
    id: 'faq-5',
    category: 'Pricing & Process',
    question: 'Do you work with bootstrapped solo founders as well as funded startups?',
    answer: 'Yes! We offer tailored packages ranging from dedicated Product Hunt Launch Support to full multi-channel Social Media Management, Personal Branding, and Creator Syndication. Book a call to get a custom roadmap.'
  }
];

export const LAUNCH_READINESS_QUESTIONS: LaunchReadinessQuestion[] = [
  {
    id: 1,
    question: 'What is your current pre-launch subscriber or waitlist size?',
    options: [
      { text: 'Less than 100 people / Just getting started', points: 10, tip: 'We should create a PH Teaser page immediately to capture early interest.' },
      { text: '100 - 500 active waitlist subscribers', points: 20, tip: 'Good baseline! We can warm them up with sneak-peek emails.' },
      { text: '500 - 2,000+ enthusiastic beta users', points: 30, tip: 'Strong pipeline! Ready for a top 3 contender launch.' }
    ]
  },
  {
    id: 2,
    question: 'How polished are your product media assets (GIFs, short video, screenshots)?',
    options: [
      { text: 'Basic static screenshots only', points: 10, tip: 'We will design custom high-framerate animated GIFs & gallery cards.' },
      { text: 'Standard demo video and clean screenshots', points: 20, tip: 'Decent base, let’s optimize the first 5 seconds for viral appeal.' },
      { text: 'Stunning 60fps interactive walkthroughs & micro-demos', points: 30, tip: 'World-class visual assets ready to dominate the feed!' }
    ]
  },
  {
    id: 3,
    question: 'What is your founder social presence on X (Twitter) or LinkedIn?',
    options: [
      { text: 'Under 1,000 followers / rarely post', points: 10, tip: 'We will kickstart a 14-day build-in-public sprint to build warm audience.' },
      { text: '1k - 10k engaged followers and active network', points: 20, tip: 'Great community foundation for launch day momentum.' },
      { text: '10k+ followers with consistent high engagement', points: 30, tip: 'Massive organic distribution power ready to unlock!' }
    ]
  },
  {
    id: 4,
    question: 'What is your primary goal for this launch cycle?',
    options: [
      { text: 'Initial beta users & product feedback validation', points: 15, tip: 'Focus on maker community feedback & fast feedback loops.' },
      { text: 'Massive brand awareness, #1 badge & investor inbound', points: 25, tip: 'Full viral hunting sprint + creator syndication.' },
      { text: 'Immediate paying customer acquisition & MRR explosion', points: 25, tip: 'Strategic LinkedIn B2B distribution + high-intent creator deals.' }
    ]
  }
];

