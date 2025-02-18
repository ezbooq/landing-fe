import Features from "@/components/section/home/feature/Features";
import Hero from "@/components/section/home/hero/Hero";
import Hero2 from "@/components/section/home/hero/5stars";
import Team from "@/components/section/home/team/Team";
import { Map } from "@/components/section/home/map/Map";
import Stats from "@/components/section/home/stats/Stats";
import Companies from "@/components/section/home/companies/Companies";

export default function Home() {
  return (
    <main className="relative flex justify-center items-center flex-col overflow-hidden mx-auto">
      <div className="w-full">
        <Hero />
        <Companies />
        <Hero2 />
        <Features />
        <Team />
        {/* <Review /> */}
        <Stats />
        <Map />
      </div>
    </main>
  );
}
