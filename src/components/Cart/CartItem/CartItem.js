import React from 'react';
import './CartItem.scss';

const CartItem = ({
  item,
  item: { name, size, amount, price },
  handleAmount,
  handleDelete,
}) => {
  const onAmountChanger = e => handleAmount(item, e);
  const onDelete = () => handleDelete(item);

  return (
    <div className="cartItem">
      <span className="cartItemName">{name}</span>
      <span className="cartItemSize">{size}</span>
      <div className="cartItemAmountContainer">
        <div className="cartItemAmountLeft">
          <select
            className="cartItemAmountInput"
            value={amount}
            onChange={onAmountChanger}
          >
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
          <button className="cartItemAmountDelete" onClick={onDelete}>
            삭제
          </button>
        </div>
        <span className="cartItemAmountTotal">{price.toLocaleString()}</span>
      </div>
    </div>
  );
};

export default CartItem;
