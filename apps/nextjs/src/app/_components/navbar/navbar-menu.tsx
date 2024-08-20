
import Link from "next/link";
import { ThemeToggle } from "@acme/ui/theme";


interface Props {
    scrolling: boolean;
    sheet?: boolean;
}

const NavBarMenu = ({ scrolling, sheet }: Props) => {
    return (
        <ul className="flex flex-col lg:flex-row gap-6 justify-end lg:justify-center lg:items-center">
            <li className="absolute bottom-2 left-2 lg:static">
                <ThemeToggle />
            </li>
            <li className="nav-element">
                <Link href="/" className={`nav-link font-light text-[1.125rem] tracking-wide`}>Inicio</Link>
                <span className={`${scrolling || sheet ? 'bg-primary' : 'bg-zinc-50'} block w-0 transition-all duration-300 h-px`}></span>
            </li>
            <li className="nav-element">
                <Link href="/contact" className={`nav-link font-light text-[1.125rem] tracking-wide nav-link`}>Contact</Link>
                <span className={`${scrolling || sheet ? 'bg-primary' : 'bg-zinc-50'} block w-0 transition-all duration-300 h-px`}></span>
            </li>
            <li className="nav-element">
                <Link href="/login" className={`nav-link font-light text-[1.125rem] tracking-wide nav-link`}>Login</Link>
                <span className={`${scrolling || sheet ? 'bg-primary' : 'bg-zinc-50'} block w-0 transition-all duration-300 h-px`}></span>
            </li>
        </ul>
    )
}

export default NavBarMenu