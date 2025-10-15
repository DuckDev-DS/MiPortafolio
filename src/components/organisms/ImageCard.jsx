import React from 'react';
import '../../styles/organisms/ImageCard.css'

function ImageCard({ src, alt, className = "" }) {
  return (
    <div className="image-card-container">
      <div className="image-card-frame">
        <img 
          src={src} 
          alt={alt}
          className={`image-card ${className}`}
        />
      </div>
    </div>
  );
}

export default ImageCard;