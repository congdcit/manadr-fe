import axios from 'axios';
import { setupInterceptors } from './interceptors';
export class ApiService {
    constructor(baseURL) {
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
    async get(url, config) {
        const response = await this.axiosInstance.get(url, config);
        return response.data;
    }
    // POST request
    async post(url, data, config) {
        const response = await this.axiosInstance.post(url, data, config);
        return response.data;
    }
    // PUT request
    async put(url, data, config) {
        const response = await this.axiosInstance.put(url, data, config);
        return response.data;
    }
    // PATCH request
    async patch(url, data, config) {
        const response = await this.axiosInstance.patch(url, data, config);
        return response.data;
    }
    // DELETE request
    async delete(url, config) {
        const response = await this.axiosInstance.delete(url, config);
        return response.data;
    }
    // Upload file
    async upload(url, formData, onProgress) {
        const response = await this.axiosInstance.post(url, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
            onUploadProgress: onProgress,
        });
        return response.data;
    }
}
