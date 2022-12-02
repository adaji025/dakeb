import { Grid, Tooltip } from "@mantine/core";
import { Swiper } from "swiper/react";
import { SwiperSlide } from "swiper/react";
import littleFlower from "../../assets/svg/little-flower.svg";

import "swiper/css";
import "swiper/css/effect-cards";

import { EffectCards, } from "swiper";
import { testimonialData } from "../../data/data";
import TestimonialCard from "./TestimonialCard";

const Testimonial = () => {
  return (
    <div className="min-h-[50vh] w-full flex items-center justify-center max-w-[1440px] mx-auto p-4">
      <Grid className="w-full overflow-hidden">
        <Grid.Col md={6} className="w-full">
          <div className="flex gap-2 mb-2">
            <img src={littleFlower} alt="" />
            <p className="font-anglecia text-primary-green-50">Testimonials</p>
          </div>
          <h2 className="text-2xl sm:text-[32px] font-anglecia text-primary-green-100">
            Hear from happy clients
          </h2>
          <p className="mt-5 text-primary-green-50 max-w-[550px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien
            massa urna venenatis
          </p>
          <button className="bg-primary-yellow hover:scale-105  mt-5 text-white w-[192px] h-[55px] rounded-[30px]  hover:bg-primary-green-50/80 hover:text-white  transition-all duration-300">
            Get started
          </button>
        </Grid.Col>
        <Grid.Col md={6} className="justify-center mt-5 md:mt-0">
        <Tooltip label="Tooltip" className="text-primary-green-50">
          <Swiper
            effect={"cards"}
            grabCursor={true}
            modules={[EffectCards]}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
            // loop={true}
            className="mySwiper"
          >
            
            {testimonialData.map((item, idx) => {
              return (
                <SwiperSlide key={idx}>

                  <TestimonialCard {...{ item, idx }} />
                </SwiperSlide>
              );
            })}
          </Swiper>
            </Tooltip>
        </Grid.Col>
      </Grid>
    </div>
  );
};

export default Testimonial;
