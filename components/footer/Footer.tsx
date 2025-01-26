import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import FooterColumn from "./FooterColumn";
import Image from "next/image";
import NavLink from "../navLink/NavLink";

const Footer: React.FC = () => {
  const columns = [
    {
      title: "Column One",
      links: [
        { label: "Link One", href: "#" },
        { label: "Link Two", href: "#" },
        { label: "Link Three", href: "#" },
        { label: "Link Four", href: "#" },
        { label: "Link Five", href: "#" },
      ],
    },
    {
      title: "Industries",
      links: [
        { label: "Link Six", href: "#" },
        { label: "Link Seven", href: "#" },
        { label: "Link Eight", href: "#" },
        { label: "Link Nine", href: "#" },
        { label: "Link Ten", href: "#" },
      ],
    },
    {
      title: "Column Three",
      links: [
        { label: "Link Eleven", href: "#" },
        { label: "Link Twelve", href: "#" },
        { label: "Link Thirteen", href: "#" },
        { label: "Link Fourteen", href: "#" },
        { label: "Link Fifteen", href: "#" },
      ],
    },
    {
      title: "Column Four",
      links: [
        { label: "Link Sixteen", href: "#" },
        { label: "Link Seventeen", href: "#" },
        { label: "Link Eighteen", href: "#" },
        { label: "Link Nineteen", href: "#" },
        { label: "Link Twenty", href: "#" },
      ],
    },
    {
      title: "Column Five",
      links: [
        { label: "Link Twenty One", href: "#" },
        { label: "Link Twenty Two", href: "#" },
        { label: "Link Twenty Three", href: "#" },
        { label: "Link Twenty Four", href: "#" },
        { label: "Link Twenty Five", href: "#" },
      ],
    },
  ];

  const socialIcons = [
    { icon: <FaFacebook size={17}/>, href: "#" },
    { icon: <FaInstagram size={17}/>, href: "#" },
    { icon: <FaXTwitter size={17}/>, href: "#" },
    { icon: <FaLinkedin size={17}/>, href: "#" },
    { icon: <FaYoutube size={17}/>, href: "#" },
  ];

  const date = new Date();

  return (
    <footer className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
          <div className="hidden sm:block">
            <Image src="/logo.svg" alt="Logo" width={120} height={50} />
          </div>
          {columns.map((column) => (
            <FooterColumn
              key={column.title}
              title={column.title}
              links={column.links}
            />
          ))}
        </div>
        <div className="border-t border-black mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-black flex flex-col sm:flex-row items-center gap-5">
          <div>
            <Image src="/logo.svg" alt="Logo" width={120} height={50} className="sm:hidden"/>
          </div>
            <p>
            &copy; {date.getFullYear()} EZBooq. All rights reserved.{" "}
            </p>
            <div className="flex gap-4">
              <NavLink
                href="/industries"
                className="underline underline-offset-2"
              >
                Industries
              </NavLink>
              <NavLink
                href="/contact-us"
                className="underline underline-offset-2"
              >
                Contact Us
              </NavLink>
              <NavLink href="/sign-up" className="underline underline-offset-2">
                Signup
              </NavLink>
            </div>
          </div>
          <div className="flex space-x-4 mt-4 md:mt-0">
            {socialIcons.map((social, index) => (
              <NavLink key={index} href={social.href}>
                {social.icon}
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
