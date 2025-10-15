import React from 'react';
import { Badge } from 'react-bootstrap';
import '../../styles/atoms/Badge.css'; 

function CategoryBadge({ category }) {
  return (
    <div className="proyect-category">
      <Badge className="category-badge">
        {category}
      </Badge>
    </div>
  );
}

export default CategoryBadge;