import React from 'react';
import './ProductsLnb.scss';

const ProductsLnb = ({ categoryTitle, subCategories }) => {
  return (
    <nav className="productsLnb">
      <ul className="productsLnbList">
        <li className="productsLnbItem">모든 {categoryTitle}</li>

        {subCategories &&
          subCategories.map(category => {
            const { category_id, category_name } = category.categories;

            return (
              <li key={category_id} className="productsLnbItem">
                <span>{category_name}</span>
              </li>
            );
          })}
      </ul>
    </nav>
  );
};

export default ProductsLnb;
