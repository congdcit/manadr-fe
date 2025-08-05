import { type PayloadAction } from '@reduxjs/toolkit';
export interface AuthState {
    isAuthenticated: boolean;
    user: {
        id: string;
        email: string;
        name: string;
        role: string;
    } | null;
    token: string | null;
    isLoading: boolean;
    error: string | null;
}
export declare const authSlice: import("@reduxjs/toolkit").Slice<AuthState, {
    loginStart: (state: import("immer").WritableDraft<AuthState>) => void;
    loginSuccess: (state: import("immer").WritableDraft<AuthState>, action: PayloadAction<{
        user: AuthState["user"];
        token: string;
    }>) => void;
    loginFailure: (state: import("immer").WritableDraft<AuthState>, action: PayloadAction<string>) => void;
    logout: (state: import("immer").WritableDraft<AuthState>) => void;
    clearError: (state: import("immer").WritableDraft<AuthState>) => void;
}, "auth", "auth", import("@reduxjs/toolkit").SliceSelectors<AuthState>>;
export declare const loginStart: import("@reduxjs/toolkit").ActionCreatorWithoutPayload<"auth/loginStart">, loginSuccess: import("@reduxjs/toolkit").ActionCreatorWithPayload<{
    user: AuthState["user"];
    token: string;
}, "auth/loginSuccess">, loginFailure: import("@reduxjs/toolkit").ActionCreatorWithPayload<string, "auth/loginFailure">, logout: import("@reduxjs/toolkit").ActionCreatorWithoutPayload<"auth/logout">, clearError: import("@reduxjs/toolkit").ActionCreatorWithoutPayload<"auth/clearError">;
//# sourceMappingURL=auth-slice.d.ts.map