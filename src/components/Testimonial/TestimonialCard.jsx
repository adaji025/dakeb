import { useEffect } from "react";
import {Tooltip} from '@mantine/core'
import qMark from "../../assets/svg/qmark.svg";

import AOS from "aos";
import "aos/dist/aos.css";

const TestimonialCard = ({ item, idx }) => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <Tooltip label="Tooltip" className="text-primary-green-50">
    <div className="max-w-[431px] h-[283px] w-full flex justify-center items-center flex-col bg-white shadow-md rounded-[20px] overflow-hidden hover:scale-105 duration-300"
    // data-aos="flip-up"
    >
      <img src={qMark} alt="" />
      <p className="w-[350px] mx-auto text-center my-3">{item.desc}</p>
      <div className="flex gap-2">
        <img src={item.img} alt="" className="h-[55px] w-[55px] rounded-full" />
        <div>
          <h5>{item.name}</h5>
          <p>{item.title}</p>
        </div>
      </div>
    </div>
    </Tooltip>
  );
};

export default TestimonialCard;
