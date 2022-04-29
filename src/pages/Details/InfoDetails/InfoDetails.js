import React, { useEffect, useState } from 'react';
import InfoDetailsContent from '../InfoDetailsContent/InfoDetailsContent';

const InfoDetails = ({ details }) => {
  return (
    <div className="information productInfo">
      <InfoDetailsContent />
    </div>

    // <div className="information productInfo">
    //   {details &&
    //     details.map(detail => (
    //       <InfoDetailsContent
    //         key={detail.id}
    //         title={detail.title}
    //         desc={detail.desc}
    //       />
    //     ))}
    // </div>
  );
};

export default InfoDetails;
