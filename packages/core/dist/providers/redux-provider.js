import { jsx as _jsx } from "react/jsx-runtime";
import { Provider } from 'react-redux';
import { store } from '../store';
export function ReduxProvider({ children }) {
    return _jsx(Provider, { store: store, children: children });
}
