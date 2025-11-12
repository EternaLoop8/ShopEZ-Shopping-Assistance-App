import React from "react";

const Categories = () => {
  const categories = ["Bestsellers", "Top Deals", "New Releases", "Mobiles", "Electronics", "Travel", "Home & Decorations", "Sports", "Books & Novels", "Daily Needs", "Grocery"];

  return (
    <div className="w-full bg-gradient-to-r from-yellow-500 via-yellow-400 to-yellow-200 shadow-md px-1 py-2 relative z-10">
      <div className="flex items-center justify-start gap-6 text-sm md:text-base font-semibold text-gray-800 flex-wrap">
        
        {/* Hamburger + Label */}
        <div className="flex items-center gap-1 cursor-pointer hover:text-black transition-colors">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
          <span>Categories</span>
        </div>

        {/* Render category names */}
        {categories.map((item, index) => (
          <span key={index} className="hover:text-black cursor-pointer">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Categories;
