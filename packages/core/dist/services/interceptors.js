"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupInterceptors = void 0;
const humps_1 = require("humps");
const setupInterceptors = (axiosInstance) => {
    axiosInstance.interceptors.request.use((config) => {
        config.params = (0, humps_1.decamelizeKeys)(config.params);
        if (config.data) {
            if (config.data instanceof FormData)
                return config;
            let rs = config.data;
            // rs = rs.notTrimRequest ? rs : trimObject(rs);
            config.data = JSON.stringify((0, humps_1.decamelizeKeys)(rs));
        }
        return config;
    }, (error) => {
        return Promise.reject(error);
    });
    axiosInstance.interceptors.response.use((response) => {
        if (response.data) {
            try {
                response.data = (0, humps_1.camelizeKeys)(response.data);
            }
            catch (error) {
                console.log('Something went wrong - Error code: 600');
            }
        }
        return response;
    }, (error) => {
        return Promise.reject(error);
    });
};
exports.setupInterceptors = setupInterceptors;
