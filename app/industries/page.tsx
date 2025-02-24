import IndustryCard from "@/components/section/industry/IndustryCard";
import { Industries as IndustryData } from "@/data/data";

export default function Industries() {
  return (
    <main className="flex flex-col max-w-7xl mx-auto text-center mt-8 gap-7 p-4">
      <h1 className="text-2xl sm:text-4xl text-black max-w-xl mx-auto">
        Discover how Ezbooq Best Serves Your Industry
      </h1>
      <p className="text-sm sm:text-base text-black mb-8">
        Explore Ezbooq suite of business software by industry and learn how you
        can start automating.
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-6">
        {IndustryData.map((industry) => (
          <div key={industry.id}>
            <IndustryCard
              title={industry.title}
              image={industry.image[0]}
              slug={industry.slug}
            />
          </div>
        ))}
      </div>
    </main>
  );
}
