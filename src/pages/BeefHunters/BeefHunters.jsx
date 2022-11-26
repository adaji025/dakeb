import React from "react";
import styles from "../Services/Service.module.css";

const BeefHunters = () => {
  return (
    <div className="">
      <div className={styles.serviceContainer}>
        <div className="w-full flex items-center justify-center h-full text-center">
          <h2 className="text-5xl text-primary-yellow font-semibold z-10">
            Become a beef hunter
          </h2>
        </div>
      </div>
    </div>
  );
};

export default BeefHunters;