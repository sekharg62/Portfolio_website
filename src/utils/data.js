
import { ImDisplay } from "react-icons/im";
import { BsDatabase } from "react-icons/bs";
import { HiTv } from "react-icons/hi2";
import { VscTools } from "react-icons/vsc";
import { GiSkills } from "react-icons/gi";
export const SKILLS = [
    {
        title: "Frontend",
        Icon:ImDisplay,
        skills: [
            { skill: "HTML5", percentage: "80%" },
            { skill: "CSS3", percentage: "50%" },
            { skill: "JavaScript", percentage: "80%" },
            { skill: "React.js", percentage: "70%" },
        ],
    },

    {
        title: "Backend",
       Icon: BsDatabase,
        skills: [
            { skill: "PHP", percentage: "70%" },
            { skill: "Node.js", percentage: "30%" },
            { skill: "Express.js", percentage: "40%" },
        ],
    },
    {
        title: "Tools",
        Icon: VscTools,
        skills: [
            { skill: "Git & GitHub", percentage: "70%" },
            { skill: "PostMan", percentage: "60%" },
            { skill: "Responsive Design", percentage: "70%" },
        ],
    },
    {
        title: "Database",
        Icon: BsDatabase,
        skills: [
            { skill: "MySQL", percentage: "50%" },
            { skill: "MongoDB", percentage: "28%" },
        ],
    },
    {
        title: "Soft Skills",
        Icon: GiSkills,
        skills: [
            { skill: "Problem Solving", percentage: "50%" },
            { skill: "English-Speaking", percentage: "50%" },
            { skill: "Collaboration", percentage: "80%" },
        ],
    },
    {
        title: "Technical Skills",
        Icon: HiTv,
        skills: [
            { skill: "C/C++", percentage: "80%" },
            { skill: "Java", percentage: "75%" },
            { skill: "Python", percentage: "20%" },
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
        title: "1. E-Commerce",
        date: "February 2024",
        description:  [
            "A responsive e-commerce frontend built using React.",
            "Features a dynamic shopping cart for adding and managing products.",
            "Users can browse a variety of products with ease.",
            
          ],
        button: {
            link: "https://sekharg62.github.io/my-e-commerce"
        },
    },
    {
        title: "2. Social Media",
        date: "April 2024",
        description:[
            "A comprehensive social media platform which is  currently under development.",
            "Built with a modern tech stack including React for the frontend and Node.js/Express for the backend.",
            "Features include user authentication, profile management, and real-time messaging.",
            
          ],
        button: {
            link: "https://github.com/sekharg62/social-media-app"
        },
    }
]