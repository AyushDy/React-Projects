import { useContext, useState } from "react";
import { addToCart, removeFromCart } from "../global/reusableFunctions";
import { CartContext } from "../App";

const ProductCard = ({ data }) => {
  console.log("ProductCard");
  const { cart, updateCart } = useContext(CartContext);
  const product = cart.find((item) => item.product_id === data.product_id);
  const countInCart = product ? product.quantity : 0;
  const buttonStyleClass =
    "bg-[#f0c14b] border border-[#a88734] border-t-[#9c7e31] border-b-[#846a29] text-[#111] p-1.5 rounded-lg cursor-pointer flex-1";
  console.log("ProductCard", data.product_id, countInCart, cart, updateCart);
  return (
    <div className="flex flex-col gap-2 p-2 border-2 border-[#f0f2f2] rounded-lg">
      <img
        className="h-[200px] w-fit max-w-[400px] object-cover"
        src={data.img_link}
        alt={data.product_name}
      />

      <div className="flex gap-2">
        {countInCart ? (
          <>
            <button
              className={buttonStyleClass}
              onClick={() => addToCart(data, cart, updateCart)}
            >
              +
            </button>
            <button
              className={buttonStyleClass}
              onClick={() => removeFromCart(data, cart, updateCart)}
            >
              -
            </button>
          </>
        ) : (
          <button
            className={buttonStyleClass}
            onClick={() => addToCart(data, cart, updateCart)}
          >
            Add To Cart
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductCard;

const sample = {
  product_id: "B00A7PLVU6",
  product_name: "Orpat HHB-100E WOB 250-Watt Hand Blender (White)",
  category:
    "Home&Kitchen|Kitchen&HomeAppliances|SmallKitchenAppliances|HandBlenders",
  discounted_price: "₹753",
  actual_price: "₹899",
  discount_percentage: "16%",
  rating: 4.2,
  rating_count: "18,462",
  about_product:
    "This product does not require installation. please contact brand customer care for any product related queires. Customer Service Number: +91-02822-230491 / 02822-391391|Unique comfort grip, The frequency is 50 Hz, Functions: Beating. Pureeing : Yes|Easy to store and wash and it has Stainless steel blade|A handy appliance which will reduce the time you spend in the kitchen by taking care of all your chopping, blending or mixing tasks at the touch of a button|Smooth and safe switch, Sleek & Strong|Elegant design|18000 RPM",
  user_id:
    "AG43Z7WV62ULSGSI3JHOKCZZRSLQ,AFXOKBDDHJNQRGHFWPJZA6PL3XMQ,AEDNOJVJHRNIBUYTBMFCMOLD62VA,AGE7XVUZ2FXSRI3BK5HVLRNWAY7Q,AEX3XKLTC3JM3H5X4YEBQFLNFX4A,AHZLFVEFPM5G6NINL6C2U6DEUNZA,AH6JPKYMSSWUVSSYIRXWC3YUAYSA,AHOI4FVLH6MHWFQHKWJKAKAWTZVA",
  user_name:
    "Monika kochhar,Mr.,Amazon Customer,Amazon Customer,Sukhwinder Singh Arora,Pooja jain,Aman sharma,N.Nasrullah",
  review_id:
    "RZU7M4VT3VR9I,R34QGD0WN73BME,R3GPSO444Z45JY,R8V5HHELYQBN5,R1G5OOXJUH8OOQ,R1PJIEUCR1A06F,R2401CXS8NQ487,R2S7S3AL8MC5ZU",
  review_title:
    "Nice product but little bit costly,Is good,Value for money,Ok,Good product,Nice product,we can use it for every work like chatni, shake, blending, etc so you must try it.,Using it since 2019",
  review_content:
    "Speed is gud nd easy to handle,Very useful,Quality is okay for this price.,Ok,Good product,Nice product,Is is easy to use and we can use it for everything.It is orerall great 👍,I bought it in 2019, using it everyday. I haven't faced any problem or a simple glitch all these years. If it is still in market, i would highly recommend.",
  img_link:
    "https://m.media-amazon.com/images/I/21OWOIM1wML._SX300_SY300_QL70_FMwebp_.jpg",
  product_link:
    "https://www.amazon.in/Orpat-HHB-100E-WOB-250-Watt-Blender/dp/B00A7PLVU6/ref=sr_1_104?qid=1672923596&s=kitchen&sr=1-104",
};
