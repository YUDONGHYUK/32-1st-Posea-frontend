// 1. 캐러셀 리스트 위치(carousel) 알려주기
// 2. 캐러셀 리스트 감싸는 div(wrapperCarousel)에 overflow hidden 주기

import React, { useState, useRef, useEffect } from 'react';
import './Carousel.scss';

export default function Carousel() {
  const [slideState, setSlideState] = useState(0);
  const maxSlides = 3;

  const slideRef = useRef();

  const handleRight = () => {
    if (slideState >= maxSlides) {
      setSlideState(0);
    } else {
      setSlideState(slideState + 1);
    }
  };

  const handleLeft = () => {
    if (slideState === 0) {
      setSlideState(maxSlides);
    } else {
      setSlideState(slideState - 1);
    }
  };

  useEffect(() => {
    slideRef.current.style.transition = 'all 0.5s ease-in-out';
    slideRef.current.style.transition = `translateX(-${slideState}00%)`;
  }, [slideState]);

  return (
    <div className="wrapperCarousel">
      <button onClick={handleRight} className="rightBtn">
        ◁
      </button>
      <button onClick={handleLeft} className="leftBtn">
        ▷
      </button>
      <div className="carouselView">
        <div className="carousel" ref={slideRef}>
          <div className="carouselInner">
            <img
              alt="img1 "
              src="https://www.aesop.com/u1nb1km7t5q7/3nkXHEw4CJAmlgugVWNv3j/6f3c490a7c6b92fc655aae093eb54c7c/Aesop-Skin-Purifying-Facial-Cream-Cleanser-100mL-large.png"
            />
          </div>
          <div className="carouselInner">
            <img
              alt="img2 "
              src="https://www.aesop.com/u1nb1km7t5q7/5f6C19Q6xLutRoJ1tvEYDF/c3632e644b1ce72b71b70d8d34abe57f/Aesop-Skin-Fabulous-Face-Cleanser-100mL-large.png"
            />
          </div>
          <div className="carouselInner">
            <img
              alt="img3"
              src="https://www.aesop.com/u1nb1km7t5q7/vj7h54KpQQ7ha4ZP68aYe/6bfa6f01d7b0e4558b82e23bd956891f/Aesop-Skin-Parsley-Seed-Facial-Cleansing-Oil-200mL-large.png"
            />
          </div>
          <div className="carouselInner">
            <img
              alt="img3"
              src="https://www.aesop.com/u1nb1km7t5q7/vj7h54KpQQ7ha4ZP68aYe/6bfa6f01d7b0e4558b82e23bd956891f/Aesop-Skin-Parsley-Seed-Facial-Cleansing-Oil-200mL-large.png"
            />
          </div>
          <div className="carouselInner">
            <img
              alt="img3"
              src="https://www.aesop.com/u1nb1km7t5q7/vj7h54KpQQ7ha4ZP68aYe/6bfa6f01d7b0e4558b82e23bd956891f/Aesop-Skin-Parsley-Seed-Facial-Cleansing-Oil-200mL-large.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
