
import { ImDisplay } from "react-icons/im";
import { BsDatabase } from "react-icons/bs";
import { HiTv } from "react-icons/hi2";
import { VscTools } from "react-icons/vsc";
import { GiSkills } from "react-icons/gi";
export const SKILLS = [
  {
    title: "Frontend Development",
    Icon: ImDisplay,
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
    Icon: BsDatabase,
    skills: [
      { skill: "Node.js", percentage: "70%" },
      { skill: "Express.js", percentage: "60%" },
      { skill: "PostgreSQL", percentage: "60%" },
      { skill: "MongoDB", percentage: "50%" },
      { skill: "MySQL", percentage: "50%" },
      { skill: "Supabase (Realtime Database)", percentage: "40%" },
    ],
  },

  {
    title: "Cloud & Tools",
    Icon: VscTools,
    skills: [
      { skill: "AWS (Basic)", percentage: "50%" },
      { skill: "Git & GitHub", percentage: "70%" },
      { skill: "Postman (API Testing)", percentage: "65%" },
      { skill: "Docker (Containerization)", percentage: "40%" },
    ],
  },

  {
    title: "Programming Languages",
    Icon: HiTv,
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
    Icon: GiSkills,
    skills: [
      { skill: "Problem Solving", percentage: "60%" },
      { skill: "Time Management", percentage: "65%" },
      { skill: "Interpersonal Communication", percentage: "60%" },
      { skill: "Adaptability", percentage: "70%" },
    ],
  },

  {
    title: "Professional Skills",
    Icon: GiSkills,
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
        title: "1. Racing Moto",
        date: "January 2024",
        description: ["Basically this game is for child",
        "Make this game using HTML5 , CSS & JS",
    "Score features also added"],
        button: {
           
            link: "https://sekharg62.github.io/car-game-github.io/"
        },
    },
    {
        title: "2. E-Commerce",
        date: "February 2024",
        description:  [
            "A responsive e-commerce frontend built using React.",
            "Features a dynamic shopping cart for adding and managing products.",
            "Users can browse a variety of products with ease.",
            
          ],
        button: {
            link: "https://my-e-commerce-seven.vercel.app/"
        },
    },
    {
        title: "3. Social Media",
        date: "August 2024",
        description:[
            "A comprehensive social media platform which is  currently under development.",
            "Currently it is only post page for mobile screen",
            "Built with a modern tech stack including NEXT for the frontend ",
            "Features will include user authentication, profile management, and real-time messaging.",
            
          ],
        button: {
            link: "https://third-zone-ym8u.vercel.app/"
        },
    },
    {
        title: "4. Blog-site",
        date: "August 2024",
        description:[
            "A comprehensive blog platform which is  currently under development.",
            "Making using NEXT.js,MONGODB,EXPRESS and NODE.js",
            "Authentication using google,github and mannual features available,",
            "Fully responsive this project and dark and light theme available.",
            
          ],
        button: {
            link: "https://next-blog-ruby-three.vercel.app/"
        },
    },
    {
        title: "5. 3D-Porfolio",
        date: "July 2024",
        description:[
            "A comprehensive 3D-Porfolio platform .",
            "Making using NEXT.js",
            "Use here three.js and map.js,",
            
            
          ],
        button: {
            link: "https://portfolio-sekhar-ghoshs-projects.vercel.app/"
        },
    }
]
export const EXPERIENCE = [
  {
    "company": "Statmagic Sports LLP",
    "position": "Software Engineer Intern",
    "duration": "Aug 2025 - Present",
    "location": "Onsite – Bangalore, India",
    "responsibilities": [
      "Launched Player Nation, a football player statistics platform delivering real-time data to 500+ users daily with 40% faster load times by optimizing API queries and caching in NestJS.",
      "Built cross-platform features with React (web) and React Native (mobile), increasing mobile adoption by 30% in the first month."
    ]
  },
  {
    "company": "Infomaticae Technologies Pvt. Ltd.",
    "position": "Software Developer Intern",
    "duration": "May 2025 - Jul 2025",
    "location": "Remote – West Bengal, India",
    "responsibilities": [
      "Architected and deployed a scalable ERP solution using React.js for H.K. Exports, reducing manual reporting time by 40%."
    ]
  },
  {
    "company": "Meliodus Software Solutions Pvt. Ltd.",
    "position": "Junior Software Developer",
    "duration": "Oct 2024 - Apr 2025",
    "location": "Remote – West Bengal, India",
    "responsibilities": [
      "Contributed to the development of a psychometric testing platform used by 3,000+ candidates.",
      "Tech Stack: React.js, ShadCN, Tailwind CSS, Zod, and SSG.",
      "Deployed project: 1stcollege.com/psychometric"
    ]
  }
]
