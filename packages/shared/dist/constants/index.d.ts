export declare const API_CONFIG: {
    readonly TIMEOUT: 30000;
    readonly RETRY_ATTEMPTS: 3;
    readonly RETRY_DELAY: 1000;
};
export declare const APP_CONFIG: {
    readonly APP_NAME: "Manadr";
    readonly VERSION: "1.0.0";
    readonly ENVIRONMENT: string;
};
export declare const VALIDATION: {
    readonly PASSWORD_MIN_LENGTH: 8;
    readonly PASSWORD_MAX_LENGTH: 128;
    readonly USERNAME_MIN_LENGTH: 3;
    readonly USERNAME_MAX_LENGTH: 50;
    readonly EMAIL_MAX_LENGTH: 254;
};
export declare const HTTP_STATUS: {
    readonly OK: 200;
    readonly CREATED: 201;
    readonly NO_CONTENT: 204;
    readonly BAD_REQUEST: 400;
    readonly UNAUTHORIZED: 401;
    readonly FORBIDDEN: 403;
    readonly NOT_FOUND: 404;
    readonly INTERNAL_SERVER_ERROR: 500;
};
export declare const STORAGE_KEYS: {
    readonly AUTH_TOKEN: "auth_token";
    readonly REFRESH_TOKEN: "refresh_token";
    readonly USER_PREFERENCES: "user_preferences";
    readonly LANGUAGE: "language";
    readonly THEME: "theme";
};
export declare const DATE_FORMATS: {
    readonly DATE_ONLY: "YYYY-MM-DD";
    readonly DATETIME: "YYYY-MM-DD HH:mm:ss";
    readonly TIME_ONLY: "HH:mm:ss";
    readonly DISPLAY_DATE: "DD/MM/YYYY";
    readonly DISPLAY_DATETIME: "DD/MM/YYYY HH:mm";
};
//# sourceMappingURL=index.d.ts.map