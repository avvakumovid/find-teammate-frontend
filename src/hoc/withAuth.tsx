import { useAuthContext } from '@/context/AuthContext';
import { Navigate, redirect } from 'react-router-dom';

export const withAuth = (Component: any) => {
  const AuthRoute = (props: any) => {
    const { user } = useAuthContext();

    if (user) {
      return <Component {...props} />;
    }
    return <Navigate to={'/login'} />;
  };

  return AuthRoute;
};
