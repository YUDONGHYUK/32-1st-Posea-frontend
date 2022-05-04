import React from 'react';
import './CarouselBtns.scss';

const CarouselBtns = ({ carouselListRef, listLength }) => {
  let carouselMoveCount = 0;

  const onCarouselLeftBtnClick = () => {
    const carouselListRect = carouselListRef.current.getBoundingClientRect();
    const IMG_WIDTH = carouselListRect.width / 3;
    if (carouselMoveCount < listLength && carouselMoveCount > 0) {
      carouselMoveCount--;

      carouselListRef.current.style.transform = `translateX(-${
        IMG_WIDTH * carouselMoveCount
      }px)`;
    }
  };

  const onCarouselRightBtnClick = () => {
    const carouselListRect = carouselListRef.current.getBoundingClientRect();
    const IMG_WIDTH = carouselListRect.width / 3;
    if (carouselMoveCount < listLength - 3 && carouselMoveCount >= 0) {
      carouselMoveCount++;

      carouselListRef.current.style.transform = `translateX(-${
        IMG_WIDTH * carouselMoveCount
      }px)`;
    }
  };

  return (
    <div className="carouselBtns">
      <div className="carouselBtnWrapper left">
        <button
          onClick={onCarouselLeftBtnClick}
          className="carouselBtn leftBtn"
        >
          <i className="fa-solid fa-chevron-left" />
        </button>
      </div>
      <div className="carouselBtnWrapper right">
        <button
          onClick={onCarouselRightBtnClick}
          className="carouselBtn rightBtn"
        >
          <i className="fa-solid fa-chevron-right" />
        </button>
      </div>
    </div>
  );
};

export default CarouselBtns;
