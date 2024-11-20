import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { data } from "./Home";
import { addToCart, removeFromCart } from "../features/cartSlice";
import { useDispatch, useSelector } from "react-redux";
// import { useContext } from "react";
// import { CartContext } from "../App";

const Search = ({ searchResults }) => {
  const { query } = useParams();
  const [filteredData, setFilteredData] = useState([]);
  // const { cart, updateCart } = useContext(CartContext);

  const cart = useSelector((state)=>state.cart.cart)
  const dispatch = useDispatch();

  const getProductCountInCart = (productId) => {
    const product = cart.find((item) => item.product_id === productId);
    return product ? product.quantity : 0;
  };

  const buttonStyleClass =
    "bg-[#f0c14b] border border-[#a88734] border-t-[#9c7e31] border-b-[#846a29] text-[#111] p-1.5 rounded-lg cursor-pointer flex-1";

  useEffect(() => {
    if (query) {
      const results = data.filter((item) =>
        item.product_name.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredData(results);
    } else {
      setFilteredData(data);
    }
  }, [query, searchResults]);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Search Results for "{query}"</h1>

      {/* Display Search Results */}
      <div className="grid gap-6">
        {filteredData.length > 0 ? (
          filteredData.map((product) => {
            const countInCart = getProductCountInCart(product.product_id);
            return (
              <div
                key={product.product_id}
                className="flex flex-col sm:flex-row sm:items-center border border-gray-300 rounded-lg shadow-md p-4 space-y-4 sm:space-y-0"
              >
                <div className="flex-shrink-0 m-4">
                  <img
                    src={product.img_link}
                    alt={product.product_name}
                    className="w-auto rounded-md object-cover"
                  />
                </div>

                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    {product.product_name}
                  </h3>
                  <p className="text-sm text-gray-600 mb-1">
                    Price: <span className="font-bold">{product.discounted_price}</span>
                  </p>
                  <p className="text-sm text-gray-600 mb-1">
                    Rating: <span className="font-bold">{product.rating} ⭐</span>
                  </p>
                  <a
                    href={product.product_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline text-sm"
                  >
                    View Product
                  </a>
                </div>

                <div className="flex gap-2 mt-4 sm:mt-0 sm:flex-col sm:items-center">
                  {countInCart ? (
                    <>
                      <button
                        className={buttonStyleClass}
                        onClick={() => dispatch(addToCart(product))}
                      >
                        +
                      </button>
                      <span className="flex items-center justify-center font-bold text-[#111]">
                        {countInCart}
                      </span>
                      <button
                        className={buttonStyleClass}
                        onClick={() => dispatch(removeFromCart({product, quantity:1}))}
                      >
                        -
                      </button>
                    </>
                  ) : (
                    <button
                      className={buttonStyleClass}
                      onClick={() => dispatch(addToCart(product))}
                    >
                      Add To Cart
                    </button>
                  )}
                </div>
              </div>
            );
          })
        ) : (
          <p className="text-center text-gray-500">
            No products found for <span className="font-semibold">{`"${query}"`}</span>
          </p>
        )}
      </div>
    </div>
  );
};

export default Search;
