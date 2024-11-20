import { useParams } from "react-router-dom";
import ImageComposition from "../components/imageComposition";
import ProductCard from "../components/ProductCard";  // Import ProductCard
import { data } from "./Home";
import { CartContext } from "../App";
import { addToCart } from "../features/cartSlice";
import { useSelector,useDispatch } from "react-redux";
import { useEffect } from "react";

const ProductDetail = () => {
  const { productId } = useParams();
  const dispatch =  useDispatch();
  const { cart } = useSelector((state)=>state.cart);
  const product = data.find((item) => item.product_id === productId) || data[0];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [productId]);

  const getRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  return (
    <div className="product-detail-container flex flex-col gap-6 p-6 max-w-screen-xl mx-auto">
 
      <ImageComposition images={[product.img_link, product.img_link, product.img_link, product.img_link]} />

      <div className="product-info flex flex-col gap-4 bg-white p-4 rounded shadow-md">
     
        <h1 className="text-2xl font-bold">{product.product_name}</h1>

        <p className="text-gray-600">{product.about_product}</p>

        <div className="pricing flex items-center gap-4 text-lg">
          <span className="text-[#B12704] font-bold">{product.discounted_price}</span>
          <span className="line-through text-gray-500">{product.actual_price}</span>
          <span className="text-green-500">{product.discount_percentage} OFF</span>
        </div>

        <button
          className="bg-[#ffd814] text-black py-2 px-6 rounded hover:bg-[#f7ca00] transition"
          onClick={() => dispatch(addToCart(product))}
        >
          Add to Cart
        </button>
      </div>

      <div className="reviews bg-white p-6 rounded shadow-md">
        <h2 className="text-2xl font-bold mb-6">Customer Reviews</h2>
        <div className="flex flex-col gap-6">
          {product.user_name.split(",").map((user, i) => (
            <div
              key={i}
              className="review-item flex gap-4 p-4 border-b last:border-none"
            >
              <div
                className="user-avatar w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center text-xl font-bold text-white"
                style={{ backgroundColor: getRandomColor(i) }}
              >
                {user.trim().charAt(0).toUpperCase()}
              </div>

              <div className="review-content flex flex-col gap-2">
             
                <h3 className="font-semibold text-lg">{user.trim()}</h3>

                <p className="font-bold text-gray-800">
                  {product.review_title.split(",")[i]}
                </p>

                <p className="text-gray-600">
                  {product.review_content.split(",")[i]}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Related Products */}
      <div className="suggested-products flex flex-wrap gap-4">
        <h2 className="w-full text-xl font-bold mb-4">Related Products</h2>
        <div className= "z-20 products w-full flex bg-transparent flex-wrap-x overflow-auto justify-between gap-4 mx-auto">
        {data.slice(0, 6).map((item) => (
          <ProductCard key={item.product_id} data={item} />
        ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
