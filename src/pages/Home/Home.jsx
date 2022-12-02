import { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import banner1 from "../../assets/images/banner1.png";
import banner2 from "../../assets/images/banner-2.png";
import banner3 from "../../assets/images/banner3.png";
import goldenPenny from "../../assets/svg/golden-penny.svg";
import honeyWell from "../../assets/svg/honey-well.svg";
import chiFarms from "../../assets/svg/chi-farms.svg";
import eagleFlours from "../../assets/svg/eagle-flour.svg";
import crownFlour from "../../assets/svg/crown-flour.svg";
import flower from "../../assets/svg/flower.svg";
import flower1 from "../../assets/svg/flowers1.svg";
import polygon1 from "../../assets/svg/Polygon-1.svg";
import polygon2 from "../../assets/svg/Polygon-2.svg";
import cows from "../../assets/images/cows-home.png";
import littleFlower from "../../assets/svg/little-flower.svg";
import guarantee from "../../assets/svg/guarantee.svg";
import farmer from "../../assets/images/farmer-1.png";
import vegetables from "../../assets/images/vegetables.png";
import { BsFillPlayFill } from "react-icons/bs";
import maizeVideos from "../../assets/videos/maize-video.mp4";

import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper";
import ProductCard from "../../components/ProductCard/ProductCard";
import { sevicesData } from "../../data/data";
import { Accordion, Grid } from "@mantine/core";
import FormComponent from "../../components/FormComponent/FormComponent";
import Testimonial from "../../components/Testimonial/Testimonial";

import AOS from "aos";
import "aos/dist/aos.css";

import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate()

  useEffect(() => {
    AOS.init({
      duration : '700'
    });
  }, []);

  return (
    <>
      <Swiper
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        speed={1000}
        loop={true}
        // pagination={{
        //   clickable: true,
        // }}
        navigation={true}
        modules={[Navigation]}
        className="w-full"
      >
        <SwiperSlide>
          <div className="relative">
            <img src={banner1} alt="" className="object-cover h-screen" />
            <div className="absolute top-0 left-0 w-full h-screen flex justify-center items-center">
              <div className="text-center mx-auto">
                <h2
                  className="text-white text-center font-bold text-[52px] max-w-[600px]"
                  data-aos="flip-down"
                  data-aos-duration="2000"
                >
                  Lorem <span className="text-primary-yellow">ipsum</span> dolor
                  sit, amet consectetur
                </h2>
                <p
                  className="text-white text-center text-xl max-w-[650px]"
                  data-aos="zoom-in"
                  data-aos-duration="2000"
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dignissimos iure voluptatum vitae sed ipsa saepe quam qui sint
                  deserunt maiores.
                </p>
                <div className="flex justify-center gap-6 font-medium mt-6">
                  <button onClick={() => navigate('/beef-hunter-careers')}
                  className="bg-primary-yellow hover:scale-105 text-white w-[192px] h-[55px] rounded-[30px]  hover:bg-primary-green-50/80 hover:text-white  transition-all duration-300"
                  data-aos="fade-up" data-aos-duration="2000">
                    Get started
                  </button>
                  <button onClick={() => navigate('/what-we-do')}
                  className="border border-white hover:scale-105 text-white w-[192px] h-[55px] rounded-[30px]  hover:border-primary-green-50/80  hover:border-4 transition-all duration-300"
                       data-aos="fade-up" data-aos-duration="2000">
                    Learn more
                  </button>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={banner2} alt="" className="object-cover h-screen" />
          <div className="absolute top-0 left-0 w-full h-screen flex justify-center items-center">
            <div className="text-center mx-auto">
              <h2 className="text-white text-center font-bold text-[52px] max-w-[600px]">
                Lorem <span className="text-primary-yellow">ipsum</span> dolor
                sit, amet consectetur
              </h2>
              <p className="text-white text-center text-xl max-w-[650px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Dignissimos iure voluptatum vitae sed ipsa saepe quam qui sint
                deserunt maiores.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={banner3} alt="" className="object-cover h-screen" />
          <div className="absolute top-0 left-0 w-full h-screen flex justify-center items-center">
            <div className="text-center mx-auto">
              <h2 className="text-white text-center font-bold text-[52px] max-w-[600px]">
                Lorem <span className="text-primary-yellow">ipsum</span> dolor
                sit, amet consectetur
              </h2>
              <p className="text-white text-center text-xl max-w-[650px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Dignissimos iure voluptatum vitae sed ipsa saepe quam qui sint
                deserunt maiores.
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      <div className="max-w-[1440px] mx-auto relative my-10" data-aos="fade-up">
        <div className="grid grid-cols-3 gap-5 place-items-center sm:flex justify-between items-center max-w-[800px] mx-auto py-10">
          <img src={goldenPenny} className="w-24" alt="" />
          <img src={eagleFlours} className="w-24" alt="" />
          <img src={honeyWell} alt="" />
          <img src={chiFarms} className="w-24" alt="" />
          <img src={crownFlour} className="w-24" alt="" />
        </div>
        <div className="absolute left-0 top-0 hidden xl:block">
          <img src={flower} alt="" />
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto my-10" data-aos="fade-up">
        <div className="grid gap-5 xl:place-items-start place-items-center lg:grid-cols-2 relative p-4">
          <div className="gap-3 hidden sm:flex">
            <img src={cows} alt="" />
            <div className="flex flex-col gap-3">
              <img src={farmer} className="xl:min-w-[297px]" alt="" />
              <img src={vegetables} alt="" />
            </div>
          </div>
          <div className="">
            <h2 className="text-[32px] max-w-[450px] text-primary-green-100 font-anglecia font-semibold">
              We are the best organic product farm.
            </h2>
            <p className="max-w-[650px] text-primary-dark-50 my-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien
              massa urna venenatis nullam magna nibh nulla fermentum
            </p>
            <div>
              <div className="flex items-start gap-6 mb-3">
                <img src={guarantee} alt="guarantee" className="animate-bounce " />
                <div>
                  <h3 className="text-primary-green-100 font-semibold font-anglecia text-lg mb-3">
                    100% guaranteed
                  </h3>
                  <p className="text-primary-dark-50">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Sapien massa urna venenatis
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <img src={littleFlower} alt="flower" className="animate-bounce " />
                <div>
                  <h3 className="text-primary-green-100 font-semibold font-anglecia text-lg mb-3">
                    100% fresh produce
                  </h3>
                  <p className="text-primary-dark-50">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Sapien massa urna venenatis
                  </p>
                </div>
              </div>

              <button className="mt-5 text-primary-green-100 text-xl font-semibold hover:text-primary-green-50 hover:scale-105 duration-300"
              onClick={() => navigate('/what-we-do')}>
                Learn More
              </button>
            </div>
          </div>

          <div className="absolute bottom-0 left-[520px] hidden xl:block z-10">
            <div className="relative">
              <img src={polygon1} className="" alt="" />
              <img
                src={polygon2}
                className="absolute top-6 left-[30px]"
                alt=""
              />
            </div>
            <div className="absolute top-[70px] left-[60px] font-bold text-primary-green-50">2 Years</div>
          </div>
        </div>
      </div>

      {/* products */}
      <div className="my-10 relative" data-aos="fade-up">
        <div className="w-full max-h-[393px] xl:h-[393px] xl:bg-gray-300 flex flex-col items-center">
          <div className="text-center my-8">
            <h3 className="font-anglecia font-bold text-[40px]">
              Our featured products
            </h3>
            <p className="max-w-[600px] text-center text-primary-dark-50">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo
              placerat enim fames egestas libero.
            </p>
          </div>
        </div>
        <div className="xl:absolute left-0 top-[40%] w-full overflow-x-hidden">
          <div className="max-w-[1440px] mx-auto">
            <div className="flex justify-center flex-wrap gap-16 max-w-[1440px] mx-auto">
              {sevicesData.map((item, idx) => (
                <ProductCard {...{ item, idx }} key={idx} />
              ))}
            </div>
          </div>
        </div>
        <div className="xl:bg-primary-green-100 h-[233px] w-full hidden xl:block"></div>
        <div className="text-center xl:bg-primary-green-100 py-6">
          <button onClick={() => navigate('/what-we-do')}
           className="mt-5 xl:text-white text-primary-green-100 text-xl font-semibold hover:text-primary-green-50 xl:hover:underline">
            See all Products
          </button>
        </div>
      </div>

      {/* video */}
      <div
        className="min-h-screen flex items-center relative overflow-hidden"
        data-aos="fade-up"
      >
        <div className="w-[822px] p-4 min-h-[623px] bg-primary-green-100 md:rounded-r-[20px] flex justify-start  items-center">
          <div className="max-w-[600px] mx-auto">
            <div className="flex justify-start items-center gap-3">
              <BsFillPlayFill size={25} color="white" />
              <p className="text-white">Watch video</p>
            </div>
            <div className="mt-5">
              <p className="text-2xl text-white">
                We grow our <span className="text-primary-yellow">crops</span>{" "}
                organically and rear our{" "}
                <span className="text-primary-yellow">livestock</span> in the
                most conducive environments.
              </p>
              <div className="grid sm:flex gap-10 mt-12">
                <div>
                  <video
                    width=""
                    controls
                    className="rounded-[10px] sm:w-[233px]"
                  >
                    <source src={maizeVideos} type="video/mp4" />
                  </video>
                </div>
                <div>
                  <video
                    width=""
                    controls
                    className="rounded-[10px] sm:w-[233px]"
                  >
                    <source src={maizeVideos} type="video/mp4" />
                  </video>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="absolute left-[750px] 2xl:left-[700px] hidden lg:block"
          data-aos="fade-left"
        >
          <video width="" controls className="rounded-[20px]  w-[621px]">
            <source src={maizeVideos} type="video/mp4" />
          </video>
          {/* <iframe
            title="hello"
            allow="fullscreen"
            width="621"
            height="315"
            src="https://www.youtube.com/embed/tgbNymZ7vqY"
          ></iframe> */}
        </div>
      </div>

      {/* FAQ */}
      <div className="bg-primary-green-100  my-10" data-aos="fade-up">
        <div className="max-w-[1440px] min-h-[50vh] mx-auto flex items-center p-4">
          <Grid className="w-full">
            <Grid.Col sm={6}>
              {/* <div> */}
              <h2 className="text-white font-anglecia">FAQ</h2>
              <p className="text-2xl mt-10 font-semibold text-primary-yellow max-w-[500px] font-anglecia tracking-widest">
                We have prepared answers to your some of the questions you might
                have.
              </p>
              <p className="my-5 font-normal text-base text-left text-white max-w-[650px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien
                massa urna venenatis nullam magna nibh nulla fermentum
              </p>
              <button onClick={() => navigate('/what-we-do')}
               className="bg-primary-yellow text-white w-[192px] h-[55px] rounded-[30px]  hover:bg-primary-green-50/80 hover:text-white  transition-all duration-300">
                Learn More
              </button>
            </Grid.Col>
            <Grid.Col sm={6} className="max-w-[607px] w-full">
              <Accordion
                variant="separated"
                className="text-white 2xl:w-[607px] w-full"
                styles={{
                  item: {
                    // styles added to all items
                    backgroundColor: "transparent",
                    border: "1px solid #DEA90A",
                    color: "white",
                    ":hover": {
                      backgroundColor: "",
                    },

                    // styles added to expanded item
                    "&[data-active]": {
                      backgroundColor: "transparent",
                      border: "1px solid #DEA90A",
                    },
                  },

                  chevron: {
                    // styles added to chevron when it should rotate
                    "&[data-rotate]": {
                      transform: "rotate(-90deg)",
                    },
                  },
                }}
              >
                <Accordion.Item value="one">
                  <Accordion.Control className="text-white">
                    What is the beef hunter about?
                  </Accordion.Control>
                  <Accordion.Panel>
                    Colors, fonts, shadows and many other parts are customizable
                    to fit your design needs
                  </Accordion.Panel>
                </Accordion.Item>

                <Accordion.Item value="two">
                  <Accordion.Control className="text-white">
                    What is the chick hunter about?
                  </Accordion.Control>
                  <Accordion.Panel>
                    Configure components appearance and behavior with vast
                    amount of settings or overwrite any part of component styles
                  </Accordion.Panel>
                </Accordion.Item>
                <Accordion.Item value="three">
                  <Accordion.Control className="text-white">
                    What is the chick hunter about?
                  </Accordion.Control>
                  <Accordion.Panel>
                    Configure components appearance and behavior with vast
                    amount of settings or overwrite any part of component styles
                  </Accordion.Panel>
                </Accordion.Item>
                <Accordion.Item value="four">
                  <Accordion.Control className="text-white">
                    What is the chick hunter about?
                  </Accordion.Control>
                  <Accordion.Panel>
                    Configure components appearance and behavior with vast
                    amount of settings or overwrite any part of component styles
                  </Accordion.Panel>
                </Accordion.Item>
              </Accordion>
            </Grid.Col>
          </Grid>
        </div>
      </div>

      {/* contact */}
      <div className="my-28" data-aos="fade-up">
        <FormComponent />
      </div>

      {/* Testimonial */}
      <div
        className="bg-[#1571451A]/10 w-full relative my-10"
        data-aos="fade-up"
      >
        <Testimonial />
        <img src={flower1} className="absolute top-0 right-32" alt="" />
      </div>
    </>
  );
};

export default Home;
