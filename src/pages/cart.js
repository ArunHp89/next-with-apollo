// pages/cart.js
import React from "react";
import { useCart } from "./components/CartContext";

const CartPage = () => {
  const { cartState } = useCart();
  const { items } = cartState;
  console.log("items:", items, "qnt:");
  const calculateTotal = () => {
    return items.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-semibold mb-4">Cart Summary</h1>
      {items.length === 0 ? (
        <p>Your cart is empty.fdgdgd</p>
      ) : (
        <div>
          <ul className="space-y-2">
            {items.map((item) => (
              <li key={item.productId} className="border-b pb-2">
                <p className="text-lg font-semibold">{item.name}</p>
                <p>Price: ${item.price}</p>
                <p>Quantity: {item.quantity}</p>
              </li>
            ))}
          </ul>
          <p className="mt-4">Total: ${calculateTotal().toFixed(2)}</p>
          <button className="bg-blue-500 text-white px-4 py-2 mt-4 rounded">
            Proceed to Checkout
          </button>
        </div>
      )}
    </div>
  );
};

export default CartPage;
