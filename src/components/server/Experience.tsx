import HorizontalItem from "../common/HorizontalItem";
import Section from "../common/Section";
import SubSectionTitle from "../common/SubSectionTitle";

export default function Experience(){
    return(
        <Section title="Experience">
            <SubSectionTitle title="Work Experience" />
            <div className="flex flex-col items-center justify-center mt-16">
                <HorizontalItem reverse />
                <HorizontalItem />
                <HorizontalItem reverse />
            </div>
        </Section>
    )
}