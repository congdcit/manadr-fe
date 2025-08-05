"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.closeAllModals = exports.closeModal = exports.openModal = exports.clearNotifications = exports.removeNotification = exports.addNotification = exports.setLoading = exports.setSidebarCollapsed = exports.toggleSidebar = exports.setTheme = exports.uiSlice = void 0;
const toolkit_1 = require("@reduxjs/toolkit");
const initialState = {
    theme: 'light',
    sidebarCollapsed: false,
    loading: false,
    notifications: [],
    modals: {},
};
exports.uiSlice = (0, toolkit_1.createSlice)({
    name: 'ui',
    initialState,
    reducers: {
        setTheme: (state, action) => {
            state.theme = action.payload;
        },
        toggleSidebar: (state) => {
            state.sidebarCollapsed = !state.sidebarCollapsed;
        },
        setSidebarCollapsed: (state, action) => {
            state.sidebarCollapsed = action.payload;
        },
        setLoading: (state, action) => {
            state.loading = action.payload;
        },
        addNotification: (state, action) => {
            const notification = {
                ...action.payload,
                id: Date.now().toString(),
            };
            state.notifications.push(notification);
        },
        removeNotification: (state, action) => {
            state.notifications = state.notifications.filter((notification) => notification.id !== action.payload);
        },
        clearNotifications: (state) => {
            state.notifications = [];
        },
        openModal: (state, action) => {
            state.modals[action.payload] = true;
        },
        closeModal: (state, action) => {
            state.modals[action.payload] = false;
        },
        closeAllModals: (state) => {
            state.modals = {};
        },
    },
});
_a = exports.uiSlice.actions, exports.setTheme = _a.setTheme, exports.toggleSidebar = _a.toggleSidebar, exports.setSidebarCollapsed = _a.setSidebarCollapsed, exports.setLoading = _a.setLoading, exports.addNotification = _a.addNotification, exports.removeNotification = _a.removeNotification, exports.clearNotifications = _a.clearNotifications, exports.openModal = _a.openModal, exports.closeModal = _a.closeModal, exports.closeAllModals = _a.closeAllModals;
