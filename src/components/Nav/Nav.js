import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import GnbItem from './GnbItem/GnbItem';
import Login from '../../pages/Login/Login';
import './Nav.scss';
import Cart from '../Cart/Cart';

const Nav = () => {
  const [menuClicked, setMenuClicked] = useState({
    lastClickedMenu: null,
  });
  const [navListData, setNavListData] = useState([]);
  const [scrollY, setScrollY] = useState(0);
  const [isScrollingUp, setIsScrollingUp] = useState(true);
  const [toggleModal, setToggleModal] = useState(false);

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

  const handleModal = e => {
    if (toggleModal && e.target === e.currentTarget) {
      setToggleModal(false);
      document.body.style.overflow = 'unset';
    }
    if (!toggleModal && e.target === e.currentTarget) {
      setToggleModal(true);
      document.body.style.overflow = 'hidden';
    }
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
        <li className="gnbItems">
          <ul className="gnbItemsList">
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
          </ul>

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
        </li>

        <li className="gnbItems">
          <ul className="gnbItemsList">
            <li className="gnbItem">
              <Login />
            </li>
            <li className="gnbItem">
              <button onClick={handleModal}>카트</button>
              <Cart toggleModal={toggleModal} handleModal={handleModal} />
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
