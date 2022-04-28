import React from 'react';
import './MainCarouselItem.scss';

const MainCarouselItem = ({ item: { img, name, description } }) => (
  <div className="carouselItemContainer">
    <img className="carouselItemImg" alt="carouselItem" src={img} />
    <span className="itemName">{name}</span>
    <span className="itemDescription">{description}</span>
  </div>
);

export default MainCarouselItem;
