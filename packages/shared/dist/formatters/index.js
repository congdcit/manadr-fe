"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatSocialHandle = exports.formatSlug = exports.formatInitials = exports.formatFullName = exports.formatFileSize = exports.maskPhone = exports.maskEmail = exports.formatCreditCard = exports.formatPhoneDisplay = exports.formatDecimal = exports.formatPercent = exports.formatCompactVND = exports.formatVND = exports.isYesterday = exports.isToday = exports.formatTimeAgo = exports.formatDateTime = exports.formatDate = void 0;
const dayjs_1 = __importDefault(require("dayjs"));
const constants_1 = require("../constants");
// Date formatting utilities
const formatDate = (date, format = constants_1.DATE_FORMATS.DISPLAY_DATE) => {
    return (0, dayjs_1.default)(date).format(format);
};
exports.formatDate = formatDate;
const formatDateTime = (date, format = constants_1.DATE_FORMATS.DISPLAY_DATETIME) => {
    return (0, dayjs_1.default)(date).format(format);
};
exports.formatDateTime = formatDateTime;
const formatTimeAgo = (date) => {
    const now = (0, dayjs_1.default)();
    const targetDate = (0, dayjs_1.default)(date);
    const diffInMinutes = now.diff(targetDate, 'minute');
    const diffInHours = now.diff(targetDate, 'hour');
    const diffInDays = now.diff(targetDate, 'day');
    const diffInMonths = now.diff(targetDate, 'month');
    const diffInYears = now.diff(targetDate, 'year');
    if (diffInMinutes < 1)
        return 'Vừa xong';
    if (diffInMinutes < 60)
        return `${diffInMinutes} phút trước`;
    if (diffInHours < 24)
        return `${diffInHours} giờ trước`;
    if (diffInDays < 30)
        return `${diffInDays} ngày trước`;
    if (diffInMonths < 12)
        return `${diffInMonths} tháng trước`;
    return `${diffInYears} năm trước`;
};
exports.formatTimeAgo = formatTimeAgo;
const isToday = (date) => {
    return (0, dayjs_1.default)(date).isSame((0, dayjs_1.default)(), 'day');
};
exports.isToday = isToday;
const isYesterday = (date) => {
    return (0, dayjs_1.default)(date).isSame((0, dayjs_1.default)().subtract(1, 'day'), 'day');
};
exports.isYesterday = isYesterday;
// Currency formatting for Vietnamese context
const formatVND = (amount) => {
    return new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
    }).format(amount);
};
exports.formatVND = formatVND;
const formatCompactVND = (amount) => {
    if (amount >= 1000000000) {
        return `${(amount / 1000000000).toFixed(1)}B VND`;
    }
    if (amount >= 1000000) {
        return `${(amount / 1000000).toFixed(1)}M VND`;
    }
    if (amount >= 1000) {
        return `${(amount / 1000).toFixed(1)}K VND`;
    }
    return (0, exports.formatVND)(amount);
};
exports.formatCompactVND = formatCompactVND;
// Number formatting
const formatPercent = (value, decimals = 2) => {
    return new Intl.NumberFormat('vi-VN', {
        style: 'percent',
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
    }).format(value / 100);
};
exports.formatPercent = formatPercent;
const formatDecimal = (value, decimals = 2, locale = 'vi-VN') => {
    return new Intl.NumberFormat(locale, {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
    }).format(value);
};
exports.formatDecimal = formatDecimal;
// Text formatting
const formatPhoneDisplay = (phone) => {
    // Remove all non-numeric characters except +
    const cleaned = phone.replace(/[^\d+]/g, '');
    // Vietnamese phone number formatting
    if (cleaned.startsWith('+84')) {
        const number = cleaned.slice(3);
        if (number.length === 9) {
            return `+84 ${number.slice(0, 3)} ${number.slice(3, 6)} ${number.slice(6)}`;
        }
        if (number.length === 10) {
            return `+84 ${number.slice(0, 3)} ${number.slice(3, 7)} ${number.slice(7)}`;
        }
    }
    if (cleaned.startsWith('0') && cleaned.length === 10) {
        return `${cleaned.slice(0, 4)} ${cleaned.slice(4, 7)} ${cleaned.slice(7)}`;
    }
    return phone; // Return original if can't format
};
exports.formatPhoneDisplay = formatPhoneDisplay;
const formatCreditCard = (number) => {
    const cleaned = number.replace(/\D/g, '');
    const groups = cleaned.match(/.{1,4}/g) || [];
    return groups.join(' ').substr(0, 19); // Limit to 16 digits + 3 spaces
};
exports.formatCreditCard = formatCreditCard;
const maskEmail = (email) => {
    const [localPart, domain] = email.split('@');
    if (!domain || !localPart)
        return email;
    if (localPart.length <= 2) {
        return `${localPart}***@${domain}`;
    }
    const visibleChars = Math.max(1, Math.floor(localPart.length / 3));
    const maskedPart = '*'.repeat(localPart.length - visibleChars * 2);
    return `${localPart.slice(0, visibleChars)}${maskedPart}${localPart.slice(-visibleChars)}@${domain}`;
};
exports.maskEmail = maskEmail;
const maskPhone = (phone) => {
    const cleaned = phone.replace(/\D/g, '');
    if (cleaned.length < 4)
        return phone;
    return `${cleaned.slice(0, -4).replace(/\d/g, '*')}${cleaned.slice(-4)}`;
};
exports.maskPhone = maskPhone;
// File size formatting
const formatFileSize = (bytes) => {
    if (bytes === 0)
        return '0 B';
    const k = 1024;
    const sizes = ['B', 'KB', 'MB', 'GB', 'TB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return `${parseFloat((bytes / Math.pow(k, i)).toFixed(2))} ${sizes[i]}`;
};
exports.formatFileSize = formatFileSize;
// Name formatting
const formatFullName = (firstName, lastName) => {
    const parts = [firstName, lastName].filter(Boolean);
    return parts.join(' ');
};
exports.formatFullName = formatFullName;
const formatInitials = (firstName, lastName) => {
    const first = firstName?.charAt(0)?.toUpperCase() || '';
    const last = lastName?.charAt(0)?.toUpperCase() || '';
    return `${first}${last}`;
};
exports.formatInitials = formatInitials;
// URL formatting
const formatSlug = (text) => {
    return text
        .toLowerCase()
        .normalize('NFD') // Decompose Vietnamese characters
        .replace(/[\u0300-\u036f]/g, '') // Remove diacritics
        .replace(/[^\w\s-]/g, '') // Remove special characters
        .replace(/[\s_-]+/g, '-') // Replace spaces and underscores with hyphens
        .replace(/^-+|-+$/g, ''); // Remove leading/trailing hyphens
};
exports.formatSlug = formatSlug;
// Social media handle formatting
const formatSocialHandle = (handle, platform) => {
    const cleanHandle = handle.replace(/^@/, '');
    switch (platform) {
        case 'twitter':
            return `@${cleanHandle}`;
        case 'instagram':
            return `@${cleanHandle}`;
        case 'facebook':
            return cleanHandle;
        default:
            return handle;
    }
};
exports.formatSocialHandle = formatSocialHandle;
