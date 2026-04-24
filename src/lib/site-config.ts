export const siteConfig = {
  name: "Air Purifier Report",
  tagline: "Expert Air Purifier Guides & Reviews",
  description:
    "Expert guides on air purifiers, CADR ratings, HEPA filters, and improving indoor air quality for allergies, asthma, and home health.",
  url: "https://airpurifierreport.com",
  author: "Dr. Alex Chen",
  primaryColor: "#0891b2",
  niche: "airpurifier",
  email: "hello@airpurifierreport.com",
  privacyEmail: "privacy@airpurifierreport.com",
  editorialEmail: "editorial@airpurifierreport.com",
  contactEmail: "contact@airpurifierreport.com",
  ogImage: "/og-image.jpg",
  updatedLabel: "Updated March 2026",
} as const;

export const featuredGuides = [
  {
    slug: "cadr-rating-explained",
    title: "CADR Rating Explained: What It Means & Why It Matters",
    description: "Understand CADR ratings to choose the right air purifier for your room size.",
    image: "/images/cadr-rating-explained-hero.jpg",
    category: "Buying Guide",
  },
  {
    slug: "true-hepa-vs-hepa-type",
    title: "True HEPA vs HEPA-Type: What's the Difference?",
    description: "Not all HEPA filters are equal. Learn what separates True HEPA from HEPA-Type.",
    image: "/images/true-hepa-vs-hepa-type-hero.jpg",
    category: "Buying Guide",
  },
  {
    slug: "dyson-purifier-vs-levoit",
    title: "Dyson Purifier vs Levoit: Which Should You Buy?",
    description: "Full comparison of these popular air purifier brands in 2026.",
    image: "/images/dyson-vs-levoit-hero.jpg",
    category: "Comparisons",
  },
] as const;