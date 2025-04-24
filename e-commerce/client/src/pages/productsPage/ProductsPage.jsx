import React from "react";
import { productData } from "../../assets/data/data";
import ItemListCard from "../../components/ui/ItemListCard";
import { useEffect } from "react";

const Productspage = ({category}) => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }
  , []);


  return (
    <div className=" flex justify-center">
      <div >
        <h2>{category || ""}</h2>
        <div className=" flex flex-col gap-y-6 py-10 ">
          {productData.map((product) => (
            <ItemListCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Productspage;
