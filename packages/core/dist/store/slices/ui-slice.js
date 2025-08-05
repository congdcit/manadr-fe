import { createSlice } from '@reduxjs/toolkit';
const initialState = {
    theme: 'light',
    sidebarCollapsed: false,
    loading: false,
    notifications: [],
    modals: {},
};
export const uiSlice = createSlice({
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
export const { setTheme, toggleSidebar, setSidebarCollapsed, setLoading, addNotification, removeNotification, clearNotifications, openModal, closeModal, closeAllModals, } = uiSlice.actions;
