import React from 'react'

export default function Card(props) {
  const { data } = props;
  return (
    <div className="card-container">
      <div className="card">
        <img src={data.image} alt={data.title} className="card-image" />
        <h3 className="card-title">{data.title}</h3>
        <p className="card-description">{data.description}</p>
        <div className="card-price">Price: ${data.price}</div>
      <div className="card-category">Category: {data.category}</div>
    </div>
    </div>
  );
}
