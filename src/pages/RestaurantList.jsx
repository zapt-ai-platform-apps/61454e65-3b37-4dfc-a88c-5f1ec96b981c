import React from 'react';
import { Link } from 'react-router-dom';

export default function RestaurantList() {
  const restaurants = [
    { id: 1, name: 'Pasta Palace' },
    { id: 2, name: 'Burger Bonanza' },
    { id: 3, name: 'Sushi Central' },
  ];

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">Restaurants</h1>
      <ul>
        {restaurants.map((rest) => (
          <li key={rest.id} className="mb-2">
            <Link to={`/restaurants/${rest.id}`} className="text-blue-500 underline cursor-pointer">
              {rest.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}