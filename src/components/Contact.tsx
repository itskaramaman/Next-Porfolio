import { BackgroundBeams } from "./ui/background-beams";
import MagicButton from "./ui/magic-button";
import { ArrowUpRight, Github, Linkedin, FileText } from "lucide-react";

const Contact = () => {
  const year = new Date().getFullYear();
  return (
    <section
      id="contact"
      className="h-[30rem] sm:h-[40rem] w-full rounded-md bg-neutral-900 relative flex flex-col items-center justify-center antialiased"
    >
      <div className="relative z-10 flex flex-col justify-center items-center gap-5 w-full h-full">
        <h1 className="text-xl px-5 md:text-4xl">
          Elevate your{" "}
          <span className="bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r py-4 from-purple-500 via-violet-500 to-pink-500 [text-shadow:0_0_rgba(0,0,0,0.1)]">
            online presence to new heights.
          </span>
        </h1>
        <div className="relative z-10 flex gap-2 sm:gap-5">
          <MagicButton>
            <a
              href="mailto:singhkaramjeetaman@gmail.com"
              className="text-xs sm:text-base flex items-center cursor-pointer"
            >
              Contact Me Now <ArrowUpRight className="h-4 w-4 sm:h-5 sm:w-5" />
            </a>
          </MagicButton>
          <MagicButton>
            <a
              href="/Karamjeet_Software_Developer_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs sm:text-base flex items-center cursor-pointer"
            >
              Hire Me <FileText className="h-4 w-4 ml-1 sm:h-5 sm:w-5" />
            </a>
          </MagicButton>
        </div>
        <footer className="absolute bottom-0 w-full z-10 flex justify-between items-center px-6 py-4 bg-neutral-800 text-white">
          <div>
            <p className="text-sm sm:text-base">
              Copyright @{year} Karamjeet Singh Jandu{" "}
            </p>
          </div>
          <div className="flex items-center gap-5">
            <a
              href="https://github.com/itskaramaman"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400"
            >
              <Github className="h-4 w-4 sm:h-5 sm:w-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/karamjeet-singh-12101995/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400"
            >
              <Linkedin className="h-4 w-4 sm:h-5 sm:w-5" />
            </a>
          </div>
        </footer>
      </div>
      <BackgroundBeams />
    </section>
  );
};

export default Contact;
