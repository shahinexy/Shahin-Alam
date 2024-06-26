"use client"
import { TbPlayerTrackNextFilled } from "react-icons/tb";
import { FaLinkedin, FaGithub, FaDiscord } from "react-icons/fa";
import shahinImage from "../../public/images/Shahin-Alam.jpg";
import Image from "next/image";
import Link from "next/link";
import { Typewriter } from "react-simple-typewriter";

const HeroSection = () => {
    return (
        <div className="flex lg:flex-row flex-col-reverse lg:gap-0 gap-3  lg:my-36 my-10">
        <div className="lg:w-1/2 md:text-start text-center">
          <p data-aos="zoom-in-up"  data-aos-duration="500"  className="md:text-xl text-lg font-medium">Hello! I&apos;m</p>
          <h1 data-aos="zoom-in-up"  data-aos-duration="500"  data-aos-delay="200" className="md:text-5xl text-3xl font-medium uppercase mb-3">Shahin Alam</h1>
          <p data-aos="zoom-in-up"  data-aos-duration="500"  data-aos-delay="400" className="text-xl mb-5">
            I&apos;m a <span className="md:text-3xl text-2xl text-secondary font-medium"> 
            <Typewriter
            words={['Front-End Developer.', 'React Developer.', 'Passionate Programmer.', 'Web Developer.']}
            loop={false}
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
               </span>
          </p>
          <p data-aos="zoom-in-up"  data-aos-duration="500"  data-aos-delay="600" className="md:text-lg">
            I&apos;m a Front-End developer with good Back-End knowledge. Passionate about
            continuous learning and exploring new things daily. Dedicated and
            efficient, strive to complete tasks on time and always give my best
            effort. Currently seeking an opportunity to work with a team to gain
            real world experience and increase my skills.
          </p>
          <div data-aos="zoom-in-up"  data-aos-duration="500"  data-aos-delay="800" className="flex md:justify-start justify-center gap-10 items-center my-8">
            <Link href={"/contact"}>
            <button className="cursor-pointer bg-secondary hover:bg-primary text-black/80 hover:text-white font-semibold duration-500 px-4 py-2 active:translate-x-0.5 active:translate-y-0.5 hover:shadow-[0.3rem_0.3rem_#F44336,-0.3rem_-0.3rem_#00BCD4] transition flex gap-2 items-center">
              <TbPlayerTrackNextFilled className="text-lg" /> Hire Me
            </button>
            </Link>
            <div className="flex gap-4 text-secondary text-4xl">
              <Link data-aos="zoom-in-right"  data-aos-duration="500"  data-aos-delay="1200" href={"https://www.linkedin.com/in/shahinaalam/"} target="_blank">
                <FaLinkedin className="border border-secondary p-1 hover:rotate-6 duration-500" />
              </Link>
              <Link data-aos="zoom-in-right"  data-aos-duration="500"  data-aos-delay="1400" href={"https://github.com/shahinexy"} target="_blank">
                <FaGithub className="border border-secondary p-1 hover:rotate-6 duration-500" />
              </Link>
              <Link data-aos="zoom-in-right"  data-aos-duration="500"  data-aos-delay="1600" href={"https://discordapp.com/users/1121657284288856205"} target="_blank">
                <FaDiscord className="border border-secondary p-1 hover:rotate-6 duration-500" />
              </Link>
            </div>
          </div>
        </div>
        <div className="lg:w-1/2 flex justify-center">
          <div data-aos="zoom-in"  data-aos-duration="500" >
            <Image
              className="rounded-full border p-1 border-secondary"
              src={shahinImage}
              alt="Logo"
              width={300}
              height={300}
            />
          </div>
        </div>
      </div>
    );
};

export default HeroSection;