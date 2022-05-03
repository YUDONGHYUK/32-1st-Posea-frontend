import React from 'react';
import { Link } from 'react-router-dom';
import './ProductsLnb.scss';

const ProductsLnb = ({ categoryTitle, categoryLink, subCategories }) => {
  return (
    <nav className="productsLnb">
      <ul className="productsLnbList">
        <li className="productsLnbItem">
          <Link to={categoryLink}>모든 {categoryTitle}</Link>
        </li>

        {subCategories &&
          subCategories.map(({ id, link, title }) => (
            <li key={id} className="productsLnbItem">
              <Link to={link}>
                <span>{title}</span>
              </Link>
            </li>
          ))}
      </ul>
    </nav>
  );
};

export default ProductsLnb;
