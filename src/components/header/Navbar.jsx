import React from 'react'

const Navbar= () => {
  return (
    <nav className='w-full bg-white shadow flex items-center justify-between px-10 py-2'>
      <div className="flex justify-center items-center gap-4 px-6 py-2">
      <div>
        <h1 className="text-xl sm:text-2xl font-bold tracking-wide">
        ShopEZ<span className="text-blue-500">.</span>
        </h1>
      </div>

      <div>
        <span className='text-gray-400'>Deliver to User</span>
        <br />
        <span className=''>Place,Pincode</span>
      </div>

      <div className='flex justify-center max-w-md mx-auto'>
        <input 
        type="text"
        placeholder='Search fo Products'
        className='w-full max-w-sm md:max-w-md lg:max-w-lg px-3 py-2 border-2 border-gray-300 p-2 rounded-full focus:outline-none focus:border-blue-500'
         />

        <svg xmlns="http://www.w3.org/2000/svg" 
        fill="none" 
        viewBox="0 0 24 24" 
        strokeWidth={1.5} 
        stroke="currentColor" 
        className="size-6 cursor-pointer">
        <path strokeLinecap="round" 
        strokeLinejoin="round" 
        d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
        </svg>
      </div>

      <div className='flex gap-4 cursor-pointer'>
        <button className='flex cursor-pointer rounded border-2 px-4 py-2 h-10 w-20 justify-center items-center'>
          <span className=''>Login</span>

          <svg xmlns="http://www.w3.org/2000/svg" 
          fill="none" 
          viewBox="0 0 24 24" 
          strokeWidth={1.5} 
          stroke="currentColor" 
          className="size-6">
         <path strokeLinecap="round" 
          strokeLinejoin="round" 
          d="m19.5 8.25-7.5 7.5-7.5-7.5" />
          </svg>
        </button>

        <svg xmlns="http://www.w3.org/2000/svg" 
        fill="none" 
        viewBox="0 0 24 24" 
        strokeWidth={1.5} 
        stroke="currentColor" 
        className="size-6">
       <path strokeLinecap="round" 
        strokeLinejoin="round" 
        d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
        </svg>


        <svg xmlns="http://www.w3.org/2000/svg" 
        fill="none" 
        viewBox="0 0 24 24" 
        strokeWidth={1.5} 
        stroke="currentColor" 
        className="size-6">
       <path strokeLinecap="round" 
        strokeLinejoin="round" 
        d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
        </svg>

      </div>
    </div>
    </nav>
  )
}

export default Navbar
