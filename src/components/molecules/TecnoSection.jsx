import React from 'react';
import '../../styles/atoms/Badge.css'
import '../../styles/molecules/TecnoSection.css';

function TecnoSection({ technologies }) {
  return (
    <div className="proyect-technologies">
      <h6>Tecnologías:</h6>
      <div className="technologies-tags">
        {technologies.map((tech, index) => (
          <span key={index} className="tech-tag">
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}

export default TecnoSection;