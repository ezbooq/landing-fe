"use client";

import Button from "@/components/button/Button";
import { useRouter } from "next/navigation";
import { FaRegStar } from "react-icons/fa";

const features = [
  {
    title: "Free & Effortless Signup",
    description:
      "Get started instantly with zero upfront costs. Our hassle-free registration ensures you can focus on growing your business, not on complex setups.",
  },
  {
    title: "Maximize Your Earnings",
    description:
      "Optimize your revenue with AI-driven insights, automated bookings, and smarter customer engagement ; turning every opportunity into profit.",
  },
  {
    title: "Work Anytime, Anywhere",
    description:
      "Manage your business on the go with a cloud-based platform, ensuring seamless access and control from any device, anytime.",
  },
  {
    title: "Effortless Customer Onboarding",
    description:
      "Convert leads into loyal customers with an intuitive, automated onboarding system that personalizes their journey from day one.",
  },
  {
    title: "AI-Powered Efficiency",
    description:
      "Automate tasks, streamline operations, and enhance decision-making with cutting-edge AI, so you can focus on business growth.",
  },
  {
    title: "All-in-One Business Hub",
    description:
      "From scheduling to payments and marketing, EzBooq centralizes everything in one smart platform, making business management simpler than ever.",
  },
];

export default function AffiliateMarketer() {
  const router = useRouter();

  return (
    <main>
      <div className="bg-secondary py-10 p-5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-2xl sm:text-4xl font-medium mb-4 max-w-2xl mx-auto">
              Apply To Join The Ezbooq Affiliate Program
            </h1>
            <p className="text-sm sm:text-base mb-4 max-w-3xl mx-auto">
              EzBooq is tranforming booking, cutomer & staff management for
              service providers. Join us in revolutionizing the industry
            </p>
            <div className="flex justify-center">
              <Button
                variant="solid"
                onClick={() => {
                  router.push("/affiliate-marketer/partner-sign-up");
                }}
              >
                Apply Now
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto py-10 p-5">
        <div className="text-center mb-8">
          <h1 className="text-2xl sm:text-4xl font-medium mb-4 max-w-2xl mx-auto">
            Who Benefits from EzBooq?
          </h1>
          <p className="text-sm sm:text-base mb-4 max-w-3xl mx-auto">
            EzBooq is a portal designed for ambitious business owners, dynamic
            teams, reliable vendors, and valued customers ; bringing everyone
            together on one intelligent platform to simplify operations, enhance
            collaboration, and drive growth effortlessly.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center gap-2"
            >
              <FaRegStar size={25} className="text-primary" />
              <h2 className="text-lg font-medium">{feature.title}</h2>
              <p className="text-sm text-center">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
