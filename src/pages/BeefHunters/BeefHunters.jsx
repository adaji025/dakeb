import React from "react";
import { BiUser } from "react-icons/bi";
import { CiMail } from "react-icons/ci";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { BsGenderFemale, BsTelephone } from "react-icons/bs";
import { CustomInputField } from "../../components/FormFields/FormFields";
import styles from "../Services/Service.module.css";

const BeefHunters = () => {
  return (
    <>
      <div className={styles.serviceContainer}>
        <div className="w-full flex items-center justify-center h-full text-center">
          <h2 className="text-5xl text-primary-yellow font-semibold mt-20 z-10">
            Become a beef hunter
          </h2>
        </div>
      </div>
      <div className="mt-20 text-center">
        <h1 className="font-semibold text-[32px] text-primary-green-50 font-anglecia">
          Join our chick hunter program
        </h1>
        <p className="max-w-[502px] mx-auto mt-3 text-primary-dark-50">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo
          placerat enim fames egestas libero.
        </p>
        <div className="flex flex-col items-center my-20 p-4">
          <div className="max-w-[607px] w-full mb-5">
            <CustomInputField
              placeholder="Your name"
              icon={<BiUser size={25} color="#4F4F4F" />}
            />
          </div>
          <div className="max-w-[607px] w-full mb-5">
            <CustomInputField
              placeholder="Your name"
              icon={<BsTelephone size={25} color="#4F4F4F" />}
            />
          </div>
          <div className="max-w-[607px] w-full mb-5">
            <CustomInputField
              placeholder="Your name"
              icon={<CiMail size={25} color="#4F4F4F" />}
            />
          </div>
          <div className="max-w-[607px] w-full mb-5">
            <CustomInputField
              placeholder="Your name"
              icon={<HiOutlineLocationMarker size={25} color="#4F4F4F" />}
            />
          </div>
          <div className="max-w-[607px] w-full mb-6">
            <CustomInputField
              placeholder="Your name"
              icon={<BsGenderFemale size={25} color="#4F4F4F" />}
            />
          </div>
          <div>
            <button className="border  bg-primary-green-50 border-primary-green-50 text-white w-[192px] h-[55px] rounded-[30px] hover:text-primary-green-50  hover:bg-white  transition-all duration-300">
              Get started
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default BeefHunters;
