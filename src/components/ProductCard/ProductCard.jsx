
const ProductCard = ({item}) => {
  return (
    <div className="w-[269px] h-[302px] bg-white flex flex-col items-center justify-center shadow-md p-4 rounded-[30px]">
      <img src={item.img} alt="" />
      <h4 className="my-2">{item.title}</h4>
      <p className="text-center">{item.text}</p>
    </div>
  );
};

export default ProductCard;
