import React, { useEffect, useState } from 'react';
import ProductsTitle from './ProductsTitle/ProductsTitle';
import ProductsLnb from './ProductsLnb/ProductsLnb';
import ProductsCarousel from './ProductsCarousel/ProductsCarousel';
import './ProductsList.scss';

const ProductsList = () => {
  const [productsData, setProductsData] = useState({});

  useEffect(() => {
    fetch('/data/productsListData.json')
      .then(res => res.json())
      .then(data => setProductsData(data));
  }, []);

  const { title, link, subCategories } = productsData;

  return (
    <div className="productsList">
      <ProductsTitle title={title} />

      {subCategories && (
        <ProductsLnb
          categoryTitle={title}
          categoryLink={link}
          subCategories={subCategories}
        />
      )}

      {subCategories &&
        subCategories.map(category => (
          <ProductsCarousel key={category.id} category={category} />
        ))}
    </div>
  );
};

export default ProductsList;
