import { images } from "../../constants";

export const portfolioItems = [
  {
    id: 1,
    title: "MTN MyApp (MTN Ghana) - MTN Pulse",
    slug: "mtn-pulse",
    imgUrl: `${images.MTNPulse}`,
    role: "Frontend Developer",
    date: "August - 2024",
    description:
      "As a frontend developer at Dexwin Ltd, I worked on the MTN Pulse web app, embedded as a micro-app within MTN MyApp. This app serves millions of MTN Ghana customers, providing them seamless access to purchase airtime, recharge bundles, and access news content. I was responsible for enhancing the app’s user experience, improving performance under high traffic, and ensuring a responsive interface. I collaborated with cross-functional teams to deliver a streamlined and scalable solution.",
    technologies: ["React", "Node.js", "CSS", "Material-UI"],
    challenges: [
      "Situation: The MTN Pulse app experienced frequent delays and slow load times during peak usage hours, affecting customer satisfaction.",
      "Task: Improve the app’s performance and optimize its responsiveness.",
      "Action: Implemented code-splitting and lazy-loading techniques to reduce initial load time. Refactored components for efficiency and collaborated with the backend team to ensure smooth data fetching.",
      "Result: Load times were reduced by 25%, and overall user engagement increased by 15%. The app now scales well under high traffic volumes without compromising on performance.",
    ],
    keyAchievements: [
      "Reduced load times by 25% through code-splitting and lazy-loading techniques.",
      "Enhanced overall user engagement by 15% with improved performance and responsiveness.",
      "Collaborated with cross-functional teams to ensure a streamlined and scalable solution.",
    ],
    link: "https://apps.apple.com/us/app/my-mtn-ghana/id1466214871?platform=iphone",
    images: [
      `${images.MTNPulse1}`,
      `${images.MTNPulse2}`,
      `${images.MTNPulse}`,
    ],
  },
  {
    id: 2,
    title: "Hygieiora",
    slug: "hygieiora",
    imgUrl: `${images.Hygy}`,
    role: "Frontend Developer",
    date: "April - 2024",
    description:
      "Hygieiora is a healthcare app providing patients access to medical records and healthcare services. I enhanced the user interface and ensured the app was user-friendly and fully responsive.",
    technologies: ["React", "Material-UI", "Tailwind CSS"],
    challenges: [
      "Situation: The app's interface was cluttered and difficult to navigate for non-technical users, particularly elderly patients.",
      "Task: Redesign the UI to improve accessibility and simplify navigation without losing functionality.",
      "Action: Conducted user experience research and implemented responsive layouts using Material-UI and Tailwind CSS. Introduced a cleaner design with larger buttons and clearer navigation cues.",
      "Result: User satisfaction increased by 20%, and app usage by elderly users grew by 30%. The app now has a more intuitive interface and is easier to navigate across devices.",
    ],
    keyAchievements: [
      "Increased user satisfaction by 20% with a redesigned, more accessible UI.",
      "Improved app usage by elderly users by 30% with a simpler, more intuitive interface.",
      "Enhanced navigation and responsiveness using Material-UI and Tailwind CSS.",
    ],
    link: "https://hygieioraapp.com/",
    images: [`${images.Hygy1}`, `${images.Hygy2}`, `${images.Hygy3}`],
  },
  {
    id: 3,
    title: "Autosurveil GPS",
    slug: "autosurveil-gps",
    imgUrl: `${images.Autosurveil}`,
    role: "Frontend Developer",
    date: "June - 2024",
    description:
      "Autosurveil is a GPS tracking app that allows users to monitor their vehicles in real-time. My work involved creating a responsive frontend that allows seamless tracking across mobile and desktop devices.",
    technologies: ["NextJS", "Joy-UI", "TypeScript"],
    challenges: [
      "Situation: Real-time data feed caused significant UI delays, particularly on mobile devices.",
      "Task: Optimize real-time data handling to ensure a smooth user experience across all devices.",
      "Action: Updated authentication pages and implemented state management for UI updates and notifications, keeping vendors and customers informed with Joy-UI and Tailwind CSS. Redesigned and enhanced the dashboard with new features to improve user experience. Maintained and refactored the codebase, fixed bugs, and prepared for backend API integration",
      "Result: Improved app performance significantly, with mobile responsiveness increasing by 40% and receiving positive user feedback.",
    ],
    keyAchievements: [
      "Improved mobile responsiveness by 40% through optimized real-time data handling.",
      "Enhanced overall performance with efficient data-fetching logic and responsive layout using Bootstrap.",
      "Received positive feedback for improved UI performance and usability.",
    ],
    link: "https://dev.autosurveil.com/",
    images: [
      `${images.Autosurveil2}`,
      `${images.Autosurveil3}`,
      //   `${images.Autosurveil4}`,
      //   `${images.Autosurveil5}`,
    ],
  },
  {
    id: 5,
    title: "Jadaad Technologies",
    slug: "jadaad-technologies",
    imgUrl: `${images.Jadaad}`,
    role: "Full-Stack Developer - Software Team",
    date: "May - 2024",
    description:
      "Jadaad Technologies provides solutions for online learning. I was responsible for developing the frontend of their learning management system, focusing on improving navigation and responsiveness.",
    technologies: ["React", "Node.js", "CSS", "Material-UI"],
    challenges: [
      "Situation: The learning management system had a confusing user interface and lacked responsive design.",
      "Task: Redesign the frontend to improve usability for both students and instructors and ensure responsiveness across all devices.",
      "Action: Implemented a responsive design using React and Material-UI, reorganized navigation, and improved user experience with cleaner layouts and intuitive functionality.",
      "Result: Increased user engagement by 40% and decreased support tickets for navigation issues by 60%. The platform is now more accessible and user-friendly on all devices.",
    ],
    keyAchievements: [
      "Increased user engagement by 40% with improved navigation and responsive design.",
      "Reduced support tickets for navigation issues by 60% through a more intuitive interface.",
      "Enhanced overall user experience with a cleaner layout and improved functionality.",
    ],
    link: "https://jadaadtechnologies.com/",
    images: [`${images.Jadaad2}`, `${images.Jadaad3}`, `${images.Jadaad4}`],
  },
  {
    id: 7,
    title: "GCTU's Official Website Enhancements",
    slug: "gctu-website-enhancements",
    imgUrl: `${images.GCTUQuickLinks}`,
    role: "Software Engineering Intern",
    date: "Sep 2023 - Dec 2024",
    description:
      "During my internship at Ghana Communication Technology University, I worked on several key projects to enhance the university's website. I developed a Quick Links UI that pops up when the site mounts, improving user access to important resources. Additionally, I developed an Excel to SQL file conversion system and integrated live social media feeds on the university's website.",
    technologies: ["PHP", "MySQL", "MongoDB", "HTML/CSS", "Node.js", "UI Kit"],
    challenges: [
      "Situation: The university needed an efficient way to manage large volumes of student records and to improve website user experience.",
      "Task: Develop a conversion system for Excel to SQL data and create a dynamic Quick Links UI for the website.",
      "Action: Used PHP and MySQL for the conversion system, and UIkit and Bootstrap 3 for the Quick Links UI, which includes a pop-up feature on site load.",
      "Result: Streamlined data management by processing over 5000 records in seconds. Enhanced navigation and engagement on the website with the Quick Links UI.",
    ],
    keyAchievements: [
      "Developed an Excel to SQL conversion system, processing over 5000 records in seconds.",
      "Created a Quick Links UI with a pop-up feature on site load, improving access to key resources.",
      "Integrated live social media feeds, enhancing interaction with the university's online community.",
      "Designed a responsive Quick Links component using UIkit and Bootstrap 3, applying modern UI/UX design principles.",
    ],
    link: "https://site.gctu.edu.gh/",
    images: [`${images.GCTUFeed}`, `${images.GCTUSQLDump}`],
  },
];
