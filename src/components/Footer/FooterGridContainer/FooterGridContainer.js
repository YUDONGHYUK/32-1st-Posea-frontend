import React from 'react';
import FooterBlock from '../FooterBlock/FooterBlock';
import './FooterGridContainer.scss';

const BLOCK_DATA = [
  {
    id: 1,
    header: '주문 및 지원',
    lists: [
      '문의하기',
      '자주 묻는 질문 ↗',
      '배송 ↗',
      '반품 ↗',
      '배송 조회하기 ↗',
      '주문 내역',
      '이용 약관',
    ],
  },
  {
    id: 2,
    header: '서비스',
    lists: ['기업체 구매', '페이셜 어포인트먼트', '1:1 채팅 상담'],
  },
  {
    id: 3,
    header: '위치 기본 설정',
    lists: ['배송: 대한민국', '언어: 한국어'],
  },
  {
    id: 4,
    header: '지속가능성',
    lists: [
      '푀세아는 비콥 인증을 획득한 브랜드이며, PETA로부터 비건 인증을 받은 브랜드입니다.',
    ],
  },
  {
    id: 5,
    header: '소개',
    lists: ['브랜드 스토리', '이솝 재단', '채용', '개인정보처리방침'],
  },
  {
    id: 6,
    header: '소셜',
    lists: ['Instagram ↗', 'Twitter ↗', 'LinkedIn ↗', 'Kakao Plus Friend ↗'],
  },
  {
    id: 7,
    header: '주의',
    lists: [
      '상호: 푀세아코리아 유한회사 | 주소: 서울시 강남구 테헤란로 427 위워크 타워(위워크 선릉 2호점) 푀세아코리아 | 대표자: 이하영 | 대표전화: 1800-1987 | 대표 이메일: posea@posea.com | 호스팅 사업자: SAP Hybris | 사업자 등록 번호: 220-88-56014 | 통신판매업 신고번호: 2014-서울강남-02300',
    ],
  },
];

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
