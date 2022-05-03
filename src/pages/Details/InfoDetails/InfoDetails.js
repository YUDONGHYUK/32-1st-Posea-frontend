import React, { useEffect, useState } from 'react';
import InfoDetailsContent from '../InfoDetailsContent/InfoDetailsContent';

const InfoDetails = ({ productInfo, onModalShowBtnClick }) => {
  const { skintype, sense, ingredient_name, size, price } = productInfo;

  return (
    // <div className="information productInfo">
    //   <InfoDetailsContent />
    // </div>

    <div className="information productInfo">
      <InfoDetailsContent
        title={'피부 타입'}
        desc={skintype && skintype.join(', ')}
        onModalShowBtnClick={onModalShowBtnClick}
      />
      <InfoDetailsContent
        title={'사용감'}
        desc={sense}
        onModalShowBtnClick={onModalShowBtnClick}
      />
      <InfoDetailsContent
        title={'주요성분'}
        desc={ingredient_name}
        onModalShowBtnClick={onModalShowBtnClick}
      />
      <InfoDetailsContent
        title={'사이즈'}
        desc={size && size.map(el => el + 'mL').join(', ')}
        onModalShowBtnClick={onModalShowBtnClick}
      />

      <button className="btn">
        카트에 추가하기 -{' '}
        <span>₩{price && parseInt(price[0]).toLocaleString()}</span>
      </button>
    </div>
  );
};

export default InfoDetails;
