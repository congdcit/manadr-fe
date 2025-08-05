"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useAuth = useAuth;
const hooks_1 = require("../store/hooks");
const auth_slice_1 = require("../store/slices/auth-slice");
const auth_service_1 = require("../services/auth-service");
function useAuth() {
    const dispatch = (0, hooks_1.useAppDispatch)();
    const auth = (0, hooks_1.useAppSelector)((state) => state.auth);
    const login = async (credentials) => {
        try {
            dispatch((0, auth_slice_1.loginStart)());
            const result = await auth_service_1.authService.login(credentials);
            dispatch((0, auth_slice_1.loginSuccess)({
                user: result.user,
                token: result.token,
            }));
            return result;
        }
        catch (error) {
            dispatch((0, auth_slice_1.loginFailure)(error.message || 'Login failed'));
            throw error;
        }
    };
    const register = async (userData) => {
        try {
            dispatch((0, auth_slice_1.loginStart)());
            const result = await auth_service_1.authService.register(userData);
            dispatch((0, auth_slice_1.loginSuccess)({
                user: result.user,
                token: result.token,
            }));
            return result;
        }
        catch (error) {
            dispatch((0, auth_slice_1.loginFailure)(error.message || 'Registration failed'));
            throw error;
        }
    };
    const handleLogout = async () => {
        try {
            await auth_service_1.authService.logout();
        }
        finally {
            dispatch((0, auth_slice_1.logout)());
        }
    };
    const forgotPassword = async (email) => {
        try {
            await auth_service_1.authService.forgotPassword(email);
        }
        catch (error) {
            throw error;
        }
    };
    const resetPassword = async (token, password) => {
        try {
            await auth_service_1.authService.resetPassword(token, password);
        }
        catch (error) {
            throw error;
        }
    };
    const refreshToken = async () => {
        try {
            const newToken = await auth_service_1.authService.refreshToken();
            return newToken;
        }
        catch (error) {
            dispatch((0, auth_slice_1.logout)());
            throw error;
        }
    };
    const hasRole = (role) => {
        return auth_service_1.authService.hasRole(role);
    };
    const hasAnyRole = (roles) => {
        return auth_service_1.authService.hasAnyRole(roles);
    };
    return {
        // State
        isAuthenticated: auth.isAuthenticated,
        user: auth.user,
        token: auth.token,
        isLoading: auth.isLoading,
        error: auth.error,
        // Actions
        login,
        register,
        logout: handleLogout,
        forgotPassword,
        resetPassword,
        refreshToken,
        // Utilities
        hasRole,
        hasAnyRole,
    };
}
