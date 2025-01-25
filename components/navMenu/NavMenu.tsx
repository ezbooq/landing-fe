import NavLink from "@/components/navLink/NavLink";

const NavMenu: React.FC = () => {
  return (
    <nav className="items-center space-x-8 hidden sm:flex">
      <NavLink href="/">Home</NavLink>
      <NavLink href="/industries">Industries</NavLink>
      <NavLink href="/contact-us">Contact Us</NavLink>
      <NavLink href="/sign-up">Signup</NavLink>
    </nav>
  );
}

export default NavMenu;