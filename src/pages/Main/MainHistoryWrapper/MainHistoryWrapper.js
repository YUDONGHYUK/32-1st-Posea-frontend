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
        <video width="100%" autoPlay muted loop>
          <source src="images/mainVideo.mp4" />
        </video>
      </div>
    </div>
  </section>
);

export default MainHistoryWrapper;
