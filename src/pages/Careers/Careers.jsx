import React from "react";
import CareerCard from "../../components/CareerCard/CareerCard";
import { careers } from "../../data/data";

const Careers = () => {
  return (
    <>
      <div className="h-[50vh] flex justify-center items-center">
        <div className="p4 text-center">
          <h2 className="font-bold text-primary-dark-100 text-3xl mt-20 lg:text-[52px] xl:text-[56px]">
            Be a part of our{" "}
            <span className="text-primary-green-50">mission</span> and{" "}
            <span className="text-primary-green-50">vision</span>
          </h2>
          <p className="max-w-[450px] mx-auto mt-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo
            placerat enim fames egestas libero.
          </p>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto p-4 grid gap-6 mb-32">
        {careers.map((item, idx) => (
          <CareerCard {...{item}} key={idx} />
        ))}
      </div>
    </>
  );
};

export default Careers;
