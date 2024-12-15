// components/Header.js
// A header component for the application
import React from 'react';

const Header = () => {
  return (
    <div className="w-full bg-base-300">
      <div className="navbar px-2 sm:px-4 lg:px-6 flex flex-col sm:flex-row items-center py-3 sm:py-4 gap-1 sm:gap-4">
        {/* Responsive logo */}
        <img
          className="h-6 sm:h-8 w-auto mx-auto sm:mx-0"
          alt="navbar"
          src="imagepipeline-logo.png"
        />
      </div>
    </div>
  );
};
export default Header;