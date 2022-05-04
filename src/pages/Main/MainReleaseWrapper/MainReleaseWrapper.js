import React from 'react';
import SectionContext from '../MainContext/SectionContext';
import './MainReleaseWrapper.scss';

const MainReleaseWrapper = () => (
  <section className="mainReleaseWrapper">
    <div className="mainRelease">
      <div className="mainReleaseImgBox">
        <img
          className="mainReleaseImg"
          alt="releaseImg"
          src="images/mainRelease.jpg"
          // src="https://www.aesop.com/u1nb1km7t5q7/FFQtHLIDFtqckp6PILx1u/f3f47abb300aa878ed95ba182b71c744/Aesop_Rick_Owens_2022_Web_Homepage_Secondary_1_Mid_Desktop_2560x1440px.jpg"
        />
      </div>

      <div className="mainReleaseContent">
        <SectionContext />
      </div>
    </div>
  </section>
);

export default MainReleaseWrapper;
