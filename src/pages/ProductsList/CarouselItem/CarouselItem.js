import React from 'react';

const CarouselItem = ({ product }) => {
  const { imgSrc, title, size, price } = product;

  return (
    <li className="carouselItem">
      <img alt="d" src={imgSrc} className="d" />
      <h4>{title}</h4>
      <div>
        <span>{size.length > 1 && `${size.length} 사이즈 / `}</span>
        <span>&#8361; {price.toLocaleString()} 원부터</span>
      </div>
    </li>
  );
};

export default CarouselItem;
