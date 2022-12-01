import React from "react";

const CategoryCard = ({item, idx}) => {
  return (
    <div className="max-w-[315px]">
      <div className="flex gap-2">
        <span className="font-semibold text-base text-primary-dark-100">{idx + 1}</span>
        <div>
          <h3 className="text-primary-green-100 block font-semibold">
            {item.title}
          </h3>
          <span className="text-primary-dark-50">{item.category},</span>
          <span className="text-primary-dark-50"> {item.date}.</span>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
