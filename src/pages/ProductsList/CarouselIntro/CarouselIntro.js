import React from 'react';
import { Link } from 'react-router-dom';
import './CarouselIntro.scss';

const CarouselIntro = ({ category }) => {
  const { title, desc, link, list } = category;

  return (
    <div className="carouselIntro">
      <h3 className="carouselIntroTitle">{title}</h3>
      <p className="carouselIntroDesc">{desc}</p>
      <Link to={link} className="carouselIntroLink">
        <span className="carouselIntroLinkText">
          {title} 모두 보기 ({list.length})
        </span>
        <i className="fa-solid fa-arrow-right" />
      </Link>
    </div>
  );
};

export default CarouselIntro;
