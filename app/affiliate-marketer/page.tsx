"use client";

import Button from "@/components/button/Button";
import { CiStar } from "react-icons/ci";

const features = [
  { title: "Fetaure 1", description: "Description 1" },
  { title: "Fetaure 2", description: "Description 2" },
  { title: "Fetaure 3", description: "Description 3" },
  { title: "Fetaure 4", description: "Description 4" },
  { title: "Fetaure 5", description: "Description 5" },
  { title: "Fetaure 6", description: "Description 6" },
];

export default function AffiliateMarketer() {
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
              <Button variant="solid" onClick={() => {}}>
                Apply now
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto py-10 p-5">
        <div className="text-center mb-8">
          <h1 className="text-2xl sm:text-4xl font-medium mb-4 max-w-2xl mx-auto">
            Who Its For
          </h1>
          <p className="text-sm sm:text-base mb-4 max-w-3xl mx-auto">
            EzBooq is tranforming booking, cutomer & staff management for
            service providers. Join us in revolutionizing the industry
          </p>
        </div>
        <div className="grid grid-cols-3 sm:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center gap-2"
            >
              <CiStar size={25} className="text-primary" />
              <h2 className="text-lg font-medium">{feature.title}</h2>
              <p className="text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
