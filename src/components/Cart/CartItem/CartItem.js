import React from 'react';
import './CartItem.scss';

const CartItem = props => (
  <div className="cartItem">
    <span className="cartItemName">레저렉션 아로마틱 핸드 워시</span>
    <span className="cartItemSize">500mL(펌프 포함)</span>
    <div className="cartItemAmountContainer">
      <div className="cartItemAmountLeft">
        <select className="cartItemAmountInput">
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </select>
        <button className="cartItemAmountDelete">삭제</button>
      </div>
      <span className="cartItemAmountTotal">47,000</span>
    </div>
  </div>
);

export default CartItem;
