// ImageInpaintingWidget.js

import React, { useState, useRef } from 'react';
import BrushSizeControl from './BrushSizeControl';
import FadeOutAlert from './FadeOutAlert';
import CanvasArea from './CanvasArea';
import ImageUpload from './ImageUpload';
import MaskedImageDisplay from './MaskedImageDisplay';
import { handleImageUpload } from '../hooks/imageUtils';
import { handleSaveMask, handleClearCanvas } from '../hooks/CanvasUtils';
import { useInitializeCanvas } from '../hooks/useInitializeCanvas';

/**
 * ImageInpaintingWidget Component
 * The main widget for performing image inpainting operations, including:
 * - Uploading an image
 * - Adjusting brush size
 * - Clearing the canvas
 * - Saving the masked image
 */
const ImageInpaintingWidget = () => {
  // State Variables
  const [imageSrc, setImageSrc] = useState(null); // Source of the uploaded image
  const [brushSize, setBrushSize] = useState(10); // Current brush size
  const [canvasWidth, setCanvasWidth] = useState(null); // Canvas width
  const [canvasHeight, setCanvasHeight] = useState(null); // Canvas height
  const [maskedImage, setMaskedImage] = useState(null); // Masked image data
  const [errorMessage, setErrorMessage] = useState(null); // Error message for alerts
  const [fadeOut, setFadeOut] = useState(false); // Control fade-out effect for alerts

  // Refs
  const fileInputRef = useRef(null); // Reference to the hidden file input
  const canvasRef = useInitializeCanvas(imageSrc, brushSize, setCanvasWidth, setCanvasHeight); // Initialize canvas

  // Event Handlers
  const handleSave = () =>
    handleSaveMask(canvasRef, setMaskedImage, setErrorMessage, setFadeOut, imageSrc);
  const handleClear = () =>
    handleClearCanvas(canvasRef, setImageSrc, setMaskedImage, fileInputRef);

  return (
    <div className="flex flex-col mt-[100px] items-center justify-between min-h-screen">
      {/* Title */}
      <h1 className="font-headingcust text-lg sm:text-2xl lg:text-3xl text-center sm:text-left sm:ml-4 pb-10">
        IMAGE INPAINTING WIDGET
      </h1>

      {/* Alert for errors */}
      <FadeOutAlert
        message={errorMessage}
        onClose={() => setErrorMessage(null)}
        fadeOut={fadeOut}
      />

      {/* Main Canvas Area */}
      <CanvasArea
        canvasWidth={canvasWidth}
        canvasHeight={canvasHeight}
        imageSrc={imageSrc}
      />

      {/* Control Panel */}
      <div className="controls mb-6">
        <BrushSizeControl
          canvasRef={canvasRef}
          brushSize={brushSize}
          setBrushSize={setBrushSize}
        />
        <ImageUpload
          fileInputRef={fileInputRef}
          handleImageUpload={handleImageUpload}
          setImageSrc={setImageSrc}
          clearCanvas={handleClear}
          saveMask={handleSave}
        />
      </div>

      {/* Masked Image Display */}
      <div className="mt-auto">
        <MaskedImageDisplay maskedImage={maskedImage} imageSrc={imageSrc} />
      </div>
    </div>
  );
};

export default ImageInpaintingWidget;
