import type { ReactNode } from 'react';

interface BaseLayoutProps {
  children: ReactNode;
  className?: string;
}

export function BaseLayout({ children, className = '' }: BaseLayoutProps) {
  return (
    <div className={`min-h-screen bg-background text-foreground ${className}`}>
      {children}
    </div>
  );
} 