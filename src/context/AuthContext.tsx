import authService from '@/services/auth/auth.service';
import { IUser } from '@/types/types';
import { createContext, useContext, useEffect } from 'react';
import { getAccessToken } from './../services/auth/auth.helper';

export interface AuthContextData {
  user: IUser | null;
  setUser: (user: IUser | null) => void;
  token: string;
  setToken: (token: string) => void;
}

const AuthContext = createContext<AuthContextData | null>(null);

export const AuthProvider = AuthContext.Provider;

interface AuthConsumerProps {
  children: (data: AuthContextData) => React.ReactElement;
}

export const AuthConsumer = (props: AuthConsumerProps) => {
  const data = useAuthContext();

  return props.children(data);
};

export const useAuthContext = () => {
  const data = useContext(AuthContext);

  if (!data) {
    throw new Error(`Can not 'useAuthContext' outside of the AuthProvider`);
  }

  return data;
};
