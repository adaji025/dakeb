// import Map from "../../components/Map/Map";
import mapImage from "../../assets/images/map.png";
import { Grid, Textarea, TextInput } from "@mantine/core";
import { BsTelephone, BsFacebook } from "react-icons/bs";
import { CiMail } from "react-icons/ci";
import { HiOutlineLocationMarker } from "react-icons/hi";
import {
  AiFillInstagram,
  AiFillLinkedin,
  AiFillTwitterCircle,
} from "react-icons/ai";
import FormComponent from "../../components/FormComponent/FormComponent";


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
      <FormComponent />
    </div>
  );
};

export default Contact;
