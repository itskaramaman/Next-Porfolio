import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";

type ProjectProps = {
  id: number;
  title: string;
  des: string;
  img: string;
  iconLists: string[];
  live_link: string;
  github_link: string;
};

const ProjectCard = ({
  id,
  title,
  des,
  img,
  iconLists,
  live_link,
  github_link,
}: ProjectProps) => {
  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
        <CardItem translateZ="100" className="w-full">
          <Image
            src={img}
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt={`${title} Karamjeet Singh - Full Stack Developer`}
          />
        </CardItem>
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white mt-4"
        >
          {title}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300 line-clamp-6 relative z-10"
        >
          {des}
        </CardItem>

        {/* tech stack */}
        <CardItem
          translateZ={30}
          className="mt-5 rounded-xl text-xs font-normal dark:text-white flex gap-2"
        >
          {iconLists.map((img, index) => (
            <Image
              key={index}
              src={img}
              alt={`${id}-img`}
              height={30}
              width={30}
            />
          ))}
        </CardItem>

        <div className="flex justify-between items-center mt-20">
          <CardItem
            translateZ={20}
            as={Link}
            href={live_link}
            target="_blank"
            className="p-2 border border-white rounded-xl text-xs font-normal dark:text-white"
          >
            Try now →
          </CardItem>
          <CardItem
            translateZ={20}
            as={Link}
            target="_blank"
            href={github_link}
            className="px-4 py-2 flex items-center gap-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs"
          >
            <FaGithub /> Github
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
};

export default ProjectCard;
