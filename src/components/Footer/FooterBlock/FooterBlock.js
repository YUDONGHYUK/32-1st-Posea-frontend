import React from 'react';
import FooterHyperLink from '../FooterHyperLink/FooterHyperLink';
import './FooterBlock.scss';

const FooterBlock = ({ data, data: { header } }) => (
  <section className="footerBlock">
    <header className="footerBlockHeader">{header}</header>
    <div className="footerDivider" />
    <ul className="footerList">
      {data.lists.map((list, index) => (
        <FooterHyperLink key={index} list={list} />
      ))}
    </ul>
  </section>
);

export default FooterBlock;
