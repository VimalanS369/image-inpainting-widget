import React from 'react'; 
import { handleBrushSizeChange } from '../hooks/brushUtils';

/**
 * BrushSizeControl Component
 * This component provides a slider control to adjust the brush size for a canvas.
 *
 * Props:
 * - canvasRef: A reference to the canvas element.
 * - brushSize: The current size of the brush.
 * - setBrushSize: A function to update the brush size state.
 */
const BrushSizeControl = ({ canvasRef, brushSize, setBrushSize }) => {
  return (
    <label className="block mb-4">
      {/* Label for the brush size slider */}
      Brush Size:
      <input
        type="range" // Slider input type
        min="5" // Minimum brush size value
        max="50" // Maximum brush size value
        className="range [--range-shdw:white] w-full" // Tailwind CSS for styling
        value={brushSize} // Bind the slider value to the current brush size
        onChange={(event) => handleBrushSizeChange(event, canvasRef, setBrushSize)} // Handle brush size change
      />
    </label>
  );
};

export default BrushSizeControl;
