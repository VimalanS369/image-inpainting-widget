// App.js
import React from 'react';
import ImageInpaintingWidget from './components/ImageInpaintingWidget'; // Import the main widget component
import Header from './Layout/Header';
import Footer from './Layout/Footer';
const App = () => {
  return (
    <div className="App">
      <Header/>
      
      <ImageInpaintingWidget />
      <Footer/>
    </div>
  );
};

export default App;
