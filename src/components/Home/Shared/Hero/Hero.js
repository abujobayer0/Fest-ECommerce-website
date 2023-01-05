import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "./Style.css";
import Navbar from "../../../Navbar/Navbar";
import OverLaySearch from "./OverLaySearch";

// import required modules

export default function Hero() {
  return (
    <>
      <Navbar></Navbar>
      <Swiper
        rewind={true}
        pagination={{
          dynamicBullets: true,
        }}
        style={{ position: "relative" }}
        slidesPerView={1}
        loop={true}
        navigation={true}
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper"
        autoplay={{ delay: 3000 }}
      >
        <SwiperSlide>
          <div className="w-full relative  px-8 py-4 h-[500px]">
            {" "}
            <img
              className="w-full flip  rounded-xl "
              src={
                "https://img.freepik.com/free-photo/fresh-fruits-arrangement-view_23-2148949698.jpg?w=740&t=st=1672829482~exp=1672830082~hmac=e3c1b3efc98ac7a8cc9ebe8e92e06086313d1554650a54c861b53359dda10cb8"
              }
              alt=""
            />
            <div className="w-full absolute flex  left-0  top-0 h-[500px]">
              <OverLaySearch
                title={"  Fresh VegeTable  Big discount"}
                p={"Sign Up for Daily newslatter"}
              ></OverLaySearch>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className="w-full   px-8 h-[500px] py-4  ">
            <img
              className="w-full rounded-xl "
              src={
                "https://img.freepik.com/free-photo/vegetables-arrangement-with-copy-space_23-2148949685.jpg?w=740&t=st=1672829421~exp=1672830021~hmac=c891133ddc4c33f9fc4fae1a05ac04d09e86481f594890ba0c2185c84a77ae15"
              }
              alt=""
            />
            <div className="w-full absolute flex  left-0  top-0 h-[500px]">
              <OverLaySearch
                title={"Dont miss amazing grocerry deals"}
                p={"Tell Your Story"}
              ></OverLaySearch>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
