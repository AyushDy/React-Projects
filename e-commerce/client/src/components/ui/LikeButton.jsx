import React from "react";
import { addItem , removeItem , selectWishlistItemById } from "../../features/wishlistSlice";
import { useDispatch, useSelector } from "react-redux";

const LikeButton = ({product}) => {
    const dispatch = useDispatch();
    const wishlistItem = useSelector((state) =>
        selectWishlistItemById(state, product.id) || null
      );

  return (
    <div>
      <img
      className="w-full h-full"
        src={wishlistItem ? "/liked.svg" : "/like.svg"}
        alt="like-button"
        onClick={() => {
          wishlistItem
            ? dispatch(removeItem({ productId: product.id }))
            : dispatch(addItem({ product }));
        }}
      />
    </div>
  );
};

export default LikeButton;
