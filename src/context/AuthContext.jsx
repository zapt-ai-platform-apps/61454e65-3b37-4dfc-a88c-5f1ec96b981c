import React, { createContext, useState, useEffect, useContext } from 'react';
import { supabase, recordLogin } from '../supabaseClient';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user || null);
      setLoading(false);
    });

    const { data: subscription } = supabase.auth.onAuthStateChange(async (event, session) => {
      setUser(session?.user || null);
      if (event === 'SIGNED_IN' && session?.user?.email) {
        try {
          await recordLogin(session.user.email, import.meta.env.VITE_PUBLIC_APP_ENV);
        } catch (error) {
          console.error('Failed to record login:', error);
        }
      }
    });

    return () => subscription.unsubscribe();
  }, []);

  return <AuthContext.Provider value={{ user, loading }}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  return useContext(AuthContext);
}