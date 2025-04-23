import React from "react";

const BottomInfo = () => {
  const infoData = [
    {
      img: "/about/delivery.svg",
      head: "FREE AND FAST DELIVERY",
      text: "Free delivery for all orders above $140",
    },
    {
      img: "/about/support.svg",
      head: "24/7 CUSTOMER SERVICE",
      text: "Friendly 24/7 customer support",
    },
    {
      img: "/about/guarantee.svg",
      head: "MONEY BACK GUARANTEE",
      text: "We return money within 30 days",
    },
  ];

  return (
    <div className="flex justify-evenly">
      {infoData.map((info, index) => (
        <InfoBox key={index} info={info} />
      ))}
    </div>
  );
};

export default BottomInfo;

const InfoBox = ({ info }) => {
  return (
    <div className="flex flex-col gap-2 items-center">
      <div className="bg-black rounded-full border-7 w-fit p-1 border-gray-300">
        <img src={info.img} alt="" />
      </div>
      <h3 className="text-lg mt-2 font-medium">{info.head}</h3>
      <p className="text-sm">{info.text}</p>
    </div>
  );
};
