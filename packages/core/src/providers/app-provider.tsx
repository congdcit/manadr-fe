import type { ReactNode } from 'react';
import { ReduxProvider } from './redux-provider';
import { ReactQueryProvider } from '../react-query';

interface AppProviderProps {
  children: ReactNode;
  showReactQueryDevtools?: boolean;
}

export function AppProvider({ children, showReactQueryDevtools }: AppProviderProps) {
  return <ReactQueryProvider showDevtools={showReactQueryDevtools}>{children}</ReactQueryProvider>;
}
