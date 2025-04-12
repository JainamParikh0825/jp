import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaMedium } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";

export const socials = [
  {
    name: "GitHub",
    icon: FaGithub,
    url: "https://github.com/JainamParikh0825",
  },
  {
    name: "LinkedIn",
    icon: FaLinkedin,
    url: "https://www.linkedin.com/in/jainam-parikh/",
  },
  {
    name: "Medium",
    icon: FaMedium,
    url: "https://medium.com/@jainamparikh0825",
  },
  {
    name: "X (previously Twitter)",
    icon: RiTwitterXFill,
    url: "https://x.com/JainamAParikh",
  },
];

export const projects = {
  top: [
    {
      id: 1,
      name: "Y - A Social Media Platform",
      description:
        "A social media platform to share your posts, follow people, see what your followers and other people are doing!",
      githubUrl:
        "https://github.com/JainamParikh0825/Y---A-Social-Media-Platform",
      liveUrl: "https://y-a-social-media-platform.onrender.com/",
      technologies: [
        "React",
        "Node.js",
        "Express",
        "MongoDB",
        "Tanstack Query",
        "Tailwind CSS",
      ],
    },
    {
      id: 2,
      name: "MooWee",
      description:
        "A movie finder with rich UI which lets you search for a movie and an algorithm designed in a way where the most searched movies by different users categorised under the most popular searches!",
      githubUrl: "https://github.com/JainamParikh0825/MooWee",
      liveUrl: "https://moo-wee.vercel.app/",
      technologies: ["React", "Tailwind CSS", "Appwrite", "TMDB API"],
    },
    {
      id: 3,
      name: "Countyyy",
      description: "Analyze your text in real-time.",
      githubUrl: "https://github.com/JainamParikh0825/countyyy",
      liveUrl: "https://countyyy-analyzer-jp.netlify.app/",
      technologies: ["HTML", "CSS", "JavaScript", "React"],
    },
    {
      id: 4,
      name: "No-oats",
      description: "A Note taking app with Local Storage to persist the notes.",
      githubUrl: "https://github.com/JainamParikh0825/no-oats",
      liveUrl: "https://jainamparikh0825.github.io/no-oats/",
      technologies: ["HTML", "CSS", "JavaScript", "Local Storage"],
    },
    {
      id: 5,
      name: "Browser Extensions Manager",
      description:
        "A chrome like browser extensions manager with rich UI and localstorage implementations.",
      githubUrl:
        "https://github.com/JainamParikh0825/browser-extensions-manager",
      liveUrl: "https://browser-extensions-manager-jp.netlify.app/",
      technologies: ["HTML", "CSS", "JavaScript", "React"],
    },
  ],
  others: [
    {
      id: 6,
      name: "Regilog",
      description:
        "A Console based Registration-Login System developed using C++, where user can register, login and logout themselves with interactive messages.",
      githubUrl: "https://github.com/JainamParikh0825/regi-log",
      liveUrl: null,
      technologies: ["C++", "Console", "OOPs"],
    },
    {
      id: 7,
      name: "Kai-bored",
      description:
        "A Keyboard Logger which gives you information of which key is pressed and also a history of last 3 keys.",
      githubUrl: "https://github.com/JainamParikh0825/kai-bored",
      liveUrl: "https://jainamparikh0825.github.io/kai-bored/",
      technologies: ["HTML", "CSS", "JavaScript"],
    },
    {
      id: 8,
      name: "A Clock",
      description: "A Vanilla JavaScript based Digital Clock.",
      githubUrl: "https://github.com/JainamParikh0825/a-clock",
      liveUrl: "https://jainamparikh0825.github.io/a-clock/",
      technologies: ["HTML", "CSS", "JavaScript"],
    },
    {
      id: 9,
      name: "New Year Countdown",
      description: "A Countdown Timer to a New Year.",
      githubUrl: "https://github.com/JainamParikh0825/a-countdown-timer",
      liveUrl: "https://a-countdown-timer.vercel.app/",
      technologies: ["HTML", "CSS", "JavaScript"],
    },
  ],
};
