import React, { useRef, useState } from 'react';
import MainCarouselItem from '../MainCarouselItem/MainCarouselItem';
import './MainCarouselWrapper.scss';

const IMG_COUNT = 7;
const SHOWN_IMAGE_NUMBER = 4;

const MainCarouselWrapper = ({ itemList }) => {
  const [carouselCount, setCarouselCount] = useState(0);
  const itemListRef = useRef();
  const paginationBarRef = useRef();

  const moveCarouselLeft = () => {
    const nextCarouselCount = carouselCount - 1;

    if (nextCarouselCount >= 0) {
      itemListRef.current.style.transform = `translateX(-${
        nextCarouselCount * (100 / IMG_COUNT)
      }%)`;

      paginationBarRef.current.style.transform = `translateX(${
        nextCarouselCount * 100
      }%)`;

      setCarouselCount(nextCarouselCount);
    }
  };

  const moveCarouselRight = () => {
    const nextCarouselCount = carouselCount + 1;

    if (nextCarouselCount <= IMG_COUNT - SHOWN_IMAGE_NUMBER) {
      itemListRef.current.style.transform = `translateX(-${
        nextCarouselCount * (100 / 7)
      }%)`;

      paginationBarRef.current.style.transform = `translateX(${
        nextCarouselCount * 100
      }%)`;

      setCarouselCount(nextCarouselCount);
    }
  };

  return (
    <section className="mainCarouselWrapper">
      <div className="mainCarousel">
        <div ref={itemListRef} className="carouselItemList">
          {itemList.map(item => (
            <MainCarouselItem key={item.id} item={item} />
          ))}
        </div>
        <div className="carouselBtns">
          <button className="carouselBtn left" onClick={moveCarouselLeft}>
            <i className="fa-solid fa-angle-left" />
          </button>
          <button className="carouselBtn right" onClick={moveCarouselRight}>
            <i className="fa-solid fa-angle-right" />
          </button>
        </div>
        <div className="carouselPaginationBar">
          <div ref={paginationBarRef} className="carouselInnerPaginationBar" />
        </div>
      </div>
    </section>
  );
};

export default MainCarouselWrapper;
