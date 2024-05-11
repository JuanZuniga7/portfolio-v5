import Image from "next/image"
import icon1 from "@/assets/svg/icon1.svg"
import icon2 from "@/assets/svg/icon2.svg"


export default function HorizontalItem({reverse}: {reverse?: boolean}){
    return(
        <div className="flex flex-row h-56 items-center justify-center gap-10">
            <div className={`absolute ${reverse ? "right-52":"left-52"} w-96 h-44 border-2 border-indigo-800 bg-indigo-950 hover:bg-indigo-900 cursor-pointer rounded-3xl`}>

            </div>
            <span className="w-[2px] h-56 bg-indigo-400 text-transparent -z-10 absolute">a</span>
            <div className={`${reverse ? "order-1":"order-2"}`}>
                {reverse ? 
                (<Image src={icon1} alt="icon1" width={50} height={50} />) : (<Image src={icon2} alt="icon2" width={50} height={50} />)}
            </div>
        </div>
    )
}