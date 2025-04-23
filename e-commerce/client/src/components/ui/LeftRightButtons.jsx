import React from "react";

const LeftRightButtons = ({containerRef=null, leftAction=null, rightAction=null}) => {

  const left = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: -400, 
        behavior: "smooth",
      });
    }
  };

  const right = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: 400, 
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="flex ml-auto">
      <div 
      onClick={leftAction? leftAction: left}
      className={`rounded-full p-3 bg-gray-200 mx-3 hover:cursor-pointer active:bg-gray-300 transition-colors duration-200`}>
        <img src="left.svg" alt="" />
      </div>
      <div
       onClick={rightAction? rightAction:right}
       className="rounded-full p-3 bg-gray-200 hover:cursor-pointer active:bg-gray-300 transition-colors duration-200" >
        <img src="right.svg" alt="" />
      </div>
    </div>
  );
};

export default LeftRightButtons;
