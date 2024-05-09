import { personalData } from "@/utils/data/personalData";
import Image from "next/image";
import svgHero from "../../public/svg/hero.svg";
import Presentation from "@/components/server/Presentation";
import CodePresentation from "@/components/server/CodePresentation";

async function HeroSection() {
  return (
    <section className="relative flex flex-col items-center justify-between py-4 lg:py-12">
      <Image
        src={svgHero.src}
        alt="Hero"
        width={1572}
        height={795}
        className="absolute -top-[98px] -z-10"
      />
      <div className="grid grid-cols-1 items-start lg:grid-cols-2 lg:gap-12 gap-y-8">
        <Presentation name={personalData.name} profile={personalData.profile} />
        <CodePresentation />
      </div>
    </section>
  );
}

export default HeroSection;
