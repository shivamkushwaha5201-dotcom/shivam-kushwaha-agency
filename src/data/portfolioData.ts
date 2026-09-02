import { StatMetric, ServiceDetail, CaseStudy, FaqItem, Testimonial, LaunchReadinessQuestion } from '../types';

export const CONTACT_INFO = {
  name: 'Shivam Kushwaha',
  role: 'Founder — AxentAI Labs',
  company: 'AxentAI Labs',
  phone: '+91 91111 83136',
  email: 'shivamkushwaha5202@gmail.com',
  calendlyUrl: 'https://app.cal.com/shivam-kushwaha-2fovpp/book-a-growth-strategy-call-with-shivam',
  whatsappUrl: 'https://wa.me/919111183136',
  whatsapp: 'https://wa.me/919111183136',
  personalLinkedIn: 'https://www.linkedin.com/in/shivam-k-6a462337b/',
  companyLinkedIn: 'https://www.linkedin.com/company/axentailabs/',
  xTwitter: 'https://x.com',
  location: 'Global / Remote'
};

export const STAT_METRICS: StatMetric[] = [
  {
    id: 'ph-launches',
    value: '185+',
    label: '#1 & Top 3 Product Hunt Launches',
    subtext: '96.2% success rate achieving front-page leaderboard',
    iconName: 'Trophy',
    growth: '+42 this year'
  },
  {
    id: 'impressions',
    value: '68M+',
    label: 'Total Organic Impressions Generated',
    subtext: 'Across high-converting LinkedIn, X & Reddit campaigns',
    iconName: 'TrendingUp',
    growth: '100% Organic'
  },
  {
    id: 'influencer-reach',
    value: '220+',
    label: 'Vetted Tech Influencers & Creators',
    subtext: 'Direct private network with zero intermediary markups',
    iconName: 'Users',
    growth: 'Global Network'
  },
  {
    id: 'pipeline-value',
    value: '$5.4M+',
    label: 'Tracked Pipeline & GMV for Founders',
    subtext: 'Immediate MRR spikes and seed investor inbounds generated',
    iconName: 'Zap',
    growth: 'Verified ROI'
  }
];

export const SERVICES_DATA: ServiceDetail[] = [
  {
    id: 'product-hunt-launch',
    title: 'Product Hunt Launch Support',
    tagline: 'End-to-end launch strategy, positioning & war room support for #1 leaderboard dominance.',
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
    resultsMetric: 'Average 850+ upvotes & #1 Leaderboard Badge',
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
    resultsMetric: '300k - 1.2M monthly impressions & targeted lead flow',
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
    resultsMetric: '500k - 2.5M impressions & active builder audience',
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
    resultsMetric: '15k+ high-intent referral visits & authentic user feedback',
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
    resultsMetric: '10x inbound investor and customer conversations',
    idealFor: 'Early-stage & venture-backed CEOs, solo founders, and agency leaders.',
    featured: false
  },
  {
    id: 'influencer-marketing',
    title: 'Influencer Marketing',
    tagline: 'Curated tech creator partnerships, outreach, and high-ROI sponsorships.',
    icon: 'Megaphone',
    badge: 'Creator Boost',
    description: 'Leverage our private roster of 220+ verified tech YouTubers, X creators, newsletter writers, and reviewers for authentic product walkthroughs with zero ad waste.',
    deliverables: [
      'Influencer/creator research',
      'Influencer outreach',
      'Campaign strategy',
      'Creator collaborations',
      'Campaign management',
      'Performance tracking'
    ],
    resultsMetric: '3.8x average return on creator spend & guaranteed reach',
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
    resultsMetric: 'High engagement rates & visual brand prestige',
    idealFor: 'Design-led apps, consumer tech, lifestyle SaaS, and personal brand builders.',
    featured: false
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'omni-ai',
    productName: 'OmniFlow AI',
    tagline: 'Autonomous AI workflow builder for product designers',
    category: 'AI Tool',
    badgeRank: '#1 Product of the Day',
    totalUpvotes: 1420,
    featuredHunter: 'Hunted by Shivam',
    impressions: '3.4M Impressions',
    newSignups: '12,800+ Signups',
    xEngagement: '18.4k reposts & likes',
    linkedinReach: '420k reach',
    founderName: 'Alex Thorne',
    founderTitle: 'Co-Founder & CEO, OmniFlow',
    founderAvatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
    testimonial: 'Shivam is a launch master. He crafted our positioning, coached us on first-day maker replies, and activated his creator network on X and LinkedIn. We held #1 all 24 hours and closed a $2.5M Seed round two weeks later.',
    summary: 'OmniFlow needed an explosive debut to compete with established AI design suites. Shivam orchestrated a multi-channel warm-up followed by a midnight launch attack.',
    keyStrategy: 'Synchronized X demo video and LinkedIn thought piece dropping at 12:05 AM PST driving instant front-page velocity.'
  },
  {
    id: 'devpulse',
    productName: 'DevPulse Studio',
    tagline: 'Next-generation API observability & telemetry engine',
    category: 'Dev Tool',
    badgeRank: '#1 Product of the Week',
    totalUpvotes: 1190,
    featuredHunter: 'Hunted by Shivam',
    impressions: '2.1M Impressions',
    newSignups: '8,400+ Developer Accounts',
    xEngagement: '12.2k engagements',
    linkedinReach: '310k reach',
    founderName: 'Devon Patel',
    founderTitle: 'CTO, DevPulse Technologies',
    founderAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
    testimonial: 'Before Shivam stepped in, our previous launch ended at #14. With Shivam leading our launch strategy and Reddit promotion, we dominated the tech category and stayed #1 for 3 days straight.',
    summary: 'Dev tools are notoriously hard to market. Shivam translated dense telemetry specs into crystal-clear micro-demos for Reddit, X, and LinkedIn developer influencers.',
    keyStrategy: 'High-contrast interactive animated GIF previews and organic Reddit community discovery discussions.'
  },
  {
    id: 'synthetix',
    productName: 'KipNotes SaaS',
    tagline: 'AI meeting summaries that automatically create Jira tickets',
    category: 'SaaS',
    badgeRank: '#2 Product of the Day',
    totalUpvotes: 980,
    featuredHunter: 'Hunted by Shivam',
    impressions: '1.8M Impressions',
    newSignups: '6,200+ Active Workspaces',
    xEngagement: '9.6k engagements',
    linkedinReach: '280k reach',
    founderName: 'Sarah Lin',
    founderTitle: 'Founder, KipNotes',
    founderAvatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80',
    testimonial: 'Shivam’s LinkedIn and personal branding playbook generated 40+ enterprise inbound leads in the first week alone. He doesn’t just launch; he creates an enduring customer acquisition engine.',
    summary: 'Targeted B2B decision-makers on LinkedIn alongside the Product Hunt push, resulting in 40+ sales calls booked in 7 days.',
    keyStrategy: 'Founder ghostwritten breakdown of "How we built an AI tool to save 12 engineering hours a week" which reached 180k impressions.'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Marcus Vance',
    role: 'Founder & CEO',
    company: 'HyperType.ai',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80',
    quote: 'Shivam is hands down the best launch partner in the ecosystem. His attention to detail from the first teaser post to hour 23 of the Product Hunt race is unmatched.',
    platform: 'producthunt',
    highlight: '#1 Product of the Day (1,340 upvotes)',
    verifiedLaunch: 'Verified Launch 2024'
  },
  {
    id: 't2',
    name: 'Elena Rostova',
    role: 'Head of Growth',
    company: 'Loomin Video AI',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&auto=format&fit=crop&q=80',
    quote: 'Our X account went from 800 followers to 24,000 in under 90 days with Shivam running our social strategy. Inbound investor interest jumped 5x.',
    platform: 'x',
    highlight: '24k followers & 8.4M Impressions',
    verifiedLaunch: 'SMM Campaign'
  },
  {
    id: 't3',
    name: 'Karthik Raja',
    role: 'Co-Founder',
    company: 'PromptDeck',
    avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&auto=format&fit=crop&q=80',
    quote: 'The influencer and Reddit campaign Shivam managed delivered $18k in MRR from day one. He knows every key tech creator and sub-community intimately.',
    platform: 'linkedin',
    highlight: '$18k MRR Added in Month 1',
    verifiedLaunch: 'Creator Campaign'
  },
  {
    id: 't4',
    name: 'Jessica Miller',
    role: 'Product Lead',
    company: 'SyncPulse',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&auto=format&fit=crop&q=80',
    quote: 'If you want to win on Product Hunt and establish a solid personal brand, having Shivam in your corner is an unfair advantage.',
    platform: 'producthunt',
    highlight: 'Golden Kitty Award Nominee',
    verifiedLaunch: 'Top 3 Finisher'
  }
];

export const FAQ_DATA: FaqItem[] = [
  {
    id: 'faq-1',
    category: 'Product Hunt',
    question: 'Why should I launch with Shivam Kushwaha & AxentAI Labs?',
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

