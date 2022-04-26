import React, { useRef } from 'react';
import './MainCarouselWrapper.scss';

const MainCarouselWrapper = () => {
  const itemListRef = useRef();
  const paginationBarRef = useRef();
  const carouseLeftBtn = useRef();
  const carouseRightBtn = useRef();

  const handleCarouselBtn = e => {
    if (e.type === 'mouseover') {
      carouseLeftBtn.current.style.transform = 'translateX(100%)';
      carouseRightBtn.current.style.transform = 'translateX(-100%)';
    } else if (e.type === 'mouseleave') {
      carouseLeftBtn.current.style.transform = 'translateX(0)';
      carouseRightBtn.current.style.transform = 'translateX(0)';
    }
  };

  const moveCarouselLeft = () => {
    const itemListRec = itemListRef.current.getBoundingClientRect();
    const itemListX = itemListRec.x;

    if (itemListX >= 0) {
      itemListRef.current.style.transform = `translateX(${
        400 * Math.floor(itemListX / 400)
      }px)`;
      paginationBarRef.current.style.transform = `translateX(${
        100 * Math.floor(itemListX / 400)
      }%)`;
    } else if (itemListX < 0) {
      itemListRef.current.style.transform = `translateX(${
        400 * Math.floor(itemListX / 400 + 1)
      }px)`;
      paginationBarRef.current.style.transform = `translateX(${
        -100 * Math.floor(itemListX / 400 + 1)
      }%)`;
    }
  };

  const moveCarouselRight = () => {
    const itemListRec = itemListRef.current.getBoundingClientRect();
    const itemListX = itemListRec.x;

    if (itemListX <= -1600) {
      itemListRef.current.style.transform = `translateX(${
        400 * Math.ceil(itemListX / 400)
      }px)`;
      paginationBarRef.current.style.transform = `translateX(${
        -100 * Math.ceil(itemListX / 400)
      }%)`;
    } else if (itemListX >= -1600) {
      itemListRef.current.style.transform = `translateX(${
        400 * Math.ceil(itemListX / 400 - 1)
      }px)`;
      paginationBarRef.current.style.transform = `translateX(${
        -100 * Math.ceil(itemListX / 400 - 1)
      }%)`;
    }
  };

  return (
    <section className="mainCarouselWrapper">
      <div className="mainCarousel">
        <div
          ref={itemListRef}
          className="carouselItemList"
          onMouseOver={handleCarouselBtn}
          onMouseLeave={handleCarouselBtn}
        >
          {/* 1st item */}
          <div className="carouselItemContainer">
            <img
              className="carouselItemImg"
              alt="carouselItem"
              src="https://images.ctfassets.net/u1nb1km7t5q7/61UwjoBL7R6dHstLKSZIKx/dd5dd3a75b6fab0df57b3486354cee5f/Aesop_Tacit_Eau_de_Parfum_50mL_Hybris_Large_684x668px.png"
            />
            <span className="itemName">테싯 오 드 퍼퓸</span>
            <span className="itemDescription">상쾌한, 그린, 시트러스향</span>
          </div>
          {/* 2nd item */}
          <div className="carouselItemContainer">
            <img
              className="carouselItemImg"
              alt="carouselItem"
              src="https://images.ctfassets.net/u1nb1km7t5q7/61UwjoBL7R6dHstLKSZIKx/dd5dd3a75b6fab0df57b3486354cee5f/Aesop_Tacit_Eau_de_Parfum_50mL_Hybris_Large_684x668px.png"
            />
            <span className="itemName">테싯 오 드 퍼퓸</span>
            <span className="itemDescription">상쾌한, 그린, 시트러스향</span>
          </div>
          {/* 3rd item */}
          <div className="carouselItemContainer">
            <img
              className="carouselItemImg"
              alt="carouselItem"
              src="https://images.ctfassets.net/u1nb1km7t5q7/61UwjoBL7R6dHstLKSZIKx/dd5dd3a75b6fab0df57b3486354cee5f/Aesop_Tacit_Eau_de_Parfum_50mL_Hybris_Large_684x668px.png"
            />
            <span className="itemName">테싯 오 드 퍼퓸</span>
            <span className="itemDescription">상쾌한, 그린, 시트러스향</span>
          </div>
          {/* 4th item */}
          <div className="carouselItemContainer">
            <img
              className="carouselItemImg"
              alt="carouselItem"
              src="https://images.ctfassets.net/u1nb1km7t5q7/61UwjoBL7R6dHstLKSZIKx/dd5dd3a75b6fab0df57b3486354cee5f/Aesop_Tacit_Eau_de_Parfum_50mL_Hybris_Large_684x668px.png"
            />
            <span className="itemName">테싯 오 드 퍼퓸</span>
            <span className="itemDescription">상쾌한, 그린, 시트러스향</span>
          </div>
          {/* 5th item */}
          <div className="carouselItemContainer">
            <img
              className="carouselItemImg"
              alt="carouselItem"
              src="https://images.ctfassets.net/u1nb1km7t5q7/61UwjoBL7R6dHstLKSZIKx/dd5dd3a75b6fab0df57b3486354cee5f/Aesop_Tacit_Eau_de_Parfum_50mL_Hybris_Large_684x668px.png"
            />
            <span className="itemName">테싯 오 드 퍼퓸</span>
            <span className="itemDescription">상쾌한, 그린, 시트러스향</span>
          </div>
          {/* 6th item */}
          <div className="carouselItemContainer">
            <img
              className="carouselItemImg"
              alt="carouselItem"
              src="https://images.ctfassets.net/u1nb1km7t5q7/61UwjoBL7R6dHstLKSZIKx/dd5dd3a75b6fab0df57b3486354cee5f/Aesop_Tacit_Eau_de_Parfum_50mL_Hybris_Large_684x668px.png"
            />
            <span className="itemName">테싯 오 드 퍼퓸</span>
            <span className="itemDescription">상쾌한, 그린, 시트러스향</span>
          </div>
          {/* 7th item */}
          <div className="carouselItemContainer">
            <img
              className="carouselItemImg"
              alt="carouselItem"
              src="https://images.ctfassets.net/u1nb1km7t5q7/61UwjoBL7R6dHstLKSZIKx/dd5dd3a75b6fab0df57b3486354cee5f/Aesop_Tacit_Eau_de_Parfum_50mL_Hybris_Large_684x668px.png"
            />
            <span className="itemName">테싯 오 드 퍼퓸</span>
            <span className="itemDescription">상쾌한, 그린, 시트러스향</span>
          </div>
        </div>
        <div className="carouselPaginationBar">
          <div ref={paginationBarRef} className="carouselInnerPaginationBar" />
        </div>
        <div className="carouselBtns">
          <button
            ref={carouseLeftBtn}
            className="carouselLeftBtn"
            onClick={moveCarouselLeft}
            onMouseOver={handleCarouselBtn}
            onMouseLeave={handleCarouselBtn}
          >
            <i className="fa-solid fa-angle-left" />
          </button>
          <button
            ref={carouseRightBtn}
            className="carouselRightBtn"
            onClick={moveCarouselRight}
            onMouseOver={handleCarouselBtn}
            onMouseLeave={handleCarouselBtn}
          >
            <i className="fa-solid fa-angle-right" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default MainCarouselWrapper;
