export default function SubSectionTitle({title}:{title: string}) {
    return (
        <p className="mb-5 text-[#16f2b3] text-2xl lg:text-4xl uppercase animate-character font-bold italic">
            {title}
        </p>
    )
}