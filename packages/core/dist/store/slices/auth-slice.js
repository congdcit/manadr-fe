"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.clearError = exports.logout = exports.loginFailure = exports.loginSuccess = exports.loginStart = exports.authSlice = void 0;
const toolkit_1 = require("@reduxjs/toolkit");
const initialState = {
    isAuthenticated: false,
    user: null,
    token: null,
    isLoading: false,
    error: null,
};
exports.authSlice = (0, toolkit_1.createSlice)({
    name: 'auth',
    initialState,
    reducers: {
        loginStart: (state) => {
            state.isLoading = true;
            state.error = null;
        },
        loginSuccess: (state, action) => {
            state.isLoading = false;
            state.isAuthenticated = true;
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.error = null;
        },
        loginFailure: (state, action) => {
            state.isLoading = false;
            state.isAuthenticated = false;
            state.user = null;
            state.token = null;
            state.error = action.payload;
        },
        logout: (state) => {
            state.isAuthenticated = false;
            state.user = null;
            state.token = null;
            state.isLoading = false;
            state.error = null;
        },
        clearError: (state) => {
            state.error = null;
        },
    },
});
_a = exports.authSlice.actions, exports.loginStart = _a.loginStart, exports.loginSuccess = _a.loginSuccess, exports.loginFailure = _a.loginFailure, exports.logout = _a.logout, exports.clearError = _a.clearError;
