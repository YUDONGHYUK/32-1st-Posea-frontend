import React from 'react';
import './CarouselIntro.scss';

const CarouselIntro = ({ category }) => {
  const {
    categories: { category_name, category_subdescription },
    products,
  } = category;

  return (
    <div className="carouselIntro">
      <h3 className="carouselIntroTitle">{category_name}</h3>
      <p className="carouselIntroDesc">{category_subdescription}</p>
      <div>
        <span className="carouselIntroLinkText">
          {category_name} 모두 보기 ({products.length})
        </span>
        <i className="fa-solid fa-arrow-right" />
      </div>
    </div>
  );
};

export default CarouselIntro;
