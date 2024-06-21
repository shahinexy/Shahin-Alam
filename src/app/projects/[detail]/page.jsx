"use client"
import { useState, useEffect } from "react";

const ProjectDetail = ({params}) => {
    const [datas, setDatas] = useState([])

    useEffect(()=>{
        const fetchData = async ()=>{
            const res = await fetch('../projects.json')
            const data = await res.json();
            setDatas(data)
        }
        fetchData()
    },[])

    const project = datas.find(data => data.project_name === params.detail);

    return (
        <div className="max-w-6xl mx-auto px-4 pb-20">
            {project.project_name}
        </div>
    );
};

export default ProjectDetail;