import Link from "next/link"

interface Props{
    path: string;
    label: string;
}

export default function NavItem({path, label}:Props){
    return(
        <li>
            <Link
              className="block px-4 py-2 no-underline outline-none hover:no-underline"
              href={path}
            >
              <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600 uppercase">
                {label}
              </div>
            </Link>
          </li>
    )
}