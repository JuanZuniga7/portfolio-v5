import SectionTitle from "./SectionTitle";
import SubSection from "./SubSection";
import ISection from "@/utils/types/sections.type";

interface Props{
    section: ISection
}

export default function Section({ section }: Props) {
    return (
        <div id="about" className="my-12 lg:my-16 relative">
            <SectionTitle name="About" reverse={section.reverse} />
            {section.subSections.map((subSection, index) => (
                <SubSection profile={subSection.image} title={subSection.title} description={subSection.description} reverse={index % 2 === 1} />
            ))}
        </div>
    )
}