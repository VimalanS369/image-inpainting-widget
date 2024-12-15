// MaskedImageDisplay.js

import React from 'react';

/**
 * MaskedImageDisplay Component
 * Displays the original image alongside the masked image.
 *
 * Props:
 * - maskedImage: The data URL of the masked image.
 * - imageSrc: The source URL of the original image.
 */
const MaskedImageDisplay = ({ maskedImage, imageSrc }) => {
  return (
    <div className="masked-image relative text-center mb-10">
      {maskedImage && (
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-6">
          {/* Original Image */}
          <div className="text-center">
            <h3 className="mb-2">Original Image</h3>
            <img
              src={imageSrc}
              alt="Original"
              className="rounded border-2 border-gray-300 max-w-xs"
            />
          </div>

          {/* Masked Image */}
          <div className="text-center">
            <h3 className="mb-2">Masked Image</h3>
            <img
              src={maskedImage}
              alt="Masked"
              className="rounded border-2 border-gray-300 max-w-xs"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default MaskedImageDisplay;
