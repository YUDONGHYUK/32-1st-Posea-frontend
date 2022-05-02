import React, { useEffect, useState } from 'react';
import ProductsLnb from './ProductsLnb/ProductsLnb';
import ProductsCarousel from './ProductsCarousel/ProductsCarousel';
import './ProductsList.scss';

const ProductsList = () => {
  const [productsData, setProductsData] = useState({});

  const { title, link, subCategories } = productsData;

  useEffect(() => {
    fetch('/data/productsListData.json')
      .then(res => res.json())
      .then(data => setProductsData(data));
  }, []);

  return (
    <div className="productsList">
      <h2 className="productsTitle">{title}</h2>

      {subCategories && (
        <>
          <ProductsLnb
            categoryTitle={title}
            categoryLink={link}
            subCategories={subCategories}
          />

          {subCategories.map(category => (
            <ProductsCarousel key={category.id} category={category} />
          ))}
        </>
      )}
    </div>
  );
};

export default ProductsList;
