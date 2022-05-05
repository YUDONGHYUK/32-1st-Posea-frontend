import React from 'react';
import './CartSummary.scss';

const CartSummary = ({ totalCartPrice }) => {
  return (
    <div className="cartSummary">
      <div className="cartSummaryContainer">
        <span className="cartSummaryNotice">
          전 제품 무료 배송 혜택을 즐겨보세요.
        </span>
        <div className="cartSummaryItem">
          <span className="cartSummaryItemLabel">소계(세금 포함)</span>
          <span className="cartSummarySubtotal">
            ₩ {totalCartPrice ? Number(totalCartPrice).toLocaleString() : 0}
          </span>
        </div>
        <button className="cartSummaryPayBtn">결제하기</button>
      </div>
    </div>
  );
};

export default CartSummary;
