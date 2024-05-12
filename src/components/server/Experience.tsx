import HorizontalItem from "../common/HorizontalItem";
import Section from "../common/Section";
import SubSectionTitle from "../common/SubSectionTitle";
import IExperience from "@/utils/types/experience.type";

interface Props {
    experienceData: IExperience[]
}

export default function Experience({ experienceData }: Props) {
    return (
        <Section title="Experience">
            <SubSectionTitle title="Work Experience" />
            <div className="flex flex-col items-center justify-center mt-16">
                {experienceData && experienceData.map((item, index) => (
                    <HorizontalItem reverse={index % 2 === 0}>
                        <div className="flex flex-col justify-center font-serif h-full w-full text-left px-4 capitalize">
                            {Object.keys(item).map((key: string, index: number) => {
                                if (key === "position") return <h3 key={index} className="text-lg md:text-xl lg:text-2xl xl:text-3xl animate-character font-bold font-mono">{item.position}</h3>
                                else {
                                    return (
                                        <p className="px-3 text-sm md:text-lg lg:text-base font-semibold" key={key.concat(index.toString())}>{key}: <span className="text-sky-400 italic">{item[key as keyof IExperience]}</span></p>
                                    )
                                }
                            })}
                        </div>
                    </HorizontalItem>
                ))}
            </div>
        </Section>
    )
}