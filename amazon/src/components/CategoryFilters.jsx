import React, { useState, useRef, useEffect } from "react";

export default function CategoryFilters({ openSidebar }) {
  const [visibleItems, setVisibleItems] = useState([]);
  const containerRef = useRef(null);

  // Data array for items
  const items = [
    "Fresh",
    "MX Player",
    "Sell",
    "Gift Cards",
    "Amazon Pay",
    "Buy Again",
    "AmazonBasics",
    "Gift Ideas",
    "Today's Deals",
    "Kindle eBooks",
    "Mobiles",
    "Books",
    "New Releases",
    "Best Sellers",
    "Electronics",
    "Prime",
  ];

  const updateVisibleItems = () => {
    if (containerRef.current) {
      const containerWidth = containerRef.current.offsetWidth;
      const itemWidth = 100; 
      const itemsPerRow = Math.floor(containerWidth / itemWidth); 
      const newVisibleItems = items.slice(0, itemsPerRow); 
      setVisibleItems(newVisibleItems);
    }
  };

  useEffect(() => {
    updateVisibleItems();
    window.addEventListener('resize', updateVisibleItems);
    return () => window.removeEventListener('resize', updateVisibleItems);
  }, []);

  return (
    <ul ref={containerRef} className="overflow-x max-w-full h-fit flex gap-1 p-1 text-white bg-[#222f3e]">
      <li
        className="flex justify-center items-center p-2.5 rounded-sm text-center text-nowrap cursor-pointer outline-none hover:outline-[1.25px] hover:outline-white"
        onClick={openSidebar}
      >
        <img src="https://via.placeholder.com/17x14" alt="menu-icon" />
        All
      </li>
      {visibleItems.map((item, index) => (
        <li
          key={index}
          className="flex justify-center items-center p-2.5 rounded-sm text-center text-nowrap cursor-pointer outline-none hover:outline-[1.25px] hover:outline-white"
        >
          {item}
        </li>
      ))}
    </ul>
  );
}
