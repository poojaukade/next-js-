
export type Project = {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  category: string;
  features: string[];
  github: string;
  liveDemo: string;
};

export const projects: Project[] = [
  {
    id: "expense-tracker",
    title: "Expense Tracker",
    description:
      "A responsive expense management application to track income, expenses and financial activities.",
    technologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
    ],
    category: "Web Application",
    features: [
      "Add and delete transactions",
      "Filter transactions by category",
      "Track total income and expenses",
      "Responsive user interface",
    ],
    github: "https://github.com/yourusername/expense-tracker",
    liveDemo: "https://example.com",
  },
  {
    id: "recipe-search",
    title: "Recipe Search Application",
    description:
      "A recipe discovery application that allows users to search recipes and view cooking instructions.",
    technologies: [
      "React",
      "JavaScript",
      "API",
      "CSS",
    ],
    category: "Web Application",
    features: [
      "Search recipes using an API",
      "View recipe details",
      "Save favourite recipes",
      "Store favourites using localStorage",
    ],
    github: "https://github.com/yourusername/recipe-search",
    liveDemo: "https://example.com",
  },
  {
    id: "shopify-store",
    title: "Shopify Store Customization",
    description:
      "A customized Shopify storefront with reusable sections, responsive layouts and interactive components.",
    technologies: [
      "Shopify",
      "Liquid",
      "JavaScript",
      "CSS",
    ],
    category: "E-commerce",
    features: [
      "Custom Shopify sections",
      "Reusable theme blocks",
      "Responsive layouts",
      "Interactive storefront components",
    ],
    github: "https://github.com/yourusername/shopify-store",
    liveDemo: "https://example.com",
  },
];
