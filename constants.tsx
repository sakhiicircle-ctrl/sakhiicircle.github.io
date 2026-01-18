
import { NavItem, FeatureCardData, SymptomData, PricingPlan, Testimonial } from './types';

export const COLORS = {
  primaryOrange: '#D97949',
  accentPurple: '#973EBF',
  neutralBg: '#FFF7F3',
  cardBg: '#F6E9F6',
  darkText: '#2C2C2C',
  mutedText: '#6F6F6F',
  gradient: 'linear-gradient(135deg, #973EBF 0%, #D97949 100%)',
};

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Symptom Tracker', path: '/tracker' },
  { label: 'Community', path: '/community' },
  { label: 'Journaling', path: '/journaling' },
  { label: 'Experts', path: '/experts' },
  { label: 'Pricing', path: '/pricing' },
  { label: 'Resources', path: '/resources' },
  { label: 'For Employers', path: '/employers' },
  { label: 'Blog', path: '/blog' },
  { label: 'Contact', path: '/contact' },
];

export const FEATURES: FeatureCardData[] = [
  {
    title: 'Symptom Tracker',
    description: 'Daily 2-min check-ins, pattern graphs, shareable weekly summaries.',
    cta: 'Try Tracker',
    icon: '📊',
    link: '/tracker',
  },
  {
    title: 'AI Insight Engine',
    description: 'See "women like you" patterns and smart nudges driven by clinical data.',
    cta: 'Learn More',
    icon: '🧠',
    link: '/ai-insights',
  },
  {
    title: 'Expert Network',
    description: 'Book vetted gynecologists, therapists & dietitians for specialized care.',
    cta: 'Meet Experts',
    icon: '👩‍⚕️',
    link: '/experts',
  },
];

export const SYMPTOMS: SymptomData[] = [
  { label: 'Irritability', icon: '😡', color: '#FFB7B2' },
  { label: 'Joint Pain', icon: '🦴', color: '#FFDAC1' },
  { label: 'Brain Fog', icon: '☁️', color: '#E2F0CB' },
  { label: 'Painful Sex', icon: '❤️‍🩹', color: '#B5EAD7' },
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    name: 'Free',
    price: '₹0',
    features: ['Symptom Tracker', 'Community Access', 'Basic Articles'],
    cta: 'Start Free',
  },
  {
    name: 'Premium',
    price: '₹499/mo',
    features: ['AI Insights', 'Journaling Tools', '1 Monthly Expert Q&A', 'Priority Support'],
    cta: 'Go Premium',
    highlighted: true,
  },
  {
    name: 'Care Plan',
    price: '₹1499/mo',
    features: ['Full Care Management', 'Unlimited Expert Consults', 'Personalized Health Plan'],
    cta: 'Get Full Care',
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    quote: "SakhiiCircle helped me realize I wasn't alone. The tracker patterns were the data I needed for my doctor.",
    author: "Ananya S.",
    role: "Pilot User",
  },
  {
    quote: "The anonymous community is a safe haven. I can ask things I wouldn't even tell my closest friends.",
    author: "Meera K.",
    role: "Community Member",
  },
];

export const PRESS_LOGOS = [
  { name: 'Time', url: 'https://logo.clearbit.com/time.com' },
  { name: 'Yahoo Health', url: 'https://logo.clearbit.com/yahoo.com' },
  { name: 'Forbes', url: 'https://logo.clearbit.com/forbes.com' },
];

export const SPONSOR_LOGOS = [
  'https://logo.clearbit.com/bayer.com',
  'https://logo.clearbit.com/pfizer.com',
  'https://logo.clearbit.com/unilever.com',
];
