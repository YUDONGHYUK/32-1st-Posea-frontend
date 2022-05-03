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

      {/* <InfoDetails
        details={details}
        onModalShowBtnClick={onModalShowBtnClick}
      /> */}

      {/* <button className="btn">
        카트에 추가하기 - <span>₩27,000</span>
      </button> */}
    </div>
  );
};

export default InfoRight;
