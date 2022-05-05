import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import ProductsLnb from './ProductsLnb/ProductsLnb';
import ProductsCarousel from './ProductsCarousel/ProductsCarousel';
import { API_OBJ } from '../../config';
import './ProductsList.scss';

const ProductsList = () => {
  const [productsData, setProductsData] = useState([]);

  const location = useLocation();

  useEffect(() => {
    fetch(`${API_OBJ.PRODUCTS}/list${location.search}`)
      .then(res => res.json())
      .then(data => setProductsData(data.result));
  }, [location.search]);

  return (
    productsData[0] && (
      <div className="productsList">
        <h2 className="productsTitle">{productsData[0].main_category_name}</h2>

        <ProductsLnb
          categoryTitle={productsData[0].main_category_name}
          subCategories={productsData}
        />

        {productsData.map(category => (
          <ProductsCarousel
            key={category.categories.category_id}
            category={category}
          />
        ))}
      </div>
    )
  );
};

export default ProductsList;
