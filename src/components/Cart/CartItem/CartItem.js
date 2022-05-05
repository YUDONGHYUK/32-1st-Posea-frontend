import React, { useState } from 'react';
import './CartItem.scss';

const CartItem = ({
  item,
  item: { product_name, size, count, totalPrice },
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
      <span className="cartItemName">{product_name}</span>
      <span className="cartItemSize">{size}mL</span>
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
                  <span>{count}</span>
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

        <span className="cartItemAmountTotal">
          {totalPrice.toLocaleString()}
        </span>
      </div>
    </div>
  );
};

export default CartItem;
