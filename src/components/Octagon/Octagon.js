import React from "react";
import styles from "./Octagon.module.css";

const Octagon = () => {
  return (
    <div className="bg-white">
      <div className={styles.outter}>
        <p>OCTAGON</p>
        <div className={styles.inner}></div>
      </div>
    </div>
  );
};

export default Octagon;
