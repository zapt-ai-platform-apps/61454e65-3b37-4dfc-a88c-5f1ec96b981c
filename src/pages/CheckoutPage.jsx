import React, { useState } from 'react';

export default function CheckoutPage() {
  const [loading, setLoading] = useState(false);

  const handleCheckout = async () => {
    setLoading(true);
    try {
      console.log("Checkout process started");
      await new Promise((resolve) => setTimeout(resolve, 2000));
      alert("Order placed successfully");
    } catch (error) {
      console.error("Checkout error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">Checkout</h1>
      <p>Please review your order and confirm.</p>
      <button
        onClick={handleCheckout}
        disabled={loading}
        className="cursor-pointer px-4 py-2 bg-green-500 text-white rounded mt-4"
      >
        {loading ? "Processing..." : "Place Order"}
      </button>
    </div>
  );
}