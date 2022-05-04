import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import GnbItem from './GnbItem/GnbItem';
import './Nav.scss';

const Nav = () => {
  const [menuClicked, setMenuClicked] = useState({
    lastClickedMenu: null,
  });
  const [navListData, setNavListData] = useState([]);
  const [scrollY, setScrollY] = useState(0);
  const [isScrollingUp, setIsScrollingUp] = useState(true);

  useEffect(() => {
    fetch('/data/navListData.json')
      .then(res => res.json())
      .then(data => {
        setNavListData(data);
      });
  }, []);

  const { lastClickedMenu } = menuClicked;

  const detectScrollDirection = e => {
    if (window.scrollY >= 80) {
      e.deltaY > 0 ? setIsScrollingUp(false) : setIsScrollingUp(true);
    }

    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('wheel', detectScrollDirection);
  }, []);

  const onGnbButtonClick = e => {
    document.body.classList.add('stopScroll');

    setMenuClicked({
      lastClickedMenu: e.target.name,
    });
  };

  const onGnbCloseButtonClick = () => {
    document.body.classList.remove('stopScroll');

    setMenuClicked({
      lastClickedMenu: '',
    });
  };

  const checkGnbListClassNames = () => {
    const classNames = [
      'gnbList',
      lastClickedMenu && 'isOpen',
      isScrollingUp ? 'isScrollingUp' : 'navClose',
      scrollY < 160 && 'isAtTop',
    ];

    return classNames.join(' ');
  };

  return (
    <nav className="gnb">
      <Link to="/">
        <h1 className="mainTitle">Pösea</h1>
      </Link>
      <div className={`gnbItemBG ${lastClickedMenu}`}>
        {lastClickedMenu && (
          <Link to="/">
            <h1 className="menuTitle">Pösea</h1>
          </Link>
        )}
      </div>

      <ul className={checkGnbListClassNames()}>
        {navListData &&
          navListData.map(navItem => (
            <GnbItem
              key={navItem.id}
              onGnbButtonClick={onGnbButtonClick}
              onGnbCloseButtonClick={onGnbCloseButtonClick}
              isClicked={lastClickedMenu === navItem.name}
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
