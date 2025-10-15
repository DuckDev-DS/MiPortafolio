import React from 'react';
import { Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import '../../styles/organisms/NewsCard.css'

function NewsCard({ news }) {
  const navigate = useNavigate();

  const handleReadMore = () => {
    navigate(`/news/${news.id}`);
  };

  return (
    <div className="news-card-col">
      <Card className="news-card">
        {news.image && (
          <Card.Img 
            variant="top" 
            src={news.image} 
            alt={news.title}
            className="news-card-img"
          />
        )}
        
        <Card.Body className="news-card-body">
          {news.category && (
            <span className="news-category-badge">
              {news.category}
            </span>
          )}
          
          <Card.Title className="news-title">{news.title}</Card.Title>

          <Card.Text className="news-excerpt">{news.excerpt}</Card.Text>
          
          {news.date && (
            <small className="news-date">
              📅 {new Date(news.date).toLocaleDateString('es-ES')}
            </small>
          )}
        </Card.Body>

        <Card.Footer className="news-card-footer">
          <button onClick={handleReadMore} className="news-read-btn">
            Leer más
          </button>
        </Card.Footer>
      </Card>
    </div>
  );
}

export default NewsCard;