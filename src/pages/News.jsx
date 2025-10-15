import React from 'react';
import { Container } from 'react-bootstrap';
import ContentGrid from '../components/templates/ContentGrid';
import NewsCard from '../components/organisms/NewsCard';
import news from '../data/news';
import BackButton from '../components/atoms/BackButton'
import '../styles/pages/News.css';
import '../styles/atoms/Button.css'

function News() {

  return (
    <div className="news-page-wrapper">
      <Container>
        <div className="news-header-section">
          <BackButton/>
          <div className="news-page-header">
            <h1 className="news-page-title">Últimas Noticias</h1>
            <p className="news-page-subtitle">
              Mantente informado sobre mis últimos proyectos, logros y novedades en el mundo del desarrollo
            </p>
          </div>
        </div>
        
        <ContentGrid
          items={news}
          renderItem={(newsItem) => <NewsCard news={newsItem} />}
          columns={{ lg: 6, xl: 4 }}
          title=""
          subtitle=""
        />
      </Container>
    </div>
  );
}

export default News;