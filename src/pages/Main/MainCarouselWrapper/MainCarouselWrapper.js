import React from 'react';
import './MainCarouselWrapper.scss';

const MainCarouselWrapper = () => (
  <section className="mainCarouselWrapper">
    <div className="mainCarousel">
      <div className="carouselItemList">
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
      </div>
      <div className="carouselPaginationBar">
        <div className="carouselInnerPaginationBar" />
      </div>
    </div>
  </section>
);

export default MainCarouselWrapper;
