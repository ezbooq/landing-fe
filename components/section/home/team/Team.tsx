"use client";

import { useState } from "react";
import Button from "../../../button/Button";
import TeamCard from "./TeamCard";
import PopUpModal from "@/components/popUpModal/PopUpModal";
import Person1 from "../../../../public/Personimg1.jpg";
import Person2 from "../../../../public/Personimg2.jpg";
import Person3 from "../../../../public/Personimg3.jpg";
import Person4 from "../../../../public/Personimg3.jpg";

const Team: React.FC = () => {
  const teamMembers = [
    {
      title: "Owners",
      description:
        "Gain comprehensive insights and control over your operations with real-time analytics and automated processes, enabling strategic decision-making and efficient management.",
      imageSrc: Person1,
      altText: "Owner Image",
    },
    {
      title: "Employees",
      description:
        "Empower your team with intuitive tools that streamline tasks, foster collaboration within the team while boosting productivity, ensuring they can focus on what matters most.",
      imageSrc: Person2,
      altText: "Employee Image",
    },
    {
      title: "Managers",
      description:
        "Simplify procurement and supply chain interactions through a unified interface that enhances communication, tracking, and relationship management.",
      imageSrc: Person3,
      altText: "Manager Image",
    },
    {
      title: "Customers",
      description:
        "Deliver personalized experiences and responsive support with AI-enhanced customer relationship management, building trust and driving engagement.",
      imageSrc: Person4,	
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
