import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import user from '../data/Users';
import BackButton from '../components/atoms/BackButton'
import '../styles/templates/ContentHero.css';
import '../styles/pages/Abouts.css';
import '../styles/pages/News.css'

function About() {


    return (
        <div className="about-page-wrapper">
            <Container>
                <div className="news-header-section">
                    <BackButton/>
                    <div className="about-page-header">
                        <h1 className="about-page-title">Sobre Mí</h1>
                    </div>
                    <Row>
                        <Col lg={8} className="mx-auto">
                            <Card className="about-card mb-4">
                                <Card.Body>
                                    <Card.Title>Mi Historia</Card.Title>
                                    <Card.Text style={{ whiteSpace: 'pre-line', lineHeight: '1.6' }}>
                                        {user.personalInfo.fullBio}
                                    </Card.Text>
                                </Card.Body>
                            </Card>

                            <Card className="about-card mb-4">
                                <Card.Body>
                                    <Card.Title>Lo que me apasiona</Card.Title>
                                    <ul>
                                        {user.personalInfo.passions.map((passion, index) => (
                                            <li key={index}>{passion}</li>
                                        ))}
                                    </ul>
                                    <blockquote className="blockquote mt-3">
                                        <p className="mb-0">{user.personalInfo.philosophy}</p>
                                    </blockquote>
                                </Card.Body>
                            </Card>

                            <Card className="about-card">
                                <Card.Body>
                                    <Card.Title>Mis Metas</Card.Title>
                                    <Row>
                                        {user.goals.map((goal, index) => (
                                            <Col md={6} key={index} className="mb-2">
                                                <span className="tech-tag">🎯 {goal}</span>
                                            </Col>
                                        ))}
                                    </Row>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    );
}

export default About;