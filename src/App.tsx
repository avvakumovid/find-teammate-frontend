import './App.css';
import { Navigation } from './navigation/Navigation';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { AuthProvider } from './context/AuthContext';
import { useEffect, useState } from 'react';
import { getAccessToken } from './services/auth/auth.helper';
import { User } from './types/types';

const queryClient = new QueryClient();

function App() {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState('');

  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider value={{ user, setUser, token, setToken }}>
        <Navigation />
      </AuthProvider>
    </QueryClientProvider>
  );
}

export default App;
