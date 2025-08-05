import { camelizeKeys, decamelizeKeys } from 'humps';
export const setupInterceptors = (axiosInstance) => {
    axiosInstance.interceptors.request.use((config) => {
        config.params = decamelizeKeys(config.params);
        if (config.data) {
            if (config.data instanceof FormData)
                return config;
            let rs = config.data;
            // rs = rs.notTrimRequest ? rs : trimObject(rs);
            config.data = JSON.stringify(decamelizeKeys(rs));
        }
        return config;
    }, (error) => {
        return Promise.reject(error);
    });
    axiosInstance.interceptors.response.use((response) => {
        if (response.data) {
            try {
                response.data = camelizeKeys(response.data);
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
