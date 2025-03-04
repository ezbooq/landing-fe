import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaPinterest,
  FaTiktok,
  FaYoutube,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import FooterColumn from "./FooterColumn";
import Image from "next/image";
import NavLink from "../navLink/NavLink";
import Newsletter from "../newsletter/Newsletter";
import Logo from "../../public/Logo.png";
const Footer: React.FC = () => {
  const columns = [
    {
      title: "Industries",
      links: [
        { label: "Car Wash", href: "/industries/car-wash" },
        { label: "Home Cleaning", href: "/industries/home-cleaning" },
        { label: "Spa / Saloon", href: "/industries/spa" },
        { label: "Coaches / Tutors", href: "/industries/all-coaches" },
        { label: "View More", href: "/industries" },
      ],
    },
    {
      title: "Quick Links",
      links: [
        { label: "Learn More", href: "/industries" },
        { label: "Register Now", href: "/register" },
        { label: "Earn More", href: "/affiliate-marketer" },
        { label: "Contact Us", href: "/contact-us" },
        { label: "Watch Now", href: "https://www.youtube.com/@Ezbooq" },
      ],
    },
  ];

  const socialIcons = [
    {
      icon: <FaFacebook size={21} />,
      href: "https://www.facebook.com/ezbooqofficial",
    },
    {
      icon: <FaInstagram size={21} />,
      href: "https://www.instagram.com/ezbooq_official/",
    },
    {
      icon: <FaTiktok size={21} />,
      href: "https://www.tiktok.com/@ezbooq.official",
    },
    { icon: <FaYoutube size={21} />, href: "https://www.youtube.com/@Ezbooq" },
    {
      icon: <FaLinkedin size={21} />,
      href: "https://www.linkedin.com/company/ezbooq/?viewAsMember=true",
    },
    { icon: <FaXTwitter size={21} />, href: "https://x.com/Ezbooq_official" },
    {
      icon: <FaPinterest size={21} />,
      href: "https://www.pinterest.com/ezbooqofficial/",
    },
  ];

  const date = new Date();

  return (
    <footer className="bg-white p-5 py-10">
      <div className="max-w-7xl mx-auto">
        <Newsletter />
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6 border-t border-gray-300 pt-6">
          <div className="">
            <Image src={Logo} alt="Logo" width={120} height={50} />
            <h4 className="font-bold mt-3">Address</h4>
            <p className="font-extralight text-sm">
              New York, USA <br />
              Melbourine, AU <br />
              Colombo, SL
            </p>
            <h2 className="font-bold mt-3">Contact</h2>
            <p className="font-thin text-sm">
              + 61 485 982 386 <br />
              ezbooq@gmail.com <br />
            </p>
            <div className="flex space-x-4 mt-4">
              {socialIcons.map((social, index) => (
                <NavLink
                  key={index}
                  href={social.href}
                  className="text-gray-500 hover:text-black"
                >
                  {social.icon}
                </NavLink>
              ))}
            </div>
          </div>
          {/* <p className="text-2xl font-medium">Connecting businesses with innovation.</p> */}
          <div className="flex justify-between gap-4 sm:gap-10">
            {columns.map((column) => (
              <FooterColumn
                key={column.title}
                title={column.title}
                links={column.links}
              />
            ))}
          </div>
        </div>
        <div className="border-t border-gray-300 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-black flex flex-col sm:flex-row items-center justify-center mx-auto gap-5">
            <p>
              &copy; 2024 - {date.getFullYear()} EZBooq. All rights reserved.{" "}
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
                Sign Up
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
