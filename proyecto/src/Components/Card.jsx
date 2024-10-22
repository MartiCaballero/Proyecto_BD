import React from 'react';

const Card = ({ title, image, onClick }) => {
  return (
    <div className="card" onClick={onClick}>
      <img src={image} alt={title} />
      <h3>{title}</h3>
    </div>
  );
};

export default Card;
