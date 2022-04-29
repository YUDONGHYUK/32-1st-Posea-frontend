import React from 'react';
import FooterBottomBanner from './FooterBottomBanner/FooterBottomBanner';
import FooterGridContainer from './FooterGridContainer/FooterGridContainer';
import './Footer.scss';
const Footer = () => {
  return (
    <footer className="footer">
      <FooterGridContainer />
      <FooterBottomBanner />
    </footer>
  );
};

export default Footer;
