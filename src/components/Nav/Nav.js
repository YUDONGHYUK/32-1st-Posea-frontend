import React, { useEffect, useState } from 'react';
import GnbItem from './GnbItem/GnbItem';
import './Nav.scss';

const Nav = () => {
  const [menuClicked, setMenuClicked] = useState({});
  const [lastClickedMenu, setLastClickedMenu] = useState(null);
  const [navListData, setNavListData] = useState([]);

  useEffect(() => {
    fetch('/data/navListData.json')
      .then(res => res.json())
      .then(data => {
        setNavListData(data);
      });
  }, []);

  const onGnbButtonClick = e => {
    document.body.classList.add('stop-scroll');

    setMenuClicked({
      [e.target.name]: true,
    });

    setLastClickedMenu(e.target.name);
  };

  const onGnbCloseButtonClick = e => {
    document.body.classList.remove('stop-scroll');

    setMenuClicked({});
    setLastClickedMenu(null);
  };

  return (
    <nav className="gnb">
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

        {lastClickedMenu && (
          <li className="gnbItem">
            <button
              className="gnbItemTitle"
              type="button"
              onClick={onGnbCloseButtonClick}
            >
              닫기
            </button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Nav;
