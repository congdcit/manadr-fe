"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReactQueryProvider = ReactQueryProvider;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_query_1 = require("@tanstack/react-query");
const react_query_devtools_1 = require("@tanstack/react-query-devtools");
const query_client_1 = require("./query-client");
function ReactQueryProvider({ children, showDevtools = process.env.NODE_ENV === 'development' }) {
    return ((0, jsx_runtime_1.jsxs)(react_query_1.QueryClientProvider, { client: query_client_1.queryClient, children: [children, showDevtools && (0, jsx_runtime_1.jsx)(react_query_devtools_1.ReactQueryDevtools, { initialIsOpen: false })] }));
}
