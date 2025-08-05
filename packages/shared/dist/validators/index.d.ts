import { z } from 'zod';
export declare const emailSchema: z.ZodString;
export declare const passwordSchema: z.ZodString;
export declare const usernameSchema: z.ZodString;
export declare const phoneSchema: z.ZodString;
export declare const vietnamesePhoneSchema: z.ZodString;
export declare const vietnameseNameSchema: z.ZodString;
export declare const isValidEmail: (email: string) => boolean;
export declare const isValidPassword: (password: string) => boolean;
export declare const isValidUsername: (username: string) => boolean;
export declare const isValidPhone: (phone: string) => boolean;
export declare const isValidVietnamesePhone: (phone: string) => boolean;
export declare const urlSchema: z.ZodString;
export declare const isValidUrl: (url: string) => boolean;
export declare const dateSchema: z.ZodEffects<z.ZodString, string, string>;
export declare const isValidDate: (date: string) => boolean;
export declare const createNumberSchema: (min?: number, max?: number) => z.ZodNumber;
export declare const createFileSchema: (maxSize?: number, allowedTypes?: string[]) => z.ZodObject<{
    size: z.ZodNumber;
    type: z.ZodString | z.ZodEnum<[string, ...string[]]>;
    name: z.ZodString;
}, "strip", z.ZodTypeAny, {
    type: string;
    size: number;
    name: string;
}, {
    type: string;
    size: number;
    name: string;
}>;
export declare const loginSchema: z.ZodObject<{
    email: z.ZodString;
    password: z.ZodString;
}, "strip", z.ZodTypeAny, {
    email: string;
    password: string;
}, {
    email: string;
    password: string;
}>;
export declare const registerSchema: z.ZodEffects<z.ZodObject<{
    email: z.ZodString;
    password: z.ZodString;
    confirmPassword: z.ZodString;
    username: z.ZodString;
    firstName: z.ZodString;
    lastName: z.ZodString;
}, "strip", z.ZodTypeAny, {
    email: string;
    password: string;
    confirmPassword: string;
    username: string;
    firstName: string;
    lastName: string;
}, {
    email: string;
    password: string;
    confirmPassword: string;
    username: string;
    firstName: string;
    lastName: string;
}>, {
    email: string;
    password: string;
    confirmPassword: string;
    username: string;
    firstName: string;
    lastName: string;
}, {
    email: string;
    password: string;
    confirmPassword: string;
    username: string;
    firstName: string;
    lastName: string;
}>;
export declare const resetPasswordSchema: z.ZodObject<{
    email: z.ZodString;
}, "strip", z.ZodTypeAny, {
    email: string;
}, {
    email: string;
}>;
export declare const changePasswordSchema: z.ZodEffects<z.ZodObject<{
    currentPassword: z.ZodString;
    newPassword: z.ZodString;
    confirmPassword: z.ZodString;
}, "strip", z.ZodTypeAny, {
    confirmPassword: string;
    currentPassword: string;
    newPassword: string;
}, {
    confirmPassword: string;
    currentPassword: string;
    newPassword: string;
}>, {
    confirmPassword: string;
    currentPassword: string;
    newPassword: string;
}, {
    confirmPassword: string;
    currentPassword: string;
    newPassword: string;
}>;
export type LoginFormData = z.infer<typeof loginSchema>;
export type RegisterFormData = z.infer<typeof registerSchema>;
export type ResetPasswordFormData = z.infer<typeof resetPasswordSchema>;
export type ChangePasswordFormData = z.infer<typeof changePasswordSchema>;
//# sourceMappingURL=index.d.ts.map