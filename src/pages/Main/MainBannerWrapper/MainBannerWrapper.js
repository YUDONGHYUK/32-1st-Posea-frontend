import React from 'react';
import SectionContext from '../MainContext/SectionContext';
import './MainBannerWrapper.scss';

const MainBannerWrapper = () => (
  <section className="mainBannerWrapper">
    <div className="mainBannerImgContainer">
      <div className="mainBannerLeft" />
      <img
        className="mainBannerImg"
        alt="main-imamge"
        src="/images/mainBanner.jpg"
      />
    </div>
    <div className="mainBannerContent">
      <SectionContext />
    </div>
  </section>
);

export default MainBannerWrapper;
