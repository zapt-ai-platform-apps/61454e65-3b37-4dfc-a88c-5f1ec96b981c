import React from 'react';
import { useParams, Link } from 'react-router-dom';

export default function RestaurantDetail() {
  const { id } = useParams();
  const menuItems = [
    { id: 1, name: 'Spaghetti', price: 12 },
    { id: 2, name: 'Fettuccine Alfredo', price: 14 },
    { id: 3, name: 'Lasagna', price: 15 },
  ];

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">Restaurant {id}</h1>
      <h2 className="text-2xl mb-2">Menu</h2>
      <ul>
        {menuItems.map((item) => (
          <li key={item.id} className="mb-2 flex justify-between items-center">
            <span>{item.name} - ${item.price}</span>
            <button
              className="cursor-pointer px-3 py-1 bg-green-500 text-white rounded"
              onClick={() => alert(`Added ${item.name} to cart`)}
            >
              Add to Cart
            </button>
          </li>
        ))}
      </ul>
      <Link to="/cart" className="text-blue-500 underline">
        Go to Cart
      </Link>
    </div>
  );
}