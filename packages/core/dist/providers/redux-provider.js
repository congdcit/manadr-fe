"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReduxProvider = ReduxProvider;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_redux_1 = require("react-redux");
const store_1 = require("../store");
function ReduxProvider({ children }) {
    return (0, jsx_runtime_1.jsx)(react_redux_1.Provider, { store: store_1.store, children: children });
}
