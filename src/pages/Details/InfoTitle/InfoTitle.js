import React from 'react';

const InfoTitle = ({ infoName, infoExplain }) => {
  return (
    <div className="InfoTitle">
      <div className="infoHeader">스킨 • 클렌저</div>
      <div className="infoName">{infoName}</div>
      <div className="infoExplain">{infoExplain}</div>
    </div>
  );
};

export default InfoTitle;
