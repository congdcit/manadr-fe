"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.changePasswordSchema = exports.resetPasswordSchema = exports.registerSchema = exports.loginSchema = exports.createFileSchema = exports.createNumberSchema = exports.isValidDate = exports.dateSchema = exports.isValidUrl = exports.urlSchema = exports.isValidVietnamesePhone = exports.isValidPhone = exports.isValidUsername = exports.isValidPassword = exports.isValidEmail = exports.vietnameseNameSchema = exports.vietnamesePhoneSchema = exports.phoneSchema = exports.usernameSchema = exports.passwordSchema = exports.emailSchema = void 0;
const zod_1 = require("zod");
const constants_1 = require("../constants");
// Basic validation schemas
exports.emailSchema = zod_1.z
    .string()
    .email('Email không hợp lệ')
    .max(constants_1.VALIDATION.EMAIL_MAX_LENGTH, `Email không được vượt quá ${constants_1.VALIDATION.EMAIL_MAX_LENGTH} ký tự`);
exports.passwordSchema = zod_1.z
    .string()
    .min(constants_1.VALIDATION.PASSWORD_MIN_LENGTH, `Mật khẩu phải có ít nhất ${constants_1.VALIDATION.PASSWORD_MIN_LENGTH} ký tự`)
    .max(constants_1.VALIDATION.PASSWORD_MAX_LENGTH, `Mật khẩu không được vượt quá ${constants_1.VALIDATION.PASSWORD_MAX_LENGTH} ký tự`)
    .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/, 'Mật khẩu phải chứa ít nhất 1 chữ thường, 1 chữ hoa và 1 số');
exports.usernameSchema = zod_1.z
    .string()
    .min(constants_1.VALIDATION.USERNAME_MIN_LENGTH, `Tên người dùng phải có ít nhất ${constants_1.VALIDATION.USERNAME_MIN_LENGTH} ký tự`)
    .max(constants_1.VALIDATION.USERNAME_MAX_LENGTH, `Tên người dùng không được vượt quá ${constants_1.VALIDATION.USERNAME_MAX_LENGTH} ký tự`)
    .regex(/^[a-zA-Z0-9_]+$/, 'Tên người dùng chỉ được chứa chữ cái, số và dấu gạch dưới');
exports.phoneSchema = zod_1.z
    .string()
    .regex(/^[0-9+\-\s()]+$/, 'Số điện thoại không hợp lệ')
    .min(10, 'Số điện thoại phải có ít nhất 10 số')
    .max(15, 'Số điện thoại không được vượt quá 15 số');
// Vietnamese specific validations
exports.vietnamesePhoneSchema = zod_1.z
    .string()
    .regex(/^(0|\+84)[1-9][0-9]{8,9}$/, 'Số điện thoại Việt Nam không hợp lệ');
exports.vietnameseNameSchema = zod_1.z
    .string()
    .regex(/^[a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯÂÊÔƯâêôư\s]+$/, 'Tên chỉ được chứa chữ cái và khoảng trắng');
// Utility validation functions
const isValidEmail = (email) => {
    return exports.emailSchema.safeParse(email).success;
};
exports.isValidEmail = isValidEmail;
const isValidPassword = (password) => {
    return exports.passwordSchema.safeParse(password).success;
};
exports.isValidPassword = isValidPassword;
const isValidUsername = (username) => {
    return exports.usernameSchema.safeParse(username).success;
};
exports.isValidUsername = isValidUsername;
const isValidPhone = (phone) => {
    return exports.phoneSchema.safeParse(phone).success;
};
exports.isValidPhone = isValidPhone;
const isValidVietnamesePhone = (phone) => {
    return exports.vietnamesePhoneSchema.safeParse(phone).success;
};
exports.isValidVietnamesePhone = isValidVietnamesePhone;
// URL validation
exports.urlSchema = zod_1.z
    .string()
    .url('URL không hợp lệ');
const isValidUrl = (url) => {
    return exports.urlSchema.safeParse(url).success;
};
exports.isValidUrl = isValidUrl;
// Date validation
exports.dateSchema = zod_1.z
    .string()
    .refine((date) => !isNaN(Date.parse(date)), 'Ngày không hợp lệ');
const isValidDate = (date) => {
    return exports.dateSchema.safeParse(date).success;
};
exports.isValidDate = isValidDate;
// Number validation with range
const createNumberSchema = (min, max) => {
    let schema = zod_1.z.number();
    if (min !== undefined) {
        schema = schema.min(min, `Giá trị phải lớn hơn hoặc bằng ${min}`);
    }
    if (max !== undefined) {
        schema = schema.max(max, `Giá trị phải nhỏ hơn hoặc bằng ${max}`);
    }
    return schema;
};
exports.createNumberSchema = createNumberSchema;
// File validation
const createFileSchema = (maxSize, allowedTypes) => {
    return zod_1.z.object({
        size: zod_1.z.number().max(maxSize || 10 * 1024 * 1024, 'File quá lớn'),
        type: allowedTypes
            ? zod_1.z.enum(allowedTypes, {
                errorMap: () => ({ message: 'Loại file không được hỗ trợ' })
            })
            : zod_1.z.string(),
        name: zod_1.z.string().min(1, 'Tên file không được để trống'),
    });
};
exports.createFileSchema = createFileSchema;
// Common form schemas
exports.loginSchema = zod_1.z.object({
    email: exports.emailSchema,
    password: zod_1.z.string().min(1, 'Mật khẩu không được để trống'),
});
exports.registerSchema = zod_1.z.object({
    email: exports.emailSchema,
    password: exports.passwordSchema,
    confirmPassword: zod_1.z.string(),
    username: exports.usernameSchema,
    firstName: zod_1.z.string().min(1, 'Họ không được để trống'),
    lastName: zod_1.z.string().min(1, 'Tên không được để trống'),
}).refine((data) => data.password === data.confirmPassword, {
    message: 'Mật khẩu xác nhận không khớp',
    path: ['confirmPassword'],
});
exports.resetPasswordSchema = zod_1.z.object({
    email: exports.emailSchema,
});
exports.changePasswordSchema = zod_1.z.object({
    currentPassword: zod_1.z.string().min(1, 'Mật khẩu hiện tại không được để trống'),
    newPassword: exports.passwordSchema,
    confirmPassword: zod_1.z.string(),
}).refine((data) => data.newPassword === data.confirmPassword, {
    message: 'Mật khẩu xác nhận không khớp',
    path: ['confirmPassword'],
});
