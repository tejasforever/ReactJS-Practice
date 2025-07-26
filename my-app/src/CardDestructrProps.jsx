
// CardDestructrProps: Card component using destructured props
// Demonstrates how to destructure props in the function parameter for cleaner code
// You can use this as a reference for prop destructuring in React components
import React from 'react';

export default function CardDestructrProps({ data, index }) {
  // Renders a card with image, title, description, and price
  return (
    <div className="card-container">
      <div className="card">
        <img src={data.image} alt={data.title} className="card-image" />
        <h3 className="card-title">{data.title}</h3>
        <p className="card-description">{data.description}</p>
        <div className="card-price">Price: ${data.price}</div>
      </div>
    </div>
  );
}
