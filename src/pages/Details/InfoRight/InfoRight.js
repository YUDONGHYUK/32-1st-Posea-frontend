import React from 'react';
import InfoTitle from '../InfoTitle/InfoTitle';
import InfoDetails from '../InfoDetails/InfoDetails';

const InfoRight = ({ productInfo, onModalShowBtnClick }) => {
  const { name, detail } = productInfo;

  return (
    <div className="infoRight">
      <InfoTitle infoName={name} infoExplain={detail} />

      <InfoDetails
        productInfo={productInfo}
        onModalShowBtnClick={onModalShowBtnClick}
      />
    </div>
  );
};

export default InfoRight;
