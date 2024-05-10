import Image from "next/image"

interface Props {
    profile?: string
    title: string
    description: string
    reverse: boolean
}

export default function SubSection({ profile, title, description, reverse }: Props) {
    return (
        <div className={`grid grid-cols-1 ${profile && "lg:grid-cols-2"} gap-8 lg:gap-16`}>
            <div className={reverse ? "order-2 lg:order-2" : "order-2 lg:order-1"}>
                <p className="mb-5 text-[#16f2b3] text-2xl lg:text-4xl uppercase animate-character font-bold italic">
                    {title}
                </p>
                <p className="text-gray-100 text-base lg:text-lg whitespace-break-spaces text-left font-serif">
                    {description}
                </p>
            </div>
            {profile && (
                <div className={`flex justify-center ${reverse ? "order-1 lg:order-1" : "order-1 lg:order-2"}`}>
                    <Image
                        src={profile}
                        width={512}
                        height={512}
                        alt="Juan Zuniga"
                        className="rounded-lg transition-all w-2/3 duration-1000 grayscale hover:grayscale-0 hover:scale-105 cursor-pointer"
                    />
                </div>
            )}
        </div>
    )
}