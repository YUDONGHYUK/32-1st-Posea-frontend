import React, { useEffect, useState } from 'react';
import './Details.scss';
import InfoRight from './InfoRight/InfoRight';
import InfoUsage from './InfoUsage/InfoUsage';
import Modal from './Modal/Modal';

const Details = () => {
  const [productInfo, setProductInfo] = useState({});
  const [isModalShow, setIsModalShow] = useState(false);
  const [isModalNoShow, setModalNoShow] = useState(false);

  const onModalShowBtnClick = () => {
    setIsModalShow(true);
  };

  const onModalExitBtnClick = () => {
    setModalNoShow(true);
  };

  useEffect(() => {
    fetch('/data/productInfo.json')
      .then(res => res.json())
      .then(data => setProductInfo(data));
  }, []);

  return (
    <>
      <div className="page">
        <div className="info">
          <div className="infoImgLeft">
            {/* <img
            className="infoImgLeft"
            alt="img1"
            src="https://www.aesop.com/u1nb1km7t5q7/4NWh283d1yqAkukmet0auB/c45a565e71259336c1b557867ec61600/Aesop-Skin-Remove-60mL-large.png"
          /> */}
          </div>

          <div className="infoDetails">
            <img
              className="infoImgRight"
              alt="img2"
              src="https://www.aesop.com/u1nb1km7t5q7/4NWh283d1yqAkukmet0auB/c45a565e71259336c1b557867ec61600/Aesop-Skin-Remove-60mL-large.png"
            />
            <p id="explain">
              이솝에서는 환경적 지속가능성을 고려하여 온라인과 매장에서의 별도
              펌프 제공을 지양하고 있습니다.
            </p>
          </div>

          <InfoRight productInfo={productInfo} />
        </div>

        <div className="asideList">
          <div className="asideLeft">
            <p>무료 선물 포장 서비스</p>
            <p>주문하신 모든 제품에 대해 선물 포장 서비스를 제공해 드립니다</p>
          </div>
          <div className="asideRight">
            <p>샘플 &amp; 코튼 백 증정</p>
            <p>
              모든 주문 건에 무료 샘플과 코튼 백을 제공해 드립니다.(샘플 종류는
              임의지정이 불가합니다.)
            </p>
          </div>
        </div>
        <div className="content">
          <img
            className="contentImg"
            alt="img"
            src="https://www.aesop.com/u1nb1km7t5q7/7KFtsfQPvlTOq50iOgsVYQ/9865d72cfac7f1c06a5a57aa07abb5fd/Aesop-Skin-Remove-Hybris-Secondary-Texture-50-50-Desktop-1440x1500px.jpg"
          />

          <div className="contentDirection">
            <div className="contentHead">
              <div className="title">사용법</div>
              <div className="contetnExplain">
                젖은 화장솜에 덜어 눈 주위에 지긋이 눌러 아이 메이크업 제품이
                용해될 때까지 기다렸다 닦아냅니다.여러 번 닦아내줍니다.
              </div>
              <hr />
            </div>
            <InfoUsage />
          </div>
        </div>

        <div className="wrapperCarousel">
          <div className="carousel">
            <div className="carouselInner">
              <img
                alt="img1 "
                src="https://www.aesop.com/u1nb1km7t5q7/3nkXHEw4CJAmlgugVWNv3j/6f3c490a7c6b92fc655aae093eb54c7c/Aesop-Skin-Purifying-Facial-Cream-Cleanser-100mL-large.png"
              />
            </div>
            <div className="carouselInner">
              <img
                alt="img2 "
                src="https://www.aesop.com/u1nb1km7t5q7/5f6C19Q6xLutRoJ1tvEYDF/c3632e644b1ce72b71b70d8d34abe57f/Aesop-Skin-Fabulous-Face-Cleanser-100mL-large.png"
              />
            </div>
            <div className="carouselInner">
              <img
                alt="img3"
                src="https://www.aesop.com/u1nb1km7t5q7/vj7h54KpQQ7ha4ZP68aYe/6bfa6f01d7b0e4558b82e23bd956891f/Aesop-Skin-Parsley-Seed-Facial-Cleansing-Oil-200mL-large.png"
              />
            </div>
          </div>
        </div>
        <button>btn1</button>
        <button>btn2</button>
        <button>btn3</button>
      </div>
      <Modal
        isModalShow={isModalShow}
        onModalShowBtnClick={onModalShowBtnClick}
        isModalNoShow={isModalNoShow}
      />
    </>
  );
};

export default Details;
