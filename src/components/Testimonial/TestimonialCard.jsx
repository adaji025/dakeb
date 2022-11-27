import qMark from "../../assets/svg/qmark.svg";

const TestimonialCard = ({ item }) => {
  return (
    <div className="max-w-[431px] h-[283px] w-full flex justify-center items-center flex-col bg-white shadow-md rounded-[20px] overflow-hidden">
      <img src={qMark} alt="" />
      <p className="w-[350px] mx-auto text-center my-3">{item.desc}</p>
      <div className="flex gap-2">
        <img src={item.img} alt="" className="h-[55px] w-[55px] rounded-full" />
        <div>
          <h5>{item.name}</h5>
          <p>{item.title}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
