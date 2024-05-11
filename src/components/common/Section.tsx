import React from "react";
import SectionTitle from "./SectionTitle";

interface Props{
    title: string
    children: React.ReactNode
}

export default function Section({ title, children }: Props) {
    return (
        <div id="about" className="py-12 lg:py-16 relative w-full">
            <SectionTitle name={title} />
            {children}
        </div>
    )
}