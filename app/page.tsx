import Features from "@/components/section/home/feature/Features";
import Hero from "@/components/section/home/hero/Hero";
import Hero2 from "@/components/section/home/hero/5stars";
import Review from "@/components/section/home/review/Review";
import Team from "@/components/section/home/team/Team";

export default function Home() {
  return (
    <main className="relative flex justify-center items-center flex-col overflow-hidden mx-auto">
      <div className="w-full">
        <Hero />
        <Hero2 />
        <Features />
        <Team />
        <Review />
      </div>
    </main>
  );
}
