// utils/imageUtils.js
// Utility functions for handling image uploads
export const handleImageUpload = (event, setImageSrc) => {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = () => {
      setImageSrc(reader.result);
    };
    reader.readAsDataURL(file);
  }
};