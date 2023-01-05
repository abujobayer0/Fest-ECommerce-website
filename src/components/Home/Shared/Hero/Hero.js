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
              className="w-full   rounded-xl "
              src={
                "https://cdn.shopify.com/s/files/1/0652/4570/8532/files/slider-1-2.jpg?v=1659427625&width=2100"
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
                "https://cdn.shopify.com/s/files/1/0652/4570/8532/files/slider-1-1.jpg?v=1659427625&width=2100"
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
