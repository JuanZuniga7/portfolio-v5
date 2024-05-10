export default function SectionTitle({ name, reverse }: { name: string, reverse: boolean }) {
    return (
        <div className={`hidden lg:flex flex-col items-center absolute top-16 ${reverse ? "-left-8" : "-right-8"} h-full`}>
            <span className="bg-[#1a1443] w-fit text-white rotate-90 p-2 px-5 text-xl font-bold rounded-md uppercase">
                {name}
            </span>
            <span className="h-full w-[3px] bg-[#1a1443]"></span>
        </div>
    )
}