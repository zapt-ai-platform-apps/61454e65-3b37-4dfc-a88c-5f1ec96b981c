import React from 'react';

export default function OrderHistory() {
  const orders = [
    { id: 1, date: '2023-10-01', total: 34.5 },
    { id: 2, date: '2023-10-05', total: 21.0 }
  ];

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">Order History</h1>
      {orders.length === 0 ? (
        <p>No past orders found.</p>
      ) : (
        <ul>
          {orders.map((order) => (
            <li key={order.id} className="mb-2">
              Order #{order.id} - {order.date} - ${order.total}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}