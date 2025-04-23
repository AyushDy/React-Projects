import React from "react";

const BottomInfoCard = ({img,head,text}) => {
  return (
    <div className="border-2 border-gray-300 rounded w-1/5 py-15 flex items-center flex-col">
      <div className="bg-black rounded-full border-7 w-fit p-1 border-gray-300">
        <img src={img} alt="" />
      </div>
      <h3 className="text-2xl font-bold">{head}</h3>
      <p>{text}</p>
    </div>
  );
};

export default BottomInfoCard;
