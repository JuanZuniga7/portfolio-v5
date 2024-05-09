import CodeWindowButton from "../common/CodeWindowButton";
import codePresentation from "@/utils/data/codePresentation";
import CodeWord from "../common/CodeWord";

export default function CodePresentation() {
    return (
        <section className="order-1 lg:order-2 from-[#0d1224] border-[#1b2c68a0] relative rounded-lg border bg-gradient-to-r to-[#0a0d37] h-fit">
            <div className="flex flex-row">
                <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-pink-500 to-violet-600"></div>
                <div className="h-[1px] w-full bg-gradient-to-r from-violet-600 to-transparent"></div>
            </div>
            <div className="px-4 lg:px-8 py-5">
                <div className="flex flex-row justify-end space-x-2">
                    <CodeWindowButton color="bg-green-400" />
                    <CodeWindowButton color="bg-sky-400" />
                    <CodeWindowButton color="bg-red-400" />
                </div>
            </div>
            <div className="overflow-hidden border-t-[2px] border-indigo-900 px-4 lg:px-8 py-4 lg:py-8">
                <code className="font-mono text-xs md:text-sm lg:text-base flex flex-col gap-1">
                    {codePresentation.map((lines, index) => (
                        <div key={index} className={lines.margin === "4" ? "ml-4 lg:ml-8": lines.margin === "8" ? "ml-8 lg:ml-16": lines.margin === "0" ? "":"ml-12 lg:ml-24"}>
                            {lines.lines.map((line, index) => (
                                <div key={index} className={`flex flex-row items-center flex-wrap gap-1`}>
                                    {line.line.map((item, index) => (
                                        <CodeWord key={index}
                                            color={
                                            item.color === "pink" ? "text-pink-500" :
                                            item.color === "white" ? "text-white" :
                                            item.color === "green" ? "text-green-500" :
                                            item.color === "yellow" ? "text-yellow-400" :
                                            item.color === "blue" ? "text-sky-400" : "text-orange-500"}
                                            value={item.value} />
                                    ))}
                                </div>
                            ))}
                        </div>
                    ))}
                </code>
            </div>
        </section>
    )
}