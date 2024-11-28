'use client';

import { setUserAuth } from '@/stores/useAuthStore';
import React from 'react';

interface AuthProviderProps {
  authCookie: string;
  children: React.ReactNode;
}

const AuthProvider = ({ authCookie, children }: AuthProviderProps) => {
  const [accessToken, uuid] = authCookie.split(',');
  if (accessToken && uuid) {
    setUserAuth(accessToken, uuid);
  }
  return <>{children}</>;
};

export default AuthProvider;
