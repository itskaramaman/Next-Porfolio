import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import ProfessionalTimeline from "@/components/ProfessionalTimeline";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center flex-col items-center overflow-hidden">
      <div className="w-full scroll-smooth">
        <Navbar />
        <Hero />
        <Projects />
        <ProfessionalTimeline />
        <Contact />
      </div>
    </main>
  );
}
