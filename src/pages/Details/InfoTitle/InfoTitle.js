import React from 'react';
import { Link } from 'react-router-dom';

const InfoTitle = ({ infoName, infoExplain }) => {
  return (
    <div className="InfoTitle">
      <div className="infoHeader">
        <Link to="/Main">스킨</Link> • <Link to="/Main">클렌저</Link>
      </div>
      <div className="infoName">{infoName}</div>
      <div className="infoExplain">{infoExplain}</div>
    </div>
  );
};

export default InfoTitle;
