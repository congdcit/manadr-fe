"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authService = void 0;
const api_service_1 = require("./api-service");
class AuthService {
    TOKEN_KEY = 'auth_token';
    REFRESH_TOKEN_KEY = 'refresh_token';
    USER_KEY = 'user_data';
    // Login
    async login(credentials) {
        const response = await api_service_1.apiService.post('/auth/login', credentials);
        if (response.success && response.data) {
            this.setTokens(response.data.token, response.data.refreshToken);
            this.setUser(response.data.user);
        }
        return response.data;
    }
    // Register
    async register(userData) {
        const response = await api_service_1.apiService.post('/auth/register', userData);
        if (response.success && response.data) {
            this.setTokens(response.data.token, response.data.refreshToken);
            this.setUser(response.data.user);
        }
        return response.data;
    }
    // Logout
    async logout() {
        try {
            await api_service_1.apiService.post('/auth/logout');
        }
        catch (error) {
            // Continue local logout even if API call fails
            console.warn('Logout API call failed:', error);
        }
        finally {
            this.clearTokens();
            this.clearUser();
        }
    }
    // Refresh token
    async refreshToken() {
        const refreshToken = this.getRefreshToken();
        if (!refreshToken)
            return null;
        try {
            const response = await api_service_1.apiService.post('/auth/refresh', {
                refreshToken,
            });
            if (response.success && response.data) {
                this.setTokens(response.data.token, response.data.refreshToken);
                return response.data.token;
            }
        }
        catch (error) {
            this.clearTokens();
            this.clearUser();
        }
        return null;
    }
    // Forgot password
    async forgotPassword(email) {
        await api_service_1.apiService.post('/auth/forgot-password', { email });
    }
    // Reset password
    async resetPassword(token, password) {
        await api_service_1.apiService.post('/auth/reset-password', { token, password });
    }
    // Get current user
    async getCurrentUser() {
        try {
            const response = await api_service_1.apiService.get('/auth/me');
            if (response.success && response.data) {
                this.setUser(response.data);
                return response.data;
            }
        }
        catch (error) {
            // Token might have expired
            this.clearTokens();
            this.clearUser();
        }
        return null;
    }
    // Token management
    getToken() {
        return localStorage.getItem(this.TOKEN_KEY);
    }
    getRefreshToken() {
        return localStorage.getItem(this.REFRESH_TOKEN_KEY);
    }
    setTokens(token, refreshToken) {
        localStorage.setItem(this.TOKEN_KEY, token);
        if (refreshToken) {
            localStorage.setItem(this.REFRESH_TOKEN_KEY, refreshToken);
        }
        api_service_1.apiService.setAuthToken(token);
    }
    clearTokens() {
        localStorage.removeItem(this.TOKEN_KEY);
        localStorage.removeItem(this.REFRESH_TOKEN_KEY);
        api_service_1.apiService.removeAuthToken();
    }
    // User data management
    getUser() {
        const userData = localStorage.getItem(this.USER_KEY);
        return userData ? JSON.parse(userData) : null;
    }
    setUser(user) {
        localStorage.setItem(this.USER_KEY, JSON.stringify(user));
    }
    clearUser() {
        localStorage.removeItem(this.USER_KEY);
    }
    // Check if user is authenticated
    isAuthenticated() {
        return !!this.getToken();
    }
    // Check if user has specific role
    hasRole(role) {
        const user = this.getUser();
        return user?.role === role;
    }
    // Check if user has any of the specified roles
    hasAnyRole(roles) {
        const user = this.getUser();
        return user ? roles.includes(user.role) : false;
    }
}
exports.authService = new AuthService();
