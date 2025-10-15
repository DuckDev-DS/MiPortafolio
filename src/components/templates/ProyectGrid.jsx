import React from 'react';
import ContentGrid from './ContentGrid';

function ProyectGrid({ 
  title = "Mis Proyectos", 
  subtitle = "Desarrollos y soluciones tecnológicas",
  projects = [],
  renderProyectCard 
}) {
  return (
    <ContentGrid
      title={title}
      subtitle={subtitle}
      items={projects}
      renderItem={renderProyectCard}
      emptyMessage="No hay proyectos disponibles"
      emptyDescription="Próximamente se agregarán nuevos proyectos."
      columns={{ lg: 6, xl: 4 }}
    />
  );
}

export default ProyectGrid;