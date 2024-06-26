import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import { ImDownload } from "react-icons/im";
import Aso from "@/components/Aso";
import Link from "next/link";
import { FaLinkedin, FaGithub, FaDiscord } from "react-icons/fa";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Shahin Alam",
  description: "Portfolio of Shahin Alam",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="text-white/90 bg-primary dark:bg-[#0f172a] font-noto">
        <Aso></Aso>
        <div className="md:fixed z-50 md:flex md:h-screen items-center">
          <NavBar></NavBar>
        </div>
        <div className="md:fixed md:inline hidden h-[500px]  right-16 bottom-0 -">
          <div className="flex flex-col justify-center gap-7 text-secondary text-4xl mb-5">
            <Link
              href={"https://www.linkedin.com/in/shahinaalam/"}
              target="_blank"
            >
              <FaLinkedin className="border rotate-45 border-secondary p-1 hover:rotate-0 duration-500" />
            </Link>
            <Link href={"https://github.com/shahinexy"} target="_blank">
              <FaGithub className="border rotate-45 border-secondary p-1 hover:rotate-0 duration-500" />
            </Link>
            <Link
              href={"https://discordapp.com/users/1121657284288856205"}
              target="_blank"
            >
              <FaDiscord className="border rotate-45 border-secondary p-1 hover:rotate-0 duration-500" />
            </Link>
          </div>
          <div className="flex justify-center h-full">
          <div className="border-r border-secondary h-full  inline-block"></div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-4 pt-7 flex justify-between">
          <p> <a href="mailto:shahinabrar33@gmail.com">shahinabrar33@gmail.com</a> </p>
          <a href="./resume/RESUME-OF-SHAHIN-ALAM.pdf" download="RESUME-OF-SHAHIN-ALAM">
            <button className="cursor-pointer bg-secondary hover:bg-primary text-black/80 hover:text-white font-semibold duration-500 px-4 py-2 active:translate-x-0.5 active:translate-y-0.5 hover:shadow-[0.3rem_0.3rem_#F44336,-0.3rem_-0.3rem_#00BCD4] transition flex gap-2 items-center">
              <ImDownload className="text-lg" /> Resume
            </button>
          </a>
        </div>
        {children}
      </body>
    </html>
  );
}
