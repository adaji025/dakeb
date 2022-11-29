import React from "react";
import { Grid } from "swiper";
import ServiceCard from "../../components/ServiceCard/ServiceCard";
import { animalHusbandary, plantation } from "../../data/data";
import styles from "./Service.module.css";

const Service = () => {
  return (
    <>
      <div className={styles.serviceContainer}>
        <div className="w-full flex items-center justify-center h-full text-center">
          <h2 className="text-5xl text-primary-yellow font-semibold z-10">
            What we do
          </h2>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto my-20 p-4">
        <h2 className="text-lg text-primary-green-100">Dakeb farms</h2>
        <div className="sm:text-[32px] text-primary-green-100 font-anglecia flex gap-2 items-center py-2">
          <span className="block">Animal</span>{" "}
          <span className="block border-b-4 border-primary-yellow">
          Plantation
          </span>
        </div>
        <div className="mt-5 grid grid-cols-2 lg:grid-cols-3 gap-10">
          {animalHusbandary.map((item, idx) => (
            <ServiceCard {...{ item }} key={idx} />
          ))}
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto my-20 p-4">
        <div className="sm:text-[32px] text-primary-green-100 font-anglecia flex gap-2 items-center py-2">
          <span className="block border-b-4 border-primary-yellow">
            Husbandary
          </span>
        </div>
        <div className="mt-5 grid grid-cols-2 lg:grid-cols-3 gap-10">
          {plantation.map((item, idx) => (
            <ServiceCard {...{ item }} key={idx} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Service;
