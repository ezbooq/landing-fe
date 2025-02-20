"use client";

import { useState } from "react";
import Button from "../../../button/Button";
import TeamCard from "./TeamCard";
import PopUpModal from "@/components/popUpModal/PopUpModal";

const Team: React.FC = () => {
  const teamMembers = [
    {
      title: "Owners",
      description:
        "Lorem ipsum dolor sit amet consectetur. Fermentum tincidunt auctor quam lobortis urna velit.",
      imageSrc: "/Personimg1.jpg",
      altText: "Owner Image",
    },
    {
      title: "Employees",
      description:
        "Lorem ipsum dolor sit amet consectetur. Fermentum tincidunt auctor quam lobortis urna velit.",
      imageSrc: "/Personimg2.jpg",
      altText: "Employee Image",
    },
    {
      title: "Managers",
      description:
        "Lorem ipsum dolor sit amet consectetur. Fermentum tincidunt auctor quam lobortis urna velit.",
      imageSrc: "/Personimg3.jpg",
      altText: "Manager Image",
    },
    {
      title: "Customers",
      description:
        "Lorem ipsum dolor sit amet consectetur. Fermentum tincidunt auctor quam lobortis urna velit.",
      imageSrc: "/Personimg4.jpg",
      altText: "Customer Image",
    },
  ];
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  return (
    <>
      <section className="py-12 sm:p-10 px-5">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-12">
            <h1 className="text-left text-2xl sm:text-4xl font-medium text-black">
              One Platform For Everyone In Your Team, Easy & Smart
            </h1>

            <Button
              variant="outline"
              onClick={() => {
                handleOpenModal();
              }}
              className="hidden sm:inline"
            >
              Watch Now
            </Button>
          </div>
          <div className="flex md:grid md:grid-cols-4 gap-6 overflow-x-auto scrollbar-hide py-4">
            {teamMembers.map((member) => (
              <TeamCard
                key={member.title}
                title={member.title}
                description={member.description}
                imageSrc={member.imageSrc}
                altText={member.altText}
              />
            ))}
          </div>
          <Button
            variant="outline"
            onClick={() => {
              handleOpenModal();
            }}
            className="w-full mt-4 sm:hidden"
          >
            Learn More
          </Button>
        </div>
      </section>
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
    </>
  );
};

export default Team;
