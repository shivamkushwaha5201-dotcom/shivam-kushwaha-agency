export interface StatMetric {
  id: string;
  value: string;
  label: string;
  subtext: string;
  iconName: string;
  growth: string;
}

export interface ServiceDetail {
  id: string;
  title: string;
  tagline: string;
  icon: string;
  badge: string;
  description: string;
  deliverables: string[];
  resultsMetric: string;
  idealFor: string;
  featured?: boolean;
}

export interface CaseStudy {
  id: string;
  productName: string;
  tagline: string;
  category: 'AI Tool' | 'SaaS' | 'Dev Tool' | 'Mobile App' | 'Productivity';
  badgeRank: string; // e.g. "#1 Product of the Day"
  totalUpvotes: number;
  featuredHunter: string;
  impressions: string;
  newSignups: string;
  xEngagement: string;
  linkedinReach: string;
  founderName: string;
  founderTitle: string;
  founderAvatar: string;
  testimonial: string;
  summary: string;
  keyStrategy: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: 'Product Hunt' | 'X & LinkedIn' | 'Influencer Marketing' | 'Pricing & Process';
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  quote: string;
  platform: 'producthunt' | 'x' | 'linkedin';
  highlight: string;
  verifiedLaunch: string;
}

export interface LaunchReadinessQuestion {
  id: number;
  question: string;
  options: {
    text: string;
    points: number;
    tip: string;
  }[];
}

export interface InquiryFormData {
  name: string;
  email: string;
  projectName: string;
  productUrl: string;
  servicesNeeded: string[];
  targetLaunchDate: string;
  budgetRange: string;
  message: string;
}
