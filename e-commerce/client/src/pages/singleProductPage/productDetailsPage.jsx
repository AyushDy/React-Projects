import React,{useState,useEffect} from "react";
import { useParams } from "react-router-dom";
import { productData } from "../../assets/data/data";
import RatingStars from "../../components/ui/RatingStars";
import ColorChoose from "../../components/ui/ColorChoose";
import AddToCartButton from "../../components/ui/AddToCartButton";
import ButtonRed from "../../components/ui/ButtonRed";

const ProductDetailsPage = () => {
  const { id } = useParams();
  const product = productData.find((item) => item.id === Number(id));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="mx-35 my-20  flex">
      <div className="flex gap-10 justify-between">
        <ImagesDisplay product={product} />
        <div className="flex flex-col gap-2 ">
          <h1 className="text-4xl font-bold">{product.title}</h1>
          <span className="flex items-center gap-2">
            <RatingStars product={product} />
            Reviews | <span className="text-emerald-500">In stock</span>
          </span>
          <h2 className="text-4xl font-medium ">$ {product.price}</h2>
          <p className="border-b-2 border-gray-400  pb-5 my-5">
            {product.description}
          </p>
          <div className="flex items-center  gap-2">
            <ColorChoose colors={["bg-red-500", "bg-gray-500"]} />
          </div>
          <Sizes />
          <Buttons product={product} />
          <div className="">
            <div className=" border-2 p-5 border-gray-300 rounded-t  flex gap-5">
              <img src="/cart/delivery.svg" alt="" />
              <div>
                <h3 className="font-medium text-lg">Free Delivery</h3>
                <p className="underline">Enter your postal code for Delivery Availability</p>
              </div>
            </div>
            <div className=" border-2 p-5 border-t-0 rounded-b border-gray-300  flex gap-5">
              <img src="/cart/return.svg" alt="" />
              <div>
                <h3 className="font-medium text-lg">Return Delivery</h3>
                <p className="">Free 30 Days Delivery Returns. Details</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;


const ImagesDisplay = ({product}) => {
  const images= product.images || []; 
  const [currentImage, setCurrentImage] = useState(images[0]);

  
  return (
    <div className="flex justify-between items-start gap-2 ">
    <div className="flex flex-col w-1/2 gap-3 ">
      {images.length>0 &&
        images.map((image, index) => (
          <img
            onClick={() => setCurrentImage(image)}
            key={index}
            src={image}
            alt={product.name}
            className={`mx-2 rounded-md ${currentImage === image ? "border-2 border-red-500" : ""} hover:cursor-pointer`}
          />
        ))}
    </div>
    <div className="h-full ">
      <img
        src={currentImage}
        alt={product.name}
        className="rounded-md"
      />
    </div>
  </div>
  )
}


const Buttons = ({ product }) => {
  return (
    <div className="flex w-full  gap-5 my-5">
      <div className="w-4/9">
      <AddToCartButton product={product} />
      </div>
      <ButtonRed text={"Buy Now"} />
      <div className="rounded-md p-3 border-2 flex border-gray-500">
        <img src="/like.svg" alt="wishlist" />
      </div>
    </div>
  );
};

const Sizes = () => {
  const sizes = ["XS", "S", "M", "L", "XL"];
  const [selectedSize, setSelectedSize] = React.useState("M");

  return (
    <div className="flex items-center mt-2 gap-2 ">
      Size :
      <div className="flex items-center gap-2 ">
        {sizes.map((size, index) => (
          <div
            key={index}
            onClick={() => setSelectedSize(size)}
            className={`rounded-md py-2 w-10 text-center border-2 hover:cursor-pointer ${
              selectedSize === size
                ? "bg-red-500 text-white border-red-500"
                : " text-gray-500"
            }`}
          >
            {size}
          </div>
        ))}
      </div>
    </div>
  );
};
