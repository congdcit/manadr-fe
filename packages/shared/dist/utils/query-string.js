"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseQueryString = exports.buildQueryString = void 0;
// URL utilities
const buildQueryString = (params) => {
    const searchParams = new URLSearchParams();
    Object.entries(params).forEach(([key, value]) => {
        if (value !== null && value !== undefined) {
            searchParams.append(key, String(value));
        }
    });
    return searchParams.toString();
};
exports.buildQueryString = buildQueryString;
const parseQueryString = (queryString) => {
    const params = new URLSearchParams(queryString);
    const result = {};
    params.forEach((value, key) => {
        result[key] = value;
    });
    return result;
};
exports.parseQueryString = parseQueryString;
