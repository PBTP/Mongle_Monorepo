import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface AuthState {
  accessToken: string | null;
  uuid: string | null;
  setAuth: (token: string, uuid: string) => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      accessToken: null,
      uuid: null,
      setAuth: (token, uuid) => {
        set({ accessToken: token, uuid });
      },
    }),
    { name: 'auth-storage' }
  )
);

export const setUserAuth = (token: string, uuid: string) => {
  useAuthStore.getState().setAuth(token, uuid);
};

export const getUserAuth = () => {
  return useAuthStore.getState();
};
