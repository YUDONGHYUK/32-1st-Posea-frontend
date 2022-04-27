import React, { useEffect, useState } from 'react';
import GnbItem from './GnbItem/GnbItem';
import './Nav.scss';

const Nav = () => {
  const [menuClicked, setMenuClicked] = useState({});
  const [lastClickedMenu, setLastClickedMenu] = useState(null);
  const [navListData, setNavListData] = useState([]);
  const [scrollY, setScrollY] = useState(0);
  const [isScrollingUp, SetIsScrollingUp] = useState(true);

  useEffect(() => {
    fetch('/data/navListData.json')
      .then(res => res.json())
      .then(data => {
        setNavListData(data);
      });
  }, []);

  useEffect(() => {
    const onScroll = () => {
      const currentScrollY = window.scrollY;

      if (scrollY >= 80) {
        scrollY - currentScrollY > 0
          ? SetIsScrollingUp(true)
          : SetIsScrollingUp(false);
      }

      setScrollY(currentScrollY);
    };

    window.addEventListener('scroll', onScroll);
  }, [scrollY]);

  const onGnbButtonClick = e => {
    document.body.classList.add('stopScroll');

    setMenuClicked({
      [e.target.name]: true,
    });

    setLastClickedMenu(e.target.name);
  };

  const onGnbCloseButtonClick = () => {
    document.body.classList.remove('stopScroll');

    setMenuClicked({});
    setLastClickedMenu(null);
  };

  return (
    <nav className="gnb">
      <h1 className="mainTitle">Pösea</h1>
      <div className={`gnbItemBG ${lastClickedMenu}`}>
        {lastClickedMenu && <h1 className="menuTitle">Pösea</h1>}
      </div>

      <ul
        className={`gnbList ${lastClickedMenu && 'isOpen'} ${
          isScrollingUp ? 'isScrollingUp' : 'navClose'
        } ${scrollY < 160 && 'isAtTop'}`}
      >
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
