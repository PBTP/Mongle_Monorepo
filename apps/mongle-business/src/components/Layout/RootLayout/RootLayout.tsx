import React from 'react';

import styles from './RootLayout.module.scss';
import { Outlet, useOutletContext } from 'react-router-dom';
import { logout, setAccessToken, useTokenStore } from '@/stores/useTokenStore';
import BottomNavigation from '../BottomNavigation/BottomNavigation';

type ContextType = {
  token: string;
};

const RootLayout = () => {
  const token = useTokenStore((state) => state.accessToken);

  return (
    <div className={styles.RootLayoutWrapper}>
      <div className={styles.RootLayout}>
        <Outlet context={{ token } satisfies ContextType} />
        {token && <BottomNavigation />}
      </div>
    </div>
  );
};

export default RootLayout;

export function useToken() {
  return useOutletContext<ContextType>();
}
