import App from '@/App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { useAuthContext } from '@/context/AuthContext';
import { useEffect } from 'react';
import { getAccessToken } from '@/services/auth/auth.helper';
import { Login } from '@/pages';

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
    path: '/',
    element: <Login />,
  },
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
