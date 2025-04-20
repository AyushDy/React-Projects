import React from "react";
import { NavLink ,Link} from "react-router-dom";
import Searchbox from "./SearchBox";

const Header = () => {
  return (
    <div className="flex flex-col w-full">
      <div className="h-14 bg-black text-white p-6 flex justify-center-safe items-center">
        <div className="flex items-center space-x-2 w-full justify-center">
          <p className="text-center font-light">
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
          </p>
          <a className="underline m-2" href="#">
            ShopNow
          </a>
        </div>
        <div className="ml-auto">
          <select className="bg-black text-white px-2 py-1" name="" id="">
            <option value="">English</option>
          </select>
        </div>
      </div>

      <div className=" flex flex-col md:flex-row justify-between items-center py-6 px-6 border-b-2 border-gray-300">
        <h1 className="text-4xl lg:ml-16 font-bold ">Exclusive</h1>
        <Navbar />
        <Searchbox />
      </div>
    </div>
  );
};

export default Header;

const Navbar = () => {
  return (
    <nav className="flex space-x-10 align-text-bottom font-light text-gray-500">
      <NavLink
        className={({ isActive }) => (isActive ? " border-b-1 border-gray-400" : "")}
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        to="/contact"
        className={({ isActive }) => (isActive ? " border-b-1 border-gray-400" : "")}
      >
        Contact
      </NavLink>
      <NavLink
        to="/about"
        className={({ isActive }) => (isActive ? "  border-b-1 border-gray-400" : "")}
      >
        About
      </NavLink>
      <NavLink
        to="/auth/signup"
        className={({ isActive }) => (isActive ? "  border-b-1 border-gray-400" : "")}
      >
        Sign Up
      </NavLink>
    </nav>
  );
};

