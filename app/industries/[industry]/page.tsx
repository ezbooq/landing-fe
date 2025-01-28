import Button from "@/components/button/Button";
import Hero2 from "@/components/section/home/hero/5stars";
import { Industries as IndustryData } from "@/data/data";
import Image from "next/image";
import { FaRegStar } from "react-icons/fa";

type IndustryPageProps = {
  params: {
    industry: string;
  };
};

const IndustryPage = async ({ params }: IndustryPageProps) => {
  const { industry } = await params;

  const Industry = IndustryData.find((item) => item.slug === industry);

  if (!Industry) {
    return <h1>Industry not found</h1>;
  }

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 max-w-7xl mx-auto gap-4 p-4 mt-8">
        <div className="flex flex-col gap-4 text-black">
          <h1 className="text-2xl sm:text-4xl">
            Business Plantform works with {Industry.title}
          </h1>
          <p className="text-sm sm:text-base text-black">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore
            quis necessitatibus pariatur accusamus nulla officiis maxime illo
            velit, ratione, sunt enim, minima numquam. Commodi inventore
            perferendis praesentium quos saepe quod.
          </p>
          <div className="flex gap-4">
            <Button variant="solid">Book a demo</Button>
            <Button variant="outline">SignUp</Button>
          </div>
        </div>
        <div className="z-10">
          <Image
            src={Industry.image}
            alt="dashboard"
            className="w-full rounded-lg shadow-lg"
            height={800}
            width={1000}
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 max-w-7xl mx-auto gap-4 p-4 mt-8">
        <div className="flex flex-col gap-4 text-black">
          <h1 className="text-2xl sm:text-4xl">
            Business Plantform works with {Industry.title}
          </h1>
          <p className="text-sm sm:text-base text-black mb-8">
            {Industry.description}
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {Industry.features.map((feature, index) => (
            <div key={index} className="flex flex-col gap-4 text-black">
              <FaRegStar className="text-primary" size={25} />
              <h1 className="text-xl font-semibold">{feature.name}</h1>
              <p className="text-sm sm:text-base text-black mb-8">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
      <Hero2 />
    </div>
  );
};

export default IndustryPage;
