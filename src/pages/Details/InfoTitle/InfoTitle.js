import React from 'react';
import { Route, Link } from 'react-router-dom';
import Main from '../../Main/Main';

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
