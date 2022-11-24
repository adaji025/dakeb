import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import banner1 from "../../assets/images/banner1.png";
import banner2 from "../../assets/images/banner-2.png";
import banner3 from "../../assets/images/banner3.png";

import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper";

const Home = () => {
  return (
    <div className="h-screen w-full flex items-center justify-center">
      <Swiper
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        speed={1000}
        loop={true}
        // pagination={{
        //   clickable: true,
        // }}
        navigation={true}
        modules={[Navigation]}
        className="w-full"
      >
        <SwiperSlide>
          <div className="relative">
            <img src={banner1} alt="" className="object-cover h-screen" />
            <div className="absolute top-0 left-0 w-full h-screen flex justify-center items-center">
              <div className="text-center mx-auto">
                <h2 className="text-white text-center font-bold text-[52px] max-w-[600px]">
                  Lorem <span className="text-primary-yellow">ipsum</span> dolor
                  sit, amet consectetur
                </h2>
                <p className="text-white text-center text-xl max-w-[650px]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dignissimos iure voluptatum vitae sed ipsa saepe quam qui sint
                  deserunt maiores.
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={banner2} alt="" className="object-cover h-screen" />
          <div className="absolute top-0 left-0 w-full h-screen flex justify-center items-center">
            <div className="text-center mx-auto">
              <h2 className="text-white text-center font-bold text-[52px] max-w-[600px]">
                Lorem <span className="text-primary-yellow">ipsum</span> dolor
                sit, amet consectetur
              </h2>
              <p className="text-white text-center text-xl max-w-[650px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Dignissimos iure voluptatum vitae sed ipsa saepe quam qui sint
                deserunt maiores.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={banner3} alt="" className="object-cover h-screen" />
          <div className="absolute top-0 left-0 w-full h-screen flex justify-center items-center">
            <div className="text-center mx-auto">
              <h2 className="text-white text-center font-bold text-[52px] max-w-[600px]">
                Lorem <span className="text-primary-yellow">ipsum</span> dolor
                sit, amet consectetur
              </h2>
              <p className="text-white text-center text-xl max-w-[650px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Dignissimos iure voluptatum vitae sed ipsa saepe quam qui sint
                deserunt maiores.
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Home;
