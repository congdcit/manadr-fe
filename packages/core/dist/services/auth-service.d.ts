import type { LoginCredentials, AuthResponse, User } from './types';
declare class AuthService {
    private readonly TOKEN_KEY;
    private readonly REFRESH_TOKEN_KEY;
    private readonly USER_KEY;
    login(credentials: LoginCredentials): Promise<AuthResponse>;
    register(userData: {
        name: string;
        email: string;
        password: string;
        confirmPassword: string;
    }): Promise<AuthResponse>;
    logout(): Promise<void>;
    refreshToken(): Promise<string | null>;
    forgotPassword(email: string): Promise<void>;
    resetPassword(token: string, password: string): Promise<void>;
    getCurrentUser(): Promise<User | null>;
    getToken(): string | null;
    private getRefreshToken;
    private setTokens;
    private clearTokens;
    getUser(): User | null;
    private setUser;
    private clearUser;
    isAuthenticated(): boolean;
    hasRole(role: string): boolean;
    hasAnyRole(roles: string[]): boolean;
}
export declare const authService: AuthService;
export {};
//# sourceMappingURL=auth-service.d.ts.map