import "@/styles/not-found.css"
import Link from "next/link"

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-9xl font-bold font-mono">404</h1>
            <p className="text-2xl font-semibold font-serif">Page Not Found <span className="blink w-4">_</span></p>
            <div className="mt-5">
                <Link href="/" className="button text-lg lg:text-xl">Come Back</Link>
            </div>
        </div>
    )
}