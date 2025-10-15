import React from 'react';
import { Container } from 'react-bootstrap';
import Image from '../components/atoms/Image';
import '../styles/templates/ContentHero.css';

const image = {
    src: '../../public/img/pages/NotFound.webp',
    alt: 'Not Found Image',
}

function NotFound() {
  return (
    <Container className="content-hero-template my-5 d-flex justify-content-center align-items-center">
      <Image src={image.src} alt={image.alt} className="img-fluid" />
    </Container>
  );
}

export default NotFound;