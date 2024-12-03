import ProjectCard from "./ProjectCard";
import { projectItems } from "@/data/about";

const Projects = () => {
  return (
    <section id="projects" className="w-full bg-neutral-950">
      <h1 className="text-center pt-10 text-xl md:text-3xl">
        Here&apos;s a glimpse into my latest creations—
        <span className="bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r py-4 from-purple-500 via-violet-500 to-pink-500 [text-shadow:0_0_rgba(0,0,0,0.1)]">
          where code meets creativity!
        </span>
      </h1>

      <div className="flex flex-wrap gap-20 justify-center">
        {projectItems.map((project) => (
          <ProjectCard
            key={project.id}
            img={project.img}
            id={project.id}
            title={project.title}
            des={project.des}
            live_link={project.live_link}
            iconLists={project.iconLists}
            github_link={project.github_link}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
