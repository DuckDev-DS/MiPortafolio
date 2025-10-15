import React from 'react';
import { Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

import ImageContainer from '../molecules/ImageContainer';
import CategoryBadge from '../molecules/CategoryBadge';
import CardBody from '../molecules/CardBody';
import FeaturesList from '../molecules/FeaturesList';
import TecnoSection from '../molecules/TecnoSection';
import CardFooter from '../molecules/CardFooter';

import '../../styles/organisms/ProyectCard.css';

function ProyectCard({ proyect }) {
  const navigate = useNavigate();

  const handleViewDetails = () => {
    navigate(`/proyects/${proyect.id}`);
  };

  return (
    <div className="proyect-card-col">
      <Card className="proyect-card">
        <ImageContainer 
          image={proyect.image} 
          alt={proyect.title}
          status={proyect.status}
        />
        
        <Card.Body className="proyect-card-body">
          <CategoryBadge category={proyect.category} />
          
          <CardBody 
            title={proyect.title}
            description={proyect.description}
          />
          
          <FeaturesList features={proyect.features.slice(0, 3)} />
          <TecnoSection technologies={proyect.tecnology.slice(0, 5)} />
        </Card.Body>
        
        <CardFooter onViewDetails={handleViewDetails} />
      </Card>
    </div>
  );
}

export default ProyectCard;