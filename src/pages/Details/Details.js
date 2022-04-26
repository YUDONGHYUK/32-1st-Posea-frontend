import React from 'react';
import './Details.scss';

const Details = () => {
  return (
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

        <div className="infoRight">
          <div className="infoHeader">스킨 • 클렌저</div>
          <div className="infoName">리무브</div>
          <div className="infoExplain">
            눈 주위의 민감한 피부를 달래고 진정시켜주는 마트리카리아가 포함된
            부드러운 오일 제형의 아이 메이크업 리무브
          </div>
          <hr />
          <div className="infoType">
            <div className="title">피부타입</div>
            <span>모든 피부, 메이크업을 한 피부</span>
          </div>
          <div className="infoUsed">
            <div className="title">사용감</div>
            <span>진정된, 생기있는</span>
          </div>
          <div className="infoComponent">
            <div className="title">주요성분</div>
            <span>
              그레이프 씨드,토코페롤,마트리카리아꽃오일(블루 카모마일)
            </span>
            <button>btn</button>
          </div>
          <div className="infoSizing">
            <div className="title">사이즈</div>
            <span>60ML</span>
          </div>
          <button className="btn">
            카트에 추가하기 <span>27,000</span>
          </button>
        </div>
      </div>

      <div className="asideList">
        <div className="asideLeft">
          <p>무료 선물 포장 서비스</p>
          <p>주문하신 모든 제품에 대해 선물 포장 서비스를 제공해 드립니다</p>
        </div>
        <div className="asideRight">
          <p>샘플 & 코튼 백 증정</p>
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
          <div className="contentUsed">
            <div className="usedTitle">사용량</div>
            <p>5-7방울</p>
          </div>
          <div className="texture">
            <div className="textureTitle">텍스처</div>
            <p>가벼운, 오일 타입</p>
          </div>
          <div className="fragnance">
            <div className="fragnanceTitle">향</div>
            <p>허브향,플로랄,너티</p>
          </div>
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

    // <div className="info">
    //   <img alt="img"></img>
    // </div>;
  );
};

export default Details;
