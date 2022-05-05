import React from 'react';

const InfoUsage = ({ productInfo: { usage, texture, scent } }) => {
  return (
    <div className="information usageInfo">
      <div className="infoContent">
        <h3 className="title">사용량</h3>
        <p className="text">{usage}</p>
      </div>

      <div className="infoContent">
        <h3 className="title">텍스처</h3>
        <p className="text">{texture}</p>
      </div>

      <div className="infoContent">
        <h3 className="title">향</h3>
        <p className="text">{scent && scent.join(', ')}</p>
      </div>
    </div>
  );
};

export default InfoUsage;
