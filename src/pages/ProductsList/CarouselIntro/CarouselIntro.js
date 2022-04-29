import React from 'react';
import { Link } from 'react-router-dom';
import './CarouselIntro.scss';

const CarouselIntro = () => {
  return (
    <div className="carouselIntro">
      <h3 className="carouselIntroTitle">핸드</h3>
      <p className="carouselIntroDesc">
        매일 우리에게 안락함을 선사하는 손은 보살핌을 받을 자격이 충분합니다.
        아로마 클렌저와 밤은 손에 수분과 영양을 공급하고 부드럽게 가꿔줍니다.
      </p>
      <Link to="/" className="carouselIntroLink">
        <span>핸드 모두 보기 (13)</span>
        <i className="fa-solid fa-arrow-right" />
      </Link>
    </div>
  );
};

export default CarouselIntro;
