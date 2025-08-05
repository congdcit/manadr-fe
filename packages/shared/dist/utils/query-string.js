// URL utilities
export const buildQueryString = (params) => {
    const searchParams = new URLSearchParams();
    Object.entries(params).forEach(([key, value]) => {
        if (value !== null && value !== undefined) {
            searchParams.append(key, String(value));
        }
    });
    return searchParams.toString();
};
export const parseQueryString = (queryString) => {
    const params = new URLSearchParams(queryString);
    const result = {};
    params.forEach((value, key) => {
        result[key] = value;
    });
    return result;
};
