"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.store = void 0;
const toolkit_1 = require("@reduxjs/toolkit");
exports.store = (0, toolkit_1.configureStore)({
    reducer: {},
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: {
            // Ignore action types that don't need serialization
            ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
        },
    }),
    devTools: process.env.NODE_ENV !== 'production',
});
