import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from './Button';
import '../../styles/atoms/Button.css'

function BackButton(){
    const navigate = useNavigate();
    return (
        <Button 
            variant="outline-primary" 
            onClick={() => navigate("/")}
            className="back-btn"
          >
            ← Volver al Inicio
          </Button>
    )
}

export default BackButton;