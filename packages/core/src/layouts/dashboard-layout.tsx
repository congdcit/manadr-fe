import type { ReactNode } from 'react';
import { useAppSelector } from '../store';
import { BaseLayout } from './base-layout';

interface DashboardLayoutProps {
  children: ReactNode;
  header?: ReactNode;
  sidebar?: ReactNode;
  footer?: ReactNode;
}

export function DashboardLayout({ 
  children, 
  header, 
  sidebar, 
  footer 
}: DashboardLayoutProps) {
  const sidebarCollapsed = useAppSelector((state) => state.ui.sidebarCollapsed);

  return (
    <BaseLayout>
      <div className="flex h-screen">
        {/* Sidebar */}
        {sidebar && (
          <aside 
            className={`
              bg-card border-r border-border transition-all duration-300
              ${sidebarCollapsed ? 'w-16' : 'w-64'}
            `}
          >
            {sidebar}
          </aside>
        )}

        {/* Main Content */}
        <div className="flex-1 flex flex-col overflow-hidden">
          {/* Header */}
          {header && (
            <header className="bg-card border-b border-border shadow-sm">
              {header}
            </header>
          )}

          {/* Content */}
          <main className="flex-1 overflow-y-auto p-6">
            {children}
          </main>

          {/* Footer */}
          {footer && (
            <footer className="bg-card border-t border-border">
              {footer}
            </footer>
          )}
        </div>
      </div>
    </BaseLayout>
  );
} 