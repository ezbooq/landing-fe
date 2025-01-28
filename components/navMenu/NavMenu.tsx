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
      className="items-center space-x-8 hidden sm:flex"
      onClick={() => setIsDropdownOpen(false)}
    >
      <NavLink href="/" onMouseEnter={() => setIsDropdownOpen(false)}>
        Home
      </NavLink>

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

      <NavLink href="/contact-us" onMouseEnter={() => setIsDropdownOpen(false)}>
        Contact Us
      </NavLink>
      {/* <NavLink href="/sign-up">Signup</NavLink> */}
    </nav>
  );
};

export default NavMenu;
