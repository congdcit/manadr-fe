import { configureStore } from '@reduxjs/toolkit';
export const store = configureStore({
    reducer: {},
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: {
            // Ignore action types that don't need serialization
            ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
        },
    }),
    devTools: process.env.NODE_ENV !== 'production',
});
