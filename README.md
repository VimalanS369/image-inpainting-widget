# Image Inpainting Widget

## Overview
The Image Inpainting Widget is a React-based application designed for creating and exporting masked images. It provides users with the ability to:

1. Upload an image.
2. Draw on the image to create a mask.
3. Export and display the original image and the mask image as a pair.

## How to Run the Project Locally

### Prerequisites
To run the project locally, ensure you have the following installed:
- Node.js (v14 or higher)
- npm or yarn

### Steps
1. **Clone the Repository**:
   ```bash
   git clone <repository-url>
   cd image-inpainting-widget
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the Development Server**:
   ```bash
   npm start
   # or
   yarn start
   ```

4. **Access the Application**:
   Open a browser and navigate to `http://localhost:3000`.

## Libraries Used

### Frontend
- **React**: Core library for building the user interface.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **DaisyUI**: Tailwind CSS component library used for pre-styled and customizable UI components.
- **Fabric.js**: Canvas library used for image and drawing manipulation.

### Utilities
- **eslint**: Linter for ensuring code quality.
- **Google Fonts**: Fonts imported for enhanced typography.
- **Web APIs**: Used for image handling (e.g., FileReader).

### Development Tools
- **webpack**: Bundling JavaScript files.
- **React Hooks**: Managing state and effects (e.g., `useEffect`, `useRef`).

## Challenges Faced and Solutions

1. **Canvas Initialization on Mobile Devices**:
   - **Challenge**: Resizing and rendering the canvas appropriately on smaller screens.
   - **Solution**: Dynamically adjusted canvas size based on the screen width using a responsive approach.

2. **Brush Size Synchronization**:
   - **Challenge**: Ensuring brush size updates were applied correctly across the app.
   - **Solution**: Used `useEffect` hooks to monitor and apply changes when the `brushSize` dependency was updated.

3. **Cloning Canvas Objects**:
   - **Challenge**: Errors occurred during cloning operations in Fabric.js when objects contained nested properties.
   - **Solution**: Implemented asynchronous cloning with error handling to ensure robust operations.

4. **User Feedback for Empty Canvas**:
   - **Challenge**: Users attempted to save masks when the canvas was empty, causing confusion.
   - **Solution**: Added a validation step with a clear error message and visual feedback to guide users.

5. **Cross-Browser Compatibility**:
   - **Challenge**: Variations in behavior across browsers (e.g., SVG rendering differences).
   - **Solution**: Tested and debugged extensively, using consistent standards provided by Fabric.js and Tailwind CSS.

---

For any issues or contributions, please feel free to open an issue or submit a pull request!

