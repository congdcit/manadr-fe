import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useAppSelector } from '../store';
import { BaseLayout } from './base-layout';
export function DashboardLayout({ children, header, sidebar, footer }) {
    const sidebarCollapsed = useAppSelector((state) => state.ui.sidebarCollapsed);
    return (_jsx(BaseLayout, { children: _jsxs("div", { className: "flex h-screen", children: [sidebar && (_jsx("aside", { className: `
              bg-card border-r border-border transition-all duration-300
              ${sidebarCollapsed ? 'w-16' : 'w-64'}
            `, children: sidebar })), _jsxs("div", { className: "flex-1 flex flex-col overflow-hidden", children: [header && (_jsx("header", { className: "bg-card border-b border-border shadow-sm", children: header })), _jsx("main", { className: "flex-1 overflow-y-auto p-6", children: children }), footer && (_jsx("footer", { className: "bg-card border-t border-border", children: footer }))] })] }) }));
}
