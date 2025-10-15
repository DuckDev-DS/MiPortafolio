import React from 'react';
import ContentGrid from './ContentGrid';

function NewsGrid({ 
  title = "Últimas Noticias", 
  subtitle = "Mantente informado sobre las novedades",
  news = [],
  renderNewsCard 
}) {
  return (
    <ContentGrid
      title={title}
      subtitle={subtitle}
      items={news}
      renderItem={renderNewsCard}
      emptyMessage="No hay noticias disponibles"
      emptyDescription="Próximamente se publicarán nuevas noticias."
      columns={{ lg: 4, xl: 3 }}
    />
  );
}

export default NewsGrid;