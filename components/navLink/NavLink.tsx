import Link from "next/link";

type NavLinkProps = {
    href: string;
    children: React.ReactNode;
    className?: string;
}

const NavLink: React.FC<NavLinkProps> = ({ href, children , className = ''}) => {
    return (
        <Link href={href} className={`text-black text-xs font-normal hover:text-primary transition active:text-primary ${className}`}>
            {children}
        </Link>
    )
}

export default NavLink;