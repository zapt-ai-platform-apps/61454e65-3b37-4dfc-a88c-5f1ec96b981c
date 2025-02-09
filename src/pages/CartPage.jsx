import React from 'react';
import { Link } from 'react-router-dom';

export default function CartPage() {
  const cartItems = [
    { id: 1, name: 'Spaghetti', price: 12, quantity: 1 },
    { id: 2, name: 'Burger', price: 10, quantity: 2 }
  ];
  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div>
          <ul>
            {cartItems.map((item) => (
              <li key={item.id} className="mb-2 flex justify-between">
                <span>
                  {item.name} x {item.quantity}
                </span>
                <span>${item.price * item.quantity}</span>
              </li>
            ))}
          </ul>
          <div className="mt-4">
            <p className="text-xl font-bold">Total: ${total}</p>
            <Link to="/checkout" className="cursor-pointer px-4 py-2 bg-blue-500 text-white rounded">
              Proceed to Checkout
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}