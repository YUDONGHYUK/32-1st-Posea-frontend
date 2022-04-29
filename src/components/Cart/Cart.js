import React from 'react';
import CartItem from './CartItem/CartItem';
import './Cart.scss';

const Cart = () => (
  <section className="cartWrapper">
    <div className="cartContainer">
      <div className="cartItemsHeader">
        <span className="itemHeaderCart">카트</span>
        <span className="itemHeaderSize">사이즈</span>
        <div className="itemHeaderAmountBox">
          <span className="itemHeaderAmount">수량</span>
          <button className="itemHeaderCloseBtn">×</button>
        </div>
      </div>
      <div className="cartItems">
        <CartItem />
      </div>
    </div>
    <div className="cartSummary">
      <div className="cartSummaryContainer">
        <span className="cartSummaryNotice">
          전 제품 무료 배송 혜택을 즐겨보세요.
        </span>
        <div className="cartSummaryItem">
          <span className="cartSummaryItemLabel">소계(세금 포함)</span>
          <span className="cartSummarySubtotal">₩ 47,000</span>
        </div>
        <button className="cartSummaryPayBtn">결제하기</button>
      </div>
    </div>
  </section>
);

export default Cart;
