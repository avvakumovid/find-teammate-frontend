import App from '@/App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { useAuthContext } from '@/context/AuthContext';
import { useEffect } from 'react';
import { getAccessToken } from '@/services/auth/auth.helper';
import { Login } from '@/pages';
import { Main } from './../pages/main/main';
import { withAuth } from '@/hoc/withAuth';
import { PrivateRoute } from './PrivateRoute';

//const router = createBrowserRouter([
//  {
//    path: '/',
//    element: <LoginSignUp />,
//  },
//]);
//
//const authRouter = createBrowserRouter([
//  {
//    path: '/',
//    element: <Main />,
//  },
//]);

const test = createBrowserRouter([
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/',
    element: <PrivateRoute component={Main} />
  }
]);

export const Navigation = () => {
  const { token, setToken } = useAuthContext();

  useEffect(() => {
    const getToken = async () => {
      const token = await getAccessToken();
      if (token) {
        setToken(token);
      }
    };
    getToken();
  }, []);

  return <RouterProvider router={test} />;
  // return <RouterProvider router={token ? authRouter : router} />;
};
