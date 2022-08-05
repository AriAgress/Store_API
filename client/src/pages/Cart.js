import React, { useState, useEffect } from "react";
import { getAllCart, removeFromCart } from "./components/crud/Crud";

const Cart = ({ product }) => {
  const [cartItem, setCartItem] = useState([]);

  useEffect(() => {
    setCartItem(getAllCart());
  }, []);

  return (
    <div>
      <div>
        {cartItem.map((p, i) => (
          <div key={i}>
            <div>{p.description}</div>
            <div>{p.count}</div>
            <button
              style={{ padding: "30px" }}
              onClick={() => removeFromCart(product)}>
              Remove me
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
