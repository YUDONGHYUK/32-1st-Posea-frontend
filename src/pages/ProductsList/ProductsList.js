import React from 'react';
import { Link } from 'react-router-dom';
import './ProductsList.scss';
import ProductsTitle from './ProductsTitle/ProductsTitle';
import ProductsLnb from './ProductsLnb/ProductsLnb';
import ProductsCarousel from './ProductsCarousel/ProductsCarousel';

const ProductList = () => {
  const lnbList = [
    {
      id: 1,
      title: '모든 바디 & 핸드',
      link: '/',
    },
    {
      id: 2,
      title: '핸드',
      link: '/',
    },
    {
      id: 3,
      title: '바디',
      link: '/',
    },
    {
      id: 4,
      title: '퍼스널 케어',
      link: '/',
    },
    {
      id: 5,
      title: '핸드 및 바디 케어 기프트',
      link: '/',
    },
  ];

  return (
    <div className="productsList">
      <ProductsTitle title="스킨" />
      <ProductsLnb list={lnbList} />
      <ProductsCarousel />
    </div>
  );
};

export default ProductList;
