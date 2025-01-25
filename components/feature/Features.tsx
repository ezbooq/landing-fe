"use client"

import Image from "next/image";
import FeatureCard from "./FeatureCard";
import { useState } from "react";

const Features: React.FC = () => {
  const features = [
    {
      id: "1",
      title: "Inventory Management",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla auctor, justo in tincidunt.",
      image: "/Dashboard.png",
    },
    {
      id: "2",
      title: "Booking Management",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla auctor, justo in tincidunt.",
      image: "/Personimg1.jpg",
    },
    {
      id: "3",
      title: "Campaign Management",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla auctor, justo in tincidunt.",
      image: "/Personimg2.jpg",
    },
  ];

  const [selectedId, setSelectedId] = useState("1");
  const [selectedImage, setSelectedImage] = useState(features[0].image);

  const handleSelect = (id: string) => {
    setSelectedId(id);
    const image = features.find((feature) => feature.id === id)?.image;
    setSelectedImage(image || features[0].image);
  }
  
  return (
    <div className="max-w-7xl mx-auto sm:p-10 px-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-5">
        <div className="flex flex-col gap-4">
          {features.map((feature) => (
            <FeatureCard
              key={feature.id}
              id={feature.id}
              title={feature.title}
              description={feature.description}
              onClick={handleSelect}
              className={selectedId === feature.id ? "bg-gradient-to-r from-primary to-lightgreen text-white border p-4 rounded-lg shadow-md" : "bg-white text-black p-5"}
            />
          ))}
        </div>
        <div className="hidden sm:inline">
          <Image
            src={selectedImage}
            alt="feature-image"
            className="w-full rounded-lg shadow-lg object-fill"
            width={400}
            height={300}
          />
        </div>
      </div>
    </div>
    
  );
};

export default Features;
