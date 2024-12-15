// CanvasArea.js

import React from 'react';
import FallbackIcon from '../assets/FallbackIcon'; // Import the SVG component for the fallback icon
import '../index.css'; // Import global styles

/**
 * CanvasArea Component
 * This component renders a canvas element where image editing can be performed.
 * If no image is uploaded (`imageSrc` is not provided), a fallback UI is displayed.
 *
 * Props:
 * - canvasWidth: The width of the canvas in pixels.
 * - canvasHeight: The height of the canvas in pixels.
 * - imageSrc: The source URL of the image to be displayed on the canvas.
 */
const CanvasArea = ({ canvasWidth, canvasHeight, imageSrc }) => {
  return (
    <div className="relative mb-6">
      {/* Main canvas element */}
      <canvas
        id="canvas"
        width={canvasWidth} // Set canvas width from props
        height={canvasHeight} // Set canvas height from props
        className="w-full h-full object-contain border-2 border-gray-300 rounded"
      />

      {/* Fallback UI displayed if no image is uploaded */}
      {!imageSrc && (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
          <FallbackIcon /> {/* SVG fallback icon */}
          <p className="mt-2 text-gray-500 text-sm">
            Please upload an image to edit.
          </p>
        </div>
      )}
    </div>
  );
};

export default CanvasArea;
