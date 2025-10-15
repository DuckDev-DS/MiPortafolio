import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Title from '../atoms/Title';
import Text from '../atoms/Text';
import '../../styles/templates/ContentGrid.css'

function ContentGrid({ 
  title = "Contenido",
  subtitle = "Lista de elementos",
  items = [],
  renderItem,
  emptyMessage = "No hay elementos disponibles",
  emptyDescription = "Próximamente se agregarán nuevos elementos.",
  columns = { lg: 6, xl: 4 }
}) {
  return (
    <Container fluid className="content-grid-template">
      <div className="content-grid-header">
        <Title variant="h1" className="content-grid-title">
          {title}
        </Title>
        {subtitle && (
          <Text variant="p" className="content-grid-subtitle">
            {subtitle}
          </Text>
        )}
      </div>
      
      <Container>
        {items.length > 0 ? (
          <Row className="content-grid-container">
            {items.map((item, index) => (
              <Col key={item.id || index} lg={columns.lg} xl={columns.xl} className="mb-4">
                {renderItem(item)}
              </Col>
            ))}
          </Row>
        ) : (
          <div className="content-grid-empty">
            <Title variant="h3">{emptyMessage}</Title>
            <Text variant="p">{emptyDescription}</Text>
          </div>
        )}
      </Container>
    </Container>
  );
}

export default ContentGrid;