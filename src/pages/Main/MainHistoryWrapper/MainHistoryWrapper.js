import React from 'react';
import SectionContext from '../MainContext/SectionContext';
import './MainHistoryWrapper.scss';

const MainHistoryWrapper = () => (
  <section className="mainHistoryWrapper">
    <div className="mainHistory">
      <div className="mainHistoryContent">
        <SectionContext />
      </div>
      <div className="mainHistoryVideo">
        <video width="100%" autoPlay muted>
          <source src="https://www.aesop.com/u1nb1km7t5q7/3gl0yMLAvnHrdszAOQ7pi/f99c3eadf821ab099290ba8c00babf66/history-of-fragrance-video.mp4" />
        </video>
      </div>
    </div>
  </section>
);

export default MainHistoryWrapper;
