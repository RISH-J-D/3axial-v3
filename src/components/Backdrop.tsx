import React from 'react';

interface BackdropProps {
  /** 
   * Image URL or path (e.g. '/steel-construction-bg.jpg')
   */
  src?: string;
  /** 
   * Opacity for the backdrop (default 0.20 for clear visibility) 
   */
  opacity?: number;
  /** 
   * Optional custom classes for the outer wrapper 
   */
  className?: string;
  /** 
   * Page content overlaying the static backdrop 
   */
  children?: React.ReactNode;
}

/**
 * Reusable static backdrop component for any page.
 * Provides a visible structural steel backdrop on cloudy white (#fdfdfe) with subtle ambient accents.
 */
export const Backdrop: React.FC<BackdropProps> = ({
  src = '/steel-construction-bg.jpg',
  opacity = 0.20,
  className = '',
  children,
}) => {
  return (
    <div className={`relative min-h-screen w-full bg-[#fdfdfe] text-[#0f172a] ${className}`}>
      {/* 
        STATIC FIXED BACKDROP IMAGE:
        Structural steel framework visible throughout the page background.
      */}
      {src && (
        <div
          className="fixed inset-0 pointer-events-none z-0 bg-cover bg-center bg-no-repeat mix-blend-multiply transition-opacity duration-300"
          style={{
            backgroundImage: `url(${src})`,
            opacity: opacity,
          }}
        />
      )}

      {/* Dynamic atmospheric ambient glows using #0099ff and #e8250e */}
      <div 
        aria-hidden="true" 
        className="fixed inset-0 pointer-events-none z-0 bg-[radial-gradient(ellipse_85%_55%_at_15%_5%,rgba(0,153,255,0.07),transparent_70%)]" 
      />
      <div 
        aria-hidden="true" 
        className="fixed inset-0 pointer-events-none z-0 bg-[radial-gradient(ellipse_65%_45%_at_85%_25%,rgba(232,37,14,0.035),transparent_60%)]" 
      />

      {/* Scrollable page content layer */}
      <div className="relative z-10 w-full">
        {children}
      </div>
    </div>
  );
};
