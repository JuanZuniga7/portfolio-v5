import React from "react";
import SectionTitle from "./SectionTitle";

interface Props{
    id: string
    title: string
    children: React.ReactNode
}

export default function Section({id, title, children }: Props) {
    return (
        <div id={id} className="py-12 lg:py-16 relative w-full">
            <SectionTitle name={title} />
            {children}
        </div>
    )
}