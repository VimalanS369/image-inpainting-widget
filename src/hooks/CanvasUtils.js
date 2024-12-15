// hooks/canvasUtils.js
import { Canvas  } from 'fabric';


// Utility function to handle saving the mask
export const handleSaveMask = async (canvasRef, setMaskedImage, setErrorMessage, setFadeOut, imageSrc) => {
  if (canvasRef.current) {
    const canvas = canvasRef.current;
    const objects = canvas.getObjects();

    // Check if there are no objects on the canvas (no drawing made)
    if (objects.length === 0) {
      setErrorMessage('No drawing to save!'); // Show error message
      

      // Hide the alert after 3 seconds
      setTimeout(() => {
        setFadeOut(true);
        setTimeout(() => {
          setErrorMessage(null);
          setFadeOut(false);
        }, 1000); // Wait for the fade-out to finish before removing the alert
      }, 3000);

      return; // Prevent saving the mask if there are no objects
    }

    // Proceed with saving the mask if there are objects
    const maskCanvas = new Canvas();
    maskCanvas.setWidth(canvas.width);
    maskCanvas.setHeight(canvas.height);

    const backgroundImage = canvas.backgroundImage;
    if (backgroundImage) {
      
      maskCanvas.set({
        backgroundColor: 'black',
        backgroundVpt: false,
      });
    }

    for (const object of objects) {
      if (['path'].includes(object.type)) {
        try {
          const clonedObject = await object.clone();
          if (clonedObject) {
            clonedObject.set({ stroke: 'white' });
            maskCanvas.add(clonedObject);
          }
        } catch (error) {
          console.error('Error cloning object:', error);
        }
      }
    }

    maskCanvas.renderAll();
    const maskDataUrl = maskCanvas.toDataURL({ format: 'png' });
    setMaskedImage(maskDataUrl); // Save the masked image

    // No error message needed if the drawing exists and the mask is saved
    setErrorMessage(null);
    
    //BACKEND PART
    // Send the images to FastAPI
    //  try {
    //   const formData = new FormData();

    //   // Convert base64 data URLs to blobs and append them to the form data
    //   if (imageSrc) {
    //     formData.append('original_image', dataURItoBlob(imageSrc), 'original_image.png');
    //   }
    //   if (maskDataUrl) {
    //     formData.append('masked_image', dataURItoBlob(maskDataUrl), 'masked_image.png');
    //   }

    //   const response = await fetch('http://localhost:8000/upload-images/', {
    //     method: 'POST',
    //     body: formData,
    //   });

    //   if (response.ok) {
    //     const result = await response.json();
    //     console.log('Images successfully uploaded:', result.message);
    //   } else {
    //     const errorResponse = await response.json();
    //     console.error('Error from server:', errorResponse);
    //   }
    // } catch (error) {
    //   console.error('Error sending images to the backend:', error);
    // }
  }
};

// Utility function to convert a base64 data URL to a Blob
// const dataURItoBlob = (dataURI) => {
//   const byteString = atob(dataURI.split(',')[1]);
//   const mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
//   const ab = new ArrayBuffer(byteString.length);
//   const ia = new Uint8Array(ab);

//   for (let i = 0; i < byteString.length; i++) {
//     ia[i] = byteString.charCodeAt(i);
//   }

//   return new Blob([ab], { type: mimeString });
// };

// Utility function to clear the canvas
export const handleClearCanvas = ( canvasRef,setImageSrc,setMaskedImage, fileInputRef) => {
    if (canvasRef.current) {
      const canvas = canvasRef.current;
      canvas.clear();
      const screenWidth = window.innerWidth;
      const isMobile = screenWidth <= 640;
      const newCanvasSize = isMobile ? 250 : 500;  // 250px for mobile, 500px for desktop
    // Set the new canvas size
    canvas.setWidth(newCanvasSize);
    canvas.setHeight(newCanvasSize);
      setImageSrc(null);
      setMaskedImage(null); // Remove image
      canvas.isDrawingMode = false; // Disable drawing mode
    }

    // Reset the file input so that the same image can be uploaded again
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  
  