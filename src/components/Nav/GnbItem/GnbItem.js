import React from 'react';
import GnbItemContent from '../GnbItemContent/GnbItemContent';
import './GnbItem.scss';

const GnbItem = ({ onGnbButtonClick, isClicked, item }) => {
  const { name, title } = item;

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
      <GnbItemContent item={item} isClicked={isClicked} />
    </li>
  );
};

export default GnbItem;
