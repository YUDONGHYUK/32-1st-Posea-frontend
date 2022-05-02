// 1. 캐러셀 리스트 위치(carousel) 알려주기
// 2. 캐러셀 리스트 감싸는 div(wrapperCarousel)에 overflow hidden 주기

import React, { useState, useRef, useEffect } from 'react';

export default function Carousel() {
  const [carouselCon, setCarouselCon] = useState('');

  useEffect(() => {
    fetch('/data/carouselData.json')
      .then(res => res.json())
      .then(data => setCarouselCon(data));
  }, []);

  return (
    (
      <img
        alt="img2 "
        src="https://www.aesop.com/u1nb1km7t5q7/5f6C19Q6xLutRoJ1tvEYDF/c3632e644b1ce72b71b70d8d34abe57f/Aesop-Skin-Fabulous-Face-Cleanser-100mL-large.png"
      />
    ),
    (
      <img
        alt="img3"
        src="https://www.aesop.com/u1nb1km7t5q7/vj7h54KpQQ7ha4ZP68aYe/6bfa6f01d7b0e4558b82e23bd956891f/Aesop-Skin-Parsley-Seed-Facial-Cleansing-Oil-200mL-large.png"
      />
    )
  );
}
