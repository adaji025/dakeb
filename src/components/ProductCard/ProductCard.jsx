import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const ProductCard = ({item, idx}) => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="w-[269px] h-[302px] bg-white flex flex-col items-center justify-center shadow-md p-4 rounded-[30px]"   
    data-aos={idx === 0 ? 'fade-right' : idx === 1 ? 'fade-down' : idx === 2 ? 'fade-up' : 'fade-left'} data-aos-duration="2000">
      <img src={item.img} alt="" />
      <h4 className="my-2">{item.title}</h4>
      <p className="text-center">{item.text}</p>
    </div>
  );
};

export default ProductCard;
