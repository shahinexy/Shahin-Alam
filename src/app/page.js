import HeroSection from "@/components/HeroSection";
import HireMe from "@/components/HireMe";
import ShowCase from "@/components/ShowCase";
import SkillSection from "@/components/SkillSection";


export default function Home() {
  return (
    <main className="max-w-6xl mx-auto px-4 pb-20">
      <HeroSection></HeroSection>
      <SkillSection></SkillSection>
      <ShowCase></ShowCase>
      <HireMe></HireMe>
    </main>
  );
}
