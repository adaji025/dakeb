import React from "react";
import flowerPlant from "../../assets/images/flower-plant.png";
import { Grid, TextInput } from "@mantine/core";
import { BiUser, BiChevronRight } from "react-icons/bi";
import { CiMail } from "react-icons/ci";
import { ReactComponent as PenOnPaper } from "../../assets/svg/pen-on-paper.svg";
import cone from "../../assets/svg/cone.svg";

const FormComponent = () => {
  return (
    <div className="lg:h-[90vh] bg-[#1571450D]/5 overflow-hidden lg:mb-20">
      <Grid className="w-full overflow-hidden mx-auto">
        <Grid.Col md={6}>
          <div className={`relative md:w-full hidden lg:block`}>
            <img
              src={flowerPlant}
              alt=""
              className="w-full h-full object-cover"
            />
            <div className="flex items-center justify-center z-[3] absolute top-0 left-0 w-full lg:h-[90vh]">
              <div className="text-white">
                <h2 className="font-semibold font-anglecia text-3xl">
                  Send us a message
                </h2>
                <p className="max-w-[400px] mt-5">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo
                  placerat enim fames egestas libero.
                </p>
              </div>
            </div>
            <div className="z-[2] absolute top-0 left-0  w-full lg:h-full bg-black/50"></div>
            <div className="absolute top-[35%] -right-[20px]">
              <div className="relative">
                <img src={cone} alt="" />
                <span className="absolute left-0 top-[35%]">
                  <BiChevronRight size={25} color="white" />
                </span>
              </div>
            </div>
          </div>
        </Grid.Col>
        <Grid.Col md={6} className="">
          <div className="h-[90vh] flex flex-col justify-center items-center ">
            <div className="mb-10 lg:hidden">
              <h2 className="font-semibold font-anglecia text-3xl">
                Send us a message
              </h2>
              <p className="max-w-[600px] mt-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo
                placerat enim fames egestas libero.
              </p>
            </div>
            <TextInput
              className="max-w-[607px] w-full mb-8  !border-transparent"
              placeholder="Your name"
              // label="Full name"
              radius="lg"
              size="xl"
              icon={<BiUser size={25} color="#4F4F4F" />}
              withAsterisk
            />
            <TextInput
              className="max-w-[607px]  w-full mb-8  !border-transparent"
              placeholder="Your email"
              // label="Email address "
              radius="lg"
              size="xl"
              icon={<CiMail size={25} color="#4F4F4F" />}
              withAsterisk
            />
            <div className="flex max-w-[607px] p-4 bg-white rounded-[10px]">
              <span>
                <PenOnPaper />
              </span>
              <textarea
                cols="607"
                row="30"
                placeholder="Your Message"
                className="h-[120px] px-2 w-full outline-none"
              ></textarea>
            </div>
            <div className="flex justify-start max-w-[607px] w-full mt-10">
              <button className="text-white rounded-[30px] bg-primary-green-100 w-[200px] sm:w-[250px]  h-[40px] hover:bg-primary-green-50 transition-all duration-300">
                Send
              </button>
            </div>
          </div>
        </Grid.Col>
      </Grid>
    </div>
  );
};

export default FormComponent;
