import React from "react";
import { productData } from "../../assets/data/data";
import ItemListCard from "../../components/ui/ItemListCard";
import Filters from "../../components/sections/Filters";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

const SearchPage = () => {
  const { query } = useParams();
  console.log(query);
  useEffect(() => {
    window.scrollTo(0, 0);
  }
  , [query]);

  const filteredProducts = productData.filter((product) =>
    product.title.toLowerCase().includes(query.toLowerCase()) ||
    product.category.toLowerCase().includes(query.toLowerCase()) 
  )

  console.log(filteredProducts);

  return (
    <div className="mx-30 flex">
      <Filters />
      <div >
        <h2 className="my-15 text-lg text-gray-500 font-light">
          {filteredProducts.length > 0
            ? `Search results for "${query}"`
            : `No results found for "${query}"`}
          </h2>
        <div className=" justify-between flex flex-col gap-y-6 py-10 ">
          {filteredProducts.map((product) => (
            <ItemListCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
