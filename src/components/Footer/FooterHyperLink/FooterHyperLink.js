import React from 'react';
import { Link } from 'react-router-dom';
import './FooterHyperLink.scss';

const FooterHyperLink = ({ list }) => (
  <li className="footerHyperLink">
    <Link to="/">{list}</Link>
  </li>
);

export default FooterHyperLink;
