import React from 'react';
import { Card, Badge } from 'react-bootstrap';
import '../../styles/molecules/ImageContainer.css';

function ImageContainer({ image, alt, status }) {
  return (
    <div className="proyect-image-container">
      <Card.Img 
        variant="top" 
        src={image} 
        alt={alt}
        className="proyect-card-img"
      />
      <div className="proyect-status-badge">
        <Badge bg={status === 'Completado' ? 'success' : 'warning'} className="status-badge">
          {status}
        </Badge>
      </div>
    </div>
  );
}

export default ImageContainer;