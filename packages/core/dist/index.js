"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useInfiniteQuery = exports.useQueryClient = exports.useMutation = exports.useQuery = exports.QueryClientProvider = exports.QueryClient = exports.ReduxProvider = exports.useSessionStorage = exports.useLocalStorage = exports.useAppSelector = exports.useAppDispatch = exports.store = void 0;
// Store
var store_1 = require("./store/store");
Object.defineProperty(exports, "store", { enumerable: true, get: function () { return store_1.store; } });
var hooks_1 = require("./store/hooks");
Object.defineProperty(exports, "useAppDispatch", { enumerable: true, get: function () { return hooks_1.useAppDispatch; } });
Object.defineProperty(exports, "useAppSelector", { enumerable: true, get: function () { return hooks_1.useAppSelector; } });
__exportStar(require("./store/slices"), exports);
// Providers
__exportStar(require("./providers"), exports);
// Layouts
__exportStar(require("./layouts"), exports);
// Services
__exportStar(require("./services"), exports);
// React Query
__exportStar(require("./react-query"), exports);
// Custom Hooks (excluding Redux hooks to avoid conflicts)
var use_local_storage_1 = require("./hooks/use-local-storage");
Object.defineProperty(exports, "useLocalStorage", { enumerable: true, get: function () { return use_local_storage_1.useLocalStorage; } });
var use_session_storage_1 = require("./hooks/use-session-storage");
Object.defineProperty(exports, "useSessionStorage", { enumerable: true, get: function () { return use_session_storage_1.useSessionStorage; } });
// Re-export commonly used external libraries
var react_redux_1 = require("react-redux");
Object.defineProperty(exports, "ReduxProvider", { enumerable: true, get: function () { return react_redux_1.Provider; } });
var react_query_1 = require("@tanstack/react-query");
Object.defineProperty(exports, "QueryClient", { enumerable: true, get: function () { return react_query_1.QueryClient; } });
Object.defineProperty(exports, "QueryClientProvider", { enumerable: true, get: function () { return react_query_1.QueryClientProvider; } });
Object.defineProperty(exports, "useQuery", { enumerable: true, get: function () { return react_query_1.useQuery; } });
Object.defineProperty(exports, "useMutation", { enumerable: true, get: function () { return react_query_1.useMutation; } });
Object.defineProperty(exports, "useQueryClient", { enumerable: true, get: function () { return react_query_1.useQueryClient; } });
Object.defineProperty(exports, "useInfiniteQuery", { enumerable: true, get: function () { return react_query_1.useInfiniteQuery; } });
__exportStar(require("./types"), exports);
