import {
  Monitor,
  Database,
  Wrench,
  Code2,
  Lightbulb,
  Users
} from 'lucide-react';

export const HERO_DATA = {
  name: "Sekhar Ghosh",
  title: "Full Stack Developer",
  description: "Hello! I'm Sekhar Ghosh, a passionate and dedicated Full Stack Developer. Having recently graduated in Computer Science Engineering, I am currently working on building scalable and efficient web and mobile applications. With a strong foundation in both front-end and back-end technologies, I thrive on creating seamless, visually appealing, and high-performing solutions. My journey in tech continues to be driven by coding, problem-solving, and continuously learning new skills.",
  socials: {
    email: "sekhar.gh25@gmail.com",
    github: "https://github.com/sekharg62/",
    linkedin: "https://www.linkedin.com/in/sekhar-ghosh-cse26/",
  }
};

export const SKILLS = [
  {
    title: "Frontend Development",
    icon: Monitor,
    skills: [
      { skill: "HTML5, CSS3, Tailwind CSS", percentage: "85%" },
      { skill: "JavaScript, TypeScript", percentage: "80%" },
      { skill: "React.js", percentage: "75%" },
      { skill: "React Native", percentage: "40%" },
      { skill: "Next.js (SSR, SSG)", percentage: "55%" },
      { skill: "Zustand (State Management)", percentage: "60%" },
      { skill: "Material UI (MUI)", percentage: "60%" },
    ],
  },
  {
    title: "Backend Development",
    icon: Database,
    skills: [
      { skill: "Node.js", percentage: "70%" },
      { skill: "Express.js", percentage: "60%" },
      { skill: "PostgreSQL", percentage: "60%" },
      { skill: "MongoDB", percentage: "50%" },
      { skill: "MySQL", percentage: "50%" },
      { skill: "Supabase", percentage: "40%" },
    ],
  },
  {
    title: "Cloud & Tools",
    icon: Wrench,
    skills: [
      { skill: "AWS (Basic)", percentage: "50%" },
      { skill: "Git & GitHub", percentage: "70%" },
      { skill: "Postman (API Testing)", percentage: "65%" },
      { skill: "Docker", percentage: "40%" },
    ],
  },
  {
    title: "Programming Languages",
    icon: Code2,
    skills: [
      { skill: "C, C++", percentage: "80%" },
      { skill: "Java", percentage: "75%" },
      { skill: "Python", percentage: "25%" },
      { skill: "HTML, CSS", percentage: "85%" },
      { skill: "JavaScript, TypeScript", percentage: "80%" },
    ],
  },
  {
    title: "Soft Skills",
    icon: Lightbulb,
    skills: [
      { skill: "Problem Solving", percentage: "60%" },
      { skill: "Time Management", percentage: "65%" },
      { skill: "Communication", percentage: "60%" },
      { skill: "Adaptability", percentage: "70%" },
    ],
  },
  {
    title: "Professional Skills",
    icon: Users,
    skills: [
      { skill: "Team Collaboration", percentage: "80%" },
      { skill: "English Communication", percentage: "60%" },
      { skill: "Adaptability", percentage: "70%" },
      { skill: "Problem Solving", percentage: "60%" },
    ],
  },
];

export const PROJECTS = [
  {
    title: "Racing Moto",
    date: "January 2024",
    description: [
      "Basically this game is for child",
      "Make this game using HTML5 , CSS & JS",
      "Score features also added"
    ],
    link: "https://sekharg62.github.io/car-game-github.io/"
  },
  {
    title: "E-Commerce",
    date: "February 2024",
    description: [
      "A responsive e-commerce frontend built using React.",
      "Features a dynamic shopping cart for adding and managing products.",
      "Users can browse a variety of products with ease."
    ],
    link: "https://my-e-commerce-seven.vercel.app/"
  },
  {
    title: "Social Media",
    date: "August 2024",
    description: [
      "A comprehensive social media platform which is currently under development.",
      "Currently it is only post page for mobile screen",
      "Built with a modern tech stack including NEXT for the frontend ",
      "Features will include user authentication, profile management, and real-time messaging."
    ],
    link: "https://third-zone-ym8u.vercel.app/"
  },
  {
    title: "Blog-site",
    date: "August 2024",
    description: [
      "A comprehensive blog platform which is currently under development.",
      "Making using NEXT.js, MONGODB, EXPRESS and NODE.js",
      "Authentication using google, github and manual features available,",
      "Fully responsive this project and dark and light theme available."
    ],
    link: "https://next-blog-ruby-three.vercel.app/"
  },
  {
    title: "3D-Portfolio",
    date: "July 2024",
    description: [
      "A comprehensive 3D-Portfolio platform.",
      "Making using NEXT.js",
      "Use here three.js and map.js,"
    ],
    link: "https://portfolio-sekhar-ghoshs-projects.vercel.app/"
  }
];

export const EXPERIENCE = [
  {
    company: "Statmagic Sports LLP",
    position: "Jr. Software Engineer",
    duration: "Aug 2025 - Present",
    location: "Onsite – Bangalore, India",
    responsibilities: [
      "Launched Player Nation, a football player statistics platform delivering real-time data to 500+ users daily with 40% faster load times by optimizing API queries and caching in NestJS.",
      "Built cross-platform features with React (web) and React Native (mobile), increasing mobile adoption by 30% in the first month."
    ]
  },
  {
    company: "Infomaticae Technologies Pvt. Ltd.",
    position: "Junior Software Developer",
    duration: "May 2025 - Jul 2025",
    location: "Remote – West Bengal, India",
    responsibilities: [
      "Architected and deployed a scalable ERP solution using React.js for H.K. Exports, reducing manual reporting time by 40%."
    ]
  },
  {
    company: "Meliodus Software Solutions Pvt. Ltd.",
    position: "Frontend Developer",
    duration: "Oct 2024 - Apr 2025",
    location: "Remote – West Bengal, India",
    responsibilities: [
      "Contributed to the development of a psychometric testing platform used by 3,000+ candidates.",
      "Tech Stack: React.js, ShadCN, Tailwind CSS, Zod, and SSG.",
      "Deployed project: 1stcollege.com/psychometric"
    ]
  }
];

export const CLIENT_PROJECTS = [
  {
    client: "DigitalAccess DA",
    title: "Digital Subscription E-Commerce Platform",
    category: "E-Commerce & SaaS",
    description:
      "A full-stack digital marketplace for the Bangladeshi market offering 100+ premium subscriptions (Netflix, ChatGPT, CapCut, Adobe CC, VPN) in one place. Features bilingual Bengali/English UI, light/dark theme, real-time order tracking, local payment methods (bKash, Nagad, Rocket), live customer support chat, and a curated product catalogue across 10+ categories.",
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js", "PostgreSQL"],
    link: "https://digitalaccessda.com",
    year: "2025",
    highlight: "3,283+ happy customers · 200+ daily orders",
  },
  {
    client: "1stCollege.com",
    title: "Psychometric Career Assessment Platform",
    category: "EdTech Platform",
    description:
      "An online psychometric assessment platform used by 3,000+ students to discover their ideal career paths. Features dynamic test flows, real-time scoring, result PDF generation, and an admin analytics dashboard. Fully SSG-optimised for fast page loads.",
    techStack: ["Next.js", "ShadCN UI", "Tailwind CSS", "Zod", "SSG"],
    link: "https://www.1stcollege.com/psychometric",
    year: "2024",
    highlight: "3,000+ candidates assessed",
  },
  {
    client: "H.K. Exports",
    title: "ERP & Inventory Management System",
    category: "Enterprise Web App",
    description:
      "A full-featured ERP solution built for a garment export company. Includes real-time inventory tracking, order management, supplier ledger, employee records, and automated PDF report generation — cutting manual reporting time by 40%.",
    techStack: ["React.js", "Node.js", "Express", "PostgreSQL", "Tailwind CSS"],
    link: "https://hkexports-demo.vercel.app/",
    year: "2025",
    highlight: "40% reduction in reporting time",
  },
];
