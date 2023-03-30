import {
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  hera,
  whaletrail,
  cleo,
  codingdojo,
  sxt,
  igb,
  house
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "experience",
    title: "Experience",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Ironglass Byte",
    icon: igb,
    link:"https://ironglassbyte.com"
  },
  {
    title: "Space & Time",
    icon: sxt,
    link:"https://spaceandtime.io"
  },
  {
    title: "Coding Dojo",
    icon: codingdojo,
    link:"https://codingdojo.com",
  }
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  }
];

const experiences = [
  {
    title: "Senior Front End Blockchain Engineer",
    company_name: "Ironglass Byte",
    icon: igb,
    link:"https://ironglassbyte.com",
    iconBg: "#E6DEDD",
    date: "December 2021 - Current",
    points: [
      "Responsible for writing front end code for clients projects with React - including but not limited to: Non-Fungible Token staking games, e-commerce websites, minting D-apps",
      "Writing code for users’ wallet connection to the Ethereum blockchain using Web3.js and Ethers.js",
      "Integrating UI with the back end functionality and smart contracts",
      "Implementing responsive design and ensuring cross-browser compatibility",
      "Participating in code reviews and providing constructive feedback to interns and other developers",
      "Assisting Back End Engineer with building smart contracts using Solidity and Remix",
      "Collaborating with team to test, debug, clean, and optimize the final code before deployment"
    ],
  },
  {
    title: "Front End Engineer",
    company_name: "Space and Time",
    icon: sxt,
    link:"https://spaceandtime.io",
    iconBg: "#E6DEDD",
    date: "June 2022 - October 2022",
    points: [
      "Responsible for building demo applications and Web3 games to showcase as examples in the documentation for developers when Space and Time is fully launched",
      "Collaborated with cross-functional teams including designers, product managers, and other developers to create high-quality products",
      "Contributed to building Space and Time’s blockchain indexing decentralized application with the overseas front end engineering team (Systango) using React, Typescript, and Figma wireframes created by UI designers",
      "Consistently delivered optimized and clean code for projects following trunk-based development workflows on Github while tracking progress using Jira software and daily scrum meeting"
    ],
  },
  {
    title: "Python Teaching Assistant",
    company_name: "Coding Dojo/Amazon Career Choice",
    icon: codingdojo,
    link:"https://codingdojo.com",
    iconBg: "#E6DEDD",
    date: "January 2021 - June 2021",
    points: [
      "Assisted Amazon employees with their coding assignments and career paths towards getting a job in the technical industry",
      "Supported instructors with attendance, homework, exam grading, and lectures",
      "Met with the instruction team and career services daily to plan and analyze student progression",
      "Recorded video tutorials walking through the process of building a full stack web application",
      "Motivated students in the channels everyday through zoom or the chat and making sure no questions get left unanswered"
    ],
  },
  {
    title: "Graduation",
    company_name: "Coding Dojo",
    icon: codingdojo,
    link:"https://codingdojo.com",
    iconBg: "#E6DEDD",
    date: "April 2020 - August 2020",
    points: [
      "Graduated with perfect-score black belts on all 3 full stack exams in Python/Django, C#/.Net, and MERN",
      "Accumulated 1,500+ hours of intensive programming coursework including building, testing, debugging, and deployment",
      "Worked in teams to build projects and complete hackathons"
    ],
  },
  {
    title: "Started Software Development",
    company_name: "",
    icon: house,
    link:"",
    iconBg: "#E6DEDD",
    date: "February 2013",
    points: [
      "Taught myself HTML, CSS, and Javascript in high school after discovering my Tumblr blog theme was customizable with code",
      "Began freelancing and building websites for family and friends"
    ],
  }
];


const projects = [
  {
    name: "Hera.",
    description:
      "Web-based platform for businesses to conveniantly create, customize, and deploy smart contracts on the Ethereum blockchain, eliminating the requirement of coding experience and developers.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "solidity",
        color: "green-text-gradient",
      },
      {
        name: "ethers",
        color: "pink-text-gradient",
      },
    ],
    image: hera,
    source_code_link: "https://github.com/Ironglass-Byte",
    deploy_link: "https://heracontract.com",
  },
  {
    name: "Cleo Canna Club",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "ethers",
        color: "green-text-gradient",
      },
      {
        name: "moralis",
        color: "pink-text-gradient",
      },
    ],
    image: cleo,
    source_code_link: "https://github.com/Ironglass-Byte",
    deploy_link: "http://www.cleocannaclub.com",
  },
  {
    name: "Whale Trail",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "react-force-graph-3d",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: whaletrail,
    source_code_link: "https://github.com/spaceandtimelabs",
    deploy_link: "",
  },
];

export { services, technologies, experiences, projects };
