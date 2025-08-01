// Store
export { store, type RootState, type AppDispatch } from './store/store';
export { useAppDispatch, useAppSelector } from './store/hooks';
export * from './store/slices';

// Providers
export * from './providers';

// Layouts
export * from './layouts';

// Services
export * from './services';

// React Query
export * from './react-query';

// Custom Hooks (excluding Redux hooks to avoid conflicts)
export { useAuth } from './hooks/use-auth';
export { useLocalStorage } from './hooks/use-local-storage';
export { useSessionStorage } from './hooks/use-session-storage';
export { useApi, useApiQuery, useApiMutation } from './hooks/use-api';

// Re-export commonly used external libraries
export { Provider as ReduxProvider } from 'react-redux';
export {
  QueryClient,
  QueryClientProvider,
  useQuery,
  useMutation,
  useQueryClient,
  useInfiniteQuery,
} from '@tanstack/react-query';
