import React from "react";
import LeftRightButtons from "../../../components/ui/LeftRightButtons";

const CategoryHeader = () => {
  return (
    <div className="flex justify-between items-center">
      <h1 className="text-4xl font-bold my-2">Browse By Category</h1>
      <LeftRightButtons />
    </div>
  );
};

export default CategoryHeader;
