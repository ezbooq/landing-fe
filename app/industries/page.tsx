import IndustryCard from "@/components/section/industry/industryCard";

export default function Industries() {
  const Industries = [
    {
      id: "1",
      title: "Car Detailing",
      image: "/cardetailing.jpg",
    },
    {
      id: "2",
      title: "Car Wash",
      image: "/carwash.jpg",
    },
    {
      id: "3",
      title: "Pet Grooming",
      image: "/petgrooming.jpg",
    },
    {
      id: "4",
      title: "Carpet Cleaning",
      image: "/Carpet cleaning.jpg",
    },
    {
      id: "5",
      title: "Home Cleaning",
      image: "/carcleaning.jpg",
    },
    {
      id: "6",
      title: "Pet Walker",
      image: "/petwalking.jpeg",
    },
    {
      id: "7",
      title: "Pool Cleaning",
      image: "/Carpet cleaning.jpg",
    },
    {
      id: "8",
      title: "Lawn Care",
      image: "/Carpet cleaning.jpg",
    },
    {
      id: "9",
      title: "Moving Business",
      image: "/Carpet cleaning.jpg",
    },
  ];

  return (
    <div className="flex flex-col max-w-7xl mx-auto text-center py-10 gap-7 p-4">
      <h1 className="text-2xl sm:text-4xl text-black max-w-xl mx-auto">Discover how Ezbooq Best Serves Your Industry</h1>
      <p className="text-sm text-black mb-8">
        Explore Ezbooq suite of business software by industry and learn how you
        can start automating.
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-6">
        {Industries.map((industry) => (
          <div key={industry.id}>
            <IndustryCard
              title={industry.title}
              image={industry.image}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
