"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DashboardLayout = DashboardLayout;
const jsx_runtime_1 = require("react/jsx-runtime");
const store_1 = require("../store");
const base_layout_1 = require("./base-layout");
function DashboardLayout({ children, header, sidebar, footer }) {
    const sidebarCollapsed = (0, store_1.useAppSelector)((state) => state.ui.sidebarCollapsed);
    return ((0, jsx_runtime_1.jsx)(base_layout_1.BaseLayout, { children: (0, jsx_runtime_1.jsxs)("div", { className: "flex h-screen", children: [sidebar && ((0, jsx_runtime_1.jsx)("aside", { className: `
              bg-card border-r border-border transition-all duration-300
              ${sidebarCollapsed ? 'w-16' : 'w-64'}
            `, children: sidebar })), (0, jsx_runtime_1.jsxs)("div", { className: "flex-1 flex flex-col overflow-hidden", children: [header && ((0, jsx_runtime_1.jsx)("header", { className: "bg-card border-b border-border shadow-sm", children: header })), (0, jsx_runtime_1.jsx)("main", { className: "flex-1 overflow-y-auto p-6", children: children }), footer && ((0, jsx_runtime_1.jsx)("footer", { className: "bg-card border-t border-border", children: footer }))] })] }) }));
}
