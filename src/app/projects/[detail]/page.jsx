"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import Link from "next/link";
import { TbWorld } from "react-icons/tb";
import { FaGithub } from "react-icons/fa";
import Loader from "@/components/Loader";

const ProjectDetail = ({ params }) => {
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("../projects.json");
      const data = await res.json();
      setDatas(data);
    };
    fetchData();
  }, []);

  const project = datas.find((data) => data.project_name === params.detail);

  if (!project) return <Loader></Loader>;
  return (
    <div className="max-w-2xl mx-auto px-4 md:pt-12 pb-20">
      <div className="text-base breadcrumbs mb-3">
        <ul>
          <li>
            <Link href={`/`}>Home</Link>
          </li>
          <li>
            <Link href={`/projects`}>Projects</Link>
          </li>
          <li className="text-secondary">{project.project_name}</li>
        </ul>
      </div>
      <div>
        <Image
          src={project?.image}
          alt="Logo"
          width={1000}
          height={800}
        ></Image>
      </div>
      <div className="mt-5">
        <h1 className="text-3xl font-medium">{project.project_name}</h1>
        <p className="text-xl text-white/80">{project.project_type}</p>
        <div className="mt-4">
          <p className="text-xl font-medium mb-2">Feature:</p>
          <ul className="list-disc ml-8 space-y-3">
            {project.features.map((item, idx) => (
              <li key={item.idx}>{item}</li>
            ))}
          </ul>
        </div>

        <p className="text-xl font-medium mb-2 mt-6">Tools:</p>
        <div className="flex gap-4 flex-wrap mb-5">
          {project?.tools.map((tool, idx) => (
            <p key={idx} className="shadow-lg shadow-black/50 px-3">
              {" "}
              {tool}{" "}
            </p>
          ))}
        </div>

        <div className="grid sm:grid-cols-3 grid-cols-1 gap-3 mt-12">
          <Link
            href={`${project.live_link}`}
            target="_blank"
            className="w-full"
          >
            <button className="w-full flex items-center gap-2 justify-center border py-2 text-xl font-medium hover:scale-95 duration-500">
              <TbWorld className="text-2xl" /> Live Link
            </button>
          </Link>
          <Link
            href={`${project.client_repo_link}`}
            target="_blank"
            className="w-full"
          >
            <button className="w-full flex items-center gap-2 justify-center border py-2 text-xl font-medium hover:scale-95 duration-500">
              <FaGithub className="text-2xl" /> Client Repo
            </button>
          </Link>

          {project?.server_repo_link && (
            <Link
              href={`${project.server_repo_link}`}
              target="_blank"
              className="w-full"
            >
              <button className="w-full flex items-center gap-2 justify-center border py-2 text-xl font-medium hover:scale-95 duration-500">
                <FaGithub className="text-2xl" /> Server Repo
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
