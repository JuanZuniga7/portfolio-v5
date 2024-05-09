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
              className="transition-transform text-indigo-500 scale-90 hover:scale-125 duration-300"
            >
                {children}
            </Link>
    )
}