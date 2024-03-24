import React from 'react';

const ImageDisplay = ({ originalImage, processedImage }) => {
  return (
    <div>
      <h2>Original Image</h2>
      <img src={originalImage} alt="Original" />
      {/* Display processed image */}
      {processedImage && (
        <div>
          <h2>Processed Image</h2>
          <img src={processedImage} alt="Processed" />
        </div>
      )}
    </div>
  );
};

export default ImageDisplay;
