import React from 'react';
import GnbItemContentMenu from '../GnbItemContentMenu/GnbItemContentMenu';
import './GnbItemContent.scss';

const GnbItemContent = ({ item, isClicked, onGnbCloseButtonClick }) => {
  const { title, list, imgSrc } = item;

  return (
    <div className={`gnbItemContent ${isClicked && 'isClicked'}`}>
      {list.map(subCategory => {
        const { list, categoryTitle } = subCategory;

        return (
          <GnbItemContentMenu
            key={subCategory.id}
            categoryTitle={categoryTitle}
            list={list}
            title={title}
            link={item.id}
            onGnbCloseButtonClick={onGnbCloseButtonClick}
          />
        );
      })}

      <img alt={`${title}`} src={imgSrc} className="gnbItemContentCover" />
    </div>
  );
};

export default GnbItemContent;
