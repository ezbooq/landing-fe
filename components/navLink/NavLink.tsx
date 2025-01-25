"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";

type NavLinkProps = {
    href: string;
    children: React.ReactNode;
    className?: string;
}

const NavLink: React.FC<NavLinkProps> = ({ href, children , className = ''}) => {
    const pathName = usePathname();
    const isActive = pathName === href;
    return (
        <Link href={href} className={`${isActive ? 'text-primary' : 'text-black'} text-xs font-normal hover:text-primary transition ${className}`}>
            {children}
        </Link>
    )
}

export default NavLink;