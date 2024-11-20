import React, { useState } from "react";
// import "./Header.css";
import AmazonLogo from "../assets/vectors/amazon-in.svg";
import CartIcon from "../assets/vectors/cart-new.svg";
import locationIcon from "../assets/vectors/location.svg";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";


export default function Header() {
  console.log("Header");
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const cartSize  = useSelector((state)=>state.cart.cartSize)

  const filterOptions = [
    { label: "All", value: "all" },
    { label: "Electronics", value: "electronics" },
    { label: "Fashion", value: "fashion" },
    { label: "Home", value: "home" },
    { label: "Grocery", value: "grocery" },
  ];
  const accountOptions = [
    { label: "Account & Lists", value: "accounts" },
    { label: "Orders & Returns", value: "orders" },
    { label: "Try Prime", value: "prime" },
  ];
  const optionMapper = ({ label, value }) => (
    <option value={value}>{label}</option>
  );

  const handleSearch = () => {
    if (query.trim()) {
      console.log('navigated')
      navigate(`/search/${query}`);
    }
  };


  return (
    <div className="flex gap-1 items-center px-4 py-1 bg-[#131921]">
      <Link to={"/"}>
        <HeaderContainer>
          <img
            className="w-32 max-h-[50px]"
            src={AmazonLogo}
            alt="Amazon Logo"
          />
        </HeaderContainer>
      </Link>

      {/* Location Box */}

      <HeaderContainer>
        <div className="h-full flex gap-0.5 items-center p-0.5 ">
          <img
            className="pb-1 h-7 self-end"
            src={locationIcon}
            alt="Location Icon"
          />
          <div className="flex flex-col gap-0.5 text-white">
            <span className="current-location text-xs font-normal">
              Delivering to Dehradun 248001
            </span>
            <span className="text-sm font-bold">Update Location</span>
          </div>
        </div>
      </HeaderContainer>

      {/* Search Box */}

      <div className="min-w-[198px] min-h-10 flex-1 flex rounded bg-white overflow-hidden">
        <select className="w-fit max-w-14 min-h-full p-2 border-transparent border-solid border-r-[#cdcdcd]bg-[#e6e6e6] text-sm">
          {filterOptions.map(optionMapper)}
        </select>
        <input
          className="min-h-full p-2 border-none text-[#111] text-sm flex-1"
          type="search"
          placeholder="Search Amazon.in"
          value={query}
          onChange={(e)=> setQuery(e.target.value)}
        />
        <button 
         type="button"
         className="min-h-full py-2 px-4 border-none bg-[#febd68] text-black text-sm cursor-pointer"
         onClick={handleSearch}
        >
          Go
        </button>
      </div>

      {/* Language Select */}

      <HeaderContainer>
        <select className="h-fit flex p-2 text-sm font-bold items-end text-white bg-transparent">
          <option value={"en"}>🇺🇸 EN</option>
          <option value={"hi"}>🇮🇳 HI</option>
        </select>
        {/* </div> */}
      </HeaderContainer>

      {/* Account Menu */}

      <HeaderContainer>
        <div className="h-full flex justify-center items-start flex-col gap-0.5 text-white">
          <span className="text-xs font-normal px-1">Hello, Sign in</span>
          <select className="text-sm font-bold bg-transparent p-0 m-0 text-white">
            {accountOptions.map(optionMapper)}
          </select>
        </div>
      </HeaderContainer>

      {/* Return & Order Button */}

      <HeaderContainer>
        <button className="h-full flex justify-center items-start flex-col gap-0.5 p-1 text-white bg-transparent">
          <span className="text-xs font-normal">Returns</span>
          <span className="text-sm font-bold">& Orders</span>
        </button>
      </HeaderContainer>

      {/* Cart */}

      <Link to={"/cart"}>
        <HeaderContainer>
          <div className="h-full flex items-end p-1 text-white relative">
            <div className="flex gap-1 items-center">
              <img className="w-10" src={CartIcon} alt="Cart Icon" />
              <span className="absolute top-[-4px] left-[22px] text-base font-bold text-[#f08806]">
                {cartSize}
              </span>
            </div>
            <span className="text-sm font-bold py-0.5 translate-y-2">Cart</span>
          </div>
        </HeaderContainer>
      </Link>
    </div>
  );
}

const HeaderContainer = ({ children }) => {
  return (
    <div className="min-h-full flex p-1 items-end self-stretch rounded-sm outline-none hover:outline-[1.4px] hover:outline-white active:outline-[1.4px] active:outline-white">
      {children}
    </div>
  );
};
