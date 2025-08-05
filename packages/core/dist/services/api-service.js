"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiService = void 0;
const axios_1 = __importDefault(require("axios"));
const interceptors_1 = require("./interceptors");
class ApiService {
    axiosInstance;
    baseURL;
    constructor(baseURL) {
        this.baseURL = baseURL;
        this.axiosInstance = axios_1.default.create({
            baseURL: this.baseURL,
            timeout: 10000,
            headers: {
                'Content-Type': 'application/json',
            },
        });
        (0, interceptors_1.setupInterceptors)(this.axiosInstance);
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
exports.ApiService = ApiService;
