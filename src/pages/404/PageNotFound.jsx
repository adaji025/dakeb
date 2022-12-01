import React from "react";
import { useNavigate } from "react-router-dom";
import oops from "../../assets/images/404.png";

const PageNotFound = () => {
  const navigate = useNavigate()
  return (
    <div className="h-screen sm:h-[110vh] flex flex-col justify-center items-center">
      <img src={oops} alt="" />
      <button className="border mt-5 bg-primary-green-50 border-primary-green-50 text-white w-[250px] h-[55px] rounded-[30px] hover:text-primary-green-50  hover:bg-white  transition-all duration-300"
      onClick={() => navigate('/')}>
      Back to home
      </button>
    </div>
  );
};

export default PageNotFound;
