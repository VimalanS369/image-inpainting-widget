// brushUtils.js

export const handleBrushSizeChange = (event, canvasRef, setBrushSize) => {
  const size = parseInt(event.target.value, 10);
  setBrushSize(size);

  if (canvasRef.current && canvasRef.current.freeDrawingBrush) {
    const pencilBrush = canvasRef.current.freeDrawingBrush;
    pencilBrush.width = size;
  } 
};

  