import React from 'react';
import InfoTitle from '../InfoTitle/InfoTitle';
import InfoDetails from '../InfoDetails/InfoDetails';

const InfoRight = ({ productInfo }) => {
  return (
    <div className="InfoRight">
      <InfoTitle
        infoName={productInfo.title}
        infoExplain={productInfo.description}
      />
      <InfoDetails details={productInfo.details} />
      <button className="btn">
        카트에 추가하기 <span>27,000</span>
      </button>
    </div>
  );
};

export default InfoRight;
