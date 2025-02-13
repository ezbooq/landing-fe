"use client";

import FeatureCard from "./FeatureCard";

const Features: React.FC = () => {
  const features = [
    {
      id: "01",
      title: "Inventory for SME business",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla auctor, justo in tincidunt.",
      image: "/Dashboard.png",
      options: ["Smart inventory", "Smart tracking", "Smart invoices"],
      className: "bg-[#FFFBF2]",
    },
    {
      id: "02",
      title: "Simplified booking system",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla auctor, justo in tincidunt.",
      image: "/Personimg1.jpg",
      options: [
        "Appointment management",
        "Create bookable landing page",
        "Track, send and automate bookings",
      ],
      className: "bg-[#F9FCED]",
    },
    {
      id: "03",
      title: "Campaign Management",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla auctor, justo in tincidunt.",
      image: "/Personimg2.jpg",
      options: [
        "SMS campaign",
        "E-mail Campaign",
        "create, launch your own messages to leads",
      ],
      className: "bg-[#F0EEFC]",
    },
    {
      id: "04",
      title: "Sales fast AI Chat bot",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla auctor, justo in tincidunt.",
      image: "/Personimg2.jpg",
      options: [
        "Automated sales process",
        "AI contents",
        "All in one AI chat bot",
      ],
      className: "bg-[#EEF9FF]",
    },
  ];

  // const [selectedId, setSelectedId] = useState("1");
  // const [selectedImage, setSelectedImage] = useState(features[0].image);

  // const handleSelect = (id: string) => {
  //   setSelectedId(id);
  //   const image = features.find((feature) => feature.id === id)?.image;
  //   setSelectedImage(image || features[0].image);
  // };

  return (
    <div className="max-w-7xl mx-auto p-5 md:p-5 xl:p-0">
      <div>
        <p className="text-lg sm:text-base text-primary mb-5 text-center">
          Better benefits for your business
        </p>
        <h1 className="text-2xl sm:text-4xl text-black text-center mb-6">
          Plan, Manage, Automate, & Grow
        </h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 items-center gap-5">
        {features.map((feature) => (
          <FeatureCard
            key={feature.id}
            id={feature.id}
            title={feature.title}
            description={feature.description}
            options={feature.options}
            className={feature.className}
          />
        ))}
      </div>
      {/* <div className="hidden sm:inline">
          <Image
            src={selectedImage}
            alt="feature-image"
            className="w-full rounded-lg shadow-lg object-fill"
            width={400}
            height={300}
          />
        </div> */}
    </div>
  );
};

export default Features;
