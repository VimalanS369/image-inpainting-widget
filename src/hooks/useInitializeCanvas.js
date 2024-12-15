import { useEffect, useRef } from 'react';
import { Canvas, FabricImage, PencilBrush } from 'fabric';

export const useInitializeCanvas = (imageSrc, brushSize, setCanvasWidth, setCanvasHeight) => {
  const canvasRef = useRef(null);
  const brushRef = useRef(null);

  useEffect(() => {
    const canvas = new Canvas('canvas');
    const isMobile = window.innerWidth <= 640;
    const newCanvasSize = isMobile ? 250 : 500;
    canvas.setWidth(newCanvasSize);
    canvas.setHeight(newCanvasSize);
    canvasRef.current = canvas;

    const handleImage = (imgElement) => {
      const screenWidth = window.innerWidth;
      const screenHeight = window.innerHeight;

      const imgAspectRatio = imgElement.width / imgElement.height;
      const screenAspectRatio = screenWidth / screenHeight;

      let newCanvasWidth, newCanvasHeight;

       // Determine padding based on screen size
       const isMobile = screenWidth <= 640; // Consider screen width <= 640px as mobile
       const padding = isMobile ? 120 : 400; // Smaller padding for mobile screens
 
       const maxWidth = screenWidth - padding;
       const maxHeight = screenHeight - padding;

      if (imgAspectRatio > screenAspectRatio) {
        // Landscape or wider image
        newCanvasWidth = Math.min(maxWidth, imgElement.width);
        newCanvasHeight = newCanvasWidth / imgAspectRatio;
      } else {
        // Portrait or taller image
        newCanvasHeight = Math.min(maxHeight, imgElement.height);
        newCanvasWidth = newCanvasHeight * imgAspectRatio;
      }

      setCanvasWidth(newCanvasWidth);
      setCanvasHeight(newCanvasHeight);

      

      const fabricImage = new FabricImage(imgElement, {
        left: 0,
        top: 0,
        selectable: false,
      });

      // Scale the image to fit the canvas
      fabricImage.scaleToWidth(newCanvasWidth);
      fabricImage.scaleToHeight(newCanvasHeight);
      
      canvas.renderAll();
      canvas.set({
        backgroundImage: fabricImage,
        backgroundVpt: false, // Ensure the image doesn't get scaled by the viewport
      });

      canvas.renderAll();
      canvas.setWidth(newCanvasWidth);
      canvas.setHeight(newCanvasHeight);
      const pencilBrush = new PencilBrush(canvas);
      pencilBrush.width = brushSize;
      canvas.freeDrawingBrush = pencilBrush;
      canvas.isDrawingMode = true; // Enable drawing mode
    };

    if (imageSrc) {
      const imgElement = new Image();
      imgElement.src = imageSrc;
      imgElement.onload = () => handleImage(imgElement);
    } else {
      canvas.isDrawingMode = false;
    }


    return () => canvas.dispose();
  }, [imageSrc, setCanvasWidth, setCanvasHeight]);

  useEffect(() => {
    if (brushRef.current) {
      brushRef.current.width = brushSize;
    }
  }, [brushSize]);

  return canvasRef;
};
