"use client";

import Image from "next/image";
import Button from "@/components/button/Button";

const Hero: React.FC = () => {
  return (
    <div className="relative max-w-full">
      {/* Left Background */}
      <div
        className="hidden lg:inline absolute inset-y-0 left-0 w-80 h-full bg-cover bg-no-repeat bg-left"
        style={{
          backgroundImage: "url('/backgroundCircleLeft.png')",
        }}
      ></div>

      {/* Right Background */}
      <div
        className="hidden lg:inline absolute inset-y-0 right-0 w-80 h-full bg-cover bg-no-repeat bg-right rotate-180 translate-y-2"
        style={{
          backgroundImage: "url('/backgroundCircleLeft.png')",
        }}
      ></div>
      <div className="relative text-center mb-8 mt-8 sm:mt-4 max-w-4xl mx-auto sm:p-10 px-5">
        {/* Content */}
        <h1 className="relative text-2xl sm:text-4xl font-medium mb-4 z-10">
          Empower Your Business with <span className="text-primary">Ezbooq</span>
        </h1>
        <p className="relative text-black text-sm sm:text-base mb-6 z-10">
          Ezbooq is in development to revolutionize booking, customer
          management, staff management, and more for service providers across
          industries. Be part of the journey!
        </p>
        <div className="relative flex flex-col sm:flex-row justify-center gap-4 z-10">
          <Button variant="solid" onClick={() => {}}>
            Get started
          </Button>
          <Button variant="outline" onClick={() => {}}>
            Learn more
          </Button>
        </div>
        <div className="relative mt-8 flex items-center justify-center z-10">
          <Image
            src="/Dashboard.svg"
            alt="dashboard"
            className="w-full rounded-lg shadow-lg"
            height={400}
            width={1000}
          />
        </div>
      </div>
      {/* Overlay to ensure content visibility */}
      <div className="absolute inset-0 z-0 bg-transparent"></div>
    </div>
  );
};

export default Hero;
