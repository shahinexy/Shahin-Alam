 "use client"
import Image from "next/image";
import { useEffect, useState } from "react";


import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import { EffectCoverflow, Pagination } from 'swiper/modules';

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

      {/* <div className="p-3 shadow-lg">
        <Image src={} alt="Logo"></Image>
        <div className="p-3">
            <h2 className="text-xl ">Name</h2>
        </div>
      </div> */}

      <Swiper
        effect={'coverflow'}
        slidesPerView={3}
        spaceBetween={10}
        loop={true}
        grabCursor={true}
        centeredSlides={true}
        // slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        {
          datas?.map(item => <SwiperSlide key={item.id} >
            <div className="shadow-lg ">
            <Image src={item.image} alt="Logo"  width={1000} height={800}></Image>
            <div className="p-3">
                <h2 className="text-xl ">Name</h2>
            </div>
          </div>
            </SwiperSlide>)
        }
      </Swiper>
    </div>
  );
};

export default ShowCase;
