import { useQuery, useMutation, UseQueryOptions, UseMutationOptions, QueryKey } from '@tanstack/react-query';
import { apiClient } from '@/lib/query';
import { AxiosError } from 'axios';


export const useApiQuery = <TData, TError = unknown>(
  key: QueryKey,
  url: string,
  options?: Omit<UseQueryOptions<TData, TError, TData, QueryKey>, 'queryKey' | 'queryFn'>
) => {
  return useQuery<TData, TError, TData, QueryKey>({
    queryKey: key,
    queryFn: async () => {
      const { data } = await apiClient.get<TData>(url);
      return data;
    },
    ...options,
  });
};



export const useApiMutation = <TData, TVariables = unknown, TError = AxiosError>(
    url: string,
    options?: UseMutationOptions<TData, TError, TVariables>
  ) => {
    const mutationFn = async (variables: TVariables): Promise<TData> => {
      const response = await apiClient.post<TData>(url, variables);
      return response.data;
    };
  
    return useMutation<TData, TError, TVariables>({
      mutationFn,
      ...options, 
    });
  };
