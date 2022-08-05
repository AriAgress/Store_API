import React, { useState, useEffect } from "react";
import { getAllCart, removeFromCart } from "./components/crud/Crud";

const Cart = () => {
  const [cartItem, setCartItem] = useState([]);

  const removeItem = (p) => {
    const newCart = removeFromCart(p);
    setCartItem(newCart);
  };

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
            <button style={{ padding: "30px" }} onClick={() => removeItem(p)}>
              Remove me
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
