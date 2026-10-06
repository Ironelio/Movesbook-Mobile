export type PlanFeature = {
  text: string;
  included: boolean;
  highlight?: boolean;
};

export type Plan = {
  id: string;
  name: string;
  price: string;
  subtitle: string;
  cta: string;
  features: PlanFeature[];
  badge?: string;
  badgeDenied?: boolean;
};

export const PLANS: Plan[] = [
  {
    id: 'free',
    name: 'Free',
    price: '€ 0',
    subtitle: 'Use version free for 1 month',
    cta: 'Choose Free',
    features: [
      { text: 'Develop aerobic workout plan', included: true },
      { text: 'Develop weight training plan', included: true },
      { text: 'Develop circuit training plan', included: true },
      { text: 'Develop weekly weight training plan', included: true },
      { text: 'Download user-shared workout plans', included: true },
      { text: 'Store workouts in the Annual Work Plan', included: true },
      { text: 'Store completed work', included: true },
    ],
  },
  {
    id: 'basic',
    name: 'Basic',
    price: '€ 36',
    subtitle: 'Annual subscription',
    cta: 'Choose Basic',
    features: [
      { text: 'All the features of the version free +', included: true },
      { text: '500+ exercises with videos', included: true },
      { text: 'Version for male and female', included: true },
      { text: 'View targeted muscle areas', included: true },
      { text: 'Completed workouts compared with planned', included: true },
      { text: 'Access to library of workouts', included: true },
      { text: 'Create your own preparatory cycles', included: true },
    ],
  },
  {
    id: 'premium',
    name: 'Premium',
    price: '€ 73',
    subtitle: 'Annual subscription',
    cta: 'Choose Premium',
    features: [
      { text: 'All the features of the version Basic +', included: true },
      { text: 'Statistics on workouts planned', included: true },
      { text: 'Statistics on workouts completed', included: true },
      { text: 'Full editor new exercises', included: true },
      { text: 'Training assistant', included: true },
      { text: 'Analyze your diet', included: true },
      { text: 'Create meal plans', included: true },
      { text: 'Body analysis', included: true },
    ],
  },
  {
    id: 'pro',
    name: 'Pro',
    price: '€ 109',
    subtitle: 'Annual subscription',
    cta: 'Choose Pro',
    badge: 'Personal avatar',
    badgeDenied: true,
    features: [
      { text: 'All the features of the version Premium +', included: true },
      { text: 'Gps workout map tracking', included: true },
      { text: 'Heart rate tracking', included: true },
      { text: 'Advanced statistical analysis', included: true },
      { text: 'Actions tracking', included: true },
      { text: 'Intelligent assistant', included: true },
      { text: 'Self-learning', included: true },
      {
        text: 'AI training plan development',
        included: true,
        highlight: true,
      },
    ],
  },
];

export const OFFER_TIERS = [
  {
    id: '1m',
    label: '1 month',
    price: '$0.50 USD',
    original: '$15.99 USD',
    discount: '50% OFF',
    popular: false,
  },
  {
    id: '3m',
    label: '3 months',
    price: '$0.35 USD',
    original: '$65.00 USD',
    discount: '65% OFF',
    popular: false,
  },
  {
    id: '12m',
    label: '12 months',
    price: '$0.20 USD',
    original: '$73.00 USD',
    discount: '80% OFF',
    popular: true,
  },
] as const;

export const TRAIN_STATS = [
  {
    icon: 'barbell-outline' as const,
    value: '100,000+',
    label: 'TOTAL WORKOUTS COMPLETED',
  },
  {
    icon: 'flame-outline' as const,
    value: '2,000,000+',
    label: 'CALORIES BURNED',
  },
  {
    icon: 'hourglass-outline' as const,
    value: '10,000+',
    label: 'HOURS TRAINED',
  },
  {
    icon: 'happy-outline' as const,
    value: '98%',
    label: 'USER SATISFACTION',
  },
];

export const TRAIN_FEATURES = [
  {
    icon: 'clipboard-outline' as const,
    title: 'PERSONALIZED PLANS',
    description: 'Customer personalized plans',
  },
  {
    icon: 'stats-chart-outline' as const,
    title: 'TRACK PROGRESS',
    description: 'Analyze and track progress to gain insights',
  },
  {
    icon: 'person-outline' as const,
    title: 'COACH FUNCTION',
    description: 'Get the most out of your coaching',
  },
  {
    icon: 'nutrition-outline' as const,
    title: 'NUTRITION GUIDANCE',
    description: 'Let your nutrition guide help you',
  },
];

export const FAQ_ITEMS = [
  {
    q: 'How does personalized training work?',
    a: 'FitAI builds plans from your goals, level, and available equipment, then adapts as you complete sessions.',
  },
  {
    q: 'Can I customize my program?',
    a: 'Yes. Swap exercises, adjust volume, and save your own cycles while keeping coach-ready structure.',
  },
  {
    q: 'Can I track nutrition?',
    a: 'Premium and Pro unlock meal plans, diet analysis, and body metrics alongside workout tracking.',
  },
  {
    q: "What's included in the trial?",
    a: 'Start with the Free month: aerobic, weights, circuit planning, shared downloads, and annual plan storage.',
  },
];

export const CONFIDENCE_TEXT =
  "We're confident that our premium experience will exceed your expectations, providing you with unique value and satisfaction.\nEnjoy the freedom to explore everything we offer, because your satisfaction is, and always will be, our top priority";
