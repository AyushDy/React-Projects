import React from "react";

export default function Card1({ data, name }) {
  console.log(name);
  return (
    <div className=" z-30 min-w-[310px] w-[32%] max-w-[380px]--x flex-1 flex flex-col gap-3 p-4 rounded-sm bg-white text-[#111] border-2 border-[#f0f2f2]">
      <div className="home-card-title text-[22px] font-bold leading-[27px]">
        {data.title}
      </div>
      <div className="home-card-items-container flex flex-wrap justify-center items-center gap-3">
        {data.items.map((item) => (
          <div className="home-card-item w-[47.5%] flex flex-col gap-1">
            <img
              className="home-card-item-image min-w-full h-[100px] object-cover bg-[#222f3e]"
              src={item.image}
              alt="home-card-item"
            />
            <div className="home-card-item-title text-[12px] font-bold leading-[18px] text-[#0f1111]">
              {item.title}
            </div>
          </div>
        ))}
      </div>
      <a
        className="home-card-redirect flex justify-start items-center text-[#007185] cursor-pointer hover:text-[#c7501f]"
        href={data.redirect.url}
      >
        {data.redirect.label}
      </a>
    </div>
  );
}
