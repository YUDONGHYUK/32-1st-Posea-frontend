import React, { useState, useEffect } from 'react';
import './Modal.scss';

const Modal = ({ isModalShow, onModalShowBtnClick, noShow }) => {
  const [details, setDetails] = useState('');

  useEffect(data => {
    fetch('/data/modalInfo.json')
      .then(res => res.json())
      .then(data => setDetails(data));
  }, []);

  // const onExitBtnClick = ({ isModalNoShow, setModalNoShow }) => {
  //   setModalNoShow(true);
  //   console.log('굿굿!');
  // };

  return (
    <div>
      <aside className={`modal ${isModalShow && 'modalActive'}`}>
        <div className="overlay" onClick={noShow} />
        <div className="modalAll">
          <div className="modalWrapper">
            <button className="exitBtn" onClick={noShow}>
              X
            </button>
            <h3 className="modalTitle">{details.title}</h3>
            <p className="modalIngredients">{details.ingredients}</p>
            <p className="modalDesc">
              성분 목록은 변경될 수 있습니다. 구매하신 제품에 대한 정확한 성분
              목록은, 사용 전 제품 라벨을 참조하시기 바랍니다.
            </p>
            <p className="modalDesc">
              이솝은 PETA로부터 비건 인증을 받은 브랜드로 자체 안전성과 효능,
              지속가능성을 확인한 성분을 사용합니다.
            </p>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default Modal;

// 클릭하면 배경 opacity
// 모달창
