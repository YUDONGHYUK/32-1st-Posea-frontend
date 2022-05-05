import React from 'react';
import CartItem from '../CartItem/CartItem';
import './CartItems.scss';

const CartItems = ({ cartList, handleAmount, handleDelete }) => (
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
);

export default CartItems;
