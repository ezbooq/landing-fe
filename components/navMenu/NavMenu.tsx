import NavLink from "@/components/navLink/NavLink";
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";

type NavMenuProps = {
  isDropdownOpen: boolean;
  setIsDropdownOpen: (isOpen: boolean) => void;
};

const NavMenu: React.FC<NavMenuProps> = ({
  isDropdownOpen,
  setIsDropdownOpen,
}) => {
  return (
    <nav
      className="items-center space-x-8 hidden md:flex mx-2"
      onClick={() => setIsDropdownOpen(false)}
    >
      {/* <NavLink href="/why-us" onMouseEnter={() => setIsDropdownOpen(false)}>
        Why Us
      </NavLink> */}

      <NavLink href="/industries" onMouseEnter={() => setIsDropdownOpen(true)}>
        <div className="flex items-center">
          <div>Industries</div>
          {isDropdownOpen ? (
            <RiArrowDropUpLine size={20} />
          ) : (
            <RiArrowDropDownLine size={20} />
          )}
        </div>
      </NavLink>

      <NavLink href="/affiliate-marketer">Join Affiliate Marketer</NavLink>
      <NavLink href="/contact-us" onMouseEnter={() => setIsDropdownOpen(false)}>
        Contact Us
      </NavLink>
      {/* <NavLink href="/news">What&apos;s New</NavLink> */}
    </nav>
  );
};

export default NavMenu;
