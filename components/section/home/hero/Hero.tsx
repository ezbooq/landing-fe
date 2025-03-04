"use client";

import Image from "next/image";
import Button from "@/components/button/Button";
import { useRouter } from "next/navigation";
import { useState } from "react";
import PopUpModal from "@/components/popUpModal/PopUpModal";
import Dashboard from "../../../../public/Dashboard.svg";

const Hero: React.FC = () => {
  const router = useRouter();
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  return (
    <section className="relative max-w-full p-5">
      {/* Left Background */}
      {/* <div
        className="hidden lg:inline absolute inset-y-0 left-0 w-80 h-full bg-cover bg-no-repeat bg-left"
        style={{
          backgroundImage: "url('/backgroundCircleLeft.png')",
        }}
      ></div> */}

      {/* Right Background */}
      {/* <div
        className="hidden lg:inline absolute inset-y-0 right-0 w-80 h-full bg-cover bg-no-repeat bg-right rotate-180 translate-y-2"
        style={{
          backgroundImage: "url('/backgroundCircleLeft.png')",
        }}
      ></div> */}
      <div className="relative text-center mb-8 mt-8 sm:mt-4 max-w-full mx-auto sm:pt-10 px-5 bg-secondary rounded-t-lg">
        {/* Content */}
        <h1 className="relative text-2xl sm:text-4xl font-medium mb-4 z-10">
          Empower Your Business with{" "}
          <span className="text-primary">Ezbooq</span>
        </h1>
        <p className="relative text-black text-sm sm:text-base max-w-4xl mx-auto mb-6 z-10">
          EzBooq is transforming booking, customer & staff management for
          service providers. Join us in revolutionizing the industry!
        </p>
        <div className="relative flex flex-col sm:flex-row justify-center gap-4 z-10">
          {/* <Link href="/register"> */}
          <Button
            variant="solid"
            onClick={() => {
              router.push("/register");
            }}
          >
            Get Started
          </Button>
          {/* </Link> */}
          <Button variant="outline" onClick={() => handleOpenModal()}>
            Learn More
          </Button>
        </div>

        {/* Image section with NO bottom rounded corners or shadow */}
        <div className="relative mt-8 flex items-start justify-center overflow-hidden max-w-4xl mx-auto shadow-none rounded-none">
          <Image
            src={Dashboard}
            alt="dashboard"
            className="w-full rounded-none shadow-none"
            height={400}
            width={1000}
          />
        </div>
      </div>
      {/* Overlay to ensure content visibility */}
      {/* <div className="absolute inset-0 z-0 bg-transparent"></div> */}
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
    </section>
  );
};

export default Hero;
