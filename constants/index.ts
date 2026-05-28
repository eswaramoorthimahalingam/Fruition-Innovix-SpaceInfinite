import {
  FaBullhorn,
  FaDatabase,
  FaEnvelope,
  FaGlobe,
  FaLaptopCode,
  FaPhoneAlt,
  FaShoppingCart,
} from "react-icons/fa";

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

export const SOCIALS = [
  {
    name: "Email",
    icon: FaEnvelope,
    link: "mailto:contact@example.com",
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

export const PROJECTS = [
  {
    title: "Web & Mobile App Development",
    description:
      "Modern websites, web apps, and mobile applications built around your business goals. Fruition Innovix turns ideas into fast, polished, scalable digital products.",
    image: "/projects/project-1.png",
    link: "#contact",
  },
  {
    title: "ERP, CRM & Billing Software",
    description:
      "Customized billing, ERP, CRM, and business software that simplify operations, connect teams, and give decision-makers the clarity they need to grow.",
    image: "/projects/project-2.png",
    link: "#contact",
  },
  {
    title: "Branding, Marketing & Creative Media",
    description:
      "Graphic design, business branding, digital marketing, social media campaigns, marketing strategy, event planning, e-commerce support, and video editing under one roof.",
    image: "/projects/project-3.png",
    link: "#contact",
  },
] as const;

export const FOOTER_DATA = [
  {
    title: "Solutions",
    data: [
      {
        name: "Web & Mobile Apps",
        icon: FaLaptopCode,
        link: "#services",
      },
      {
        name: "ERP & CRM Systems",
        icon: FaDatabase,
        link: "#services",
      },
      {
        name: "E-commerce",
        icon: FaShoppingCart,
        link: "#services",
      },
    ],
  },
  {
    title: "Creative Growth",
    data: [
      {
        name: "Branding",
        icon: FaBullhorn,
        link: "#services",
      },
      {
        name: "Digital Marketing",
        icon: FaGlobe,
        link: "#services",
      },
      {
        name: "Contact",
        icon: FaEnvelope,
        link: "mailto:contact@example.com",
      },
    ],
  },
  {
    title: "Company",
    data: [
      {
        name: "About Fruition Innovix",
        icon: null,
        link: "#about-me",
      },
      {
        name: "Our Services",
        icon: null,
        link: "#services",
      },
      {
        name: "Contact Us",
        icon: FaPhoneAlt,
        link: "mailto:contact@example.com",
      },
    ],
  },
] as const;

export const NAV_LINKS = [
  {
    title: "About",
    link: "#about-me",
  },
  {
    title: "Expertise",
    link: "#skills",
  },
  {
    title: "Services",
    link: "#services",
  },
] as const;

export const LINKS = {
  website: "#about-me",
};
