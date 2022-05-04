import React, { useRef } from 'react';
import CarouselBtns from '../CarouselBtns/CarouselBtns';
import CarouselIntro from '../CarouselIntro/CarouselIntro';
import CarouselList from '../CarouselList/CarouselList';
import './ProductsCarousel.scss';

const ProductsCarousel = ({ category }) => {
  const carouselListRef = useRef();

  const { products } = category;

  return (
    category && (
      <section className="productsCarousel">
        <CarouselIntro category={category} />
        <CarouselList list={products} carouselListRef={carouselListRef} />
        <CarouselBtns
          carouselListRef={carouselListRef}
          listLength={products.length}
        />
      </section>
    )
  );
};

export default ProductsCarousel;
