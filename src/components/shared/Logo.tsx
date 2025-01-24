import React from 'react';

export const Logo = () => {
  return (
    <a 
      href="#" 
      className="text-gray-300 hover:text-accent transition-colors"
      aria-label="Go to homepage"
    >
      {/* Original version with white background */}
      <div className="h-10 w-auto relative bg-white/80 rounded-lg p-2 transition-colors group-hover:bg-accent/60">
        <img 
          src="/img/logo/3volve-logo-web.svg" 
          alt="3volve Logo"
          title="3volve Logo"
          className="h-full w-auto"
        />
      </div> 
      
      
      {/* Inverted version without background 
      <div className="h-10 w-auto relative">
        <img 
          src="/img/logo/3volve-logo-web-inverted.svg" 
          alt="3volve Logo"
          title="3volve Logo"
          className="h-full w-auto"
        />
      </div> */}
    </a>
  );
};