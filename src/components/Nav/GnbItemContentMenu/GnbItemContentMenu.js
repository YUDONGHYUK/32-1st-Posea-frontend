import React from 'react';
import { useNavigate } from 'react-router-dom';
import './GnbItemContentMenu.scss';

const GnbItemContentMenu = ({ id, list, title }) => {
  const navigate = useNavigate();

  const goToMainCategory = () => {
    navigate(`/list?main_category_id=${id}`);
  };

  return (
    <ul className="gnbItemContentMenu">
      <li className="gnbItemContentItem">
        <h2 className="gnbItemContentMenuTitle">{title}</h2>
      </li>
      <li className="gnbItemContentItem" onClick={goToMainCategory}>
        {title} 모두 보기
      </li>
      {list.map(({ id, title }) => (
        <li key={id} className="gnbItemContentItem">
          <span>{title}</span>
        </li>
      ))}
    </ul>
  );
};

export default GnbItemContentMenu;
