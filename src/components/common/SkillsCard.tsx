import { ISkill } from "@/utils/types/skills.type"

export default function SkillsCard({item, clickable}:{item: ISkill, clickable?: boolean}) {
    return (
        <>
            <div className="absolute -z-10 bg-gradient-to-b from-30% from-indigo-600 top-70% to-blue-500 top-1/4 animate-box h-2/3" />
            <div className={`border-2 lg:border-3 border-indigo-800 bg-blue-950 ${clickable && "hover:bg-blue-900 cursor-pointer"} rounded-xl w-full p-3 flex flex-col gap-2`}>
                <div className="flex flex-row items-center gap-2">
                    <figure className="w-1/5 ">
                        {item.icon}
                    </figure>
                    <h3 className="text-lg md:text-xl xl:text-2xl 3xl:text-xl animate-character uppercase font-bold">{item.label}</h3>
                </div>
                <div className="flex flex-col capitalize justify-center gap-1">
                    {Object.keys(item).map((key: string, index: number) => {
                        if (key !== "label" && key !== "icon" && key !== "numericLevel") {
                            return (
                                <p className="text-sm md:text-base font-semibold" key={key.concat(index.toString())}>{key}: <span className="text-sky-400 italic">{item[key as keyof ISkill]}</span></p>
                            )
                        }
                    })}
                </div>
                <div className="w-full border-[1px] h-4 md:h-5 rounded-full overflow-hidden border-transparent">
                    <div className="bg-indigo-800 h-full" style={{ width: `${item.numericLevel * 10}%` }}></div>
                </div>
            </div>
        </>
    )
}