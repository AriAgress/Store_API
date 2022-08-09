import React, { useState, useEffect } from "react";
import {
  getAllCart,
  removeFromCart,
  addCartCount,
  subCartCount,
  updateCart,
  cartTotalPrice,
} from "./components/crud/Crud";

import {
  CartWrapper,
  Card,
  CardHeader,
  IMG,
  ItemDescription,
  RemoveButton,
  ItemInput,
  InputContainer,
  InputButton,
  NumberInput,
  Input,
  ItemTotal,
} from "./components/CartStyleSheet";

const Cart = () => {
  const [cartItem, setCartItem] = useState([]);

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

  useEffect(() => {
    setCartItem(getAllCart());
    cartTotalPrice();
  }, []);

  return (
    <React.Fragment>
      <CartWrapper>
        {cartItem.map((p, i) => (
          <Card key={i}>
            <CardHeader>
              <div>
                <IMG alt="" src={p.image} />
              </div>
              <ItemDescription>
                <div>{p.title}</div>
                <div>{p.price}</div>
                <RemoveButton onClick={() => removeItem(p)}>
                  Remove Item
                </RemoveButton>
              </ItemDescription>
            </CardHeader>
            <ItemInput>
              <InputContainer>
                <InputButton
                  style={{ borderRight: "none" }}
                  onClick={() => subCount(p)}>
                  -
                </InputButton>
                <NumberInput>
                  <Input
                    placeholder={p.count}
                    onChange={(e) => handleChange(e, p)}
                  />
                </NumberInput>
                <InputButton
                  style={{ borderLeft: "none" }}
                  onClick={() => addCount(p)}>
                  +
                </InputButton>
              </InputContainer>
            </ItemInput>
            <ItemInput>
              <ItemTotal>Total Price</ItemTotal>
            </ItemInput>
          </Card>
        ))}
        <div>${cartTotalPrice().toFixed(2)}</div>
      </CartWrapper>
    </React.Fragment>
  );
};

export default Cart;
