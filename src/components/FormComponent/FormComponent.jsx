import React from 'react'
import flowerPlant from "../../assets/images/flower-plant.png";
import { Grid, Textarea, TextInput } from "@mantine/core";
import { BiUser } from "react-icons/bi";
import { CiMail } from "react-icons/ci";

const FormComponent = () => {
  return (
    <div className="lg:h-[90vh] bg-[#1571450D]/5 overflow-hidden lg:mb-20">
        <Grid className="w-full overflow-hidden mx-auto">
          <Grid.Col md={6}>
            <div className={`relative md:w-full hidden lg:block`}>
              <img src={flowerPlant} alt="" className="w-full object-cover" />
              <div className="flex items-center justify-center z-[3] absolute top-0 left-0 w-full lg:h-[90vh]">
                <div className="text-white">
                  <h2 className="font-semibold font-anglecia text-3xl">
                    Send us a message
                  </h2>
                  <p className="max-w-[400px] mt-5">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Justo placerat enim fames egestas libero.
                  </p>
                </div>
              </div>
              <div className="z-[2] absolute top-0 left-0  w-full lg:h-[90vh] bg-black/50"></div>
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
                icon={<BiUser size={25} />}
                withAsterisk
              />
              <TextInput
                className="max-w-[607px]  w-full mb-8  !border-transparent"
                placeholder="Your email"
                // label="Email address "
                radius="lg"
                size="xl"
                icon={<CiMail size={25} />}
                withAsterisk
              />
              <Textarea
                className="max-w-[607px] w-full mb-5  !border-transparent"
                placeholder="Your message..."
                // label="Your comment"
                size="xl"
                radius="lg"
                withAsterisk
                onChange={(e) => console.log(e.target.value)}
              />
              {/* <div className="max-w-[607px] w-full">
                <CustomInputField icon={<CiMail size={25} type="text" placeholder="Your name" handleChange={(e) => console.log(e.target.value)}/>} />
              </div>  */}
            </div>
          </Grid.Col>
        </Grid>
      </div>
  )
}

export default FormComponent