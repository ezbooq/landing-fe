"use client";

import { LiaWarehouseSolid } from "react-icons/lia";
import FeatureCard from "./FeatureCard";
import FeatureCard2 from "./FeatureCard2";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { LuBox } from "react-icons/lu";
import { PiStarFourBold } from "react-icons/pi";

const Features: React.FC = () => {
  const features = [
    {
      id: "01",
      title: "Inventory for SME business",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla auctor, justo in tincidunt.",
      image: "/Dashboard.svg",
      options: ["Smart inventory", "Smart tracking", "Smart invoices"],
      className: "bg-[#FFFBF2]",
    },
    {
      id: "02",
      title: "Simplified booking system",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla auctor, justo in tincidunt.",
      image: "/Personimg1.jpg",
      options: [
        "Appointment management",
        "Create bookable landing page",
        "Track, send and automate bookings",
      ],
      className: "bg-[#F9FCED]",
    },
    {
      id: "03",
      title: "Campaign Management",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla auctor, justo in tincidunt.",
      image: "/Personimg2.jpg",
      options: [
        "SMS campaign",
        "E-mail Campaign",
        "create, launch your own messages to leads",
      ],
      className: "bg-[#F0EEFC]",
    },
    {
      id: "04",
      title: "Sales fast AI Chat bot",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla auctor, justo in tincidunt.",
      image: "/Personimg2.jpg",
      options: [
        "Automated sales process",
        "AI contents",
        "All in one AI chat bot",
      ],
      className: "bg-[#EEF9FF]",
    },
  ];

  const features2 = [
    {
      id: "01",
      title: "Inventory for SME business",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla auctor, justo in tincidunt.",
      icon: <LiaWarehouseSolid />,
    },
    {
      id: "02",
      title: "Simplified booking system",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla auctor, justo in tincidunt.",
      icon: <MdOutlineDashboardCustomize />,
    },
    {
      id: "03",
      title: "Campaign Management",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla auctor, justo in tincidunt.",
      icon: <LuBox />,
    },
    {
      id: "04",
      title: "Sales fast AI Chat bot",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla auctor, justo in tincidunt.",
      icon: <PiStarFourBold />,
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-5 py-10 md:px-5 xl:px-0">
      <div className="text-center">
        <p className="text-lg sm:text-xl text-primary mb-5">
          Better benefits for your business
        </p>
        <h1 className="text-2xl sm:text-4xl text-black mb-6">
          Plan, Manage, Automate, & Grow
        </h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 items-center gap-5 mb-16">
        {features.map((feature) => (
          <FeatureCard
            key={feature.id}
            id={feature.id}
            title={feature.title}
            description={feature.description}
            options={feature.options}
            className={feature.className}
          />
        ))}
      </div>
      <div className="text-center">
        <p className="text-lg sm:text-xl text-primary mb-5">Features</p>
        <h1 className="text-2xl sm:text-4xl text-black mb-6">
          Powerful Features to Elevte Your workflow
        </h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 items-center gap-5 mb-14">
        {features2.map((feature) => (
          <FeatureCard2
            key={feature.id}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </section>
  );
};

export default Features;
