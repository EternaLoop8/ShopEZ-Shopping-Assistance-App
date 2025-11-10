import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // ✅ import navigate

const Navbar = () => {
  const [loadingLoc, setLoadingLoc] = useState(false);
  const [address, setAddress] = useState(null);
  const [postcode, setPostcode] = useState(null);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const navigate = useNavigate(); // ✅ initialize navigate

  // existing location code...
  useEffect(() => {
    getUserLocation();
  }, []);

  const getUserLocation = () => { /* ... your existing location logic ... */ };
  const reverseGeocode = async (lat, lon) => { /* ... same ... */ };

  return (
    <nav className="w-full bg-white shadow-sm sticky h-10 top-0 z-50">
      <div className="flex justify-between items-center px-4 py-2 gap-3">
        
        {/* Left Section */}
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => navigate("/")}>
          <h1 className="text-xl sm:text-2xl font-bold tracking-wide">
            ShopEZ<span className="text-blue-500">.</span>
          </h1>
          <div className="text-xs sm:text-sm leading-tight hidden md:block">
            <span className="font-extralight">Deliver to User</span>
            <div className="font-bold">
              {loadingLoc && "Detecting location..."}
              {!loadingLoc && error && <span className="text-red-500 text-xs">⚠ Error</span>}
              {!loadingLoc && !error && address && (
                <span title={address}>
                  {address.length > 30 ? address.slice(0, 30) + "…" : address}
                </span>
              )}
              {!loadingLoc && !error && !address && (
                <span className="text-gray-500">Select location</span>
              )}
            </div>
          </div>
        </div>

        {/* Middle Section - Search */}
        <div className="flex-1 justify-left">
          <div className="relative w-full">
            <input
              type="text"
              placeholder="Search products, brands, and more..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full rounded-full border border-gray-300 px-4 py-2 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            />
            <svg xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            strokeWidth={1.5} 
            stroke="currentColor" 
            className="w-5 h-5 text-gray-400 absolute right-1 top-1/2 -translate-y-1/2 cursor-pointer">

            <path strokeLinecap="round" 
            strokeLinejoin="round" 
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>
          </div>
        </div>

        {/* Right Section - Icons */}
        <div className="flex items-center gap-5">
          
          {/* ✅ Login redirect */}
          <button
            onClick={() => navigate("/login")}
            className="flex items-center gap-1 hover:text-blue-500 transition"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none"
              viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
              className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round"
                d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 
                0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 
                21a8.966 8.966 0 0 1-5.982-2.275M15 
                9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
            </svg>
            <span className="hidden sm:inline">Login</span>
          </button>

          {/* ✅ Wishlist redirect */}
          <svg 
          onClick={() => navigate("/wishlist")}
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 24 24" 
          fill="currentColor" 
          className="w-6 h-6 cursor-pointer hover:text-pink-500 transition">

          <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
          </svg>

          {/* ✅ Cart redirect */}
          <svg 
          onClick={() => navigate("/cart")}
          xmlns="http://www.w3.org/2000/svg" 
          fill="none" viewBox="0 0 24 24" 
          strokeWidth={1.5} 
          stroke="currentColor" 
          className="w-6 h-6 cursor-pointer hover:text-yellow-500 transition">

          <path strokeLinecap="round" 
          strokeLinejoin="round" 
          d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
          </svg>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
