import React from 'react';
import { Card, Button } from 'react-bootstrap';
import '../../styles/molecules/CardFooter.css';

function CardFooter({ onViewDetails, buttonText = "Ver detalles" }) {
  return (
    <Card.Footer className="proyect-card-footer">
      <div className="footer-buttons">
        <Button 
          variant="outline-primary" 
          onClick={onViewDetails}
          className="proyect-details-btn elegant-blue-btn"
        >
          <i className="bi bi-arrow-right-circle me-2"></i>
          {buttonText}
        </Button>
      </div>
    </Card.Footer>
  );
}

export default CardFooter;