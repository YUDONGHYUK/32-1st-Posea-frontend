import React from 'react';
import './ArrowUp.scss';

const ArrowUp = () => {
  const scrollTop = () => {
    window.scrollTo({ top: 80, behavior: 'smooth' });
  };

  return (
    <button className="arrowUp" onClick={scrollTop}>
      <i className="fa-solid fa-arrow-up" />
    </button>
  );
};

export default ArrowUp;
