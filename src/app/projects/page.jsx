"use client"
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Loader from "@/components/Loader";

const ProjectsPage = () => {
    const [datas, setDatas] = useState([])

    useEffect(()=>{
        const fetchData = async ()=>{
            const res = await fetch('./projects.json')
            const data = await res.json();
            setDatas(data)
        }
        fetchData()
    },[])
    
    if(datas.length === 0) return <Loader></Loader>
  return (
    <div className="max-w-6xl mx-auto px-4 pb-20">
      <h1 className="text-4xl font-semibold my-12 uppercase text-center">
        <span className="text-secondary">&#47;&#47; </span> Projects
        <span className="text-secondary"> &#47;&#47; </span>
      </h1>

      <div className="grid md:grid-cols-3 grid-cols-1 gap-10">
        {
            datas.map(item => <div key={item.id}>
      <Link href={`/projects/${item.project_name}`}>
          <div className="shadow-xl shadow-black/50 hover:shadow-black/30 group duration-300 ">
            <div className="overflow-hidden">
            <Image className="group-hover:scale-110 group-hover:rotate-1 duration-500" src={item.image} alt="Logo"  width={1000} height={800}></Image>
            </div>
            <div className="px-3 py-4 border border-black/10">
                <h2 className="text-2xl font-medium">{item.project_name}</h2>
                <p className="text-gray-300/90 text-lg mb-5">{item.project_type}</p>
                <div className="flex justify-evenly gap-4 flex-wrap pb-2">
                {
                  item?.tools.slice(0,8).map((tool, idx) => <p key={idx} className="shadow-lg shadow-black/50 px-3"> {tool} </p>)
                }
                </div>
            </div>
          </div>
          </Link>
            </div>)
        }

      </div>
    </div>
  );
};

export default ProjectsPage;
