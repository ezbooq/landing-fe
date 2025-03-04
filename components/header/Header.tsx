"use client";

import Image from "next/image";
import Button from "@/components/button/Button";
import NavMenu from "@/components/navMenu/NavMenu";
import Logo from "../../public/Logo.png";
import { RxTextAlignJustify } from "react-icons/rx";
import { useState } from "react";
import NavLink from "../navLink/NavLink";
import { Industries as IndustryData } from "@/data/data";
import MobileNavMenu from "../navMenu/MobileNavMenu";
import Banner from "../banner/Banner";
import { useRouter } from "next/navigation";

const Header: React.FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const router = useRouter();

  return (
    <header className="sticky w-full items-center bg-secondary shadow-md top-0 z-50">
      <Banner />
      <div className="flex justify-between items-center p-5 max-w-7xl mx-auto">
        <NavLink href="/" onClick={() => setIsDropdownOpen(false)}>
          <Image src={Logo} alt="Logo" width={120} height={50} />
        </NavLink>

        <NavMenu
          isDropdownOpen={isDropdownOpen}
          setIsDropdownOpen={setIsDropdownOpen}
        />

        <Button
          onClick={() => {
            setIsDropdownOpen(false);
            router.push("/register");
          }}
          className="hidden md:inline"
        >
          Register Now
        </Button>

        <RxTextAlignJustify
          className="inline md:hidden text-primary cursor-pointer"
          size={25}
          onClick={() => setIsMobileNavOpen(true)}
        />
      </div>

      {isMobileNavOpen && (
        <MobileNavMenu setIsMobileNavOpen={setIsMobileNavOpen} />
      )}

      {/* Full-width dropdown below header */}
      {isDropdownOpen && (
        <div
          className="absolute hidden md:inline left-0 w-full bg-white border-t shadow-md z-40 p-4"
          onMouseLeave={() => setIsDropdownOpen(false)}
        >
          <h1 className="text-lg font-medium max-w-7xl mx-auto ps-4">
            Industries
          </h1>
          <div className="max-w-7xl mx-auto px-4 pt-4 grid grid-cols-3 gap-4">
            {IndustryData.map((industry) => (
              <NavLink
                href={`/industries/${industry.slug}`}
                key={industry.id}
                onClick={() => setIsDropdownOpen(false)}
              >
                {industry.title}
              </NavLink>
            ))}
            <NavLink
              href={`/industries`}
              key={"all"}
              className="text-primary"
              onClick={() => setIsDropdownOpen(false)}
            >
              View more...
            </NavLink>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
