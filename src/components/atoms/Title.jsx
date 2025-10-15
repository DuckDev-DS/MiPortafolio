import React from 'react';
import '../../styles/atoms/Title.css';

function Title({ variant = "h1", children, className = "" }) {
  const Component = variant;
  
  return (
    <Component className={`title-${variant} ${className}`}>
      {children}
    </Component>
  );
}

export default Title;