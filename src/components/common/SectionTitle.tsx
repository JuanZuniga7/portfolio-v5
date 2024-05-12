export default function SectionTitle({ name}: { name: string}) {
    return (
        <div className="hidden lg:flex flex-col items-center absolute top-16 -right-20 h-fit p-[2px] rotate-90 overflow-hidden">
            <p className="bg-blue-950 w-52 text-nowrap text-white p-2 px-5 text-xl font-bold rounded-md uppercase flex items-center justify-center">
                <span className="animate-character">
                    {name}  
                </span>
            </p>
            <div className="absolute -z-10 bg-gradient-to-b from-30% from-sky-500 top-60% to-pink-500 top-1/4 animate-box h-2/3" />
        </div>
    )
}