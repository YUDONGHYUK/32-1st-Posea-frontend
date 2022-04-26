import React from 'react';
import './MainBlockquote.scss';

const MainBlockquote = () => (
  <section className="mainBlockquoteWraaper">
    <blockquote className="mainBlockquote">
      <p className="mainBlockquoteText">
        ‘Fragrance is the voice of inanimate things.’
      </p>
      <span className="mainBlockquoteName">Mary Webb</span>
    </blockquote>
  </section>
);

export default MainBlockquote;
