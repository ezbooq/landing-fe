import Features from "@/components/feature/Features";
import Hero from "@/components/hero/Hero";
import Hero2 from "@/components/hero/Hero2";
import Hero3 from "@/components/hero/Hero3";
import Team from "@/components/team/Team";

export default function Home() {
  return (
    <main className="relative flex justify-center items-center flex-col overflow-hidden mx-auto">
      <div className="w-full">
        <Hero />
        <Hero2 />
        <Features />
        <Team />
        <Hero3 />
      </div>
    </main>
  );
}
