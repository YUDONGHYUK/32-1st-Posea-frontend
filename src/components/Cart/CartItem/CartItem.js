import React, { useState } from 'react';
import './CartItem.scss';

const CartItem = ({
  item,
  item: { name, size, amount, price },
  handleAmount,
  handleDelete,
}) => {
  const [spreadAmountBtn, setSpreadAmountBtn] = useState(false);

  const onDelete = () => handleDelete(item);
  const spreadAmount = e => {
    spreadAmountBtn && handleAmount(item, e);

    setSpreadAmountBtn(!spreadAmountBtn);
  };

  return (
    <div className="cartItem">
      <span className="cartItemName">{name}</span>
      <span className="cartItemSize">{size}</span>
      <div className="cartItemAmountContainer">
        <div className="cartItemAmountLeft">
          <div className="cartItemAmountListContainer">
            <ul
              className={`cartItemAmountList ${
                spreadAmountBtn ? 'active' : ''
              }`}
            >
              {!spreadAmountBtn && (
                <li className="cartItemAmount" onClick={spreadAmount}>
                  <span>{amount}</span>
                  <span>▿</span>
                </li>
              )}
              {spreadAmountBtn && (
                <>
                  <li className="cartItemAmount" onClick={spreadAmount}>
                    1
                  </li>
                  <li className="cartItemAmount" onClick={spreadAmount}>
                    2
                  </li>
                  <li className="cartItemAmount" onClick={spreadAmount}>
                    3
                  </li>
                  <li className="cartItemAmount" onClick={spreadAmount}>
                    4
                  </li>
                  <li className="cartItemAmount" onClick={spreadAmount}>
                    5
                  </li>
                </>
              )}
            </ul>
          </div>
          <div className="blankBox" />
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
