import React from 'react';
import './CartItemHeader.scss';

const CartItemHeader = ({ handleModal }) => (
  <div className="cartItemsHeader">
    <span className="itemHeaderCart">카트</span>
    <span className="itemHeaderSize">사이즈</span>
    <div className="itemHeaderAmountBox">
      <span className="itemHeaderAmount">수량</span>
      <button className="itemHeaderCloseBtn" onClick={handleModal}>
        ×
      </button>
    </div>
  </div>
);

export default CartItemHeader;
