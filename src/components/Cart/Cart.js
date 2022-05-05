import React, { useEffect, useState } from 'react';
import CartItemHeader from './CartItemHeader/CartItemHeader';
import CartItems from './CartItems/CartItems';
import CartSummary from './CartSummary/CartSummary';
import { API_OBJ } from '../../config';
import './Cart.scss';

const Cart = ({ toggleModal, handleModal, isAddCartItem }) => {
  const [cartList, setCartList] = useState(null);
  const totalCartPrice =
    cartList &&
    cartList
      .map(item => Number(item.totalPrice))
      .reduce((previousPrice, currentPrice) => previousPrice + currentPrice, 0);

  useEffect(() => {
    fetch(API_OBJ.CARTS, {
      method: 'GET',
      headers: { Authorization: localStorage.getItem('token') },
    })
      .then(res => res.json())
      .then(data => {
        setCartList(data.result);
      });
  }, [isAddCartItem]);

  const handleAmount = (item, e) => {
    fetch(`${API_OBJ.CARTS}/cart/${parseInt(item.cart_id)}`, {
      method: 'PATCH',
      headers: {
        Authorization: localStorage.getItem('token'),
      },
      body: JSON.stringify({
        count: parseInt(e.target.innerHTML),
      }),
    })
      .then(res => res.json())
      .then(res => {
        if (res.message === 'COUNT_CHANGED') {
          fetch(API_OBJ.CARTS, {
            method: 'GET',
            headers: { Authorization: localStorage.getItem('token') },
          })
            .then(res => res.json())
            .then(data => setCartList(data.result));
        }
      });
  };

  const handleDelete = item => {
    fetch(`${API_OBJ.CARTS}?cart_ids=${parseInt(item.cart_id)}`, {
      method: 'DELETE',
      headers: {
        Authorization: localStorage.getItem('token'),
      },
    })
      .then(res => res.json())
      .then(res => {
        if (res.message === 'CART_DELETED') {
          fetch(API_OBJ.CARTS, {
            method: 'GET',
            headers: { Authorization: localStorage.getItem('token') },
          })
            .then(res => res.json())
            .then(data => setCartList(data.result));
        }
      });
  };

  return (
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
        <CartSummary totalCartPrice={totalCartPrice} />
      </section>
    </div>
  );
};

export default Cart;
