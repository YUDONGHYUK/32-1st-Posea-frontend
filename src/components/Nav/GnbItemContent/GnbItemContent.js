import React from 'react';
import GnbItemContentMenu from '../GnbItemContentMenu/GnbItemContentMenu';
import './GnbItemContent.scss';

const GnbItemContent = ({ isClicked, list, name, imgSrc }) => {
  return (
    <div className={`gnbItemContent ${isClicked && 'isClicked'}`}>
      {list.map(category => {
        return (
          <GnbItemContentMenu
            key={category.id}
            list={category.list}
            title={category.title}
          />
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
