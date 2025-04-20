import React from "react";

const LeftRightButtons = () => {
  return (
    <div className="flex ml-auto">
      <div className="rounded-full p-3 bg-gray-200 mx-3">
        <img src="left.svg" alt="" />
      </div>
      <div className="rounded-full p-3 bg-gray-200">
        <img src="right.svg" alt="" />
      </div>
    </div>
  );
};

export default LeftRightButtons;
