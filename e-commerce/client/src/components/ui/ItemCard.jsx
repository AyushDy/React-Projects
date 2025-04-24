import { useState } from "react";
import RatingStars from "./RatingStars";
import AddToCartButton from "./AddToCartButton";
import { Link } from "react-router-dom";
import LikeButton from "./LikeButton";


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
        <Link to={`/product/${product.id}`} className="hover:cursor-pointer">
          <img className="z-0" src={product.image} alt="" />
        </Link>
        <div className="absolute top-2 hover:cursor-pointer right-2 z-10 h-10 w-10 flex justify-items-center p-2 bg-white rounded-full opacity-50 hover:opacity-100 transition duration-300 ease-in-out">
          <LikeButton product={product} />
        </div>
        {isHovered && (
          <div className="absolute bottom-0 w-full h-10">
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
