import {
  FaBullhorn,
  FaCameraRetro,
  FaChartLine,
  FaClipboardCheck,
  FaEnvelope,
  FaHandshake,
  FaLaptopCode,
  FaLightbulb,
  FaMapMarkerAlt,
  FaPaintBrush,
  FaPhoneAlt,
  FaRocket,
  FaShoppingCart,
  FaStore,
} from "react-icons/fa";

export type NavItem = {
  title: string;
  link: string;
  children?: readonly NavItem[];
};

export const SOCIALS = [
  {
    name: "Email",
    icon: FaEnvelope,
    link: "mailto:contact@example.com",
  },
] as const;

export const SKILL_DATA = [
  {
    skill_name: "HTML",
    image: "html.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "CSS",
    image: "css.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "JavaScript",
    image: "js.png",
    width: 65,
    height: 65,
  },
  {
    skill_name: "Tailwind CSS",
    image: "tailwind.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "React",
    image: "react.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Redux",
    image: "redux.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "React Query",
    image: "reactquery.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "TypeScript",
    image: "ts.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Next.js 14",
    image: "next.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Framer Motion",
    image: "framer.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Stripe",
    image: "stripe.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Node.js",
    image: "node.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "MongoDB",
    image: "mongodb.png",
    width: 40,
    height: 40,
  },
] as const;

export const FRONTEND_SKILL = [
  {
    skill_name: "HTML",
    image: "html.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "CSS",
    image: "css.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "JavaScript",
    image: "js.png",
    width: 65,
    height: 65,
  },
  {
    skill_name: "Tailwind CSS",
    image: "tailwind.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Material UI",
    image: "mui.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "React",
    image: "react.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Redux",
    image: "redux.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "React Query",
    image: "reactquery.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "TypeScript",
    image: "ts.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Next.js 14",
    image: "next.png",
    width: 80,
    height: 80,
  },
] as const;

export const BACKEND_SKILL = [
  {
    skill_name: "Node.js",
    image: "node.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Express.js",
    image: "express.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "MongoDB",
    image: "mongodb.png",
    width: 40,
    height: 40,
  },
  {
    skill_name: "Firebase",
    image: "firebase.png",
    width: 55,
    height: 55,
  },
  {
    skill_name: "PostgreSQL",
    image: "postgresql.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "MySQL",
    image: "mysql.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Prisma",
    image: "prisma.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Graphql",
    image: "graphql.png",
    width: 80,
    height: 80,
  },
] as const;

export const FULLSTACK_SKILL = [
  {
    skill_name: "React Native",
    image: "reactnative.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Tauri",
    image: "tauri.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Docker",
    image: "docker.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Figma",
    image: "figma.png",
    width: 50,
    height: 50,
  },
] as const;

export const OTHER_SKILL = [
  {
    skill_name: "Go",
    image: "go.png",
    width: 60,
    height: 60,
  },
] as const;

export const WHY_POINTS = [
  {
    title: "Innovative",
    description:
      "A strategy-led team focused on fresh ideas, sharper execution, and practical ways to accelerate business growth.",
    icon: FaLightbulb,
  },
  {
    title: "Creative",
    description:
      "Brand, content, design, and campaign thinking shaped to help businesses stand out across crowded online markets.",
    icon: FaPaintBrush,
  },
  {
    title: "Productive",
    description:
      "Qualified specialists across e-commerce, digital marketing, website development, and creative production working toward measurable outcomes.",
    icon: FaRocket,
  },
  {
    title: "Responsive",
    description:
      "Prompt support for client questions and issues, with a service approach built around clarity and timely resolution.",
    icon: FaHandshake,
  },
] as const;

export const GROWTH_STATS = [
  {
    value: "150+",
    label: "leading brands",
  },
  {
    value: "5x+",
    label: "average ROAS",
  },
  {
    value: "50Cr+",
    label: "ad spend handled",
  },
  {
    value: "250Cr+",
    label: "ad revenue",
  },
  {
    value: "3.1 yrs+",
    label: "average retention",
  },
] as const;

export const MARKETPLACE_PLATFORMS = [
  "Amazon",
  "Flipkart",
  "Shopify",
  "Blinkit",
  "Zepto",
  "Instamart",
  "Nykaa",
  "JioMart",
  "Etsy",
  "Walmart",
] as const;

export const NAV_ITEMS: readonly NavItem[] = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "Services",
    link: "/services",
    children: [
      {
        title: "E-commerce Marketing",
        link: "/services/e-commerce-marketing",
        children: [
          {
            title: "Amazon",
            link: "/services/e-commerce-marketing#amazon",
            children: [
              {
                title: "Account management",
                link: "/services/e-commerce-marketing#amazon-account-management",
              },
              {
                title: "Advertising",
                link: "/services/e-commerce-marketing#amazon-advertising",
              },
              {
                title: "Account Reinstatement",
                link: "/services/e-commerce-marketing#amazon-account-reinstatement",
              },
              {
                title: "Account Launch and Registration",
                link: "/services/e-commerce-marketing#amazon-launch-registration",
              },
              {
                title: "A Plus (Enhanced brand content)",
                link: "/services/e-commerce-marketing#amazon-a-plus",
              },
              {
                title: "Storefront creation",
                link: "/services/e-commerce-marketing#amazon-storefront",
              },
              {
                title: "Cataloging- Listing on multiple portals",
                link: "/services/e-commerce-marketing#amazon-cataloging",
              },
              {
                title: "Brand and product-specific videos",
                link: "/services/e-commerce-marketing#amazon-brand-videos",
              },
              {
                title: "Product listing",
                link: "/services/e-commerce-marketing#amazon-product-listing",
              },
            ],
          },
          {
            title: "Flipkart",
            link: "/services/e-commerce-marketing#flipkart",
            children: [
              {
                title: "Flipkart account management",
                link: "/services/e-commerce-marketing#flipkart-account-management",
              },
              {
                title: "Flipkart Advertising",
                link: "/services/e-commerce-marketing#flipkart-advertising",
              },
              {
                title: "Flipkart RPD",
                link: "/services/e-commerce-marketing#flipkart-rpd",
              },
              {
                title: "Flipkart Account Launch and Registration",
                link: "/services/e-commerce-marketing#flipkart-launch-registration",
              },
            ],
          },
        ],
      },
      {
        title: "Web Development",
        link: "/services/web-development",
        children: [
          { title: "Wordpress", link: "/services/web-development#wordpress" },
          { title: "Shopify", link: "/services/web-development#shopify" },
          { title: "UI/UX", link: "/services/web-development#uiux" },
          { title: "WIX", link: "/services/web-development#wix" },
        ],
      },
      { title: "Digital Marketing", link: "/services/digital-marketing" },
      { title: "Quick Commerce", link: "/services/quick-commerce" },
      {
        title: "Graphic Designing & Videos",
        link: "/services/graphic-designing-videos",
        children: [
          { title: "Branding", link: "/services/graphic-designing-videos#branding" },
          {
            title: "3D Modeling and Graphics",
            link: "/services/graphic-designing-videos#3d-modeling",
          },
          {
            title: "Video Creation and Editing",
            link: "/services/graphic-designing-videos#video-creation",
          },
          {
            title: "Brand and Product Specific Videos",
            link: "/services/graphic-designing-videos#brand-product-videos",
          },
        ],
      },
      { title: "Product Photography", link: "/services/product-photography" },
      { title: "Nykaa", link: "/e-commerce#nykaa" },
      { title: "Jio Mart", link: "/e-commerce#jiomart" },
      { title: "Etsy", link: "/e-commerce#etsy" },
      { title: "Walmart", link: "/e-commerce#walmart" },
    ],
  },
  {
    title: "Partners",
    link: "/partners",
    children: [
      { title: "Partner For Amazon", link: "/partners#amazon" },
      { title: "Flipkart Partner", link: "/partners#flipkart" },
      { title: "Shopify Partner", link: "/partners#shopify" },
    ],
  },
  {
    title: "E-commerce",
    link: "/e-commerce",
    children: [
      {
        title: "Amazon",
        link: "/e-commerce#amazon",
        children: [
          { title: "Amazon India", link: "/e-commerce#amazon-india" },
          { title: "Amazon USA", link: "/e-commerce#amazon-usa" },
        ],
      },
      { title: "Flipkart", link: "/e-commerce#flipkart" },
      { title: "Blinkit", link: "/e-commerce#blinkit" },
      { title: "Zepto", link: "/e-commerce#zepto" },
      { title: "Insta Mart", link: "/e-commerce#instamart" },
      { title: "Etsy", link: "/e-commerce#etsy" },
      { title: "Walmart", link: "/e-commerce#walmart" },
      { title: "Jio Mart", link: "/e-commerce#jiomart" },
    ],
  },
  { title: "Contact Us", link: "/contact" },
  { title: "Business Enquiry", link: "/contact#enquiry" },
  { title: "Career", link: "/career" },
  { title: "Event", link: "/events" },
  {
    title: "Policies",
    link: "/policies",
    children: [
      { title: "Privacy Policy", link: "/policies/privacy-policy" },
      { title: "Terms and conditions", link: "/policies/terms-and-conditions" },
      {
        title: "Refund & Cancellation Policy",
        link: "/policies/refund-cancellation-policy",
      },
    ],
  },
  {
    title: "About",
    link: "/about",
    children: [{ title: "About Us", link: "/about" }],
  },
] as const;

export const PROJECTS = [
  {
    title: "E-commerce Marketing",
    description:
      "Amazon and Flipkart account management, seller launches, product listings, storefronts, cataloging, A+ content, ads, and quick-commerce support.",
    image: "/projects/project-1.png",
    link: "/contact",
  },
  {
    title: "Website Design & Development",
    description:
      "Responsive, SEO-ready websites and online stores across Shopify, WordPress, UI/UX, WIX, and custom web development workflows.",
    image: "/projects/project-2.png",
    link: "/contact",
  },
  {
    title: "Digital Marketing & Creative",
    description:
      "Social media marketing, PPC, SEO, SEM, content marketing, video advertising, display ads, graphics, brand videos, and product photography.",
    image: "/projects/project-3.png",
    link: "/contact",
  },
] as const;

export const FOOTER_DATA = [
  {
    title: "Services",
    data: [
      {
        name: "E-commerce Marketing",
        icon: FaShoppingCart,
        link: "/services/e-commerce-marketing",
      },
      {
        name: "Web Development",
        icon: FaLaptopCode,
        link: "/services/web-development",
      },
      {
        name: "Digital Marketing",
        icon: FaChartLine,
        link: "/services/digital-marketing",
      },
      {
        name: "Graphics & Product Photography",
        icon: FaCameraRetro,
        link: "/services/product-photography",
      },
    ],
  },
  {
    title: "Marketplaces",
    data: [
      {
        name: "Amazon & Flipkart",
        icon: FaStore,
        link: "/e-commerce",
      },
      {
        name: "Quick Commerce",
        icon: FaRocket,
        link: "/services/quick-commerce",
      },
      {
        name: "Branding & Videos",
        icon: FaBullhorn,
        link: "/services/graphic-designing-videos",
      },
      {
        name: "Client Support",
        icon: FaClipboardCheck,
        link: "/contact",
      },
    ],
  },
  {
    title: "Contact",
    data: [
      {
        name: "Business Enquiry",
        icon: FaPhoneAlt,
        link: "/contact#enquiry",
      },
      {
        name: "care@evitamin.in",
        icon: FaEnvelope,
        link: "mailto:care@evitamin.in",
      },
      {
        name: "Fruition Innovix",
        icon: FaMapMarkerAlt,
        link: "/about",
      },
    ],
  },
] as const;

export const LINKS = {
  website: "/",
};
