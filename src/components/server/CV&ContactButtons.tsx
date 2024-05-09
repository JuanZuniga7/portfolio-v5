import Link from "next/link";
import { MdDownload } from "react-icons/md";
import { RiContactsFill } from "react-icons/ri";

export default function CVAndContactButtons(){
    return(
        <div className="flex items-center gap-3">
            <Link
              href="#contact"
              className="relative flex items-center justify-center overflow-hidden rounded-full"
            >
              <div className="absolute w-52 rounded-full h-4/5 animate-border -z-10 bg-gradient-to-b from-10% from-pink-500 via-50% via-indigo-500 to-90% to-pink-500"></div>
              <button className="px-2 border-2 border-transparent z-10 bg-indigo-500 text-xs md:px-4 py-1.5 md:py-3 rounded-full border-none text-center md:text-sm font-medium uppercase tracking-wider text-[#ffff] no-underline transition-all duration-200 ease-out  md:font-semibold flex items-center gap-1 hover:gap-3">
                <span>Contact me</span>
                <RiContactsFill size={16} />
              </button>
            </Link>
            <Link
              href="#resume"
              className="relative flex items-center justify-center overflow-hidden rounded-full"
            >
              <div className="absolute rounded-full w-52 h-4/5 animate-border2 -z-10 bg-gradient-to-r from-10% from-indigo-500 via-50% via-pink-500 to-90% to-indigo-500"></div>
              <button className="px-3 border-2 border-transparent z-10 bg-pink-500 text-xs md:px-4 py-1.5 md:py-3 rounded-full border-none text-center md:text-sm font-medium uppercase tracking-wider text-[#ffff] no-underline transition-all duration-200 ease-out  md:font-semibold flex items-center gap-1 hover:gap-3">
                <span>Get Resume</span>
                <MdDownload size={16} />
              </button>
            </Link>
          </div>
    )
}