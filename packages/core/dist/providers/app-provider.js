"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppProvider = AppProvider;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_query_1 = require("../react-query");
function AppProvider({ children, showReactQueryDevtools }) {
    return (0, jsx_runtime_1.jsx)(react_query_1.ReactQueryProvider, { showDevtools: showReactQueryDevtools, children: children });
}
