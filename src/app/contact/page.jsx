import Link from "next/link";
import { FaLinkedin, FaGithub, FaDiscord } from "react-icons/fa";

const ContactPage = () => {
  return (
    <div className="flex flex-col justify-center pb-20 mt-10 items-center">
            <h1 className="text-4xl font-semibold mb-5 uppercase text-center">
        <span className="text-secondary">&#47;&#47; </span> Contact
        <span className="text-secondary"> &#47;&#47; </span>
      </h1>
      <div className="md:w-2/4 mx-4 shadow-2xl">
        <form className="px-24 pt-24 pb-7 space-y-7">
          <div>
            <input
              type="text"
              placeholder="Name"
              className="bg-inherit w-full border-b text-lg px-2 py-3 outline-none"
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Email"
              className="bg-inherit w-full border-b text-lg px-2 py-3 outline-none"
            />
          </div>
          <div className="pb-5">
            <textarea
              placeholder="Message"
              rows="3"
              className="bg-inherit w-full border-b text-lg px-2 py-3 outline-none"
            ></textarea>
          </div>
          <button className="w-full border py-2 text-xl font-medium hover:scale-95 duration-500">
            Send Message
          </button>
        </form>
        <div className="text-center mb-10">
          <h1 className="text-2xl py-2 border-t mb-5 mt-8 font-medium">
            Connect
          </h1>
          <div className="flex justify-center gap-7 text-secondary text-4xl mb-5">
            <Link
              href={"https://www.linkedin.com/in/shahinaalam/"}
              target="_blank"
            >
              <FaLinkedin className="border border-secondary p-1 hover:rotate-6 duration-500" />
            </Link>
            <Link href={"https://github.com/shahinexy"} target="_blank">
              <FaGithub className="border border-secondary p-1 hover:rotate-6 duration-500" />
            </Link>
            <Link
              href={"https://discordapp.com/users/1121657284288856205"}
              target="_blank"
            >
              <FaDiscord className="border border-secondary p-1 hover:rotate-6 duration-500" />
            </Link>
          </div>
          <p className="text-xl">
          <a href="mailto:shahinabrar33@gmail.com">shahinabrar33<span className="text-secondary">@</span>gmail.com</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
