import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { queryClient } from './query-client';
export function ReactQueryProvider({ children, showDevtools = process.env.NODE_ENV === 'development' }) {
    return (_jsxs(QueryClientProvider, { client: queryClient, children: [children, showDevtools && _jsx(ReactQueryDevtools, { initialIsOpen: false })] }));
}
