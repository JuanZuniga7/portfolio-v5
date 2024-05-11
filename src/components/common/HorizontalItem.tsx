import Image from "next/image"
import icon1 from "@/assets/svg/icon1.svg"
import icon2 from "@/assets/svg/icon2.svg"


export default function HorizontalItem({reverse}: {reverse?: boolean}){
    return(
        <div className="flex flex-row h-56 items-center justify-center gap-10">
            <div className={`absolute ${reverse ? "lg:right-32":"lg:left-32"} w-80 h-36 sm:w-96 sm:h-40 lg:h-52 xl:h-64 text-xs md:text-sm lg:text-base border-2 border-indigo-800 bg-indigo-950 hover:bg-indigo-900 cursor-pointer rounded-3xl`}>

            </div>
            <span className="w-[2px] h-56 bg-indigo-400 text-transparent -z-10 absolute">a</span>
            <div className="hidden xl:flex">
                {reverse ? 
                (<Image src={icon1} alt="icon1" width={50} height={50} />) : (<Image src={icon2} alt="icon2" width={50} height={50} />)}
            </div>
        </div>
    )
}