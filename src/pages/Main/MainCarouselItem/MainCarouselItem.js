import React from 'react';
import './MainCarouselItem.scss';

const MainCarouselItem = ({ item: { product_images, name, skintype } }) => (
  <div className="carouselItemContainer">
    <img className="carouselItemImg" alt="carouselItem" src={product_images} />
    <span className="itemName">{name}</span>
    <span className="itemDescription">{skintype.join(', ')}</span>
  </div>
);

export default MainCarouselItem;
