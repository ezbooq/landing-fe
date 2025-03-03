"use client";

import { useParams } from "next/navigation";
import Button from "@/components/button/Button";
import ImageSlider from "@/components/imageSlider/imageSlider";
import Hero2 from "@/components/section/home/hero/5stars";
import { Industries as IndustryData } from "@/data/data";
import { FaRegStar } from "react-icons/fa";
import { useRouter } from "next/navigation";
import PopUpModal from "@/components/popUpModal/PopUpModal";
import { useState } from "react";

const IndustryPage = () => {
  const { industry } = useParams(); // Get dynamic route params
  const Industry = IndustryData.find((item) => item.slug === industry);

  const router = useRouter();
  const [showModal, setShowModal] = useState(false);
  
    const handleOpenModal = () => {
      setShowModal(true);
    };

  if (!Industry) {
    return <h1>Industry not found</h1>;
  }

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 max-w-7xl mx-auto gap-4 p-4 mt-8">
        <div className="flex flex-col gap-4 text-black">
          <h1 className="text-2xl sm:text-4xl">
            {Industry.subTitle1}
          </h1>
          <p className="text-sm sm:text-base text-black">
            {Industry.description1}
          </p>
          <div className="flex gap-4">
            <Button
              onClick={() => {
                router.push("/register");
              }}
              className="hidden md:inline"
            >
              Sign Up
            </Button>
            <Button variant="outline" onClick={() => handleOpenModal()}>Learn More</Button>
          </div>
        </div>
        <div className="z-10">
          <ImageSlider images={Industry.image} />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 max-w-7xl mx-auto gap-4 p-4 mt-8">
        <div className="flex flex-col gap-4 text-black">
          <h1 className="text-2xl sm:text-4xl">
            {Industry.subTitle2}
          </h1>
          <p className="text-sm sm:text-base text-black mb-8">
            {Industry.description2}
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {Industry.features.map((feature, index) => (
            <div key={index} className="flex flex-col gap-4 text-black">
              <FaRegStar className="text-primary" size={25} />
         
              <p className="text-sm sm:text-base text-black mb-8">
                {feature}
              </p>
            </div>
          ))}
        </div>
      </div>
      <Hero2 />
      <PopUpModal
        open={showModal}
        onClose={() => {
          setShowModal(false);
        }}
      >
        <iframe
          className="w-full h-full"
          src="https://www.youtube.com/embed/aL27fX5kv9U"
          title="Introduction To WiseGPT"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
      </PopUpModal>
    </div>
  );
};

export default IndustryPage;
