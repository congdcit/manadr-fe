import { type UseQueryOptions, type UseMutationOptions } from '@tanstack/react-query';
import type { ApiResponse, ApiError } from '../services/types';
export declare function useApi(): {
    loading: boolean;
    error: ApiError | null;
    get: <T>(url: string) => Promise<T>;
    post: <T>(url: string, data?: any) => Promise<T>;
    put: <T>(url: string, data?: any) => Promise<T>;
    patch: <T>(url: string, data?: any) => Promise<T>;
    delete: <T>(url: string) => Promise<T>;
    upload: <T>(url: string, file: File, onProgress?: (progress: any) => void) => Promise<T>;
};
export declare function useApiQuery<T>(key: any[], url: string, options?: Omit<UseQueryOptions<ApiResponse<T>, ApiError, T>, 'queryKey' | 'queryFn'>): import("@tanstack/react-query").UseQueryResult<import("@tanstack/react-query").NoInfer<T>, ApiError>;
export declare function useApiMutation<T, V = any>(mutationFn: (variables: V) => Promise<ApiResponse<T>>, options?: Omit<UseMutationOptions<ApiResponse<T>, ApiError, V>, 'mutationFn'>): import("@tanstack/react-query").UseMutationResult<ApiResponse<T>, ApiError, V, unknown>;
//# sourceMappingURL=use-api.d.ts.map