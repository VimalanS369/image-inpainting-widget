// FadeOutAlert.js

import React, { useEffect } from 'react';

/**
 * FadeOutAlert Component
 * Displays an alert message that fades out after a specified duration.
 *
 * Props:
 * - message: The alert message to display.
 * - onClose: Function to close the alert.
 * - fadeOut: Boolean to control the fade-out effect.
 */
const FadeOutAlert = ({ message, onClose, fadeOut }) => {
  useEffect(() => {
    if (message) {
      // Set a timer to trigger the onClose function after 4 seconds
      const timer = setTimeout(() => {
        onClose();
      }, 4000);

      // Cleanup timer on component unmount
      return () => clearTimeout(timer);
    }
  }, [message, onClose]);

  return (
    message && (
      <div
        className={`alert alert-error fixed top-0 left-1/2 transform -translate-x-1/2 z-10 w-96 mb-4 ${
          fadeOut ? 'opacity-0 transition-opacity duration-1000' : 'opacity-100'
        }`}
      >
        <div className="flex w-full">
          {/* Close Button */}
          <button onClick={onClose} className="btn btn-sm btn-ghost mr-2">
            X
          </button>
          {/* Display Alert Message */}
          <span>{message}</span>
        </div>
      </div>
    )
  );
};

export default FadeOutAlert;
