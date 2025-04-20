import { useSelector } from "react-redux";
import { productData } from "../../assets/data/data";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";

const Searchbox = () => {
  const itemCount = useSelector((state) => state.cart.cartSize) || 0;
  const navigate = useNavigate();

  const [searchItems, setSearchItems] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const searchRef = useRef(null);

  const searchResults = (query) => {
    const results = productData.filter((product) =>
      product.title.toLowerCase().includes(query.toLowerCase().trim())
    );
    setSearchItems(results.slice(0, 5));
  };

  useEffect(() => {
    const handleEnterKey = (e) => {
      if (e.key === "Enter" && searchQuery) {
        setTimeout(() => {
          setSearchItems([]);
          setSearchQuery("");
        }, 300);
        navigate(`/search/${searchQuery}`);
      }
    };
    
    const searchBox = searchRef.current;
    if (searchBox) {
      searchBox.addEventListener("keydown", handleEnterKey);
      return () => {
        searchBox.removeEventListener("keydown", handleEnterKey);
      };
    }
  }, [searchQuery, navigate]);

  return (
    <div className="search flex items-center lg:mr-20 space-x-4">
      <div>
        <div className="flex">
          <input
            ref={searchRef}
            type="text"
            placeholder="What are you looking for?"
            className="px-2 py-1 rounded-sm bg-gray-100 outline-none w-50"
            value={searchQuery}
            onBlur={() => {
              setTimeout(() => {
                setSearchItems([]);
                setSearchQuery("");
              }, 300);
            }}
            onChange={(e) => {
              const query = e.target.value;
              searchResults(query);
              setSearchQuery(query);
            }}
          />
          <img className="bg-gray-100 p-2" src="/search.svg" alt="search" />
        </div>
        {searchItems.length > 0 && (
          <div
            className="absolute bg-white shadow-lg rounded-md mt-2 w-50 z-10"
            onClick={() => {
              setSearchItems([]);
              setSearchQuery("");
            }}
          >
            {searchItems.map((item) => (
              <Link
                to={`/search/${item.title}`}
                key={item.id}
                className="block px-4 py-2 hover:bg-gray-100"
              >
                {item.title}
              </Link>
            ))}
          </div>
        )}
      </div>
      <img src="/like.svg" alt="wishlist" className="w-5 h-5 cursor-pointer" />
      <Link className="relative" to="/cart">
        <img src="/cart.svg" alt="cart" className="w-5 h-5 cursor-pointer" />
        <span className="absolute -top-2 -right-4 bg-red-500 text-white text-xs rounded-lg px-1 py-0.5">
          {itemCount}
        </span>
      </Link>
    </div>
  );
};

export default Searchbox;