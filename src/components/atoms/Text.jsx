import React from 'react';
import '../../styles/atoms/Text.css';

function Text({ variant = "p", children, className = "" }) {
  const Component = variant;
  
  return (
    <Component className={`text-${variant} ${className}`}>
      {children}
    </Component>
  );
}

export default Text;