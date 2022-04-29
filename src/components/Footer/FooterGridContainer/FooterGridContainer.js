import React from 'react';
import FooterBlock from '../FooterBlock/FooterBlock';
import BLOCK_DATA from '../BLOCK_DATA';
import './FooterGridContainer.scss';

const FooterGrid = () => (
  <div className="footerGridContainer">
    <section className="footerSignUp">
      <div className="inputBox">
        <input
          className="inputBoxInput"
          type="text"
          placeholder="이메일 주소"
        />
        <button className="inputBoxButton">
          <i className="fa-solid fa-arrow-right" />
        </button>
      </div>
      <span className="Description">
        푀세아 제품, 서비스 스토어, 행사, 문화적 관심사 등 다양한 소식을 받아볼
        수 있게 구독하세요.
      </span>
      <div className="ageVerification">
        <input type="checkbox" />
        <span>본인의 만 14세 이상 여부를 확인해주세요.</span>
      </div>
    </section>

    {BLOCK_DATA.map(data => (
      <FooterBlock key={data.id} data={data} />
    ))}
  </div>
);

export default FooterGrid;
