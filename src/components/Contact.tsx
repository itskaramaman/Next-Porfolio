import { BackgroundBeams } from "./ui/background-beams";
import MagicButton from "./ui/magic-button";
import { ArrowUpRight, Github, Linkedin } from "lucide-react";

const Contact = () => {
  const year = new Date().getFullYear();
  return (
    <section
      id="contact"
      className="h-[40rem] w-full rounded-md bg-neutral-900 relative flex flex-col items-center justify-center antialiased"
    >
      <div className="relative z-10 flex flex-col justify-center items-center gap-5 w-full h-full">
        <h1 className="text-4xl">
          Elevate your online presence to new heights.
        </h1>
        <MagicButton className="relative z-10">
          <a
            href="mailto:singhkaramjeetaman@gmail.com"
            className="flex items-center cursor-pointer"
          >
            Contact Me Now <ArrowUpRight />
          </a>
        </MagicButton>
        <footer className="absolute bottom-0 w-full z-10 flex justify-between items-center px-6 py-4 bg-neutral-800 text-white">
          <div>
            <p className="">Copyright @{year} Karamjeet Singh Jandu </p>
          </div>
          <div className="flex items-center gap-5">
            <a
              href="https://github.com/itskaramaman"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/karamjeet-singh-12101995/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </footer>
      </div>
      <BackgroundBeams />
    </section>
  );
};

export default Contact;
