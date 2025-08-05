"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthLayout = AuthLayout;
const jsx_runtime_1 = require("react/jsx-runtime");
const base_layout_1 = require("./base-layout");
function AuthLayout({ children, title, subtitle, backgroundImage }) {
    return ((0, jsx_runtime_1.jsx)(base_layout_1.BaseLayout, { children: (0, jsx_runtime_1.jsxs)("div", { className: "min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8", style: backgroundImage ? {
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            } : undefined, children: [backgroundImage && ((0, jsx_runtime_1.jsx)("div", { className: "absolute inset-0 bg-black bg-opacity-50" })), (0, jsx_runtime_1.jsxs)("div", { className: "relative max-w-md w-full space-y-8", children: [(title || subtitle) && ((0, jsx_runtime_1.jsxs)("div", { className: "text-center", children: [title && ((0, jsx_runtime_1.jsx)("h2", { className: "text-3xl font-bold text-foreground", children: title })), subtitle && ((0, jsx_runtime_1.jsx)("p", { className: "mt-2 text-sm text-muted-foreground", children: subtitle }))] })), (0, jsx_runtime_1.jsx)("div", { className: "bg-card rounded-lg shadow-lg p-8", children: children })] })] }) }));
}
