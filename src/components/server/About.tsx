import Section from "../common/Section";
import SubSection from "../common/SubSection";
import { ISubSection } from "@/utils/types/sections.type";

interface Props{
    sections: ISubSection[]
}

export default function About({ sections }: Props){
    return(
        <Section id="about " title="About me">
            {sections.map((subSection, index) => (
                <SubSection key={index} profile={subSection.image} title={subSection.title} description={subSection.description} reverse={index % 2 === 1} />
            ))}
        </Section>
    )
}