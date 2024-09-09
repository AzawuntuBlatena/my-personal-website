import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";
import youtubeHomePage from "../public/imageyt.png";
import appleImg from "../public/apple.png";
import aiLanding from "../public/ail.png";
import authApp from "../public/authApp.jpg";
import libraryImg from "../public/library.png";
import budgetApp from "../public/budgetApp.jpg";
import homeImg from "../public/home.png";
import ecommerceImg from "../public/ecommerce.png";
import videoshare from "../public/videoshare.jpg";
import jobapp2 from "../public/jobapp.png";


export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  // {
  //   name: "Experience",
  //   hash: "#experience",
  // },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Full Stack Developer Intern",
    location: "Addis Ababa, I Tech Company",
    description:
      "I contributed to web app development using React and Node.js, integrating RESTful APIs and collaborating on code reviews. I also gained experience with Git version control.",
    icon: React.createElement(LuGraduationCap),
    date: "2023",
  },
  {
    title: "ICT Intern",
    location: "Woldia, Woldia University",
    description:
      "During my internship at Woldia University's ICT Directorate, I gained hands-on experience in maintaining electronic devices and installing networks. I was able to successfully troubleshoot hardware and software issues, as well as contribute to the repair and utilization of damaged devices.",
    icon: React.createElement(CgWorkAlt),
    date: "2022",
  },
  
] as const;

export const projectsData = [
 
  {
    title: "Video Sharing App",
    description:
      "I developed a feature-rich video-sharing app using React Native, Animatable for smooth animations, and Appwrite for reliable backend support. The app allows users to sign up, log in, browse and search videos, upload media, and manage their profiles. Key features include a dynamic home screen with animated video lists, pull-to-refresh functionality, and intuitive tab navigation. Through this project, I gained expertise in creating engaging user interfaces, handling real-time data, ensuring responsiveness across devices, and integrating backend services effectively. This experience enhanced my skills in UI/UX design, real-time data management, and scalable app architecture.",
    tags: ["ReactNative", "Expo", "Nativewind","Animatable","Appwrite"],
    see: 'https://github.com/AzawuntuBlatena/reactnative-video-share',
    imageUrl: videoshare
  },
  {
    title: "Job Finder App",
    description:
      "I developed a feature-rich job search and application app using React Native, where users can browse, search, and apply for jobs across various categories. Through this project, I gained hands-on experience in creating visually appealing UI/UX using React Native components, integrating third-party APIs to fetch and display job listings, and implementing custom hooks for data fetching. I also learned how to implement search and pagination functionality, manage loading states and errors effectively, and ensure responsive design for optimal user experience across devices. This project solidified my understanding of mobile app development best practices and code reusability.",
    tags: ["Node.js","React Native","Axios","Expo","Stylesheet"],
    see: 'https://github.com/AzawuntuBlatena/react_native_jobs',
    imageUrl: jobapp2,
  },
 
  {
    title: "3D Apple Landing Page",
    description:
      "This is a clone of Apple's iPhone 15 Pro website using React.js and TailwindCSS. It highlights the effective use of GSAP (Greensock Animations) and Three.js for displaying iPhone 15 Pro models in various colors and shapes.",
    tags: ["React", "Threejs", "GSAP",  "R-T-Fiber","R-T-Drei", "Tailwind",],
    see: 'https://apple-website-theta-ten.vercel.app/',
    imageUrl: appleImg,
  },
  {
    title: "AI Landing Page",
    description:
      "Developed the Brainwave website using React.js and Tailwind CSS, showcasing modern UI/UX principles. Implemented engaging parallax animations, intricate UI geometry, and stylish gradients to enhance visual appeal. The project taught me advanced design techniques, responsive layouts, and the application of the latest UI trends.",
    tags: ["React",  "Tailwind",],
    see: 'https://ai-landing-page-three.vercel.app/',
    imageUrl: aiLanding,
  },

  {
    title: "Home Page Clone",
    description:
      "I built a YouTube home page clone using Tailwind CSS, React, and TypeScript. This project allowed me to showcase my skills in modern web technologies while creating a complex UI that mimics the popular video platform. By leveraging the benefits of these tools, I delivered a responsive and user-friendly experience.",
    tags: ["React", "Next.js", "Tailwind"],
    see: 'https://azabla-youtube-homepage.netlify.app/',
    imageUrl: youtubeHomePage,
  },
  {
    title: "MERN Auth",
    description:
      "I built a MERN stack web app with authentication features like sign-up, login, and logout. The front-end uses React and React Router, while the back-end is built with Node.js, Express, and MongoDB, utilizing JWT for access control.",
    tags: ["React", "MongoDB", "Express",  "Node.js",  "Tailwind",],
    see: 'https://fullstack-mern-auth1.onrender.com/',
    imageUrl: authApp,
  },
  {
    title: "Budget App",
    description:
      "I create a CRUD application to build a simple budget app using React. This project covers various intermediate and beginner-level React concepts, which come together to create a complex and practical application.",
    tags: ["React", "MongoDB"],
    see: 'https://azabla-budget-app.netlify.app/?',
    imageUrl: budgetApp,
  }, 
  {
    title: "Ecommerece Landing Page",
    description:
      "Through building and deploying an eCommerce website landing page using ReactJS and Tailwind CSS, I gained hands-on experience in creating responsive navigation bars, scrollable and modern hero pages, custom popup modals, and implementing dark mode features. I also learned to incorporate animations, follow best practices, and enhance debugging skills.",
    tags: ["React", "Tailwindcss"],
    see: 'https://azabla-youtube-homepage.netlify.app/',
    imageUrl: ecommerceImg,
  },
  {
    title: "Book Store",
    description:
      "Built a web application using Node.js, Express, and MongoDB, implementing the MVC architecture. Through this project, I learned how to create and connect a backend to a database, deploy web applications, and style a professional-looking website. This experience gave me a complete understanding of backend development and the ability to build my own web applications.",
    tags: ["MongoDB", "Express",  "Node.js", "ejs"],
    see: 'https://bete-book-1.onrender.com/ ',
    imageUrl: libraryImg,
  },

  {
    title: "Share Managment System",
    description:
      "During my final year of studies, I undertook a comprehensive project to develop a Share Management System for a company. The system was developed using Nextjs for the front end, Nodejs for the backend, and MongoDB for the database. It was designed to digitalize day-to-day operations, including trading shares, managing shareholder information, and keeping track of shareholders and share data.",
    tags: ["React","Nextjs","MongoDB", "Express",  "Node.js", "Tailwindcss"],
    see: 'https://github.com/AzawuntuBlatena/share_management_system.git',
    imageUrl: homeImg ,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Reactnative",
  "Expo",
  "Node.js",
  "Tailwind",
  "Bootstrap",
  "Prisma",
  "MongoDB",
  "Redux",
  "Firebase",
  "Express",
  "Framer Motion",
  "Material UI",
  "Acternity UI",
  "Bootstrap",
  "GSAP",
  "Three.js",
  "React Fiber",
  "MongoDB",
  "Prisma",
  "Firebase",
  "Appwrite",
  "mongosh",
  "Git",
  "GitHub"
  
] as const;
