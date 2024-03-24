import React from 'react';
import NavigationBar from './components/NavigationBar';
import ImageUploadForm from './components/ImageUploadForm';
import ImageDisplay from './components/ImageDisplay';

const App = () => {
  // State for storing image URLs
  const [originalImage, setOriginalImage] = React.useState(null);
  const [processedImage, setProcessedImage] = React.useState(null);

  // Function to handle image upload
  const handleImageUpload = (image) => {
    // Perform image upload logic and update state
  };

  return (
    <div>
      <NavigationBar />
      <ImageUploadForm onImageUpload={handleImageUpload} />
      <ImageDisplay originalImage={originalImage} processedImage={processedImage} />
    </div>
  );
};

export default App;
