"use client";

import Image from "next/image";
import { useState } from "react";
import { IoMdStar } from "react-icons/io";
import { motion } from "motion/react";

const Review: React.FC = () => {
  const customers = [
    {
      name: "John Doe",
      title: "CEO",
      profilePicture: "/Personimg1.jpg",
      logo: "/logo.svg",
      review:
        "1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius rem non perferendis maiores molestiae sint voluptates? Expedita ullam, sint incidunt voluptate architecto delectus laborum eligendi, accusamus animi magnam, molestiae velit!",
    },
    {
      name: "Jane Doe",
      title: "CTO",
      profilePicture: "/Personimg2.jpg",
      logo: "/logo.svg",
      review:
        "2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius rem non perferendis maiores molestiae sint voluptates? Expedita ullam, sint incidunt voluptate architecto delectus laborum eligendi, accusamus animi magnam, molestiae velit!",
    },
    {
      name: "John Smith",
      title: "COO",
      profilePicture: "/Personimg3.jpg",
      logo: "/logo.svg",
      review:
        "3 Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius rem non perferendis maiores molestiae sint voluptates? Expedita ullam, sint incidunt voluptate architecto delectus laborum eligendi, accusamus animi magnam, molestiae velit!",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const handleDotClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <section className="text-center mb-8 mt-8 sm:mt-2 bg-secondary">
      <div className="max-w-5xl mx-auto sm:p-10 px-5 py-5">
        <h1 className="text-2xl sm:text-4xl font-medium mb-4">
          What Our Customers Has to Say
        </h1>
        <motion.div
          className="flex flex-col items-center justify-center gap-4 mb-5"
          key={activeIndex} // Ensures re-mounting on index change
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <div className="flex items-center justify-center gap-4 sm:border-r border-black px-4">
              <Image
                src={customers[activeIndex].profilePicture}
                alt="customer-image"
                width={500}
                height={500}
                className="rounded-full object-cover h-14 w-14"
              />
              <div className="flex flex-col justify-start items-start">
                <p className="text-sm font-semibold">
                  {customers[activeIndex].name}
                </p>
                <p className="text-sm font-light">
                  {customers[activeIndex].title}
                </p>
              </div>
            </div>

            <Image
              src={customers[activeIndex].logo}
              alt="customer-logo"
              width={500}
              height={500}
              className="object-cover w-28"
            />
          </div>
          <p className="text-black text-sm sm:text-base">
            {customers[activeIndex].review}
          </p>
        </motion.div>
        <div className="mb-5 flex items-center justify-center gap-2">
          {[...Array(5)].map((_, i) => (
            <IoMdStar key={i} className="text-2xl text-yellow" />
          ))}
        </div>
        <div className="flex items-center justify-center gap-2">
          {customers.map((_, index) => (
            <div
              key={index}
              className={`rounded-full h-2 w-2 cursor-pointer ${
                activeIndex === index ? "bg-primary" : "bg-lightgreen"
              }`}
              onClick={() => handleDotClick(index)}
            ></div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Review;
