
import { store } from '@/redux/store';
import { QueryClient } from '@tanstack/react-query';
import axios from 'axios';

  export const  baseURL = process.env.NEXT_PUBLIC_API_URL || 'https://med-tele-healthcare-server-12dfae60da9e.herokuapp.com/api'
  export const SocketBaseURL = process.env.NEXT_PUBLIC_API_URL || 'https://med-tele-healthcare-server-12dfae60da9e.herokuapp.com'

  // export const baseURL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8082/api'
  // export const SocketBaseURL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8082'


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
