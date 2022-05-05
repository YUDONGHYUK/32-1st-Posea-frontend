import React from 'react';
import CartItem from '../CartItem/CartItem';
import './CartItems.scss';

const CartItems = ({ cartList, handleAmount, handleDelete }) => (
  <div className="cartItems">
    {cartList &&
      cartList.map(item => (
        <CartItem
          key={item.cart_id}
          item={item}
          handleAmount={handleAmount}
          handleDelete={handleDelete}
        />
      ))}
  </div>
);

export default CartItems;
