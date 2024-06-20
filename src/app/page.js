import HeroSection from "@/components/HeroSection";
import ShowCase from "@/components/ShowCase";
import SkillSection from "@/components/SkillSection";
import { ImDownload } from "react-icons/im";

export default function Home() {
  return (
    <main className="max-w-6xl mx-auto px-4 pt-7">
      <div className="flex justify-between">
        <p>shahinabrar33@gmail.com</p>
        <button className="cursor-pointer bg-secondary hover:bg-primary text-black/80 hover:text-white font-semibold duration-500 px-4 py-2 active:translate-x-0.5 active:translate-y-0.5 hover:shadow-[0.3rem_0.3rem_#F44336,-0.3rem_-0.3rem_#00BCD4] transition flex gap-2 items-center">
         <ImDownload className="text-lg" /> Resume
        </button>
      </div>
      <HeroSection></HeroSection>
      <SkillSection></SkillSection>
      <ShowCase></ShowCase>
    </main>
  );
}
