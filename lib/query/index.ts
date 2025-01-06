
import { store } from '@/redux/store';
import { QueryClient } from '@tanstack/react-query';
import axios from 'axios';

  export const  baseURL = process.env.NEXT_PUBLIC_API_URL || 'https://orderpay-r1p1.onrender.com/api'
  // export const SocketBaseURL = process.env.NEXT_PUBLIC_API_BASE_URL_SOCKET || 'https://orderpay-r1p1.onrender.com'


const apiClient = axios.create({
  baseURL
});


apiClient.interceptors.request.use((config) => {
    const state = store.getState();
    const token = state.auth.currentUser?.accessToken || sessionStorage.getItem('accessToken');
  
    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  });


export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 1,
    },
    mutations: {
      retry: 1,
    },
  },
});

export { apiClient };
