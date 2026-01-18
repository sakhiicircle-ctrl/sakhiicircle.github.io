
export interface NavItem {
  label: string;
  path: string;
}

export interface FeatureCardData {
  title: string;
  description: string;
  cta: string;
  icon: string;
  link: string;
}

export interface SymptomData {
  label: string;
  icon: string;
  color: string;
}

export interface PricingPlan {
  name: string;
  price: string;
  features: string[];
  cta: string;
  highlighted?: boolean;
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
}
