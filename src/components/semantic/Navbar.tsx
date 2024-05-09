import NavItem from "../common/NavItem";
import Link from "next/link";
import { navItems } from "@/utils/data/navItems";

function Navbar() {
  return (
    <header className="bg-transparent">
      <div className="flex items-center justify-between py-5">
        <div className="flex flex-shrink-0 items-center">
          <Link
            href="/"
            className="text-4xl font-serif italic font-bold uppercase animate-character"
          >
            Rusted Cor
          </Link>
        </div>
        <nav>
          <ul
            className="mt-4 flex h-screen max-h-0 w-full flex-col items-start text-sm opacity-0 md:mt-0 md:h-auto md:max-h-screen md:w-auto md:flex-row md:space-x-1 md:border-0 md:opacity-100"
            id="navbar-default"
          >
            {navItems.map((item) => (
              <NavItem key={item.label} {...item} />
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
