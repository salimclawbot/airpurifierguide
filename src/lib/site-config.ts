export const siteConfig = {
  name: "Plan Homeschooling",
  tagline: "Expert Homeschool Planning Guides & Resources",
  description:
    "Expert-reviewed guides for homeschool curriculum, scheduling, record keeping, and co-ops. Trusted by homeschool families nationwide.",
  url: "https://www.planhomeschooling.com",
  author: "Sarah Brennan",
  primaryColor: "#0f766e",
  niche: "homeschool",
  email: "hello@planhomeschooling.com",
  privacyEmail: "privacy@planhomeschooling.com",
  editorialEmail: "editorial@planhomeschooling.com",
  contactEmail: "contact@planhomeschooling.com",
  ogImage: "/og-image.jpg",
  updatedLabel: "Updated March 2026",
} as const;

export const featuredGuides = [
  {
    slug: "how-to-start-homeschooling",
    title: "How to Start Homeschooling: Complete Beginner's Guide (2026)",
    description: "Learn how to start homeschooling step by step with legal requirements, curriculum choices, and scheduling.",
    image: "/images/how-to-start-homeschooling-beginners-guide-2026-hero.jpg",
    category: "Getting Started",
  },
  {
    slug: "best-homeschool-curriculum-2026",
    title: "Best Homeschool Curriculum 2026: Top Picks Reviewed",
    description: "Expert-reviewed curriculum options for every learning style and grade level.",
    image: "/images/best-homeschool-curriculum-2026-hero.jpg",
    category: "Curriculum",
  },
  {
    slug: "homeschool-schedule-templates",
    title: "Homeschool Schedule Templates (Free Printables)",
    description: "Free printable daily and weekly schedule templates for elementary, middle, and high school.",
    image: "/images/articles/homeschool-daily-schedule-planning.jpg",
    category: "Planning",
  },
  {
    slug: "homeschool-record-keeping",
    title: "Homeschool Record Keeping: What You Are Required to Track (2026 Guide)",
    description: "What you are legally required to track by state, plus the best tools and planners for 2026.",
    image: "/images/articles/homeschool-record-keeping-guide-hero.jpg",
    category: "Administration",
  },
] as const;
