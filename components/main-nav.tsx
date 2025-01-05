"use client"

import * as React from "react"
import Link from "next/link"
import {usePathname} from "next/navigation"

import {cn} from "@/lib/utils"
import {hr} from "date-fns/locale";

const NavbarLink = ({href, label, currentPath}: {
    href: string,
    label: string,
    currentPath: string
}) =>
    <Link href={href}
          className={cn(
              "transition-colors hover:text-primary",
              currentPath === href ? "text-primary" : "text-foreground/60"
          )}>
        {label}
    </Link>


export function MainNav() {
    const pathname = usePathname()

    return (
        <div className="hidden md:flex justify-center items-center w-full">
            <nav className="flex text-center justify-center gap-4 text-sm lg:gap-6">
                <NavbarLink href={'/'} label={'Home'} currentPath={pathname}/>
                <NavbarLink href={'/about'} label={'About'} currentPath={pathname}/>
                <NavbarLink href={'/snippets'} label={'Snippets'} currentPath={pathname}/>
                <NavbarLink href={'/projects'} label={'Projects'} currentPath={pathname}/>
            </nav>
        </div>
    );
}

export default MainNav