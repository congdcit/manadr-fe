import type { LoginCredentials } from '../services/types';
export declare function useAuth(): {
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
    login: (credentials: LoginCredentials) => Promise<import("../services/types").AuthResponse>;
    register: (userData: {
        name: string;
        email: string;
        password: string;
        confirmPassword: string;
    }) => Promise<import("../services/types").AuthResponse>;
    logout: () => Promise<void>;
    forgotPassword: (email: string) => Promise<void>;
    resetPassword: (token: string, password: string) => Promise<void>;
    refreshToken: () => Promise<string | null>;
    hasRole: (role: string) => boolean;
    hasAnyRole: (roles: string[]) => boolean;
};
//# sourceMappingURL=use-auth.d.ts.map