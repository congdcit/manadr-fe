import { jsx as _jsx } from "react/jsx-runtime";
export function BaseLayout({ children, className = '' }) {
    return (_jsx("div", { className: `min-h-screen bg-background text-foreground ${className}`, children: children }));
}
