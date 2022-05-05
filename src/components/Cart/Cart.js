import React, { useState } from 'react';
import CartItemHeader from './CartItemHeader/CartItemHeader';
import CartItems from './CartItems/CartItems';
import CartSummary from './CartSummary/CartSummary';
import { CART_ITEMS } from './CART_ITEMS';
import './Cart.scss';

const Cart = () => {
  const [cartList, setCartList] = useState(CART_ITEMS);
  const [toggleModal, setToggleModal] = useState(false);

  const totalPrice = cartList
    .map(item => item.price)
    .reduce((previousPrice, currentPrice) => previousPrice + currentPrice, 0);

  const handleAmount = (item, e) => {
    const newCartList = cartList.map(prevItem => {
      if (prevItem.id === item.id) {
        return {
          ...item,
          amount: Number(e.target.innerText),
          price:
            (prevItem.price / prevItem.amount) * Number(e.target.innerText),
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
    if (toggleModal && e.target === e.currentTarget) {
      setToggleModal(false);
      document.body.style.overflow = 'unset';
    }
    if (!toggleModal && e.target === e.currentTarget) {
      setToggleModal(true);
      document.body.style.overflow = 'hidden';
    }
  };

  return (
    <>
      <div
        className={`modal ${toggleModal ? 'active' : ''}`}
        onClick={handleModal}
      >
        <section className={`cartWrapper ${toggleModal ? 'active' : ''}`}>
          <div className="cartContainer">
            <CartItemHeader handleModal={handleModal} />
            <CartItems
              cartList={cartList}
              handleAmount={handleAmount}
              handleDelete={handleDelete}
            />
          </div>
          <CartSummary totalPrice={totalPrice} />
        </section>
      </div>
      <button className="modalBtn" onClick={handleModal}>
        ddd
      </button>
    </>
  );
};

export default Cart;
