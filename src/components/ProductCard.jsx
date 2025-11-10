import React from "react";

const CategoryCard = ({ title, products, linkText }) => {
  return (
    <div className="bg-white p-5 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 w-full h-full">
      {/* Title */}
      <h2 className="text-base sm:text-lg font-semibold mb-4">{title}</h2>

      {/* 2x2 Product Grid */}
      <div className="grid grid-cols-2 gap-4 mb-4">
        {products.map((item, idx) => (
          <div key={idx} className="flex flex-col items-center text-center">
            <img
              src={item.image}
              alt={item.label}
              className="w-full h-28 sm:h-32 object-cover rounded-md"
            />
            <p className="text-[11px] sm:text-sm mt-2 text-gray-700">
              {item.label}
            </p>
          </div>
        ))}
      </div>

      {/* Link */}
      <p className="text-sm text-blue-600 hover:underline cursor-pointer">
        {linkText}
      </p>
    </div>
  );
};

export default function HomePage() {
  const categories = [
    {
      title: "Revamp your home in style",
      linkText: "Explore all",
      products: [
        {
          image:
            "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/HomeImprovement/CatCards/cushion.jpg",
          label: "Cushion covers & more",
        },
        {
          image:
            "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/HomeImprovement/CatCards/vases.jpg",
          label: "Figurines & vases",
        },
        {
          image:
            "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/HomeImprovement/CatCards/storage.jpg",
          label: "Home storage",
        },
        {
          image:
            "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/HomeImprovement/CatCards/lighting.jpg",
          label: "Lighting",
        },
      ],
    },
    {
      title: "Starting ₹149 | Headphones",
      linkText: "See all offers",
      products: [
        {
          image:
            "https://images-eu.ssl-images-amazon.com/images/G/31/img23/Audio/Boat/Boat.jpg",
          label: "Starting ₹249 | boAt",
        },
        {
          image:
            "https://images-eu.ssl-images-amazon.com/images/G/31/img23/Audio/Boult/boult.jpg",
          label: "Starting ₹349 | Boult",
        },
        {
          image:
            "https://images-eu.ssl-images-amazon.com/images/G/31/img23/Audio/Noise/noise.jpg",
          label: "Starting ₹649 | Noise",
        },
        {
          image:
            "https://images-eu.ssl-images-amazon.com/images/G/31/img23/Audio/Zebronics/zebronics.jpg",
          label: "Starting ₹149 | Zebronics",
        },
      ],
    },
    {
      title: "Under ₹499 | Deals on home improvement",
      linkText: "Explore all",
      products: [
        {
          image:
            "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/HomeImprovement/CatCards/cleaning.jpg",
          label: "Cleaning supplies",
        },
        {
          image:
            "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/HomeImprovement/CatCards/shower.jpg",
          label: "Bathroom accessories",
        },
        {
          image:
            "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/HomeImprovement/CatCards/tools.jpg",
          label: "Home tools",
        },
        {
          image:
            "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/HomeImprovement/CatCards/wallpaper.jpg",
          label: "Wallpapers",
        },
      ],
    },
  ];

  return (
    <div className="relative bg-[#f8f6f2]">
      {/* Product Cards Overlapping Banner */}
      <div className="relative z-10 -mt-28 sm:-mt-36 lg:-mt-48">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-10 px-6 sm:px-8 lg:px-10">
          {categories.map((cat, idx) => (
            <CategoryCard key={idx} {...cat} />
          ))}
        </div>
      </div>

      {/* Bottom Padding */}
      <div className="h-10" />
    </div>
  );
}
