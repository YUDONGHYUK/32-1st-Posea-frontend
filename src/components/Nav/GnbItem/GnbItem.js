import React from 'react';
import GnbItemContent from '../GnbItemContent/GnbItemContent';

// // onGnbButtonClick={onGnbButtonClick}
// isClicked={menuClicked[navItem.name]}
// list={navItem.info}
// className={navItem.className}
// imgSrc={navItem.imgSrc}

const GnbItem = ({ onGnbButtonClick, isClicked, item }) => {
  const { name, title, list, imgSrc } = item;

  return (
    <li className="gnbItem">
      <button
        className="gnbItemTitle"
        type="button"
        name={name}
        onClick={() => {
          onGnbButtonClick('para', 'meter');
        }}
      >
        {title}
      </button>
      <GnbItemContent
        isClicked={isClicked}
        list={list}
        name={name}
        imgSrc={imgSrc}
      />
    </li>
  );
};

export default GnbItem;
