import { Timeline, TimelineEntry } from "@/components/ui/timeline";

const ProfessionalTimeline = () => {
  const data: TimelineEntry[] = [
    {
      title: "2014 to 2018",
      content: (
        <div className="space-y-6 p-6 dark:bg-neutral-950 rounded-lg shadow-lg">
          <h1 className="text-3xl font-semibold text-white">
            Bachelor’s in Computer Science and Information Systems
          </h1>
          <p className="text-lg text-gray-300">
            Gained expertise in foundational subjects, including:
          </p>
          <ul className="list-disc pl-5 text-gray-300 space-y-2">
            <li>Data Structures and Algorithms</li>
            <li>Database Management Systems</li>
            <li>Web Development (HTML, CSS, JavaScript)</li>
            <li>Software Engineering Principles</li>
            <li>Computer Networks and Security</li>
          </ul>
          <p className="text-sm text-gray-400">
            This foundation in computer science has helped me develop a strong
            understanding of programming, algorithms, and web development, which
            continues to support my growth as a developer.
          </p>
        </div>
      ),
    },
    {
      title: "2019 to 2021",
      content: (
        <div className="space-y-6 p-6 dark:bg-neutral-950 rounded-lg shadow-md">
          <h1 className="text-2xl font-bold text-white">
            Full Stack Developer at Regalix, India
          </h1>
          <ul className="list-disc pl-5 text-gray-300 space-y-4">
            <li>
              <span className="font-medium text-white">Engineered:</span> APIs
              in Flask, reducing response times by{" "}
              <span className="text-teal-400">20%</span>.
            </li>
            <li>
              <span className="font-medium text-white">Integrated:</span>
              backend and frontend components to enhance data flow and reduce
              bugs by
              <span className="text-teal-400"> 25%</span>.
            </li>
            <li>
              <span className="font-medium text-white">Developed:</span>
              PostgreSQL table migrations using SQLAlchemy, increasing database
              reliability by
              <span className="text-teal-400"> 30%</span>.
            </li>
            <li>
              <span className="font-medium text-white">Implemented:</span>
              frontend features in React and TypeScript, boosting user
              satisfaction by
              <span className="text-teal-400"> 15%</span>.
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: "2021 to 2022",
      content: (
        <div className="space-y-6 p-6 dark:bg-neutral-950 rounded-lg shadow-lg">
          <h1 className="text-3xl font-semibold text-white">
            Teaching Assistant at Douglas College
          </h1>
          <ul className="list-disc pl-5 text-gray-300 space-y-3">
            <li>
              <span className="font-medium text-white">Improved:</span> student
              comprehension in C# and JavaScript through tailored explanations
              and hands-on coding exercises, driving a{" "}
              <span className="text-teal-400">20% increase </span>
              in participation and engagement.
            </li>
            <li>
              <span className="font-medium text-white">Optimized:</span>{" "}
              software installation and troubleshooting for Computer Networking
              coursework, cutting setup delays by{" "}
              <span className="text-teal-400">30%</span>.
            </li>
            <li>
              <span className="font-medium text-white">Enhanced:</span> project
              quality by advising on best practices, contributing to a
              <span className="text-teal-400"> 25% improvement </span> in
              grades.
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: "2022 to 2024",
      content: (
        <div className="space-y-6 p-6 dark:bg-neutral-950 rounded-lg shadow-md">
          <h1 className="text-2xl font-bold text-white">
            Professional Experience
          </h1>
          <ul className="list-disc pl-5 text-gray-300 space-y-4">
            <li>
              <span className="font-medium text-white">Conducted:</span> regular
              building patrols as Paladin Security officer, identifying
              potential risks, and achieved a{" "}
              <span className="text-white">20% reduction</span> in safety
              incidents.
            </li>
            <li>
              <span className="font-medium text-white">Managed:</span> tenant
              and guest communications, improving card management and credential
              activation processes, boosting customer satisfaction by
              <span className="text-white">15%</span>.
            </li>
            <li>
              <span className="font-medium text-white">Streamlined:</span>{" "}
              access processes and optimized workflows, enhancing operational
              efficiency by
              <span className="text-white">25%</span>.
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: "2024",
      content: (
        <div className="space-y-6 p-6 dark:bg-neutral-950 rounded-lg shadow-md">
          <h1 className="text-2xl font-bold text-white">
            Technical Projects and Learning Journey
          </h1>
          <ul className="list-disc pl-5 text-gray-300 space-y-4">
            <li>
              <span className="font-medium text-white">Created:</span> a
              property rental platform,{" "}
              <span className="text-white">Property Rhythm,</span>
              using{" "}
              <span className="text-white">Next.js, ReactJS, TypeScript,</span>
              and <span className="text-white">PostgreSQL.</span> Features
              include user authentication, listing creation, and interactive
              search filters.
            </li>
            <li>
              <span className="font-medium text-white">Built:</span> a
              responsive video-sharing platform,{" "}
              <span className="text-white">YouTube Clone,</span>
              using <span className="text-white">
                ReactJS, TailwindCSS,
              </span>{" "}
              and
              <span className="text-white">Firebase,</span> enabling seamless
              video search, viewing, and management.
            </li>
            <li>
              <span className="font-medium text-white">Developed:</span> an
              interactive recipe application,{" "}
              <span className="text-white">Recipe App,</span>
              with <span className="text-white">ReactJS</span> and
              <span className="text-white">Redux Toolkit.</span> Users can
              explore, save, and filter recipes easily.
            </li>
            <li>
              <span className="font-medium text-white">Earned:</span>{" "}
              certifications in <span className="text-white">SQL</span> and
              deepened expertise in
              <span className="text-white">ReactJS, NextJS,</span> and
              <span className="text-white">ExpressJS.</span>
            </li>
          </ul>
        </div>
      ),
    },
  ];

  return (
    <div className="w-full">
      <Timeline data={data} />
    </div>
  );
};

export default ProfessionalTimeline;
