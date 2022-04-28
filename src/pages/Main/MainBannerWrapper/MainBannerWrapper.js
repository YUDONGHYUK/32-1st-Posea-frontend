import React from 'react';
import SectionContext from '../MainContext/SectionContext';
import './MainBannerWrapper.scss';

const MainBannerWrapper = () => (
  <section className="mainBannerWrapper">
    <div className="mainBannerImgContainer">
      <img
        className="mainBannerImg"
        alt="main-imamge"
        src="https://images.unsplash.com/photo-1614859475299-814a09cd2e79?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
      />
    </div>
    <div className="mainBannerContent">
      <SectionContext />
    </div>
  </section>
);

export default MainBannerWrapper;
