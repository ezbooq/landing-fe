"use client";

import Image from "next/image";
import Button from "@/components/button/Button";
import NavMenu from "@/components/navMenu/NavMenu";

import { RxTextAlignJustify } from "react-icons/rx"

const Header: React.FC = () => {
  return (
    <header className="flex justify-between items-center p-4 bg-secondary w-full sticky top-0 z-50 shadow-md">
      <div className="flex justify-between items-center w-full max-w-7xl mx-auto">
        <Image src="/logo.svg" alt="Logo" width={120} height={50} />
        <NavMenu />
        <Button onClick={() => {}} className="hidden sm:inline">Login</Button>
        <RxTextAlignJustify className="inline sm:hidden text-primary" size={25}/>
      </div>
    </header>
  );
};

export default Header;
