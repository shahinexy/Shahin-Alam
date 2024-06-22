"use client"
import { TbPlayerTrackNextFilled } from "react-icons/tb";
import Link from "next/link";

const HireMe = () => {
    return (
        <div data-aos="zoom-in" data-aos-duration="3000" className="bg-secondary flex md:flex-row flex-col items-center gap-5 py-7 sm:px-32 px-5 mt-20">
            <div className="md:text-start text-center">
                <h1 className="text-primary  text-3xl font-semibold">HIRE ME FOR YOUR AWESOME PROJECT</h1>
                <p className="text-lg text-primary mt-2">I&apos;m a very dedicated person who consistently strivers to complete tasks efficiently and on time, always giving my best effort.</p>
            </div>
            <div className="md:w-2/6">
            <Link href={"/contact"} className="">
            <button className="cursor-pointer  bg-primary hover:bg-primary text-white hover:text-white font-semibold duration-500 px-4 py-2 active:translate-x-0.5 active:translate-y-0.5 hover:shadow-[0.3rem_0.3rem_#F44336,-0.3rem_-0.3rem_#00BCD4] transition flex gap-2 items-center">
              <TbPlayerTrackNextFilled className="text-lg" /> Contact Me
            </button>
            </Link>
            </div>
        </div>
    );
};

export default HireMe;