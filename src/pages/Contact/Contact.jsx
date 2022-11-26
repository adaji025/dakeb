// import Map from "../../components/Map/Map";
import mapImage from "../../assets/images/map.png";
import { Grid, Textarea, TextInput } from "@mantine/core";
import { BsTelephone, BsFacebook } from "react-icons/bs";
import { CiMail } from "react-icons/ci";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { BiUser } from "react-icons/bi";
import {
  AiFillInstagram,
  AiFillLinkedin,
  AiFillTwitterCircle,
} from "react-icons/ai";
import flowerPlant from "../../assets/images/flower-plant.png";
import styles from './Contact.module.css'

const Contact = () => {
  return (
    <div className="bg-white">
      {/* <Map /> */}
      <img src={mapImage} className="h-[85vh] w-full object-cover" alt="map" />
      <div className="flex w-full max-w-[1440px] mx-auto">
        <Grid className="w-full items-center min-h-[15vh] p-4 xl:p-0">
          <Grid.Col span={4} xs={6} md={4} lg={3}>
            <div className="text-sm w-full flex gap-2 text-primary-dark-100">
              <HiOutlineLocationMarker size={20} />
              <div className="">
                <span className="block">Address</span>
                <span className="block">
                  House 45, Lota drive, confluence street, Ibadan.
                </span>
              </div>
            </div>
          </Grid.Col>
          <Grid.Col xs={6} md={4} lg={3}>
            <div className="text-sm w-full flex gap-2 text-primary-dark-100">
              <CiMail size={20} />
              <div className="">
                <span className="block">Email</span>
                <span className="block">dakebfarms@gmail.com</span>
              </div>
            </div>
          </Grid.Col>
          <Grid.Col xs={6} md={4} lg={3}>
            <div className="text-sm w-full flex gap-2 text-primary-dark-100">
              <BsTelephone size={20} />
              <div className="">
                <span className="block">Phone</span>
                <span className="block">0704 5000 990.</span>
              </div>
            </div>
          </Grid.Col>
          <Grid.Col xs={6} md={4} lg={3}>
            <div className="flex xs:justify-center">
              <div className="flex items-center gap-5">
                <div>
                  <AiFillTwitterCircle size={30} color="#002500" />
                </div>
                <div>
                  <BsFacebook size={25} color="#002500" />
                </div>
                <div>
                  <AiFillInstagram size={25} color="#002500" />
                </div>
                <div>
                  <AiFillLinkedin size={25} color="#002500" />
                </div>
              </div>
            </div>
          </Grid.Col>
        </Grid>
      </div>
      <div className="lg:h-[90vh] bg-[#1571450D]/5 overflow-hidden lg:mb-20">
        <Grid className="w-full overflow-hidden mx-auto">
          <Grid.Col md={6}>
            <div className={`relative md:w-full hidden lg:block ${styles.msg}`}>
              <img src={flowerPlant} alt="" className="w-full object-cover" />
              <div className="flex items-center justify-center z-[3] absolute top-0 left-0 w-full lg:h-[90vh]">
                <div className="text-white">
                  <h2 className="font-semibold font-anglecia text-3xl">Send us a message</h2>
                  <p className="max-w-[400px] mt-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo placerat enim fames egestas libero.</p>
                </div>
              </div>
              <div className="z-[2] absolute top-0 left-0  w-full lg:h-[90vh] bg-black/50"></div>
            </div>
          </Grid.Col>
          <Grid.Col md={6} className="">
            <div className="lg:h-[90vh] flex flex-col justify-center items-center ">
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
    </div>
  );
};

export default Contact;
