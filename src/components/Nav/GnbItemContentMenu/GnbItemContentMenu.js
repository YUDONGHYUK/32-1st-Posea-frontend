import React from 'react';
import { Link } from 'react-router-dom';

const GnbItemContentMenu = ({ list, title }) => {
  return (
    <ul className="gnbItemContentMenu">
      <li className="gnbItemContentItem">
        <h2 className="gnbItemContentMenuTitle">{title}</h2>
      </li>
      {list.map(item => (
        <li key={item.id} className="gnbItemContentItem">
          <Link to={item.link}>
            <span>{item.title}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default GnbItemContentMenu;
