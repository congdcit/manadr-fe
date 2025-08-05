"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseLayout = BaseLayout;
const jsx_runtime_1 = require("react/jsx-runtime");
function BaseLayout({ children, className = '' }) {
    return ((0, jsx_runtime_1.jsx)("div", { className: `min-h-screen bg-background text-foreground ${className}`, children: children }));
}
