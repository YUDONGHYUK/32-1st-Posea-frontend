import React, { useEffect, useState } from 'react';
import './Details.scss';
import InfoRight from './InfoRight/InfoRight';
import InfoUsage from './InfoUsage/InfoUsage';
import Modal from './Modal/Modal';
import Carousel from './Carousel/Carousel';
import { useParams } from 'react-router-dom';

const Details = () => {
  const [productInfo, setProductInfo] = useState({});
  const [isModalShow, setIsModalShow] = useState(false);
  const [isViewMove, setIsViewMove] = useState(0);

  const params = useParams();

  useEffect(() => {
    fetch(`http://10.58.0.92:8000/products/details/${params.id}`)
      .then(res => res.json())
      .then(data => setProductInfo(data.results[0]));
  }, []);

  document.body.style.overflow = isModalShow ? 'hidden' : 'unset';

  const onModalShowBtnClick = () => {
    setIsModalShow(true);
  };

  const onModalExitBtnClick = () => {
    setIsModalShow(false);
  };

  const handleLeft = () => {
    setIsViewMove(true);
  };

  const handleRight = () => {
    setIsViewMove(true);
  };

  const addCart = () => {
    fetch('http://10.58.0.92:8000/carts', {
      method: 'POST',
      headers: { Authorization: localStorage.getItem('token') },
      body: JSON.stringify({
        product_id: params.id,
        size: productInfo.size[0],
        price: parseInt(productInfo.price[0]),
      }),
    });
  };

  return (
    <>
      <div className="page">
        <div className="info">
          <div className="infoDetails">
            <img
              className="infoImgRight"
              alt="img2"
              src={productInfo.product_images}
            />
            <p id="explain">
              이솝에서는 환경적 지속가능성을 고려하여 온라인과 매장에서의 별도
              펌프 제공을 지양하고 있습니다.
            </p>
          </div>

          <InfoRight
            productInfo={productInfo}
            onModalShowBtnClick={onModalShowBtnClick}
            addCart={addCart}
          />
        </div>

        <div className="asideList">
          <div className="asidePartition">
            <p className="asideTitle">무료 선물 포장 서비스</p>
            <p className="asideContent">
              주문하신 모든 제품에 대해 선물 포장 서비스를 제공해 드립니다
            </p>
          </div>
          <div className="divider" />
          <div className="asidePartition">
            <p className="asideTitle">샘플 &amp; 코튼 백 증정</p>
            <p className="asideContent">
              모든 주문 건에 무료 샘플과 코튼 백을 제공해 드립니다.(샘플 종류는
              임의지정이 불가합니다.)
            </p>
          </div>
        </div>
        <div className="content">
          <img
            className="contentImg"
            alt="img"
            src={productInfo.texture_images}
          />

          <div className="contentDirection">
            <div className="contentHead">
              <div className="title">사용법</div>
              <div className="contetnExplain">{productInfo.direction}</div>
              <hr />
            </div>
            <InfoUsage productInfo={productInfo} />
          </div>
        </div>
      </div>

      <div className="modalBox">
        <Modal
          isModalShow={isModalShow}
          onModalShowBtnClick={onModalShowBtnClick}
          noShow={onModalExitBtnClick}
          productInfo={productInfo}
        />
      </div>

      <Carousel
        isViewMove={isViewMove}
        handleLeft={handleLeft}
        handleRight={handleRight}
      />
    </>
  );
};

export default Details;
