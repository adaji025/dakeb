import { Grid } from "@mantine/core";
import styles from "./About.module.css";
import yellowRect from "../../assets/images/yellowRect.png";
import flower from "../../assets/svg/flower.svg";
import brownCows from "../../assets/images/brown-cows.png";
import irrigation from "../../assets/images/irrigation.png";
import mission from "../../assets/svg/mission.svg";
import vission from "../../assets/svg/vission.svg";
import motivation from "../../assets/svg/motivation.svg";
import vegis from "../../assets/images/veges.png";
import tick from "../../assets/svg/tick.svg";

const About = () => {
  return (
    <>
      <div className={styles.aboutContainer}>
        <div className="w-full flex items-center justify-center h-full text-center">
          <h2 className="text-5xl text-primary-yellow font-semibold z-10">
            About
          </h2>
        </div>
      </div>

      <div className="max-w-[1440px] min-h-screen flex items-center mx-auto p-4">
        <Grid className="w-full">
          <Grid.Col md={6}>
            <div className="relative">
              <img src={yellowRect} alt="" />
              <img src={brownCows} alt="" className="absolute -top-20 left-4" />
              <img
                src={irrigation}
                alt=""
                className=" hidden sm:block absolute -bottom-20 left-[300px]"
              />
            </div>
          </Grid.Col>
          <Grid.Col md={6}>
            <div className="mt-24">
              <span className="tracking-widest text-primary-green-50 ">
                Get to know Dakeb farms
              </span>
              <h4 className="max-w-[400px] text-[32px] font-semibold font-anglecia text-primary-green-100">
                We are the best organic product farm.
              </h4>
              <div className="max-w-[600px]">
                <p className="my-5 text-primary-dark-100">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Sapien massa urna venenatis nullam magna nibh nulla fermentum,
                  sem. Mauris sed orci consectetur aliquam placerat. Est quam
                  massa pellentesque sed dui nunc ut sagittis. Dictum cras
                  luctus est erat id velit in. Suspendisse nunc vel eu elit.
                  Pretium nulla sed pulvinar varius erat urna.
                </p>
                <hr className="max-w-[" />
                <div className="flex justify-between items-center max-w-[600px] mt-6">
                  <div className="sm:flex gap-2">
                    <img
                      src={irrigation}
                      className="w-[40px] h-[40px] rounded-full"
                      alt=""
                    />
                    <div>
                      <h3 className="text-lg font-anglecia font-semibold text-primary-green-100">
                        Abram Calzoni
                      </h3>
                      <p className="text-sm text-primary-green-50">
                        Founder / CEO
                      </p>
                    </div>
                  </div>
                  <p className="font-ps text-primary-green-50 text-[40px] italic">
                    Signature
                  </p>
                </div>
              </div>
            </div>
          </Grid.Col>
        </Grid>
      </div>

      <div className="max-w-[1440px] w-full mx-auto min-h-[50vh] p-4">
        <Grid className="w-full">
          <Grid.Col sm={4} className="w-full">
            <div className="flex flex-col items-center text-center">
              <img src={mission} alt="" />
              <h5 className="font-anglecia text-[32px] font-semibold text-primary-green-100">
                Our mission
              </h5>
              <p className="text-primary-green-50">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien
                massa urna venenatis
              </p>
            </div>
          </Grid.Col>
          <Grid.Col sm={4}>
            <div className="flex flex-col items-center text-center">
              <img src={vission} alt="" />
              <h5 className="font-anglecia text-[32px] font-semibold text-primary-green-100">
                Our mission
              </h5>
              <p className="text-primary-green-50">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien
                massa urna venenatis
              </p>
            </div>
          </Grid.Col>
          <Grid.Col sm={4}>
            <div className="flex flex-col items-center text-center">
              <img src={motivation} alt="" />
              <h5 className="font-anglecia text-[32px] font-semibold text-primary-green-100">
                Our mission
              </h5>
              <p className="text-primary-green-50">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien
                massa urna venenatis
              </p>
            </div>
          </Grid.Col>
        </Grid>
      </div>

      <div className="bg-[#E8F1EC] mb-20 relative">
        <div className="max-w-[1200px] mx-auto py-10 px-4 flex items-center">
          <Grid className="w-full">
            <Grid.Col sm={6}>
              <img src={vegis} alt="" />
            </Grid.Col>
            <Grid.Col sm={6} className="flex flex-col justify-center">
              <h3 className="text-[32px] font-anglecia font-semibold text-primary-green-100">
                Why choose us?
              </h3>
              <p className="max-w-[500px] mt-2 text-primary-dark-100">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien
                massa urna venenatis
              </p>
              <div className="mt-4">
                <div className="flex gap-2 mb-5">
                  <img src={tick} alt="tick" />
                  <p className="text-primary-green-100 text-xl font-anglecia">
                    100% organic produce
                  </p>
                </div>
                <div className="flex gap-2 mb-5">
                  <img src={tick} alt="tick" />
                  <p className="text-primary-green-100 text-xl font-anglecia">
                    Accurate delivery
                  </p>
                </div>
                <div className="flex gap-2 mb-5">
                  <img src={tick} alt="tick" />
                  <p className="text-primary-green-100 text-xl font-anglecia">
                    Apt customer service
                  </p>
                </div>
              </div>
            </Grid.Col>
          </Grid>
        </div>
        <img src={flower} className="absolute right-8 top-8" alt="flower" />
      </div>
    </>
  );
};

export default About;
