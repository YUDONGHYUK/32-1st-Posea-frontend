import React, { useRef } from 'react';
import MainCarouselItem from '../MainCarouselItem/MainCarouselItem';
import './MainCarouselWrapper.scss';

const IMG_WIDTH = 410;
const IMG_COUNT = 7;
const SHOWN_IMAGE_NUMBER = Math.floor((window.innerWidth - 80) / IMG_WIDTH);

const MainCarouselWrapper = ({ itemList }) => {
  const itemListRef = useRef();
  const paginationBarRef = useRef();

  paginationBarRef.current &&
    (paginationBarRef.current.style.width = `${
      100 / (IMG_COUNT - SHOWN_IMAGE_NUMBER)
    }%`);

  const moveCarouselLeft = () => {
    const itemListRec = itemListRef.current.getBoundingClientRect();
    const itemListX = itemListRec.x;

    if (itemListX < 0) {
      itemListRef.current.style.transform = `translateX(${
        IMG_WIDTH * Math.floor(itemListX / IMG_WIDTH + 1)
      }px)`;
      paginationBarRef.current.style.transform = `translateX(${
        -100 * Math.floor(itemListX / IMG_WIDTH + 1)
      }%)`;
    }
  };

  const moveCarouselRight = () => {
    const itemListRec = itemListRef.current.getBoundingClientRect();
    const itemListX = itemListRec.x;

    if (itemListX > -(IMG_WIDTH * (IMG_COUNT - SHOWN_IMAGE_NUMBER))) {
      itemListRef.current.style.transform = `translateX(${
        IMG_WIDTH * Math.ceil(itemListX / IMG_WIDTH - 1)
      }px)`;
      paginationBarRef.current.style.transform = `translateX(${
        -100 * Math.ceil(itemListX / IMG_WIDTH - 1)
      }%)`;
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
