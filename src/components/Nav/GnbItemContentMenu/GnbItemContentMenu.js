import React from 'react';
import { useNavigate } from 'react-router-dom';
import './GnbItemContentMenu.scss';

const GnbItemContentMenu = ({ categoryTitle, list, title, link }) => {
  const navigate = useNavigate();

  const goToMainCategory = () => {
    const queryString = `/products/list?main_category_id=${link}`;

    navigate(queryString);
  };

  return (
    <ul className="gnbItemContentMenu">
      <li className="gnbItemContentItem">
        <h2 className="gnbItemContentMenuTitle">{categoryTitle}</h2>
      </li>
      <li className="gnbItemContentItem" onClick={goToMainCategory}>
        <span>{title} 모두 보기</span>
      </li>
      {list.map(({ id, title }) => (
        <li key={id} className="gnbItemContentItem">
          <span onClick={goToMainCategory}>{title}</span>
        </li>
      ))}
    </ul>
  );
};

export default GnbItemContentMenu;
