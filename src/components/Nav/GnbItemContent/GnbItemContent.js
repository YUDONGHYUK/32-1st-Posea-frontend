import React from 'react';
import GnbItemContentMenu from '../GnbItemContentMenu/GnbItemContentMenu';
import './GnbItemContent.scss';

const GnbItemContent = ({ isClicked, list, imgSrc }) => {
  return (
    <div className={`gnbItemContent ${isClicked && 'isClicked'}`}>
      {list.map(({ id, list, title }) => {
        return (
          <GnbItemContentMenu key={id} id={id} list={list} title={title} />
        );
      })}

      <img
        alt="cover of Skin Care"
        src={imgSrc}
        className="gnbItemContentCover"
      />
    </div>
  );
};

export default GnbItemContent;
