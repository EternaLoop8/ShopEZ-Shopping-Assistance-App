import React from "react";

const Categories = () => {
  return (
    <div className="w-full bg-gradient-to-r from-yellow-500 via-yellow-400 to-yellow-200 shadow-md m-0 p-0 relative z-10">
      <div className="flex items-center justify-start gap-6 px-6 py-2 text-sm md:text-base font-semibold text-gray-800 whitespace-nowrap">

        {/* Hamburger + Label */}
        <div className="flex items-center gap-0 cursor-pointer hover:text-black transition-colors">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
          <span>Categories</span>
        </div>

        {/* Category List */}
        {[
          "Bestsellers",
          "Top Deals",
          "New Releases",
          "Latest Fashion",
          "Electronics",
          "Daily Needs",
          "Books & Stationary",
          "Groceries",
          "Home & Kitchen",
          "Travel",
          "Sports",
        ].map((item, idx) => (
          <span
            key={idx}
            className="cursor-pointer hover:text-black hover:underline underline-offset-2 transition-all"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Categories;
