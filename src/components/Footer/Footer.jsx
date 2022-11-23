import { Grid } from "@mantine/core";
import { BsTelephone, BsWhatsapp, BsInstagram } from "react-icons/bs";
import { CiMail, CiFacebook } from "react-icons/ci";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { CgTwitter } from "react-icons/cg";
import logo from "../../assets/svg/dakeb-logo.svg";

const Footer = () => {
    let currentYear = new  Date().getFullYear()
  return (
    <footer className="overflow-hidden p-4 bg-primary-green-100">
      <div className="max-w-[1440px] w-full mx-auto">
        <img src={logo} alt="" className="mb-1" />
        <Grid className="">
          <Grid.Col md={6} lg={3}>
            <h2 className="text-primary-yellow">DAKEB FARMS</h2>
            <div className="mt-2">
              <span className="text-sm text-[#F2F2F2]">
                The home of natural products
              </span>
            </div>
            <div className="mt-6 flex flex-col gap-3">
              <div className="text-sm flex items-center gap-2 text-[#F2F2F2]">
                <div>
                  <BsTelephone size={20} />
                </div>
                <span>0709 3000 910</span>
              </div>
              <div className="text-sm flex items-center gap-2 text-[#F2F2F2]">
                <div>
                  <CiMail size={20} />
                </div>
                <span>dakebfarms@gmail.com</span>
              </div>
              <div className="text-sm flex items-center gap-2 text-[#F2F2F2]">
                <div>
                  <HiOutlineLocationMarker size={20} />
                </div>
                <span>No 3, Allen avenue, Apata, Lagos.</span>
              </div>
            </div>
          </Grid.Col>
          <Grid.Col md={6} lg={3}>
            <h2 className="text-primary-yellow font-medium">Services</h2>
            <div className=" flex flex-col gap-3 mt-2">
              <span className="text-sm block text-[#F2F2F2]">Beef hunter</span>
              <span className="text-sm block text-[#F2F2F2]">Chick hunter</span>
            </div>
          </Grid.Col>
          <Grid.Col md={6} lg={3}>
            <h2 className="text-primary-yellow font-medium">Get to know us</h2>
            <div className=" flex flex-col gap-3 mt-2">
              <span className="text-sm block text-[#F2F2F2]">About us</span>
              <span className="text-sm block text-[#F2F2F2]">What we do</span>
              <span className="text-sm block text-[#F2F2F2]">Contact us</span>
              <span className="text-sm block text-[#F2F2F2]">Careers</span>
              <span className="text-sm block text-[#F2F2F2]">Gallery</span>
              <span className="text-sm block text-[#F2F2F2]">Blog</span>
            </div>
          </Grid.Col>
          <Grid.Col md={6} lg={3}>
            <h2 className="text-primary-yellow font-medium">Other pages</h2>
            <div className=" flex flex-col gap-3 mt-2">
              <span className="text-sm block text-[#F2F2F2]">
                Charity events
              </span>
              <span className="text-sm block text-[#F2F2F2]">Coming soon</span>
              <span className="text-sm block text-[#F2F2F2]">Complaints</span>
            </div>
          </Grid.Col>
        </Grid>
        <div className="mt-10 w-full">
          <Grid grow>
            <Grid.Col xs={3} order={1}>
              <p className="text-[#F2F2F2] font-medium">Terms of service</p>
            </Grid.Col>
            <Grid.Col xs={3} order={3} orderXs={2}>
              <div className="flex justify-center">
                <div className="flex items-center gap-5">
                  <div>
                    <CgTwitter size={25} color="#DEA90A" />
                  </div>
                  <div>
                    <BsWhatsapp size={25} color="#DEA90A" />
                  </div>
                  <div>
                    <BsInstagram size={25} color="#DEA90A" />
                  </div>
                  <div>
                    <CiFacebook size={25} color="#DEA90A" />
                  </div>
                </div>
              </div>
            </Grid.Col>
            <Grid.Col xs={3} order={2} orderXs={2}>
              <div className="flex sm:hidden">
                <p className="text-[#F2F2F2] font-medium">Privacy Policy</p>
              </div>
              <div className="hidden sm:flex justify-end">
                <p className="text-[#F2F2F2] font-medium">Privacy Policy</p>
              </div>
            </Grid.Col>
          </Grid>
        </div>
        <div className="text-center mt-10 text-xl text-[#F2F2F2]">Copyright &copy; {currentYear}</div>
      </div>
    </footer>
  );
};

export default Footer;
