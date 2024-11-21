import React, { useState } from "react";
import "./itemcount.css";

const ItemCount = ({ stock, addProduct }) => {
  const [count, setCount] = useState(1);

  // Restar 1 al contador
  const handleClickSubstract = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  // Sumar 1 al contador
  const handleClickAdd = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  return (
    <div className="item-count-container">
      <div className="item-count-buttons">
        <button onClick={handleClickSubstract}>-</button>
        <p className="item-count-display">{count}</p>
        <button onClick={handleClickAdd}>+</button>
      </div>
      <button
        className="add-to-cart-button"
        onClick={() => addProduct(count)}
      >
        Agregar producto al carrito
      </button>
    </div>
  );
};

export default ItemCount;
