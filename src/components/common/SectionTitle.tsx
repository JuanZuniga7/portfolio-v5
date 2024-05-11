export default function SectionTitle({ name}: { name: string}) {
    return (
        <div className="hidden lg:flex flex-col items-center absolute top-16 -right-20 h-full">
            <span className="bg-[#1a1443] w-52 text-nowrap text-white rotate-90 p-2 px-5 text-xl font-bold rounded-md uppercase flex items-center justify-center">
                {name}
            </span>
            <span className="h-full w-[4px] bg-[#1a1443]"></span>
        </div>
    )
}