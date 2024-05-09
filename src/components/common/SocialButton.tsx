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
              className="text-indigo-300"
            >
                {children}
            </Link>
    )
}