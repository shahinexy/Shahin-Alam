 "use client"
import { useEffect, useState } from "react";

const ShowCase = () => {
    const [datas, setDatas] = useState([])

    useEffect(()=>{
        const fetchData = async ()=>{
            const res = await fetch('./projects.json')
            const data = await res.json();
            setDatas(data)
        }
        fetchData()
    },[])
    console.log(datas);
  return (
    <div className="pb-12">
      <h1 className="text-4xl font-semibold mb-12 uppercase text-center">
        <span className="text-secondary">&#47;&#47; </span> Showcase
        <span className="text-secondary"> &#47;&#47; </span>
      </h1>

      <div>
        
      </div>
    </div>
  );
};

export default ShowCase;
