import Image from "next/image"
import SubSectionTitle from "./SubSectionTitle"

interface Props {
    profile?: string
    title: string
    description: string
    reverse: boolean
}

export default function SubSection({ profile, title, description, reverse }: Props) {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-10 w-full">
            <div className={reverse ? "order-2 lg:order-2" : "order-2 lg:order-1"}>
                <SubSectionTitle title={title} />
                <p className="text-gray-100 text-base lg:text-lg whitespace-break-spaces text-left font-serif">
                    {description}
                </p>
            </div>
            {profile && (
                <div className={`flex items-center justify-center ${reverse ? "order-1 lg:order-1" : "order-1 lg:order-2"}`}>
                    <Image
                        src={profile}
                        priority
                        width={512}
                        height={512}
                        alt="Juan Zuniga"
                        className="rounded-full transition-all w-3/6 duration-1000 grayscale hover:grayscale-0 hover:scale-105 cursor-pointer hover:shadow-2xl hover:shadow-indigo-600"
                    />
                </div>
            )}
        </div>
    )
}