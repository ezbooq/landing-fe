"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type NavLinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
  onMouseEnter?: () => void;
  onClick?: () => void;
};

const NavLink: React.FC<NavLinkProps> = ({
  href,
  children,
  className = "",
  onMouseEnter,
  onClick
}) => {
  const pathName = usePathname();
  const isActive = pathName === href;
  return (
    <Link
      href={href}
      onMouseEnter={onMouseEnter}
      onClick={onClick}
      className={`${
        isActive ? "text-primary" : "text-black"
      } text-xs font-medium hover:text-green-700 ${className}`}
    >
      {children}
    </Link>
  );
};

export default NavLink;
