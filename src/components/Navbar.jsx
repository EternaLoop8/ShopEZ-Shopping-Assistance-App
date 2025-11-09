import React, { useEffect, useState } from "react";

const Navbar = () => {
  const [loadingLoc, setLoadingLoc] = useState(false);
  const [address, setAddress] = useState(null);
  const [postcode, setPostcode] = useState(null);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    getUserLocation();
  }, []);

  const getUserLocation = () => {
    if (!navigator.geolocation) {
      setError("Geolocation not supported by this browser.");
      return;
    }

    setLoadingLoc(true);
    setError(null);

    navigator.geolocation.getCurrentPosition(
      async (pos) => {
        const lat = pos.coords.latitude;
        const lon = pos.coords.longitude;
        try {
          await reverseGeocode(lat, lon);
        } catch {
          setError("Reverse geocoding failed.");
        } finally {
          setLoadingLoc(false);
        }
      },
      (err) => {
        setLoadingLoc(false);
        if (err.code === err.PERMISSION_DENIED) {
          setError("Location permission denied. Enter address manually.");
        } else {
          setError("Could not get location: " + err.message);
        }
      },
      { enableHighAccuracy: false, timeout: 10000 }
    );
  };

  const reverseGeocode = async (lat, lon) => {
    const url = `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${lat}&lon=${lon}&addressdetails=1&accept-language=en`;

    const res = await fetch(url);
    if (!res.ok) throw new Error("Reverse geocode fetch failed");

    const data = await res.json();
    const addr = data.address || {};
    const city =
      addr.city ||
      addr.town ||
      addr.village ||
      addr.state_district ||
      addr.state ||
      "";
    const code = addr.postcode || addr.postal_code || "";

    setAddress(city);
    setPostcode(code);
  };

  return (
    <nav className="w-full bg-white shadow-sm sticky h-10 top-0 z-50">
      <div className="flex justify-between items-center px-4 py-2 gap-3">
        {/* Left Section - Logo + Location */}
        <div className="flex items-center gap-3">
          <h1 className="text-xl sm:text-2xl font-bold tracking-wide cursor-pointer">
           ShopEZ<span className="text-blue-500">.</span>
          </h1>

          <div className="text-xs sm:text-sm leading-tight hidden md:block">
            <span className="font-extralight">Deliver to User</span>
            <div className="font-bold">
              {loadingLoc && "Detecting location..."}
              {!loadingLoc && error && (
                <span className="text-red-500 text-xs">⚠ Error</span>
              )}
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

        {/* Middle Section - Search Bar */}
        <div className="flex-1 justify-left">
          <div className="relative w-full">
            <input
              type="text"
              placeholder="Search products, brands, and more..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full rounded-full border border-gray-300 px-4 py-2 pl-10 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5 absolute right-1 top-1 text-gray-400 cursor-pointer"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-4.35-4.35m0 0A7.5 7.5 0 1 0 4.5 4.5a7.5 7.5 0 0 0 12.15 12.15Z"
              />
            </svg>
          </div>
        </div>

        {/* Right Section - Icons */}
        <div className="flex items-center gap-5">
          {/* Login */}
          <button className="flex items-center gap-1 hover:text-blue-500 transition">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
            </svg>
            <span className="hidden sm:inline">Login</span>
            <svg xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            strokeWidth={1.5} 
            stroke="currentColor" 
            className="size-6">
           <path strokeLinecap="round" 
           strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
            </svg>
          </button>

          {/* Wishlist */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 cursor-pointer hover:text-pink-500 transition"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
            />
          </svg>

          {/* Cart */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 cursor-pointer hover:text-yellow-500 transition"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
            />
          </svg>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
