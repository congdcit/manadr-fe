import type { ReactNode } from 'react';
import { BaseLayout } from './base-layout';

interface AuthLayoutProps {
  children: ReactNode;
  title?: string;
  subtitle?: string;
  backgroundImage?: string;
}

export function AuthLayout({ 
  children, 
  title, 
  subtitle, 
  backgroundImage 
}: AuthLayoutProps) {
  return (
    <BaseLayout>
      <div 
        className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8"
        style={backgroundImage ? { 
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        } : undefined}
      >
        {/* Overlay if background image exists */}
        {backgroundImage && (
          <div className="absolute inset-0 bg-black bg-opacity-50" />
        )}
        
        <div className="relative max-w-md w-full space-y-8">
          {/* Header */}
          {(title || subtitle) && (
            <div className="text-center">
              {title && (
                <h2 className="text-3xl font-bold text-foreground">
                  {title}
                </h2>
              )}
              {subtitle && (
                <p className="mt-2 text-sm text-muted-foreground">
                  {subtitle}
                </p>
              )}
            </div>
          )}

          {/* Content */}
          <div className="bg-card rounded-lg shadow-lg p-8">
            {children}
          </div>
        </div>
      </div>
    </BaseLayout>
  );
} 