"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiService = void 0;
const axios_1 = __importDefault(require("axios"));
const interceptors_1 = require("./interceptors");
class ApiService {
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
    get(url, config) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.axiosInstance.get(url, config);
            return response.data;
        });
    }
    // POST request
    post(url, data, config) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.axiosInstance.post(url, data, config);
            return response.data;
        });
    }
    // PUT request
    put(url, data, config) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.axiosInstance.put(url, data, config);
            return response.data;
        });
    }
    // PATCH request
    patch(url, data, config) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.axiosInstance.patch(url, data, config);
            return response.data;
        });
    }
    // DELETE request
    delete(url, config) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.axiosInstance.delete(url, config);
            return response.data;
        });
    }
    // Upload file
    upload(url, formData, onProgress) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.axiosInstance.post(url, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
                onUploadProgress: onProgress,
            });
            return response.data;
        });
    }
}
exports.ApiService = ApiService;
