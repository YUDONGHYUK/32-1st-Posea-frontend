import React, { useRef } from 'react';
import CarouselIntro from '../CarouselIntro/CarouselIntro';
import CarouselItem from '../CarouselItem/CarouselItem';
import './ProductsCarousel.scss';

const PRODUCT_LIST = [
  {
    id: 1,
    title: '에이 로즈 바이 애니 아더 네임 바디 클렌저',
    size: [150],
    price: 10000,
    imgSrc:
      'https://www.aesop.com/medias/Aesop-Body-A-Rose-By-Any-Other-Name-Body-Cleanser-100mL-Hybris-Large-835x962px.png?context=bWFzdGVyfGltYWdlc3wxMjY1NTJ8aW1hZ2UvcG5nfGltYWdlcy9oOTMvaGE1Lzk1NTg4ODI3MTM2MzAucG5nfDM1OGYwOTcxYTMzNzJlYmRkY2U5YTg2ZTRjYTdhY2JhNzYwN2FmNzA2NjE1ZWQ0MWNlYjk0Y2QxMGU0YjYwNDY',
  },
  {
    id: 2,
    title: '에이 로즈 바이 애니 아더 네임 바디 클렌저',
    size: [150, 300],
    price: 100000,
    imgSrc:
      'https://www.aesop.com/medias/Aesop-Body-A-Rose-By-Any-Other-Name-Body-Cleanser-100mL-Hybris-Large-835x962px.png?context=bWFzdGVyfGltYWdlc3wxMjY1NTJ8aW1hZ2UvcG5nfGltYWdlcy9oOTMvaGE1Lzk1NTg4ODI3MTM2MzAucG5nfDM1OGYwOTcxYTMzNzJlYmRkY2U5YTg2ZTRjYTdhY2JhNzYwN2FmNzA2NjE1ZWQ0MWNlYjk0Y2QxMGU0YjYwNDY',
  },
  {
    id: 3,
    title: '에이 로즈 바이 애니 아더 네임 바디 클렌저',
    size: [150, 300, 450],
    price: 1000000,
    imgSrc:
      'https://www.aesop.com/medias/Aesop-Body-A-Rose-By-Any-Other-Name-Body-Cleanser-100mL-Hybris-Large-835x962px.png?context=bWFzdGVyfGltYWdlc3wxMjY1NTJ8aW1hZ2UvcG5nfGltYWdlcy9oOTMvaGE1Lzk1NTg4ODI3MTM2MzAucG5nfDM1OGYwOTcxYTMzNzJlYmRkY2U5YTg2ZTRjYTdhY2JhNzYwN2FmNzA2NjE1ZWQ0MWNlYjk0Y2QxMGU0YjYwNDY',
  },
  {
    id: 4,
    title: '에이 로즈 바이 애니 아더 네임 바디 클렌저',
    size: [150, 300, 450, 600],
    price: 10000000,
    imgSrc:
      'https://www.aesop.com/medias/Aesop-Body-A-Rose-By-Any-Other-Name-Body-Cleanser-100mL-Hybris-Large-835x962px.png?context=bWFzdGVyfGltYWdlc3wxMjY1NTJ8aW1hZ2UvcG5nfGltYWdlcy9oOTMvaGE1Lzk1NTg4ODI3MTM2MzAucG5nfDM1OGYwOTcxYTMzNzJlYmRkY2U5YTg2ZTRjYTdhY2JhNzYwN2FmNzA2NjE1ZWQ0MWNlYjk0Y2QxMGU0YjYwNDY',
  },
  {
    id: 5,
    title: '에이 로즈 바이 애니 아더 네임 바디 클렌저',
    size: [150, 300, 450, 600, 750],
    price: 100000000,
    imgSrc:
      'https://www.aesop.com/medias/Aesop-Body-A-Rose-By-Any-Other-Name-Body-Cleanser-100mL-Hybris-Large-835x962px.png?context=bWFzdGVyfGltYWdlc3wxMjY1NTJ8aW1hZ2UvcG5nfGltYWdlcy9oOTMvaGE1Lzk1NTg4ODI3MTM2MzAucG5nfDM1OGYwOTcxYTMzNzJlYmRkY2U5YTg2ZTRjYTdhY2JhNzYwN2FmNzA2NjE1ZWQ0MWNlYjk0Y2QxMGU0YjYwNDY',
  },
];

const ProductsCarousel = () => {
  const carouselListRef = useRef();

  let carouselMoveCount = 0;

  const moveCarouselLeft = () => {
    const carouselListRect = carouselListRef.current.getBoundingClientRect();
    const IMG_WIDTH = carouselListRect.width / 3;
    if (carouselMoveCount < PRODUCT_LIST.length - 3 && carouselMoveCount >= 0) {
      carouselMoveCount++;

      carouselListRef.current.style.transform = `translateX(-${
        IMG_WIDTH * carouselMoveCount
      }px)`;
    }
  };

  const moveCarouselRight = () => {
    const carouselListRect = carouselListRef.current.getBoundingClientRect();
    const IMG_WIDTH = carouselListRect.width / 3;
    if (carouselMoveCount < PRODUCT_LIST.length && carouselMoveCount > 0) {
      carouselMoveCount--;

      carouselListRef.current.style.transform = `translateX(-${
        IMG_WIDTH * carouselMoveCount
      }px)`;
    }
  };

  return (
    <>
      <section className="productsCarousel">
        <CarouselIntro />
        <ul className="carouselList" ref={carouselListRef}>
          {PRODUCT_LIST.map(product => (
            <CarouselItem key={product.id} product={product} />
          ))}
        </ul>
      </section>
      <button onClick={moveCarouselLeft}>LEFT</button>{' '}
      <button onClick={moveCarouselRight}>RIGHT</button>
    </>
  );
};

export default ProductsCarousel;
