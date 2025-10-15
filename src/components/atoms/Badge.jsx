import React from 'react';
import '../../styles/atoms/Badge.css';

function Badge({ variant = "primary", children, className = "" }) {
  return (
    <span className={`badge badge-${variant} ${className}`}>
      {children}
    </span>
  );
}

export default Badge;