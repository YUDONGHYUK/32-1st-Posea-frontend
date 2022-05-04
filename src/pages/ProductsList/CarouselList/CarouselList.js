import React from 'react';
import CarouselItem from '../CarouselItem/CarouselItem';
import './CarouselList.scss';

const CarouselList = ({ list, carouselListRef }) => {
  return (
    <ul className="carouselList" ref={carouselListRef}>
      {list.map(product => (
        <CarouselItem key={product.id} product={product} />
      ))}
    </ul>
  );
};

export default CarouselList;
