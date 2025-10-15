import React from 'react';
import Text from '../atoms/Text';

function CardBody({ title, description }) {
  return (
    <>
      <Text variant="h5" className="proyect-title">{title}</Text>
      <Text variant="p" className="proyect-description">{description}</Text>
    </>
  );
}

export default CardBody;