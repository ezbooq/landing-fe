import { motion } from "motion/react";
import { IoMdClose } from "react-icons/io";
import NavLink from "../navLink/NavLink";
import { Industries as IndustryData } from "@/data/data";
import { useState } from "react";
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";
import Button from "../button/Button";

type MobileNavMenuProps = {
  setIsMobileNavOpen: (isMobileNavOpen: boolean) => void;
};

const MobileNavMenu: React.FC<MobileNavMenuProps> = ({
  setIsMobileNavOpen,
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  return (
    <motion.div
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      exit={{ x: "100%" }}
      transition={{ type: "tween", duration: 0.3 }}
      className="fixed sm:hidden inset-0 w-full h-full bg-white z-50 flex flex-col p-6"
    >
      {/* Close Button */}
      <button
        onClick={() => setIsMobileNavOpen(false)}
        className="absolute top-4 right-4 text-black"
      >
        <IoMdClose size={20} />
      </button>

      {/* Navigation Links */}
      <nav className="flex flex-col space-y-6 text-lg mt-12">
        <NavLink href="/" onClick={() => setIsMobileNavOpen(false)}>
          Home
        </NavLink>
        {/* <NavLink href="/why-us" onMouseEnter={() => setIsMobileNavOpen(false)}>
          Why Us
        </NavLink> */}

        <NavLink
          href="/industries"
          onClick={() => {
            setIsDropdownOpen(!isDropdownOpen);
          }}
        >
          <div className="flex items-center">
            <div>Industries</div>{" "}
            {isDropdownOpen ? (
              <RiArrowDropUpLine size={20} />
            ) : (
              <RiArrowDropDownLine size={20} />
            )}
          </div>
        </NavLink>
        {isDropdownOpen && (
          <div className="flex flex-col space-y-2">
            {IndustryData.map((industry) => (
              <NavLink
                key={industry.id}
                href={`/industries/${industry.slug}`}
                onClick={() => setIsMobileNavOpen(false)}
              >
                {industry.title}
              </NavLink>
            ))}
            <NavLink
              href={`/industries`}
              key={"all"}
              className="text-primary"
              onClick={() => setIsMobileNavOpen(false)}
            >
              View more...
            </NavLink>
          </div>
        )}
        <NavLink
          href="/affiliate-marketer"
          onClick={() => setIsMobileNavOpen(false)}
        >
          Join Affiliate Marketer
        </NavLink>
        <NavLink href="/contact-us" onClick={() => setIsMobileNavOpen(false)}>
          Contact Us
        </NavLink>

        {/* <NavLink href="/news" onClick={() => setIsMobileNavOpen(false)}>
          What&apos;s New
        </NavLink> */}

        <Button
          variant="solid"
          onClick={() => {
            setIsMobileNavOpen(false);
          }}
        >
          Get started
        </Button>
        <Button
          variant="outline"
          onClick={() => {
            setIsMobileNavOpen(false);
          }}
        >
          Sign up
        </Button>
      </nav>
    </motion.div>
  );
};

export default MobileNavMenu;
