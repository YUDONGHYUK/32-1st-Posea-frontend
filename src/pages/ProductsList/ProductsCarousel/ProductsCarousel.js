import React, { useRef } from 'react';
import CarouselBtns from '../CarouselBtns/CarouselBtns';
import CarouselIntro from '../CarouselIntro/CarouselIntro';
import CarouselList from '../CarouselList/CarouselList';
import './ProductsCarousel.scss';

const ProductsCarousel = ({ category }) => {
  const carouselListRef = useRef();

  const { list } = category;

  return (
    <section className="productsCarousel">
      <CarouselIntro category={category} />
      <CarouselList list={list} carouselListRef={carouselListRef} />
      <CarouselBtns
        carouselListRef={carouselListRef}
        listLength={list.length}
      />
    </section>
  );
};

export default ProductsCarousel;
