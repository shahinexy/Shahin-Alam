 "use client"
import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';

import { EffectCoverflow, Mousewheel } from 'swiper/modules';

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
      <h1 data-aos="zoom-out-down" data-aos-duration="500" className="text-4xl font-semibold mb-12 uppercase text-center">
        <span className="text-secondary font-normal">&#47;&#47; </span> Showcase
        <span className="text-secondary font-normal"> &#47;&#47; </span>
      </h1>

      <Swiper
        effect={'coverflow'}
        slidesPerView={'auto'}
        spaceBetween={20}
        mousewheel={true}
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
        breakpoints={{
          768: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        }}
        modules={[EffectCoverflow, Mousewheel]}
        className="mySwiper"
      >
        {
          datas?.map(item => <SwiperSlide key={item.id} className="py-5" >
          <Link href={item.live_link} target="_blank">
          <div className="shadow-xl shadow-black/50 hover:shadow-secondary/10 duration-300">
            <Image src={item.image} alt="Logo"  width={1000} height={800}></Image>
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
            </SwiperSlide>)
        }
      </Swiper>
    </div>
  );
};

export default ShowCase;
