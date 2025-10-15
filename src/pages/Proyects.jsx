import React from 'react';
import { Container } from 'react-bootstrap';
import ProyectGrid from '../components/templates/ProyectGrid';
import ProyectCard from '../components/organisms/ProyectCard';
import proyects from '../data/Proyects';
import '../styles/pages/Proyects.css';
import BackButton from '../components/atoms/BackButton'

function Proyects() {
  
  return (
    <div className="proyects-page-wrapper">
      <Container>
        <div className="news-header-section">
          <BackButton/>
          <div className="news-page-header"> 
            <h1 className="news-page-title">Mis Proyectos</h1>
            <p className="news-page-subtitle">
              Descubre mis desarrollos y soluciones tecnológicas
            </p>
          </div>
        </div>
        
        <ProyectGrid
          projects={proyects}
          renderProyectCard={(project) => <ProyectCard proyect={project} />}
        />
      </Container>
    </div>
  );
}

export default Proyects;