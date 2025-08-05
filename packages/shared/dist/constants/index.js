"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DATE_FORMATS = exports.STORAGE_KEYS = exports.HTTP_STATUS = exports.VALIDATION = exports.APP_CONFIG = exports.API_CONFIG = void 0;
// API Constants
exports.API_CONFIG = {
    TIMEOUT: 30000,
    RETRY_ATTEMPTS: 3,
    RETRY_DELAY: 1000,
};
// Application Constants
exports.APP_CONFIG = {
    APP_NAME: 'Manadr',
    VERSION: '1.0.0',
    ENVIRONMENT: process.env['NODE_ENV'] || 'development',
};
// Validation Constants
exports.VALIDATION = {
    PASSWORD_MIN_LENGTH: 8,
    PASSWORD_MAX_LENGTH: 128,
    USERNAME_MIN_LENGTH: 3,
    USERNAME_MAX_LENGTH: 50,
    EMAIL_MAX_LENGTH: 254,
};
// HTTP Status Codes
exports.HTTP_STATUS = {
    OK: 200,
    CREATED: 201,
    NO_CONTENT: 204,
    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    FORBIDDEN: 403,
    NOT_FOUND: 404,
    INTERNAL_SERVER_ERROR: 500,
};
// Local Storage Keys
exports.STORAGE_KEYS = {
    AUTH_TOKEN: 'auth_token',
    REFRESH_TOKEN: 'refresh_token',
    USER_PREFERENCES: 'user_preferences',
    LANGUAGE: 'language',
    THEME: 'theme',
};
// Date Format Constants
exports.DATE_FORMATS = {
    DATE_ONLY: 'YYYY-MM-DD',
    DATETIME: 'YYYY-MM-DD HH:mm:ss',
    TIME_ONLY: 'HH:mm:ss',
    DISPLAY_DATE: 'DD/MM/YYYY',
    DISPLAY_DATETIME: 'DD/MM/YYYY HH:mm',
};
