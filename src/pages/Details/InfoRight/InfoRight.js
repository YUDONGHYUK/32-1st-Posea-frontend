import React from 'react';
import InfoTitle from '../InfoTitle/InfoTitle';
import InfoDetails from '../InfoDetails/InfoDetails';

const InfoRight = ({
  productInfo: { title, description, details },
  onModalShowBtnClick,
}) => {
  // const { title, description, details } = productInfo;

  //구조분해 할당 필요
  return (
    <div className="infoRight">
      <InfoTitle infoName={title} infoExplain={description} />

      <InfoDetails
        details={details}
        onModalShowBtnClick={onModalShowBtnClick}
      />

      <button className="btn">
        카트에 추가하기 - <span>₩27,000</span>
      </button>
    </div>
  );
};

export default InfoRight;
