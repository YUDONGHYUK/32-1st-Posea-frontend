import React from 'react';
import InfoTitle from '../InfoTitle/InfoTitle';
import InfoDetails from '../InfoDetails/InfoDetails';

const InfoRight = ({ productInfo, onModalShowBtnClick, addCart }) => {
  const { name, detail } = productInfo;

  return (
    <div className="infoRight">
      <InfoTitle infoName={name} infoExplain={detail} />

      <InfoDetails
        productInfo={productInfo}
        onModalShowBtnClick={onModalShowBtnClick}
        addCart={addCart}
      />
    </div>
  );
};

export default InfoRight;
