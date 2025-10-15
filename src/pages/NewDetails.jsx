import React from "react";
import { Container, Card, Button, Row, Col } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import newsDetails from "../data/NewDetails";
import NotFound from "./NotFounds";
import ImageContainer from "../components/molecules/ImageContainer";
import CategoryBadge from "../components/molecules/CategoryBadge";
import CardBody from "../components/molecules/CardBody";
import TecnoSection from "../components/molecules/TecnoSection";
import "../styles/pages/NewDetail.css";
import "../styles/molecules/ImageContainer.css";
import "../styles/molecules/CategoryBadge.css";
import "../styles/molecules/CardBody.css";
import "../styles/molecules/TecnoSection.css";
import "../styles/atoms/Button.css";

function NewsDetail() {
    const { id } = useParams();
    const newsItem = newsDetails[id];
    const navigate = useNavigate();

    if (!newsItem) {
        return <NotFound />;
    }

    const createMarkup = (htmlContent) => {
        return { __html: htmlContent };
    };

    return (
        <Container className="my-4">
            <Button 
                variant="outline-primary" 
                onClick={() => navigate("/news")}
                className="mb-4"
            >
                ← Volver a Noticias
            </Button>
            <Card className="news-detail-card">
                <ImageContainer 
                    image={newsItem.image} 
                    alt={newsItem.title}
                    status={newsItem.category} 
                />    
                <Card.Body className="news-detail-body">
                    <div className="news-detail-header mb-4">
                        <Row className="align-items-center">
                            <Col>
                                <CategoryBadge category={newsItem.category} />
                            </Col>
                            <Col className="text-end">
                                {newsItem.date && (
                                    <span className="news-detail-date">
                                        {new Date(newsItem.date).toLocaleDateString('es-ES', {
                                            year: 'numeric',
                                            month: 'long',
                                            day: 'numeric'
                                        })}
                                    </span>
                                )}
                            </Col>
                        </Row>
                    </div>

                    <CardBody 
                        title={newsItem.title}
                        description={newsItem.excerpt}
                        titleClass="news-detail-title"
                        descriptionClass="news-detail-excerpt"
                    />

                    <div 
                        className="news-detail-content"
                        dangerouslySetInnerHTML={createMarkup(newsItem.fullContent)}
                    />

                    {newsItem.tags && newsItem.tags.length > 0 && (
                        <div className="news-tags-section mt-4">
                            <TecnoSection 
                                technologies={newsItem.tags}
                                title="Etiquetas"
                            />
                        </div>
                    )}

                    <div className="news-detail-footer mt-5 pt-4 border-top">
                        {newsItem.author && (
                            <div className="news-author">
                                <strong>Publicado por:</strong> {newsItem.author}
                            </div>
                        )}
                    </div>
                </Card.Body>
            </Card>
        </Container>
    );
}

export default NewsDetail;