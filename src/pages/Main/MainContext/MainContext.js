import React from 'react';
import './MainContext.scss';

const MainContext = props => (
  <div className="mainBannerInnerWrapper">
    <span className="InnerWrapperHeader text1">
      호기심으로 물든 일곱 가지 아로마
    </span>
    <span className="InnerWrapperHeader text2">몸과 마음에 머무는 아로마</span>
    <p className="innerWrapperParagraph">
      자아와 감각을 깨우는 아로마의 이솝 오 드 퍼퓸은 조향에 대한 일반적인
      관행을 따르지 않는 미묘한 차이의 접근법으로 만들어집니다.
    </p>
    <a href="/">
      <div className="InnerLinkWrapper">
        <span>향수 보기</span>
        <i className="fa-solid fa-arrow-right" />
      </div>
    </a>
  </div>
);

export default MainContext;
