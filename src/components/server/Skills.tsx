import Link from "next/link";
import Section from "../common/Section";
import SkillsCard from "../common/SkillsCard";
import SubSectionTitle from "../common/SubSectionTitle";
import { ISkills, ISkill } from "@/utils/types/skills.type";

interface Props {
    skills: ISkills[]
}

export default function Skills({ skills }: Props) {
    return (
        <Section id="skills" title="Skills">
            <div className="flex flex-col items-center gap-16">
                {skills && skills.map((skill, index) => (
                    <div key={index} className="w-full h-full">
                        <SubSectionTitle title={skill.groupName} key={index} />
                        <div className="flex mt-10 flex-row flex-wrap justify-center items-center md:justify-between lg:justify-center gap-5 p-[2px]">
                            {skill.skills && skill.skills.map((item, index) => (
                                <>
                                    {skill.clickable ?
                                        (<Link href={`projects/${item.label}`} key={index} className="w-[90%] md:w-[48%] lg:w-[40%] xl:w-[30%] 3xl:w-[23%] relative overflow-hidden p-1 flex items-center justify-center rounded-xl">
                                            <SkillsCard item={item} clickable={skill.clickable} />
                                        </Link>) :
                                        (<div key={index} className="w-[90%] md:w-[48%] lg:w-[40%] xl:w-[30%] 3xl:w-[23%] relative overflow-hidden p-1 flex items-center justify-center rounded-xl">
                                            <SkillsCard item={item} clickable={skill.clickable} />
                                        </div>)}
                                </>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    )
}