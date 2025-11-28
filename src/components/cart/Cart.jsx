import React from "react";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const navigate = useNavigate();

  // TEST cart data:
  const cartItems = [];
  // const cartItems = [{ id: 1, name: "Laptop", price: 999 }];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">🛒 Your Cart</h1>

      {cartItems.length === 0 ? (
        <div className="text-center">
          <p>Your cart is empty.</p>
          <button
            onClick={() => navigate("/products")}
            className="mt-4 px-4 py-2 bg-blue-600 text-white rounded"
          >
            Shop Now
          </button>
        </div>
      ) : (
        <div>
          {cartItems.map((item) => (
            <div key={item.id} className="p-3 bg-gray-200 my-2 rounded">
              <p>{item.name}</p>
              <p>₹{item.price}</p>
            </div>
          ))}

          <button
            onClick={() => navigate("/checkout")}
            className="mt-4 px-4 py-2 bg-green-600 text-white rounded"
          >
            Proceed to Checkout
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;