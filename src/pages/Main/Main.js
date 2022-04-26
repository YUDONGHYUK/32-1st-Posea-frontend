import React from 'react';
import './Main.scss';
import MainBannerWrapper from './MainBannerWrapper/MainBannerWrapper';
import MainCarouselWrapper from './MainCarouselWrapper/MainCarouselWrapper';
import MainHistoryWrapper from './MainHistoryWrapper/MainHistoryWrapper';
import MainReleaseWrapper from './MainReleaseWrapper/MainReleaseWrapper';

const Main = () => {
  return (
    <>
      <MainBannerWrapper />
      <MainCarouselWrapper />
      <MainHistoryWrapper />
      <MainReleaseWrapper />
      <header className="mainTransitionHeader">탁월한 셀렉션</header>
      <MainCarouselWrapper />
    </>
  );
};

export default Main;
