import React from 'react';
import MainContext from '../MainContext/MainContext';
import './MainBannerWrapper.scss';

const MainBannerWrapper = () => (
  <section className="mainBannerWrapper">
    <img
      className="mainBannerImg"
      alt="main-imamge"
      src="https://images.ctfassets.net/u1nb1km7t5q7/4deARd4ivmZtU1VxNY7tsF/dbbef6e50700da136af888273a9f0185/Aesop_Fragrance_2022_Web_Homepage_Primary_Full_Bleed_Desktop_L_2880x1044px.jpg"
    />
    <div className="mainBannerContent">
      <MainContext />
    </div>
  </section>
);

export default MainBannerWrapper;
