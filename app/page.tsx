import Features from "@/components/section/home/feature/Features";
import Hero from "@/components/section/home/hero/Hero";
import Hero2 from "@/components/section/home/hero/5stars";
import Team from "@/components/section/home/team/Team";
import { Map } from "@/components/section/home/map/Map";

export default function Home() {
  return (
    <main className="relative flex justify-center items-center flex-col overflow-hidden mx-auto">
      <div className="w-full">
        <Hero />
        <Hero2 />
        <Features />
        <Team />
        {/* <Review /> */}
        <Map />
      </div>
    </main>
  );
}
