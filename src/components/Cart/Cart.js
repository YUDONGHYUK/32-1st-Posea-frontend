import React, { useState } from 'react';
import CartItem from './CartItem/CartItem';
import { CART_LIST } from './CART_LIST';
import './Cart.scss';

const Cart = () => {
  const [cartList, setCartList] = useState(CART_LIST);
  const [toggleModal, setToggleModal] = useState(false);

  const totalPrice = cartList
    .map(item => item.price)
    .reduce((previousPrice, currentPrice) => previousPrice + currentPrice, 0);

  const handleAmount = (item, e) => {
    const newCartList = cartList.map(prevItem => {
      if (prevItem.id === item.id) {
        return {
          ...item,
          amount: e.target.value,
          price: (prevItem.price / prevItem.amount) * e.target.value,
        };
      }
      return prevItem;
    });
    setCartList(newCartList);
  };

  const handleDelete = item => {
    const deletedLIst = cartList.filter(prevItem => prevItem.id !== item.id);
    setCartList(deletedLIst);
  };

  const handleModal = e => {
    e.target === e.currentTarget &&
      (toggleModal ? setToggleModal(false) : setToggleModal(true));
  };

  return (
    <>
      <div
        className={`modalWrapper ${toggleModal ? 'active' : ''}`}
        onClick={handleModal}
      />
      <section className={`cartWrapper ${toggleModal ? 'active' : ''}`}>
        <div className="cartContainer">
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
          <div className="cartItems">
            {cartList.map(item => (
              <CartItem
                key={item.id}
                item={item}
                handleAmount={handleAmount}
                handleDelete={handleDelete}
              />
            ))}
          </div>
        </div>
        <div className="cartSummary">
          <div className="cartSummaryContainer">
            <span className="cartSummaryNotice">
              전 제품 무료 배송 혜택을 즐겨보세요.
            </span>
            <div className="cartSummaryItem">
              <span className="cartSummaryItemLabel">소계(세금 포함)</span>
              <span className="cartSummarySubtotal">₩ {totalPrice}</span>
            </div>
            <button className="cartSummaryPayBtn">결제하기</button>
          </div>
        </div>
      </section>
      {/* 테스트용 버튼 */}
      {/* <button className="modalBtn" onClick={handleModal}>
        장바구니
      </button> */}
    </>
  );
};

export default Cart;
