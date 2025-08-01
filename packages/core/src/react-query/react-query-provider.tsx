import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import type { ReactNode } from 'react';
import { queryClient } from './query-client';

interface ReactQueryProviderProps {
  children: ReactNode;
  showDevtools?: boolean;
}

export function ReactQueryProvider({ 
  children, 
  showDevtools = process.env.NODE_ENV === 'development' 
}: ReactQueryProviderProps) {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
      {showDevtools && <ReactQueryDevtools initialIsOpen={false} />}
    </QueryClientProvider>
  );
} 