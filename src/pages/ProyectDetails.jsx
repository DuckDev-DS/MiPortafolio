import React from "react";
import { Container, Card, Row, Col, Button, ListGroup, Badge } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";
import proyectDetails from "../data/ProyectDetails";
import NotFound from "./NotFounds";
import ImageContainer from "../components/molecules/ImageContainer";
import CategoryBadge from "../components/molecules/CategoryBadge";
import CardBody from "../components/molecules/CardBody";
import FeaturesList from "../components/molecules/FeaturesList";

import "../styles/pages/ProyectDetail.css"
import '../styles/templates/ContentHero.css'

function ProyectDetail(){
    const { id } = useParams();
    const navigate = useNavigate();
    const proyect = proyectDetails[id];

    console.log("Proyecto encontrado:", proyect);

    if (!proyect) {
        return <NotFound />;
    }

    return(
        <Container className="proyect-hero-template">
            <Container className="my-4">
                <Button 
                    variant="outline-primary" 
                    onClick={() => navigate("/proyects")}
                    className="back-btn"
                >
                    ← Volver a Proyectos
                </Button>
                <Card className="proyect-detail-card">
                    <ImageContainer 
                        image={proyect.image} 
                        alt={proyect.title}
                        status={proyect.status}
                    />
                    
                    <Card.Body className="proyect-detail-body">
                        <CategoryBadge category={proyect.category} />
                        
                        <CardBody 
                            title={proyect.title}
                            description={proyect.longDescription}
                        />

                        <FeaturesList features={proyect.fullDetails.features} />

                        <div className="architecture-section mt-4">
                            <h5>Arquitectura y Tecnologías</h5>
                            <Row>
                                {proyect.fullDetails.architecture.map((item, index) => (
                                    <Col md={6} key={index}>
                                        <div className="architecture-item">
                                            <strong>{item.component}:</strong> {item.technology}
                                        </div>
                                    </Col>
                                ))}
                            </Row>
                        </div>

                        <div className="endpoints-section mt-4">
                            <h5>Endpoints API</h5>
                            <ListGroup>
                                {proyect.fullDetails.endpoints.map((endpoint, index) => (
                                    <ListGroup.Item key={index}>
                                        <Badge bg="primary" className="me-2">{endpoint.method}</Badge>
                                        <code>{endpoint.endpoint}</code>
                                        <span className="ms-2">- {endpoint.description}</span>
                                    </ListGroup.Item>
                                ))}
                            </ListGroup>
                        </div>

                        <div className="team-section mt-4">
                            <h5>Equipo</h5>
                            <div className="team-members">
                                {proyect.fullDetails.team.map((member, index) => (
                                    <Badge key={index} bg="secondary" className="me-2">
                                        {member}
                                    </Badge>
                                ))}
                            </div>
                        </div>

                        <div className="footer-buttons mt-4">
                            <Button 
                                variant="outline-primary"
                                href={proyect.link}
                                target="_blank"
                                className="me-2"
                            >
                                <i className="bi bi-github me-2"></i>
                                Ver Repositorio
                            </Button>
                        </div>
                    </Card.Body>
                </Card>
            </Container>
        </Container>
);
}

export default ProyectDetail;