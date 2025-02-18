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
  ];

  const socialIcons = [
    { icon: <FaFacebook size={17} />, href: "#" },
    { icon: <FaInstagram size={17} />, href: "#" },
    { icon: <FaXTwitter size={17} />, href: "#" },
    { icon: <FaLinkedin size={17} />, href: "#" },
    { icon: <FaYoutube size={17} />, href: "#" },
  ];

  const date = new Date();

  return (
    <footer className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-between gap-6">
          <div className="">
            <Image src="/logo.svg" alt="Logo" width={120} height={50} />
            <h4 className="font-bold mt-3">Address</h4>
            <p className="font-extralight">
              New York, USA <br />
              Melbourine, AU <br />
              Colombo, SL
            </p>
            <h2 className="font-bold mt-3">Contact</h2>
            <p className="font-thin text-base">
              (+56) 0565 48949 <br />
              support@ezbooq.com <br />
            </p>
            <div className="flex space-x-4 mt-4">
              {socialIcons.map((social, index) => (
                <NavLink
                  key={index}
                  href={social.href}
                  className="text-gray-500"
                >
                  {social.icon}
                </NavLink>
              ))}
            </div>
          </div>
          <div className="flex gap-4 sm:gap-10">
            {columns.map((column) => (
              <FooterColumn
                key={column.title}
                title={column.title}
                links={column.links}
              />
            ))}
          </div>
        </div>
        <div className="border-t border-black mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-black flex flex-col sm:flex-row items-center justify-center mx-auto gap-5">
            <p>&copy; {date.getFullYear()} EZBooq. All rights reserved. </p>
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
        </div>
      </div>
    </footer>
  );
};

export default Footer;
