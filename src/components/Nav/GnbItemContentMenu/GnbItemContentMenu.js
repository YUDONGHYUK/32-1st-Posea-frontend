import React from 'react';
import { Link } from 'react-router-dom';

const GnbItemContentMenu = ({ list, title }) => {
  return (
    <ul className="gnbItemContentMenu">
      <li className="gnbItemContentItem">
        <h2 className="gnbItemContentMenuTitle">{title}</h2>
      </li>
      {list.map(({ id, link, title }) => (
        <li key={id} className="gnbItemContentItem">
          <Link to={link}>
            <span>{title}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default GnbItemContentMenu;
