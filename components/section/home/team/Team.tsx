"use client";

import Button from "../../../button/Button";
import TeamCard from "./TeamCard";

const Team: React.FC = () => {
  const teamMembers = [
    {
      title: "Owners",
      description:
        "Lorem ipsum dolor sit amet consectetur. Fermentum tincidunt auctor quam lobortis urna velit.",
      imageSrc: "/Personimg1.jpg", // Replace with the actual image path
      altText: "Owner Image",
    },
    {
      title: "Employees",
      description:
        "Lorem ipsum dolor sit amet consectetur. Fermentum tincidunt auctor quam lobortis urna velit.",
      imageSrc: "/Personimg2.jpg", // Replace with the actual image path
      altText: "Employee Image",
    },
    {
      title: "Managers",
      description:
        "Lorem ipsum dolor sit amet consectetur. Fermentum tincidunt auctor quam lobortis urna velit.",
      imageSrc: "/Personimg3.jpg", // Replace with the actual image path
      altText: "Manager Image",
    },
    {
      title: "Customers",
      description:
        "Lorem ipsum dolor sit amet consectetur. Fermentum tincidunt auctor quam lobortis urna velit.",
      imageSrc: "/Personimg4.jpg", // Replace with the actual image path
      altText: "Customer Image",
    },
  ];

  const handleLearnMore = () => {
    console.log("Learn more clicked");
  };

  return (
    <section className="py-12 sm:p-10 px-5">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-12">
          <h1 className="text-left text-2xl sm:text-4xl font-medium text-black">
            A platform built for everyone on the team
          </h1>

          <Button
            variant="outline"
            onClick={() => {
              handleLearnMore();
            }}
            className="hidden sm:inline"
          >
            Learn more
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
            handleLearnMore();
          }}
          className="w-full mt-4 sm:hidden"
        >
          Learn More
        </Button>
      </div>
    </section>
  );
};

export default Team;
