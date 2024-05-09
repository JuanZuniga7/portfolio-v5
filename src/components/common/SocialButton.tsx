import Link from "next/link";

interface Props{
    link: string;
    children: React.ReactNode;
}

export default function SocialButton({link, children}:Props){
    return(
        <Link
              href={link}
              target="_blank"
              className="transition-transform text-indigo-500 hover:scale-[2] duration-300 scale-150"
            >
                {children}
            </Link>
    )
}