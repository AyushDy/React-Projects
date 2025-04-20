import React from 'react'
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

const RatingStars = ({product}) => {

    const rate = product.rating.rate;

    const getStars = () => {
        const stars = [];
    
        for (let i = 1; i <= 5; i++) {
          if (rate >= i) {
            stars.push(<FaStar key={i} className="text-yellow-500" />);
          } else if (rate >= i - 0.5) {
            stars.push(<FaStarHalfAlt key={i} className="text-yellow-500" />);
          } else {
            stars.push(<FaRegStar key={i} className="text-yellow-500" />);
          }
        }
        return stars;
      };
  
      
  return (
    <div className="flex items-center">
    {getStars()}
    {"(" + product.rating.count + ")"}
    </div>
  )
}

export default RatingStars;