"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.queryClient = void 0;
const react_query_1 = require("@tanstack/react-query");
exports.queryClient = new react_query_1.QueryClient({
    defaultOptions: {
        queries: {
            // Cache data for 5 minutes
            staleTime: 1000 * 60 * 5,
            // Keep cache when no components are using it (10 minutes)
            gcTime: 1000 * 60 * 10,
            // Retry logic
            retry: (failureCount, error) => {
                // Don't retry on 4xx client errors
                if (error?.status >= 400 && error?.status < 500) {
                    return false;
                }
                // Retry max 3 times for other errors
                return failureCount < 3;
            },
            // Delay between retries
            retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000),
            // Refetch on window focus
            refetchOnWindowFocus: false,
            // Refetch on reconnect
            refetchOnReconnect: true,
        },
        mutations: {
            // Retry for mutations (usually less than queries)
            retry: 1,
            retryDelay: 1000,
        },
    },
});
