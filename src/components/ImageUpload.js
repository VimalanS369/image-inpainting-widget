// ImageUpload.js

import React from 'react';

/**
 * ImageUpload Component
 * Handles image upload and provides buttons for clearing the canvas or saving the mask.
 *
 * Props:
 * - fileInputRef: Reference to the hidden file input element.
 * - handleImageUpload: Function to handle image upload.
 * - setImageSrc: Function to update the uploaded image source.
 * - clearCanvas: Function to clear the canvas.
 * - saveMask: Function to save the mask.
 */
const ImageUpload = ({
  fileInputRef,
  handleImageUpload,
  setImageSrc,
  clearCanvas,
  saveMask,
  canvasRef,
}) => {
  return (
    <div className="flex">
      {/* Hidden File Input */}
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={(event) => handleImageUpload(event, setImageSrc, canvasRef)}
      />

      {/* Upload Button */}
      <button
        className="btn btn-default mr-2"
        onClick={() => fileInputRef.current.click()}
      >
        Upload Image
      </button>

      {/* Clear Canvas Button */}
      <button className="btn btn-default mr-2" onClick={clearCanvas}>
        Clear Canvas
      </button>

      {/* Save Mask Button */}
      <button className="btn btn-default" onClick={saveMask}>
        Save Mask
      </button>
    </div>
  );
};

export default ImageUpload;
