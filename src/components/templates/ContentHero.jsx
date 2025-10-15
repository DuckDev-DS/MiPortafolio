import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Title from '../atoms/Title';
import Text from '../atoms/Text';
import '../../styles/templates/ContentHero.css';

function ContentHero({ 
  imageComponent,
  title,
  subtitle,
  description,
  skillsComponent,
  socialComponent,
  centered = true
}) {
  return (
    <Container fluid className="content-hero-template">
      <Row className={`content-hero-content align-items-center justify-content-center ${centered ? 'content-hero-centered' : ''}`}>
        <Col md={8} lg={6}>
          {imageComponent && (
            <div className="content-hero-image">
              {imageComponent}
            </div>
          )}
          
          <div className="content-hero-text">
            {title && (
              <Title variant="h1" className="content-hero-title">
                {title}
              </Title>
            )}
            
            {subtitle && (
              <Title variant="h2" className="content-hero-subtitle">
                {subtitle}
              </Title>
            )}
            
            {description && (
              <Text variant="p" className="content-hero-description">
                {description}
              </Text>
            )}
            
            {skillsComponent}
            {socialComponent}
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default ContentHero;