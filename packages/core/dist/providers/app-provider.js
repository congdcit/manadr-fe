import { jsx as _jsx } from "react/jsx-runtime";
import { ReactQueryProvider } from '../react-query';
export function AppProvider({ children, showReactQueryDevtools }) {
    return _jsx(ReactQueryProvider, { showDevtools: showReactQueryDevtools, children: children });
}
