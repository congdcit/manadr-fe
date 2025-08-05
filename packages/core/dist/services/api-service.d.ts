import { type AxiosRequestConfig } from 'axios';
import { IApiResponse } from '../types';
export declare class ApiService {
    private axiosInstance;
    private baseURL;
    constructor(baseURL: string);
    get<T>(url: string, config?: AxiosRequestConfig): Promise<IApiResponse<T>>;
    post<T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<IApiResponse<T>>;
    put<T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<IApiResponse<T>>;
    patch<T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<IApiResponse<T>>;
    delete<T>(url: string, config?: AxiosRequestConfig): Promise<IApiResponse<T>>;
    upload<T>(url: string, formData: FormData, onProgress?: (progressEvent: any) => void): Promise<IApiResponse<T>>;
}
//# sourceMappingURL=api-service.d.ts.map