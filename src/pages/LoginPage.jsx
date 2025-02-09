import React from 'react';
import { Auth } from '@supabase/auth-ui-react';
import { supabase } from '../supabaseClient';

export default function LoginPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h2 className="text-2xl font-bold mb-4">Sign in with ZAPT</h2>
      <a
        href="https://www.zapt.ai"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 underline mb-4"
      >
        Visit ZAPT
      </a>
      <div className="w-full max-w-md p-4">
        <Auth
          supabaseClient={supabase}
          providers={['google', 'facebook', 'apple']}
          appearance={{
            theme: 'default',
          }}
        />
      </div>
    </div>
  );
}