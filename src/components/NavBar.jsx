"use client";
import Link from "next/link";
import { BiHomeAlt } from "react-icons/bi";
import { AiOutlineProject } from "react-icons/ai";
import { VscBook } from "react-icons/vsc";
import { IoMailOutline } from "react-icons/io5";
import { usePathname } from "next/navigation";
import useTheme from "@/hooks/useTheme";

const NavBar = () => {
    const pathName = usePathname();
    const {changeTheme} = useTheme()
    return (
        <div className="border-y border-r  md:rounded-e-md border-secondary shadow-lg shadow-black/50">
        <nav>
          <ul className="flex md:flex-col justify-center items-center text-white gap-10 px-4 md:py-7 py-3 text-3xl">
            <Link
              href={"/"}
              className={`${
                pathName === "/" && "text-secondary"
              } hover:scale-125 hover:translate-x-1 duration-300`}
            >
              <BiHomeAlt />
            </Link>
            <Link
              href={"/projects"}
              className={`${
                pathName === "/projects" && "text-secondary"
              } hover:scale-125 hover:translate-x-1 duration-300`}
            >
              <AiOutlineProject />
            </Link>
  
            <label className="swap swap-rotate border rounded-full p-1 hover:scale-110 duration-300">
              {/* this hidden checkbox controls the state */}
              <input
              onChange={changeTheme}
                type="checkbox"
                className="theme-controller"
                value="dark"
              />
  
              {/* sun icon */}
              <svg
                className="swap-off fill-current w-8 h-8"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
              </svg>
  
              {/* moon icon */}
              <svg
                className="swap-on fill-current w-8 h-8"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
              </svg>
            </label>
  
            <Link
              href={"/blogs"}
              className={`${
                pathName === "/blogs" && "text-secondary"
              } hover:scale-125 hover:translate-x-1 duration-300`}
            >
              <VscBook />
            </Link>
            <Link
              href={"/contact"}
              className={`${
                pathName === "/contact" && "text-secondary hover:scale-125"
              } hover:scale-125 hover:translate-x-1 duration-300`}
            >
              <IoMailOutline />
            </Link>
          </ul>
        </nav>
      </div>
    );
};

export default NavBar;