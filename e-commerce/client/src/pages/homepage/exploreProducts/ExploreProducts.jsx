import React, { useRef, useState } from "react";
import TopHeader from "../../../components/ui/TopHeader";
import LeftRightButtons from "../../../components/ui/LeftRightButtons";
import ExploreContainer from "./ExploreContainer";
import ButtonRed from "../../../components/ui/ButtonRed";
import { useNavigate } from "react-router-dom";
import { productData } from "../../../assets/data/data";



const ExploreProducts = () => {


  const containerRef = useRef(null);
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 8;


  const displayedProducts = productData.slice(
    currentIndex,
    currentIndex + itemsPerPage
  );

  const maxIndex = Math.max(0, productData.length - itemsPerPage);

  const leftAction = () => {
    setCurrentIndex((prev) => Math.max(prev - itemsPerPage, 0));
  };

  const rightAction = () => {
    setCurrentIndex((prev) => Math.min(prev + itemsPerPage, maxIndex));
  };

  return (
    <div className="my-25">
      <TopHeader title={"Our Products"} />
      <div className="flex justify-between items-center my-5">
        <h1 className="text-4xl font-bold">Explore Our Products</h1>
        <LeftRightButtons
          containerRef={containerRef}
          leftAction={leftAction}
          rightAction={rightAction}
        />
      </div>
      <ExploreContainer
        products={displayedProducts}
        containerRef={containerRef}
      />
      <div className="text-center my-15 ">
        <ButtonRed
          text={"View All Products"}
          onClick={() => navigate(`/products`)}
        />
      </div>
    </div>
  );
};
export default ExploreProducts;
