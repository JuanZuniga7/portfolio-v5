import Image from "next/image"
import icon1 from "@/assets/svg/icon1.svg"
import icon2 from "@/assets/svg/icon2.svg"

export default function HorizontalItem({children, reverse}: {children: React.ReactNode, reverse?: boolean}){
    return(
        <div className="flex flex-row h-56 items-center justify-center gap-10">
            <div className={`absolute flex flex-col items-center justify-center ${reverse ? "md:right-0 lg:right-16 xl:right-32":"md:left-0 lg:left-16 xl:left-32"} w-80 h-36 sm:w-96 sm:h-40 md:h-48 lg:h-52 transition-all text-xs md:text-sm lg:text-base border-2 border-indigo-800 bg-blue-950 hover:bg-blue-900 cursor-pointer rounded-3xl p-1`}>
                {children}
            </div>
            <span className="w-[2px] h-56 bg-indigo-400 text-transparent -z-10 absolute">a</span>
            <div className="hidden xl:flex">
                {reverse ? 
                (<Image src={icon1} alt="icon1" width={50} height={50} />) : (<Image src={icon2} alt="icon2" width={50} height={50} />)}
            </div>
        </div>
    )
}