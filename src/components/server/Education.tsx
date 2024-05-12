import Link from "next/link";
import HorizontalItem from "../common/HorizontalItem";
import Section from "../common/Section";
import SubSectionTitle from "../common/SubSectionTitle";
import IEducation, { IInstitution } from "@/utils/types/education.type";

interface Props {
    educationData: IEducation[]
}

export default function Education({ educationData }: Props) {
    return (
        <Section id="education" title="Education">
            <span className="w-full text-base lg:text-lg text-center flex items-center justify-center mb-2">Some certifications in my Linkedin</span>
            <div className="flex flex-col items-center gap-16">
                {educationData && educationData.map((item, index) => (
                    <div key={index} className="w-full h-full">
                        <SubSectionTitle title={item.label} key={index} />
                        <div className="flex flex-col items-center justify-center mt-16">
                            {item.institution && item.institution.map((institution, index) => (
                                <HorizontalItem reverse={index % 2 === 0}>
                                    {institution.certificate ? 
                                    <Link target="_blank" href={institution.certificate}>
                                        {Object.keys(institution).map((key: string, index: number) => {
                                            if (key === "name") return <h3 key={index} className="text-lg md:text-xl lg:text-2xl xl:text-3xl animate-character font-bold font-mono">{institution.name}</h3>
                                            else if (key === "certificate") null
                                            else {
                                                return (
                                                    <p className="px-3 text-sm md:text-lg lg:text-base font-semibold" key={key.concat(index.toString())}>{key}: <span className="text-sky-400 italic">{institution[key as keyof IInstitution]}</span></p>
                                                )
                                            }
                                        })}
                                    </Link> :
                                        <div key={index} className="flex flex-col justify-center font-serif h-full w-full text-left px-4 capitalize">
                                            {Object.keys(institution).map((key: string, index: number) => {
                                                if (key === "name") return <h3 key={index} className="text-lg text-wrap md:text-xl lg:text-2xl xl:text-3xl animate-character font-bold font-mono">{institution.name}</h3>
                                                else if (key === "certificate") null
                                                else {
                                                    return (
                                                        <p className="px-3 text-sm md:text-lg lg:text-base font-semibold text-wrap" key={key.concat(index.toString())}>{key}: <span className="text-sky-400 italic">{institution[key as keyof IInstitution]}</span></p>
                                                    )
                                                }
                                            })}
                                        </div>}
                                </HorizontalItem>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    )
}