
const BlogCard = ({item}) => {
  return (
    <div className="min-h-[364px] max-w-[364px]">
      <img src={item.img} className="hover:scale-105 transition-all duration-300 h-[264px]" alt="" />
      <div className="mt-2">
        <span className="text-primary-dark-50">{item.category},</span>
        <span className="text-primary-dark-50"> {item.date}.</span>
      </div>
      <h3 className="text-primary-green-100 block font-semibold">
        {item.title}
      </h3>
      <span className='text-primary-dark-50 max-w-[380px] block mt-2'>{item.desc}</span>
      <button className="mt-3 px-7 py-1 border border-primary-green-50 rounded-[30px] hover:scale-105 transition-all duration-300">Read</button>
    </div>
  );
};

export default BlogCard;
