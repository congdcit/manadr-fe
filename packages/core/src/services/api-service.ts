import axios, { type AxiosInstance, type AxiosRequestConfig, type AxiosResponse } from 'axios';
import { setupInterceptors } from './interceptors';
import { IApiResponse } from '../types';

export class ApiService {
  private axiosInstance: AxiosInstance;
  private baseURL: string;

  constructor(baseURL: string) {
    this.baseURL = baseURL;
    this.axiosInstance = axios.create({
      baseURL: this.baseURL,
      timeout: 10000,
      headers: {
        'Content-Type': 'application/json',
      },
    });

    setupInterceptors(this.axiosInstance);
  }

  // GET request
  async get<T>(url: string, config?: AxiosRequestConfig): Promise<IApiResponse<T>> {
    const response = await this.axiosInstance.get<IApiResponse<T>>(url, config);
    return response.data;
  }

  // POST request
  async post<T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<IApiResponse<T>> {
    const response = await this.axiosInstance.post<IApiResponse<T>>(url, data, config);
    return response.data;
  }

  // PUT request
  async put<T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<IApiResponse<T>> {
    const response = await this.axiosInstance.put<IApiResponse<T>>(url, data, config);
    return response.data;
  }

  // PATCH request
  async patch<T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<IApiResponse<T>> {
    const response = await this.axiosInstance.patch<IApiResponse<T>>(url, data, config);
    return response.data;
  }

  // DELETE request
  async delete<T>(url: string, config?: AxiosRequestConfig): Promise<IApiResponse<T>> {
    const response = await this.axiosInstance.delete<IApiResponse<T>>(url, config);
    return response.data;
  }

  // Upload file
  async upload<T>(
    url: string,
    formData: FormData,
    onProgress?: (progressEvent: any) => void,
  ): Promise<IApiResponse<T>> {
    const response = await this.axiosInstance.post<IApiResponse<T>>(url, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      onUploadProgress: onProgress,
    });

    return response.data;
  }
}
