import HeroSection from "@/components/HeroSection";
import ShowCase from "@/components/ShowCase";
import SkillSection from "@/components/SkillSection";
import { ImDownload } from "react-icons/im";

export default function Home() {
  return (
    <main className="max-w-6xl mx-auto px-4">
      <HeroSection></HeroSection>
      <SkillSection></SkillSection>
      <ShowCase></ShowCase>
    </main>
  );
}
