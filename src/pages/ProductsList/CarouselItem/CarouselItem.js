import React from 'react';
import { useNavigate } from 'react-router-dom';
import './CarouselItem.scss';

const CarouselItem = ({ product }) => {
  const { id, product_name, product_images, product_size, product_price } =
    product;

  const navigate = useNavigate();

  const onClick = () => {
    navigate(`/products/details/${id}`);
  };

  return (
    <li className="carouselItem" onClick={onClick}>
      <div className="carouselItemWrapper">
        <img
          alt={`${product_name} 구매하러 가기`}
          src={product_images}
          className="carouselItemImg"
        />
        <h4 className="carouselItemTitle">{product_name}</h4>
        <div className="carouselItemContent">
          <span>
            {product_size.length > 1 && `${product_size.length} 사이즈 / `}
          </span>
          <span>
            &#8361; {parseInt(product_price[0]).toLocaleString()} 원
            {`${product_size.length > 1 ? '부터' : ''}`}
          </span>
        </div>
      </div>
    </li>
  );
};

export default CarouselItem;
