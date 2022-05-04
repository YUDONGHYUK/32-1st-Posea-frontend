import React from 'react';
import './MainCarouselItem.scss';

const MainCarouselItem = ({ item: { product_images, name, skin_type } }) => (
  <div className="carouselItemContainer">
    <img className="carouselItemImg" alt="carouselItem" src={product_images} />
    <span className="itemName">{name}</span>
    <span className="itemDescription">{skin_type.join(', ')}</span>
  </div>
);

export default MainCarouselItem;
