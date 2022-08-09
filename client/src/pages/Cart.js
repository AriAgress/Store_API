import React, { useState, useEffect } from "react";
import {
  getAllCart,
  removeFromCart,
  addCartCount,
  subCartCount,
  updateCart,
} from "./components/crud/Crud";

const Cart = () => {
  const [cartItem, setCartItem] = useState([]);
  // const [newInput, setNewInput] = useState("");

  const removeItem = (p) => {
    const newCart = removeFromCart(p);
    setCartItem(newCart);
  };

  const addCount = (p) => {
    const newCart = addCartCount(p);
    setCartItem(newCart);
  };

  const subCount = (p) => {
    const newCart = subCartCount(p);
    setCartItem(newCart);
  };

  const handleChange = (e, product) => {
    const input = updateCart(product, e.target.value);
    setCartItem(input);
  };

  // const update = (p) => {
  //   const input = updateCart(p);
  //   setNewInput(input);
  // };

  // const inputClick = () => {
  //   if (isNaN(newInput)) {
  //     alert("Please enter a valid number");
  //     return;
  //   } else {
  //     setNewInput(newInput);
  //   }
  //   if (
  //     newInput === null ||
  //     newInput === 0 ||
  //     newInput === undefined ||
  //     newInput === ""
  //   ) {
  //     setNewInput(1);
  //   }
  // };

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
            <br />
            <div style={{ padding: "30px" }}>
              <button
                style={{ fontSize: "30px", padding: "30px" }}
                onClick={() => addCount(p)}>
                +
              </button>
              <input
                style={{ fontSize: "30px", width: "20px" }}
                placeholder={p.count}
                onChange={(e) => handleChange(e, p)}
              />
              <button>Update</button>
              <button
                style={{ fontSize: "30px", padding: "30px" }}
                onClick={() => subCount(p)}>
                -
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
