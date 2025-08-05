import { type PayloadAction } from '@reduxjs/toolkit';
export interface UiState {
    theme: 'light' | 'dark';
    sidebarCollapsed: boolean;
    loading: boolean;
    notifications: Array<{
        id: string;
        type: 'success' | 'error' | 'warning' | 'info';
        message: string;
        autoClose?: boolean;
    }>;
    modals: {
        [key: string]: boolean;
    };
}
export declare const uiSlice: import("@reduxjs/toolkit").Slice<UiState, {
    setTheme: (state: import("immer").WritableDraft<UiState>, action: PayloadAction<"light" | "dark">) => void;
    toggleSidebar: (state: import("immer").WritableDraft<UiState>) => void;
    setSidebarCollapsed: (state: import("immer").WritableDraft<UiState>, action: PayloadAction<boolean>) => void;
    setLoading: (state: import("immer").WritableDraft<UiState>, action: PayloadAction<boolean>) => void;
    addNotification: (state: import("immer").WritableDraft<UiState>, action: PayloadAction<Omit<UiState["notifications"][0], "id">>) => void;
    removeNotification: (state: import("immer").WritableDraft<UiState>, action: PayloadAction<string>) => void;
    clearNotifications: (state: import("immer").WritableDraft<UiState>) => void;
    openModal: (state: import("immer").WritableDraft<UiState>, action: PayloadAction<string>) => void;
    closeModal: (state: import("immer").WritableDraft<UiState>, action: PayloadAction<string>) => void;
    closeAllModals: (state: import("immer").WritableDraft<UiState>) => void;
}, "ui", "ui", import("@reduxjs/toolkit").SliceSelectors<UiState>>;
export declare const setTheme: import("@reduxjs/toolkit").ActionCreatorWithPayload<"light" | "dark", "ui/setTheme">, toggleSidebar: import("@reduxjs/toolkit").ActionCreatorWithoutPayload<"ui/toggleSidebar">, setSidebarCollapsed: import("@reduxjs/toolkit").ActionCreatorWithPayload<boolean, "ui/setSidebarCollapsed">, setLoading: import("@reduxjs/toolkit").ActionCreatorWithPayload<boolean, "ui/setLoading">, addNotification: import("@reduxjs/toolkit").ActionCreatorWithPayload<Omit<{
    id: string;
    type: "success" | "error" | "warning" | "info";
    message: string;
    autoClose?: boolean;
}, "id">, "ui/addNotification">, removeNotification: import("@reduxjs/toolkit").ActionCreatorWithPayload<string, "ui/removeNotification">, clearNotifications: import("@reduxjs/toolkit").ActionCreatorWithoutPayload<"ui/clearNotifications">, openModal: import("@reduxjs/toolkit").ActionCreatorWithPayload<string, "ui/openModal">, closeModal: import("@reduxjs/toolkit").ActionCreatorWithPayload<string, "ui/closeModal">, closeAllModals: import("@reduxjs/toolkit").ActionCreatorWithoutPayload<"ui/closeAllModals">;
//# sourceMappingURL=ui-slice.d.ts.map