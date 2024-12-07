export const navItems = [
  { name: "Projects", link: "#projects" },
  { name: "Contact", link: "#contact" },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/karamjeet-singh-12101995/",
    blank: true,
  },
  {
    name: "Resume",
    link: "/Karamjeet_Software_Developer_Resume.pdf",
    blank: true,
  },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 md:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building a JS Animation library",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projectItems = [
  {
    id: 1,
    title: "Property Rhythm",
    des: `Property Rhythm is a modern property management platform built with Next.js, TypeScript, Tailwind CSS, NextAuth.js, MongoDB, and other cutting-edge technologies. It empowers users to effortlessly discover rental properties, upload listings, save favorites, and engage
          directly with property managers.`,
    img: "/propertyRhythm.png",
    iconLists: [
      "/next.svg",
      "/tail.svg",
      "/ts.svg",
      "/mongodb.svg",
      "/nodejs.svg",
    ],
    live_link: "https://property-rhythm.vercel.app/",
    github_link: "https://github.com/itskaramaman/Property-Rhythm",
  },
  {
    id: 2,
    title: "Sleek UI Weather App",
    des: `A modern weather application developed using ReactJS, TypeScript, TanStack Query, Tailwind CSS, Shadcn, and Recharts.
          The app provides real-time weather updates, a 12-hour forecast, and a 5-day outlook. Users can search for cities, 
          mark them as favorites, and enjoy a fully responsive design. Built with industry-level coding practices and deployed on Netlify for seamless accessibility.`,
    img: "/weatherApp.png",
    iconLists: [
      "/next.svg",
      "/tail.svg",
      "/ts.svg",
      "/tanstackReactQuery.svg",
      "/nodejs.svg",
    ],
    live_link: "https://weather-app-karam.netlify.app/",
    github_link: "https://github.com/itskaramaman/tanstack-shad-weather-app",
  },
  {
    id: 3,
    title: "Youtube clone",
    des: `A fully functional YouTube-inspired application built with ReactJS and Tailwind CSS. 
          It features responsive video cards with hover effects, seamless iframe integration for video playback, 
          and a clean, intuitive user interface. This project highlights advanced frontend development practices 
          and a commitment to delivering user-friendly, visually appealing experiences.`,
    img: "/youtube.png",
    iconLists: ["/re.svg", "/tail.svg", "/nodejs.svg"],
    live_link: "https://youtube-identical-twin.netlify.app/",
    github_link: "https://github.com/itskaramaman/youtube-clone",
  },
  {
    id: 4,
    title: "Movie World",
    des: `A dynamic and engaging movie browsing platform built with ReactJS, React Router, and Axios. 
          The app allows users to explore a vast library of movies with features like infinite scrolling 
          for seamless navigation and lazy loading for optimized performance. It includes a user-friendly 
          interface enhanced by React Icons and offers a responsive design for an exceptional experience 
          across all devices. Deployed on Netlify, this project demonstrates modern frontend development 
          practices and ensures fast and reliable access for users.

`,
    img: "/movieWorld.png",
    iconLists: ["/re.svg", "/tail.svg", "/nodejs.svg"],
    live_link: "https://karamjeet-movies-world.netlify.app/",
    github_link: "https://github.com/itskaramaman/React-Movies",
  },
];
