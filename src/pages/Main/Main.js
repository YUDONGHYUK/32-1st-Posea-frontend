import React from 'react';
import './Main.scss';
import MainBannerWrapper from './MainBannerWrapper/MainBannerWrapper';
import MainCarouselWrapper from './MainCarouselWrapper/MainCarouselWrapper';
import MainHistoryWrapper from './MainHistoryWrapper/MainHistoryWrapper';

const Main = () => {
  return (
    <>
      <MainBannerWrapper />
      <MainCarouselWrapper />
      <MainHistoryWrapper />
    </>
  );
};

export default Main;
