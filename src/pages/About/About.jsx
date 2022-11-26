import styles from "./About.module.css";

const About = () => {
  return (
    <div className="">
      <div className={styles.aboutContainer}>
        <div className="w-full flex items-center justify-center h-full text-center">
          <h2 className="text-5xl text-primary-yellow font-semibold z-10">About</h2>
        </div>
      </div>
    </div>
  );
};

export default About;
