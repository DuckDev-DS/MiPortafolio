import React from 'react';
import '../../styles/molecules/FeaturesList.css';

function FeaturesList({ features }) {
  return (
    <div className="proyect-features">
      <h6>Características:</h6>
      <ul className="features-list">
        {features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
    </div>
  );
}

export default FeaturesList;