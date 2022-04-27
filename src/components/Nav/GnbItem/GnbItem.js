import React from 'react';
import GnbItemContent from '../GnbItemContent/GnbItemContent';
import './GnbItem.scss';

const GnbItem = ({ onGnbButtonClick, isClicked, item }) => {
  const { name, title, list, imgSrc } = item;

  return (
    <li className="gnbItem">
      <button
        className="gnbItemTitle"
        type="button"
        name={name}
        onClick={onGnbButtonClick}
      >
        {title}
      </button>
      <GnbItemContent isClicked={isClicked} list={list} imgSrc={imgSrc} />
    </li>
  );
};

export default GnbItem;
