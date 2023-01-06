import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";
import SlideItem from "./SlideItem";
const Catagories = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("catagories.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div className="flex flex-col p-4 w-full h-fit relative">
      <h1 className="pt-10  px-8 text-left text-[#253d4e]  text-3xl lg:text-4xl font-semibold pb-10">
        Featured Categories
      </h1>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        rewind={true}
        breakpoints={{
          640: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {products.map((product) => (
          <SwiperSlide>
            {" "}
            <SlideItem
              key={product.image}
              name={product.name}
              bg={product.bg}
              img={product.image}
            ></SlideItem>{" "}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Catagories;
