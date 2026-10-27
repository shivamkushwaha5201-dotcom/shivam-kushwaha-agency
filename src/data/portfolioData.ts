import { StatMetric, ServiceDetail, CaseStudy, FaqItem, Testimonial, LaunchReadinessQuestion } from '../types';
import { SupportedLaunch } from '../types/portfolio';

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

/**
 * 5 Real Recent Product Hunt Launches supported by AxentAI Labs.
 * Structured in one organized data array so future launches can be added easily.
 */
export const RECENT_PRODUCT_HUNT_LAUNCHES: SupportedLaunch[] = [
  {
    id: 'verified-movo-ai',
    name: 'Movo AI',
    productHuntUrl: 'https://www.producthunt.com/posts/movo-ai',
    votes: 301,
    ranking: 2,
    rankingBadge: '#2 Product of the Day',
    isRecent: true,
    isRankOne: false,
  },
  {
    id: 'verified-mypip',
    name: 'MyPip',
    productHuntUrl: 'https://www.producthunt.com/posts/mypip-2',
    votes: 268,
    ranking: 2,
    rankingBadge: '#2 Product of the Day',
    isRecent: true,
    isRankOne: false,
  },
  {
    id: 'verified-zcad-ai',
    name: 'ZCAD AI',
    productHuntUrl: 'https://www.producthunt.com/posts/zcad-ai',
    votes: 317,
    ranking: 1,
    rankingBadge: '#1 Product of the Day',
    isRecent: true,
    isRankOne: true,
  },
  {
    id: 'verified-n8n-chat-ui',
    name: 'n8n Chat UI',
    productHuntUrl: 'https://www.producthunt.com/posts/n8n-chat-ui-3',
    votes: 186,
    ranking: 4,
    rankingBadge: '#4 Product of the Day',
    isRecent: true,
    isRankOne: false,
  },
  {
    id: 'verified-surgepix',
    name: 'SurgePix',
    productHuntUrl: 'https://www.producthunt.com/posts/surgepix',
    votes: 256,
    ranking: 2,
    rankingBadge: '#2 Product of the Day',
    isRecent: true,
    isRankOne: false,
  },
];

export const SERVICES_DATA: ServiceDetail[] = [
  // Service 1 — Product Hunt Launch Support (Flagship Service)
  {
    id: 'product-hunt-launch',
    title: 'Product Hunt Launch Support',
    tagline: 'Strategic positioning, launch-day coordination, and organic community distribution for technology startups.',
    icon: 'Rocket',
    badge: 'FLAGSHIP SERVICE',
    category: 'flagship',
    categoryTitle: 'Flagship Launch System',
    description: 'Strategic positioning, launch asset preparation, launch-day coordination, and organic community distribution for technology startups.',
    deliverables: [
      'Pre-launch strategy and positioning',
      'Product page and tagline feedback',
      'Launch asset planning',
      'Launch-day coordination',
      'Organic community outreach',
      'Post-launch review'
    ],
    resultsMetric: 'Flagship Focus · 30+ Coordinated Releases',
    idealFor: 'SaaS founders, devtools, AI startups, and indie makers preparing for an organic, coordinated Product Hunt launch.',
    problemsSolves: [
      'Missing the critical launch window due to unrefined positioning or unclear value proposition',
      'Unpolished maker comments, gallery media, and taglines that fail to capture community interest',
      'Disorganized launch-day schedule without real-time coordination across global time zones',
      'Ineffective or spammy outreach tactics that risk algorithmic penalties rather than authentic engagement'
    ],
    scopeOfWork: [
      'Comprehensive pre-launch positioning analysis and competitor benchmarking',
      'Creative review and refinement of tagline, gallery media, product description, and first maker comment',
      'Structured timeline planning, timezone-aligned updates, and social announcement teasers',
      'Real-time launch-day coordination across global founder, developer, and maker communities',
      'Post-launch retrospective report and ongoing organic discovery distribution advice'
    ],
    workflow: [
      {
        step: '01',
        title: 'Pre-Launch Strategy & Positioning',
        description: 'Refining value propositions, competitor differentiation, and primary customer hooks before going live.'
      },
      {
        step: '02',
        title: 'Asset Planning & Tagline Polish',
        description: 'Optimizing gallery screenshots, maker comment drafts, and concise product summaries.'
      },
      {
        step: '03',
        title: 'Launch-Day Coordination',
        description: 'Managing live launch execution, maker updates, and real-time community engagement.'
      },
      {
        step: '04',
        title: 'Post-Launch Retrospective',
        description: 'Analyzing traffic spikes, feedback trends, user conversions, and enduring search indexation.'
      }
    ],
    expectedOutcomes: [
      'Coordinated, professional launch day executed with authentic community participation',
      'Direct feedback, product validation, and early adopter discovery',
      'High-authority backlinks and permanent search discoverability on Product Hunt',
      'Transparent advisory without artificial tactics, fake votes, or false guarantees'
    ],
    featured: true,
    portfolioUrl: '/portfolio'
  },

  // Service 2 — LinkedIn Personal Branding
  {
    id: 'linkedin-personal-branding',
    title: 'LinkedIn Personal Branding',
    tagline: 'Turn founder experience into executive authority, industry trust, and inbound opportunities.',
    icon: 'UserCheck',
    badge: 'Founder Positioning',
    category: 'branding',
    categoryTitle: 'Founder Positioning & Personal Branding',
    description: 'Dedicated service for founders, executives, and professionals who want to build durable authority, trust, and inbound opportunities on LinkedIn.',
    deliverables: [
      'Founder positioning and personal brand strategy',
      'Profile optimization',
      'Content pillars and editorial calendar',
      'LinkedIn post writing and publishing',
      'Audience engagement and networking',
      'Performance tracking and reporting'
    ],
    resultsMetric: 'Executive Authority & High-Trust Inbound',
    idealFor: 'Founders, co-founders, CTOs, CEOs, venture-backed leaders, and tech executives seeking authentic personal authority.',
    problemsSolves: [
      'Irregular publishing habits caused by demanding executive and product development schedules',
      'Difficulty articulating deep domain expertise into compelling, high-signal LinkedIn narratives',
      'Outdated, non-optimized profiles that fail to convert visitors into connections, prospects, or investors',
      'Lack of meaningful dialogue with prospective clients, enterprise buyers, and industry peers'
    ],
    scopeOfWork: [
      'Strategic narrative discovery to extract founder background, unique points of view, and company mission',
      'Comprehensive profile makeover including headline, about section, featured media, and custom banners',
      'Creation of 3-4 distinct content pillars and a structured monthly editorial publication calendar',
      'High-signal ghostwriting, editing, and scheduled publishing of industry insights and case studies',
      'Proactive audience engagement and strategic commenting on key industry leaders’ conversations',
      'Monthly performance dashboards tracking impression depth, follower quality, and inbound opportunities'
    ],
    workflow: [
      {
        step: '01',
        title: 'Narrative & Voice Calibration',
        description: 'Uncovering the founder’s core domain perspective, tone of voice, and strategic positioning.'
      },
      {
        step: '02',
        title: 'Profile Transformation',
        description: 'Restructuring the LinkedIn profile into a high-converting executive landing page.'
      },
      {
        step: '03',
        title: 'Editorial Writing & Publishing',
        description: 'Authoring weekly high-signal posts, breakdown threads, and company milestone retrospectives.'
      },
      {
        step: '04',
        title: 'Engagement & Network Growth',
        description: 'Participating in relevant industry discussions and reviewing monthly reach performance.'
      }
    ],
    expectedOutcomes: [
      'Recognition as a credible domain authority and thought leader in your industry',
      'Increased high-intent inbound inquiries from potential customers, investors, and prospective hires',
      'Compounding follower growth among verified business leaders and decision-makers',
      'Consistent organic visibility without consuming hours of demanding founder time'
    ],
    featured: false
  },

  // Service 3A — LinkedIn Company Page Management
  {
    id: 'linkedin-company-page-management',
    title: 'LinkedIn Company Page Management',
    tagline: 'Consistent B2B brand storytelling, product announcements, and company credibility.',
    icon: 'Share2',
    badge: 'Company Page Operations',
    category: 'account-management',
    categoryTitle: 'LinkedIn & X Account Management',
    description: 'Complete management of your company’s LinkedIn presence to keep your brand active, professional, and trustworthy for prospects, investors, and talent.',
    deliverables: [
      'Company page positioning and brand messaging',
      'Monthly content calendar',
      'Company updates, product announcements, and milestones',
      'Audience engagement and comment management',
      'Performance and audience growth reporting'
    ],
    resultsMetric: 'Active B2B Company Presence',
    idealFor: 'B2B software companies, venture-backed startups, and growing tech brands needing polished company page operations without internal overhead.',
    problemsSolves: [
      'Dormant or irregular company page feeds that raise questions about company activity during buyer due diligence',
      'Disorganized product release announcements that fail to clearly articulate customer benefits',
      'Unmoderated comments and missed opportunities to engage with interested prospects',
      'Lack of structured reporting on which updates drive actual company follower and reach growth'
    ],
    scopeOfWork: [
      'Establishing brand messaging guidelines, value proposition positioning, and visual standards for the company page',
      'Curating a monthly content calendar aligned with engineering release cycles and marketing milestones',
      'Drafting, formatting, and publishing company updates, changelogs, customer stories, and culture posts',
      'Active community moderation, replying to questions, and monitoring company mentions',
      'Detailed monthly performance reports analyzing visitor demographics, follower acquisition, and engagement rates'
    ],
    workflow: [
      {
        step: '01',
        title: 'Brand Positioning & Guidelines',
        description: 'Aligning company messaging, typography, visual banners, and target B2B buyer personas.'
      },
      {
        step: '02',
        title: 'Content Calendar Architecture',
        description: 'Structuring monthly posts covering product updates, company milestones, and industry perspectives.'
      },
      {
        step: '03',
        title: 'Publishing & Community Care',
        description: 'Executing regular scheduling, active comment moderation, and ongoing brand monitoring.'
      },
      {
        step: '04',
        title: 'Growth Analytics & Optimization',
        description: 'Reporting on page visitor demographics, follower trends, and high-performing content themes.'
      }
    ],
    expectedOutcomes: [
      'A credible, modern company page that reinforces brand confidence during sales cycles',
      'Predictable, consistent publication of product features, announcements, and company milestones',
      'Higher engagement and responsive interaction with prospective customers and candidates',
      'Clear operational division between the company brand and individual executive profiles'
    ],
    featured: false
  },

  // Service 3B — X (Twitter) Account Management
  {
    id: 'x-account-management',
    title: 'X (Twitter) Account Management',
    tagline: 'Engage the tech community through build-in-public updates, threads, and ecosystem discussions.',
    icon: 'Sparkles',
    badge: 'Tech Community Presence',
    category: 'account-management',
    categoryTitle: 'LinkedIn & X Account Management',
    description: 'Reaches early adopters, developers, and tech builders through high-signal build-in-public threads, release announcements, and ecosystem dialogue.',
    deliverables: [
      'Account positioning and content strategy',
      'Daily or agreed-schedule posts and threads',
      'Product announcements and build-in-public content',
      'Relevant community engagement',
      'Analytics and performance reporting'
    ],
    resultsMetric: 'Active Tech & Developer Presence',
    idealFor: 'Developers, AI builders, SaaS founders, and companies building in public seeking active engagement with the tech community on X.',
    problemsSolves: [
      'Fragmented, sporadic posting that loses traction in fast-moving tech and developer feeds',
      'Underperforming product release threads that fail to catch the attention of developer audiences',
      'Difficulty keeping pace with real-time tech dialogues, developer trends, and ecosystem mentions',
      'Lack of clear analytics on which threads generate actual profile visits, bookmarks, and site clicks'
    ],
    scopeOfWork: [
      'Defining technical positioning, brand tone of voice, and distinct content pillars for X',
      'Researching and writing technical threads, product demos, build-in-public updates, and changelogs',
      'Coordinating launch announcements and milestone retrospectives tailored to developer culture',
      'Actively engaging with relevant tech builders, developer conversations, and industry commentary',
      'Providing transparent monthly reporting on impression volume, engagement rate, profile visits, and click-throughs'
    ],
    workflow: [
      {
        step: '01',
        title: 'Positioning & Content Pillars',
        description: 'Establishing the account narrative, target tech communities, and tone of voice on X.'
      },
      {
        step: '02',
        title: 'Thread Production & Media',
        description: 'Drafting high-signal build-in-public threads, release updates, and feature demonstrations.'
      },
      {
        step: '03',
        title: 'Consistent Posting & Dialogue',
        description: 'Publishing on an agreed schedule and participating in active tech community discussions.'
      },
      {
        step: '04',
        title: 'Analytics & Iteration',
        description: 'Measuring bookmark rates, impression velocity, website clicks, and follower retention.'
      }
    ],
    expectedOutcomes: [
      'Consistent, authentic visibility embedded directly in tech and developer timelines',
      'Immediate amplification of product releases, changelog updates, and engineering achievements',
      'Stronger community rapport with early adopters, indie makers, and fellow founders',
      'Ethical, organic-first growth without engagement pods, follow-unfollow schemes, or bots'
    ],
    featured: false
  },

  // Service 4A — LinkedIn Influencer Marketing
  {
    id: 'linkedin-influencer-marketing',
    title: 'LinkedIn Influencer Marketing',
    tagline: 'Targeted collaborations with recognized B2B voices, technical creators, and domain leaders.',
    icon: 'Megaphone',
    badge: 'B2B Creator Campaigns',
    category: 'influencer-marketing',
    categoryTitle: 'Influencer Marketing & Creator Partnerships',
    description: 'Structured influencer marketing and creator partnership campaigns connecting your software with credible LinkedIn voices whose audiences align with your target buyers.',
    deliverables: [
      'Identify relevant LinkedIn creators and industry voices',
      'Evaluate audience relevance and engagement',
      'Plan sponsored posts and creator collaborations',
      'Coordinate campaign briefs and deliverables',
      'Track campaign performance'
    ],
    resultsMetric: 'Verified B2B Creator Reach',
    idealFor: 'B2B SaaS companies, enterprise solutions, devtools, and venture-backed technology startups seeking credible third-party advocacy.',
    problemsSolves: [
      'Difficulty finding creators with genuinely qualified professional audiences rather than inflated engagement',
      'Vague creator briefs that result in sponsored posts sounding generic or misaligned with product capabilities',
      'Complex, time-consuming negotiation and coordination of creator timelines and contractual deliverables',
      'Lack of structured attribution tracking to understand the real impact of sponsored collaborations'
    ],
    scopeOfWork: [
      'In-depth discovery and vetting of niche B2B creators, domain practitioners, and industry influencers on LinkedIn',
      'Audience authenticity analysis examining comment quality, professional seniority, and engagement ratios',
      'Development of bespoke campaign briefs with clear messaging guardrails and call-to-action guidelines',
      'End-to-end management of creator communications, contracts, draft reviews, and live publishing schedules',
      'Performance measurement tracking impressions, qualitative comments, website visits, and signups'
    ],
    workflow: [
      {
        step: '01',
        title: 'Creator Identification & Vetting',
        description: 'Evaluating creators by audience seniority, professional relevance, and organic engagement.'
      },
      {
        step: '02',
        title: 'Campaign Strategy & Briefing',
        description: 'Formulating clear product hooks, demonstration talking points, and compliance guardrails.'
      },
      {
        step: '03',
        title: 'Coordination & Asset Review',
        description: 'Managing creator drafts, feedback loops, and scheduled publication dates.'
      },
      {
        step: '04',
        title: 'Attribution & Performance Audit',
        description: 'Measuring post reach, qualified comment sentiment, referral traffic, and inbound impact.'
      }
    ],
    expectedOutcomes: [
      'High-credibility advocacy from trusted domain experts who review or showcase your software',
      'Direct exposure to senior decision-makers, engineers, and potential enterprise buyers',
      'Authentic social proof that can be repurposed in sales collateral and landing pages',
      'Transparent campaign reporting focused on audience relevance and meaningful engagement'
    ],
    distinctionNote: 'Influencer marketing involves targeted paid and sponsored partnerships with external third-party creators, distinct from internal organic company page management.',
    featured: false
  },

  // Service 4B — X Influencer Marketing
  {
    id: 'x-influencer-marketing',
    title: 'X Influencer Marketing',
    tagline: 'Partner with respected tech builders, developer advocates, and startup commentators on X.',
    icon: 'Megaphone',
    badge: 'Tech Creator Outreach',
    category: 'influencer-marketing',
    categoryTitle: 'Influencer Marketing & Creator Partnerships',
    description: 'High-velocity creator campaigns with prominent voices in the technology, developer, and startup ecosystem on X to drive immediate awareness and product adoption.',
    deliverables: [
      'Identify relevant creators in the technology and startup ecosystem',
      'Plan sponsored posts, launch announcements, and collaborations',
      'Coordinate creator outreach and campaign execution',
      'Track reach, engagement, and link clicks'
    ],
    resultsMetric: 'High-Velocity Tech Creator Reach',
    idealFor: 'Early-stage tech startups, AI products, open-source repositories, developer toolkits, and software companies looking for high-velocity tech reach.',
    problemsSolves: [
      'Reaching developer and tech audiences who are skeptical of traditional display advertisements',
      'High rates of unresponsive creator outreach and inconsistent creator delivery',
      'Risk of partnering with bot-boosted accounts that produce zero real user interest or conversions',
      'Ineffective promotional messaging that clashes with authentic tech culture and developer expectations'
    ],
    scopeOfWork: [
      'Curating a vetted roster of developer advocates, tech creators, and tech commentary accounts on X',
      'Evaluating past sponsored post performance, bookmark velocity, and audience sentiment',
      'Structuring collaborative formats including launch quote tweets, hands-on tool reviews, and threads',
      'Managing outreach workflows, timeline commitments, draft approvals, and live publication',
      'Tracking live campaign impressions, engagement rate, profile clicks, and referral conversion'
    ],
    workflow: [
      {
        step: '01',
        title: 'Tech Creator Discovery & Audit',
        description: 'Filtering accounts by technical authenticity, audience quality, and historical engagement.'
      },
      {
        step: '02',
        title: 'Briefing & Format Design',
        description: 'Creating developer-centric talking points, live tool demos, and native thread angles.'
      },
      {
        step: '03',
        title: 'Campaign Launch Coordination',
        description: 'Synchronizing publication waves with product launches, releases, or major milestones.'
      },
      {
        step: '04',
        title: 'Click & Conversion Tracking',
        description: 'Auditing impressions, bookmark velocity, link clicks, and product trial activations.'
      }
    ],
    expectedOutcomes: [
      'High-velocity reach across active tech feeds during launches or major feature releases',
      'Genuine enthusiasm and commentary from respected figures in the developer community',
      'Immediate traffic spikes and early adopter signups',
      'Granular performance data for future campaign iterations'
    ],
    distinctionNote: 'Influencer marketing coordinates external creator advocacy and sponsored product showcases, distinct from managing your own brand account.',
    featured: false
  },

  // Service 4C — Instagram Influencer Marketing
  {
    id: 'instagram-influencer-marketing',
    title: 'Instagram Influencer Marketing',
    tagline: 'Engage visual creators for high-impact Reels, Stories, and workflow demonstrations.',
    icon: 'Instagram',
    badge: 'Visual Creator Campaigns',
    category: 'influencer-marketing',
    categoryTitle: 'Influencer Marketing & Creator Partnerships',
    description: 'Niche creator campaigns on Instagram focused on product demonstrations, workflow walkthroughs, and visual storytelling for mobile, AI, and consumer technology.',
    deliverables: [
      'Identify niche creators and relevant audiences',
      'Plan Reels, Stories, and sponsored content campaigns',
      'Coordinate creator briefs and publishing schedules',
      'Track reach, engagement, and campaign performance'
    ],
    resultsMetric: 'Visual Creator Engagement',
    idealFor: 'Consumer apps, productivity software, creative tools, AI lifestyle tools, and visual SaaS products seeking engaged mobile audiences.',
    problemsSolves: [
      'Inability to showcase dynamic product UX/UI through static text-based marketing channels',
      'Unclear creative briefs leading to uninspired, cookie-cutter creator demonstrations',
      'Difficulty identifying genuine niche tech creators on a platform dominated by generic lifestyle influencers',
      'Complex attribution tracking across ephemeral Stories and algorithmic Reels'
    ],
    scopeOfWork: [
      'Sourcing verified micro and mid-tier tech, productivity, and lifestyle creators on Instagram',
      'Rigorous audience screening for demographic match, geographic relevance, and real engagement',
      'Drafting creative storyboards, screen recording guidelines, and link-in-bio requirements',
      'Scheduling publication waves to maximize algorithmic momentum and explore page visibility',
      'Compiling detailed performance audits including Story views, Reel plays, shares, and link conversions'
    ],
    workflow: [
      {
        step: '01',
        title: 'Niche Audience Mapping',
        description: 'Identifying creators whose aesthetic and demographic align with your ideal product users.'
      },
      {
        step: '02',
        title: 'Storyboard & Brief Development',
        description: 'Outlining video scripts, feature highlights, screen recordings, and clear calls to action.'
      },
      {
        step: '03',
        title: 'Multi-Creator Deployment',
        description: 'Reviewing video drafts, confirming sound choices, and managing live scheduling.'
      },
      {
        step: '04',
        title: 'Viewership & Attribution Audit',
        description: 'Measuring video retention, sticker taps, link clicks, and post-campaign attribution.'
      }
    ],
    expectedOutcomes: [
      'High-fidelity visual demonstrations showing your product in action on mobile screens',
      'Elevated brand recall and interest among mobile-first creators, professionals, and consumers',
      'Actionable referral traffic via trackable Story links and bio links',
      'High-performing creative video assets that can be repurposed across other digital touchpoints'
    ],
    distinctionNote: 'Influencer marketing coordinates external creator advocacy and sponsored video demonstrations, distinct from maintaining an owned social profile.',
    featured: false
  },

  // Service 8 — Organic Brand Visibility & Audience Growth
  {
    id: 'organic-brand-visibility',
    title: 'Organic Brand Visibility & Audience Growth',
    tagline: 'Expand audience reach through ethical, context-first distribution across relevant channels.',
    icon: 'TrendingUp',
    badge: 'Organic Distribution',
    category: 'organic-growth',
    categoryTitle: 'Organic Community & Brand Visibility',
    description: 'Expands your brand reach across high-intent developer communities, tech subreddits, and relevant industry channels through helpful, context-first participation.',
    deliverables: [
      'Target community & channel identification',
      'Contextual discussion participation & technical replies',
      'Subreddit & developer hub organic outreach',
      'Sustainable organic reach compounding & reporting'
    ],
    resultsMetric: 'Durable Multi-Channel Visibility',
    idealFor: 'Startups and SaaS teams wanting sustainable audience growth and developer goodwill without constant paid ads.',
    problemsSolves: [
      'Struggling to reach developer communities that reject standard paid advertisements',
      'Inability to maintain ongoing conversations across high-intent subreddits, forums, and developer hubs',
      'High churn and zero compounding effect from one-off paid ad spend'
    ],
    scopeOfWork: [
      'Mapping high-intent developer subreddits, GitHub discussions, and developer communities relevant to your product',
      'Crafting value-first technical explanations, documentation links, and educational answers',
      'Monitoring organic mentions and brand sentiment across technical channels',
      'Reporting on referral visits, community bookmarks, and brand sentiment'
    ],
    workflow: [
      {
        step: '01',
        title: 'Community & Channel Mapping',
        description: 'Pinpointing where your exact users discuss problems your software solves.'
      },
      {
        step: '02',
        title: 'Value-First Answer Blueprint',
        description: 'Establishing helpful, authoritative contribution guidelines without sales pitch fluff.'
      },
      {
        step: '03',
        title: 'Consistent Organic Outreach',
        description: 'Participating in daily and weekly technical discussions with helpful context.'
      },
      {
        step: '04',
        title: 'Sentiment & Traffic Audit',
        description: 'Tracking referral links, brand mentions, and organic user acquisition.'
      }
    ],
    expectedOutcomes: [
      'Durable organic presence in technical discussions that continues generating traffic for months',
      'Authentic respect and goodwill from developer and tech communities',
      'Lower blended customer acquisition cost alongside existing launch efforts'
    ],
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
