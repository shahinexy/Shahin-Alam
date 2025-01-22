import Image from "next/image";
import Link from "next/link";
import react from "../../../public/images/1_JdkEvoNMusSGEuuqUZ0OLg.jpg";
import { MdArrowOutward } from "react-icons/md";
import typeScript from "../../../public/images/ts-type-guard.png";

const BlogPage = () => {
  return (
    <div className="max-w-6xl mx-auto h-screen px-4 pb-20 mt-10">
      <h1
        data-aos="zoom-out-down"
        data-aos-duration="500"
        className="text-4xl font-semibold mb-5 uppercase text-center"
      >
        <span className="text-secondary font-normal">&#47;&#47; </span> Blogs
        <span className="text-secondary font-normal"> &#47;&#47; </span>
      </h1>
      <div className="grid md:grid-cols-3 grid-cols-1 gap-5 text-center mt-12">
        <div class="relative h-[350px] group duration-500 cursor-pointer group overflow-hidden text-gray-50 hover:duration-700 ">
          <div>
            <Image
              className="h-72"
              src={react}
              alt="Logo"
              width={800}
              height={600}
            />
          </div>

          <div class="absolute bg-gray-50 -bottom-16 p-3 flex flex-col gap-1 group-hover:-bottom-0 group-hover:duration-600 duration-500">
            <span class="text-primary font-bold text-xl">
              What is React? Why should we use React for the front-end?
            </span>
            <span class="flex justify-center mt-3">
              <Link
                href={`https://www.linkedin.com/pulse/what-react-why-should-we-use-front-end-shahin-alam-t57ue/?trackingId=6tvFdsQxQ1a%2BCMtrhFRc%2Fw%3D%3D`}
                target="_blank"
              >
                <button className="flex gap-2 items-center text-xl text-primary hover:bg-primary hover:text-white duration-500 border border-primary px-7 py-1">
                  View <MdArrowOutward />{" "}
                </button>
              </Link>
            </span>
          </div>
        </div>
        <div class="relative h-[350px] group duration-500 cursor-pointer group overflow-hidden text-gray-50 hover:duration-700 ">
          <div>
            <Image
              className="h-72"
              src={typeScript}
              alt="Logo"
              width={800}
              height={600}
            />
          </div>

          <div class="absolute bg-gray-50 -bottom-16 p-3 flex flex-col gap-1 group-hover:-bottom-0 group-hover:duration-600 duration-500">
            <span class="text-primary font-bold text-xl">
              The Importance of Type Guards in TypeScript: Types & Use Cases
            </span>
            <span class="flex justify-center mt-3">
              <Link
                href={`https://www.linkedin.com/pulse/importance-type-guards-typescript-types-use-cases-shahin-alam-cwgye/?trackingId=U3wgWOjqlegdIOq2sap%2Bjw%3D%3D`}
                target="_blank"
              >
                <button className="flex gap-2 items-center text-xl text-primary hover:bg-primary hover:text-white duration-500 border border-primary px-7 py-1">
                  View <MdArrowOutward />{" "}
                </button>
              </Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
