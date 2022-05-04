import React, { useState, useRef, useEffect } from 'react';
import './Carousel.scss';

const Carousel = ({ isViewMove }) => {
  const [slideState, setSlideState] = useState(0);
  const IMG_MAX = 3;
  const IMG_WIDTH = 400;
  const slideRef = useRef();

  const handleRight = () => {
    if (slideState >= IMG_MAX) {
      setSlideState(0);
    } else {
      setSlideState(slideState + 1);
    }
  };

  const handleLeft = () => {
    if (slideState === 0) {
      setSlideState(IMG_MAX);
    } else {
      setSlideState(slideState - 1);
    }
  };

  useEffect(() => {
    slideRef.current.style.transition = 'all 0.5s ease-in-out';
    slideRef.current.style.transform = `translateX(-${slideState * 427}px)`;
  }, [slideState]);

  return (
    <div className="wrapperCarousel">
      <button onClick={handleLeft} className="leftBtn">
        ◀︎
      </button>
      <button onClick={handleRight} className="rightBtn">
        ►
      </button>
      <div className="carouselView">
        <div
          className={`carouselImgs ${isViewMove && 'carouselMove'}`}
          ref={slideRef}
        >
          <div className="imgsTitle">함께 사용하기 좋은 제품</div>
          <div className="carouselInner">
            <img
              alt="img1 "
              src="https://user-images.githubusercontent.com/100352385/166410547-4af69562-e739-4488-a21d-c34345a23cd5.png"
            />
            <p className="carouselInnerTitle">파슬리 씨드 페이셜 클렌징 오일</p>
            <p className="carouselInnerDesc">특히 건성,민감성 피부에 이상적</p>
          </div>
          <div className="carouselInner">
            <img
              alt="img2 "
              src="https://user-images.githubusercontent.com/100352385/166410534-c10721cc-4f9e-4c79-aca4-5be6845abf02.png"
            />
            <p className="carouselInnerTitle">파슬리 씨드 페이셜 클렌징 오일</p>
            <p className="carouselInnerDesc">특히 건성,민감성 피부에 이상적</p>
          </div>
          <div className="carouselInner">
            <img
              alt="img3"
              src="https://user-images.githubusercontent.com/100352385/166410538-f5e544e3-9f68-4324-9e38-ed4284ab68c9.png"
            />
            <p className="carouselInnerTitle">파슬리 씨드 페이셜 클렌징 오일</p>
            <p className="carouselInnerDesc">특히 건성,민감성 피부에 이상적</p>
          </div>
          <div className="carouselInner">
            <img
              alt="img4"
              src="https://user-images.githubusercontent.com/100352385/166410539-84830714-8dbf-4dce-902c-1140fa565973.png"
            />
            <p className="carouselInnerTitle">파슬리 씨드 페이셜 클렌징 오일</p>
            <p className="carouselInnerDesc">특히 건성,민감성 피부에 이상적</p>
          </div>
          <div className="carouselInner">
            <img
              alt="img5"
              src="https://user-images.githubusercontent.com/100352385/166410540-113a921f-0623-4982-a292-34c51e1bf4ac.png"
            />
            <p className="carouselInnerTitle">파슬리 씨드 페이셜 클렌징 오일</p>
            <p className="carouselInnerDesc">특히 건성,민감성 피부에 이상적</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
