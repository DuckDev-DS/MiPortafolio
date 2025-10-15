import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import user from '../../data/Users';
import '../../styles/organisms/Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();

  const getSocialIcon = (platform) => {
    const icons = {
      'GitHub': 'bi bi-github',
      'LinkedIn': 'bi bi-linkedin'
    }
    return icons[platform] || 'bi bi-link';
  };

  return (
    <footer className="custom-footer">
      <Container>
        <Row className="footer-top">
          <Col lg={4} className="footer-brand-section">
            <h5 className="footer-brand">{user.personalInfo.name}</h5>
            <p className="footer-description">{user.personalInfo.title}</p>
            <p className="footer-about">{user.personalInfo.philosophy}</p>
          </Col>
          
          <Col lg={4} className="footer-links">
            <h6 className="footer-section-title">
              <i className="bi bi-link-45deg me-2"></i>
              Enlaces Rápidos
            </h6>
            <div className="footer-links-list">
              <Link to="/" className="footer-link">
                <i className="bi bi-house me-2"></i>
                Inicio
              </Link>
              <Link to="/proyects" className="footer-link">
                <i className="bi bi-code-slash me-2"></i>
                Proyectos
              </Link>
              <Link to="/news" className="footer-link">
                <i className="bi bi-newspaper me-2"></i>
                Noticias
              </Link>
              <Link to="/abouts" className="footer-link">
                <i className="bi bi-person me-2"></i>
                Sobre Mí
              </Link>
              <Link to="/contacts" className="footer-link">
                <i className="bi bi-person me-2"></i>
                Contactame
              </Link>
            </div>
          </Col>
          
          <Col lg={4} className="footer-contact">
            <h6 className="footer-section-title">
              <i className="bi bi-envelope me-2"></i>
              Contacto
            </h6>
            <div className="contact-info">
              <p className="contact-item">
                <i className="bi bi-envelope me-2"></i>
                {user.personalInfo.email}
              </p>
              <p className="contact-item">
                <i className="bi bi-phone me-2"></i>
                {user.personalInfo.phone}
              </p>
              {user.personalInfo.location && (
                <p className="contact-item">
                  <i className="bi bi-geo-alt me-2"></i>
                  {user.personalInfo.location}
                </p>
              )}
            </div>
          </Col>
        </Row>

        <hr className="footer-divider" />

        <Row className="footer-bottom">
          <Col md={6} className="footer-copyright text-center text-ms-start">
            <p>
              <i className="bi bi-c-circle me-1"></i>
              {currentYear} {user.personalInfo.name}. Todos los derechos reservados.
            </p>
          </Col>
          <Col md={6} className="footer-social text-center text-md-end">
            <div className="social-links">
              {user.socialLinks.map((social, index) => (
                <a 
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label={social.name}
                  title={social.name}
                >
                  <i className={getSocialIcon(social.name)}></i>
                </a>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;