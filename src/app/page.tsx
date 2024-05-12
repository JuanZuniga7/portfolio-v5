import { personalData } from "@/utils/data/personalData";
import { about } from "@/utils/data/about";
import { experience } from "@/utils/data/experience";
import Presentation from "@/components/server/Presentation";
import CodePresentation from "@/components/server/CodePresentation";
import About from "@/components/server/About";
import Experience from "@/components/server/Experience";
import Skills from "@/components/server/Skills";
import { skills } from "@/utils/data/skills";
import Education from "@/components/server/Education";
import { education } from "@/utils/data/education";

async function HeroSection() {
  return (
    <section className="relative flex flex-col items-center justify-between py-4 lg:py-12 gap-16">
      <div className="grid grid-cols-1 items-start lg:grid-cols-2 lg:gap-12 gap-y-8">
        <Presentation name={personalData.name} profile={personalData.profile} />
        <CodePresentation />
      </div>
      <div className="flex flex-col items-center justify-center w-full"> 
        <About sections={about.subSections} />
        <Education educationData={education} />
        <Experience experienceData={experience} />
        <Skills skills={skills} />
      </div>
    </section>
  );
}

export default HeroSection;
