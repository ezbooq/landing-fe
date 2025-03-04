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
        "A streamlined inventory system designed for small and medium enterprises, ensuring real-time stock tracking, automated updates, and seamless integration with sales channels.",
      options: ["Smart inventory", "Smart tracking", "Smart invoices"],
      className: "bg-[#FFFBF2]",
    },
    {
      id: "02",
      title: "Simplified Booking System",
      description:
        "An intuitive booking platform that enhances customer experience, automates scheduling, and reduces manual work for businesses across various industries.",
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
        "A centralized tool for planning, executing, and analyzing marketing campaigns with AI-driven insights to maximize engagement and conversions.",
      options: [
        "SMS campaign",
        "E-mail campaign",
        "Create, launch your own messages to leads",
      ],
      className: "bg-[#F0EEFC]",
    },
    {
      id: "04",
      title: "Sales Fast AI Chatbot",
      description:
        "An intelligent chatbot that accelerates sales by automating inquiries, providing instant responses, and personalizing customer interactions to drive conversions.",
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
      title: "Smart Inventory",
      description:
        "Efficiently track, manage, and optimize inventory with automated stock updates, low-stock alerts, and seamless integration for SMEs.",
      icon: <LiaWarehouseSolid />,
    },
    {
      id: "02",
      title: "Seamless Customizable Booking Page",
      description:
        "Create a personalized booking experience with a user-friendly, fully customizable page that adapts to your brand and business needs.",
      icon: <MdOutlineDashboardCustomize />,
    },
    {
      id: "03",
      title: "Realtime Campaign Setup With SMS & E-mail For Marketing",
      description:
        "Launch and manage marketing campaigns instantly with automated SMS and email outreach to engage customers effectively.",
      icon: <LuBox />,
    },
    {
      id: "04",
      title: "AI & Data-Driven Growth With More Add-Ons",
      description:
        "Enhance business performance with AI-powered insights, automation, and scalable add-ons tailored to your unique needs.",
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
          Plan, Manage, Automate & Grow
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
