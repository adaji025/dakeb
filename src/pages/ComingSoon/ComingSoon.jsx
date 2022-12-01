import { Grid } from "@mantine/core";
import { CiMail } from "react-icons/ci";
import meat from '../../assets/images/meat.png'

const ComingSoon = () => {
  return (
    <div className="min-h-[110vh] max-w-[1440px] mx-auto flex items-center p-4">
      <Grid className="w-full">
        <Grid.Col sm={6} order={2} orderSm={1} className="flex items-center">
            <div>

          <div className="flex gap-3 items-center">
            <div className="w-[27px] h-[4px] bg-primary-green-100"></div>
            <p className="text-lg text-primary-green-50 font-medium">
              Coming soon
            </p>
          </div>
          <div className="mt-12">
            <p className="text-primary-dark-100 text-[32px] max-w-[362px] font-semibold font-anglecia">
              Lorem <span className="text-primary-green-50">ipsum</span> dolor
              sit amet, consectetur
            </p>
            <p className="mt-6 max-w-[550px] text-primary-dark-50">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo
              placerat enim fames egestas libero.
            </p>
          </div>
          <form className="">
            <div className="flex items-center px-4 mt-6 border border-primary-green-50 rounded-md max-w-[450px]">
              <span className="mr-2">
                <CiMail size={20} color="#157145" />
              </span>
              <input
                type="text"
                className="flex-1 py-2 outline-none placeholder:text-primary-green-50"
                placeholder="Your email"
              />
            </div>
            <button className="border mt-5 bg-primary-green-50 border-primary-green-50 text-white w-[192px] h-[55px] rounded-[30px] hover:text-primary-green-50  hover:bg-white  transition-all duration-300">
            Notify me
            </button>
          </form>
            </div>
        </Grid.Col>
        <Grid.Col sm={6} order={1} orderSm={2} className="hidden md:block">
            <img src={meat} alt="" />
        </Grid.Col>
      </Grid>
    </div>
  );
};

export default ComingSoon;
