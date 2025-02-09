import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { supabase } from '../supabaseClient';
import { useAuth } from '../context/AuthContext';

export default function Header() {
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    try {
      await supabase.auth.signOut();
      navigate('/');
    } catch (error) {
      console.error('Sign out error:', error);
    }
  };

  return (
    <header className="bg-white shadow p-4 flex justify-between items-center">
      <div className="flex items-center space-x-4">
        <span className="font-bold text-xl">Foodie</span>
        <nav className="space-x-4">
          <NavLink to="/" className="text-gray-700">Home</NavLink>
          <NavLink to="/restaurants" className="text-gray-700">Restaurants</NavLink>
          <NavLink to="/cart" className="text-gray-700">Cart</NavLink>
          {user && <NavLink to="/orders" className="text-gray-700">Order History</NavLink>}
        </nav>
      </div>
      <div>
        {user ? (
          <button onClick={handleSignOut} className="cursor-pointer px-4 py-2 bg-red-500 text-white rounded">
            Sign Out
          </button>
        ) : (
          <NavLink to="/login" className="cursor-pointer px-4 py-2 bg-blue-500 text-white rounded">
            Sign In
          </NavLink>
        )}
      </div>
    </header>
  );
}