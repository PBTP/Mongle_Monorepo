import BottomNavigation from '@/components/Layout/BottomNavigation/BottomNavigation';
import { useToken } from '@/components/Layout/RootLayout/RootLayout';
import { useTokenStore } from '@/stores/useTokenStore';
import { Navigate, Outlet, useOutletContext } from 'react-router';

const ProtectedRoute = () => {
  const { token } = useToken();

  return (
    <>
      {token ? (
        <Outlet />
      ) : (
        // <Navigate to="/" replace={true} />
        <Outlet />
      )}
    </>
  );
};

export default ProtectedRoute;
