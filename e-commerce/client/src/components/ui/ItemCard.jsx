import { useState } from "react";
import RatingStars from "./RatingStars";
import AddToCartButton from "./AddToCartButton";

const ItemCard = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="mx-4 flex flex-col justify-between rounded-md border-2 border-gray-200"
      onMouseEnter={() => {
        setIsHovered(true);
      }}
      onMouseLeave={() => {
        setIsHovered(false);
      }}
    >
      <div className="w-64 shadow rounded relative">
        <div>
          <img className="z-0" src={product.image} alt="" />
        </div>
        {isHovered && (
          <div className="absolute bottom-0 w-full">
            <AddToCartButton product={product} />
          </div>
        )}
      </div>
      <div className="m-3 mb-5">
        <h3 className="text-lg font-medium ">
          {product.title.substring(0, 20)}
        </h3>
        <h3 className="text-lg font-medium text-red-600 ">
          {"$" + product.price}
        </h3>
        <RatingStars product={product} />
      </div>
    </div>
  );
};

export default ItemCard;
