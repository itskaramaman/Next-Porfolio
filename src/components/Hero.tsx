import Link from "next/link";
import { BackgroundBeamsWithCollision } from "./ui/background-beams-with-collision";
import MagicButton from "./ui/magic-button";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import Image from "next/image";

const Hero = () => {
  return (
    <div>
      <BackgroundBeamsWithCollision>
        <div>
          <div className="w-full flex justify-center">
            <Image
              src="/meCircle.png"
              alt="profile-pic"
              width={200}
              height={200}
              className="relative z-20"
            />
          </div>
          <h2 className="text-2xl relative z-20 md:text-4xl lg:text-7xl font-bold text-center text-black dark:text-white font-sans tracking-tight">
            Transforming Ideas into SaaS
            <div className="relative mx-auto w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
              <div className="absolute left-0 top-[1px] bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r py-4 from-purple-500 via-violet-500 to-pink-500 [text-shadow:0_0_rgba(0,0,0,0.1)]">
                <span className="">Hi I&apos;m Karamjeet</span>
              </div>
              <div className="relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 py-4">
                <span className="">Hi I&apos;m Karamjeet</span>
              </div>
            </div>
          </h2>
          <TextGenerateEffect
            words="Full Stack Developer"
            className="text-center"
          />
          <div className="flex justify-center mt-5">
            <MagicButton>
              <Link href={"#projects"}>Show my work</Link>
            </MagicButton>
          </div>
        </div>
      </BackgroundBeamsWithCollision>
    </div>
  );
};

export default Hero;
