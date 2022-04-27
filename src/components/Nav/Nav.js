import React, { useState } from 'react';
import GnbItem from './GnbItem/GnbItem';
import { navListData } from './gnbItemContentData';
import './Nav.scss';

const firstData = {};

for (let dataItem of navListData) {
  firstData[dataItem.name] = false;
}

const Nav = () => {
  const [menuClicked, setMenuClicked] = useState(firstData);
  const [lastClickedMenu, setLastClickedMenu] = useState(null);

  const onGnbButtonClick = e => {
    document.body.classList.add('stop-scroll');

    setMenuClicked({
      firstData,
      [e.target.name]: true,
    });

    setLastClickedMenu(e.target.name);
  };

  const onGnbCloseButtonClick = e => {
    document.body.classList.remove('stop-scroll');

    setMenuClicked(firstData);
    setLastClickedMenu(null);
  };

  return (
    <nav className="gnb" onScroll>
      <h1 className="mainTitle">Pösea</h1>
      <div className={`gnbItemBG ${lastClickedMenu}`}>
        {lastClickedMenu && <h1 className="menuTitle">Pösea</h1>}
      </div>

      <ul className={`gnbList ${lastClickedMenu && 'isOpen'}`}>
        {navListData &&
          navListData.map(navItem => (
            <GnbItem
              key={navItem.id}
              onGnbButtonClick={onGnbButtonClick}
              isClicked={menuClicked[navItem.name]}
              item={navItem}
            />
          ))}

        <li className="gnbItem">
          <button
            className="gnbItemTitle"
            type="button"
            onClick={onGnbCloseButtonClick}
          >
            닫기
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
