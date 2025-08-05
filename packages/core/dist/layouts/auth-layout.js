import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { BaseLayout } from './base-layout';
export function AuthLayout({ children, title, subtitle, backgroundImage }) {
    return (_jsx(BaseLayout, { children: _jsxs("div", { className: "min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8", style: backgroundImage ? {
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            } : undefined, children: [backgroundImage && (_jsx("div", { className: "absolute inset-0 bg-black bg-opacity-50" })), _jsxs("div", { className: "relative max-w-md w-full space-y-8", children: [(title || subtitle) && (_jsxs("div", { className: "text-center", children: [title && (_jsx("h2", { className: "text-3xl font-bold text-foreground", children: title })), subtitle && (_jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: subtitle }))] })), _jsx("div", { className: "bg-card rounded-lg shadow-lg p-8", children: children })] })] }) }));
}
