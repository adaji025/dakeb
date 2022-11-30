import { CiCalendar } from "react-icons/ci";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { AiOutlineFieldTime } from "react-icons/ai";

const CareerCard = ({item}) => {
  return (
    <div className="h-[145px] w-full flex items-center justify-between bg-[#E8F1EC] px-4 sm:px-8 md:px-20 py-4">
      <div className="md:flex gap-5 items-end justify-between max-w-[500px] w-full">
        <div className="">
          <h2 className="text-lg text-[#3A3A3A] font-semibold">
            {item.position}
          </h2>
          <p className="text-primary-dark-100 py-1">Dakeb Farms</p>
          <div className="flex items-center gap-1 text-sm">
            <CiCalendar /> <p>Posted: {item.date}.</p>
          </div>
        </div>
        <div className="flex items-center text-primary-dark-100 text-sm gap-1 capitalize">
            <HiOutlineLocationMarker /> <p>{item.location}</p>
        </div>
        <div className="flex items-center text-primary-dark-100 text-sm gap-1 capitalize">
            <AiOutlineFieldTime /> <p>{item.jobType}</p>
        </div>
      </div>
      <div>
        <button className="bg-[#157145] px-5 py-2 text-white rounded-[30px] font-semibold hover:bg-[#157145]/80">Appply</button>
      </div>
    </div>
  );
};

export default CareerCard;
