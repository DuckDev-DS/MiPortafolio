import React from 'react';
import '../../styles/atoms/Avatar.css';

function Avatar({ image, alt = "Avatar", size = "large", className = "" }) {
  return (
    <img 
      src={image} 
      alt={alt}
      className={`avatar avatar-${size} ${className}`}
    />
  );
}

export default Avatar;