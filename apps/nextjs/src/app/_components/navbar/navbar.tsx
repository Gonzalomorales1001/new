'use client'
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@acme/ui/sheet"
import './navBar.css'
import { Button } from "@acme/ui/button"
import { MenuIcon } from "lucide-react"
import NavBarMenu from "./navbar-menu"
import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import logo from "../../../../public/sbd-logo.webp"


const NavBar = () => {
    const [scrolling, setScrolling] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolling(true);
            } else {
                setScrolling(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav className={`${scrolling ? 'bg-zinc-100/70 dark:bg-zinc-950/70 backdrop-blur' : 'bg-zinc-950/20 text-zinc-50'} transition-all duration-500 rounded w-full`}>
            <div className="py-1 container">
                <div className="flex justify-between items-center">
                    <Link href="/" className="flex items-center">
                        <div>
                            <Image priority src={logo} alt="Brand-Logo" className={`${scrolling ? 'dark:invert' : 'invert'} transition-all duration-500 max-w-[50px] max-h-[50px] md:max-w-[100px] md:max-h-[100px]`} />
                        </div>
                        <h2 className="sm:text-lg md:text-2xl font-medium align-middle">
                            navbar
                        </h2>
                    </Link>
                    <div className="flex justify-center items-center gap-1">
                        <div className="hidden lg:flex gap-2 items-center justify-center">
                            <NavBarMenu scrolling={scrolling} />
                        </div>
                        <div className="lg:hidden">
                            <Sheet>
                                <SheetTrigger asChild>
                                    <Button variant="link" className={`${scrolling ? '' : 'text-zinc-50'}`}>
                                        <MenuIcon className={`${scrolling ? '' : 'text-zinc-50'}`} />
                                        <span className="hidden">Menu</span>
                                    </Button>
                                </SheetTrigger>
                                <SheetContent className="bg-zinc-100/80 dark:bg-zinc-950/80 backdrop-blur">
                                    <SheetHeader className="mb-4">
                                        <div className="flex items-center">
                                            <Link href="/">
                                                <Image priority src={logo} alt="Brand-Logo" className={`dark:invert transition-all duration-500 max-w-[100px] max-h-[100px]`} />
                                            </Link>
                                            <h2 className="text-lg font-medium align-middle">
                                                navbar
                                            </h2>
                                        </div>
                                    </SheetHeader>
                                    <div className="flex flex-col justify-center">
                                        <NavBarMenu scrolling={scrolling} sheet={true} />
                                    </div>
                                </SheetContent>
                            </Sheet>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default NavBar