import { useAuthContext } from '@/context/AuthContext';
import { ComponentType } from 'react';
import { Route, Navigate } from 'react-router-dom';

interface PrivateRouteProps {
  component: ComponentType<any>;
}

export const PrivateRoute = ({
  component: Component,
  ...rest
}: PrivateRouteProps) => {
  const { token } = useAuthContext();

  if (token) return <Component {...rest} />;
  return <Navigate to='/login' />;
};
