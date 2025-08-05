"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useApi = useApi;
exports.useApiQuery = useApiQuery;
exports.useApiMutation = useApiMutation;
const react_1 = require("react");
const react_query_1 = require("@tanstack/react-query");
const api_service_1 = require("../services/api-service");
// Hook for API calls with loading states
function useApi() {
    const [loading, setLoading] = (0, react_1.useState)(false);
    const [error, setError] = (0, react_1.useState)(null);
    const request = (0, react_1.useCallback)(async (apiCall) => {
        try {
            setLoading(true);
            setError(null);
            const response = await apiCall();
            return response.data;
        }
        catch (err) {
            const apiError = err;
            setError(apiError);
            throw apiError;
        }
        finally {
            setLoading(false);
        }
    }, []);
    const get = (0, react_1.useCallback)((url) => {
        return request(() => api_service_1.apiService.get(url));
    }, [request]);
    const post = (0, react_1.useCallback)((url, data) => {
        return request(() => api_service_1.apiService.post(url, data));
    }, [request]);
    const put = (0, react_1.useCallback)((url, data) => {
        return request(() => api_service_1.apiService.put(url, data));
    }, [request]);
    const patch = (0, react_1.useCallback)((url, data) => {
        return request(() => api_service_1.apiService.patch(url, data));
    }, [request]);
    const del = (0, react_1.useCallback)((url) => {
        return request(() => api_service_1.apiService.delete(url));
    }, [request]);
    const upload = (0, react_1.useCallback)((url, file, onProgress) => {
        return request(() => api_service_1.apiService.upload(url, file, onProgress));
    }, [request]);
    return {
        loading,
        error,
        get,
        post,
        put,
        patch,
        delete: del,
        upload,
    };
}
// Hook for React Query integration
function useApiQuery(key, url, options) {
    return (0, react_query_1.useQuery)({
        queryKey: key,
        queryFn: () => api_service_1.apiService.get(url),
        select: (data) => data.data,
        ...options,
    });
}
// Hook for mutations with React Query
function useApiMutation(mutationFn, options) {
    return (0, react_query_1.useMutation)({
        mutationFn,
        ...options,
    });
}
