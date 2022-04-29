import React from 'react';
import { Link } from 'react-router-dom';
import './ProductsLnb.scss';

const ProductsLnb = ({ list }) => {
  return (
    <nav className="productsLnb">
      <ul className="productsLnbList">
        {list.map(({ id, link, title }) => (
          <li key={id} className="productsLnbItem">
            <Link to={link}>{title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default ProductsLnb;
