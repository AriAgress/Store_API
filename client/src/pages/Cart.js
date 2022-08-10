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
  TotalCheckout,
  ValueContainer,
  CheckoutContainer,
  CheckoutValues,
  ButtonContainer,
  CheckoutButton,
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

  const itemTotal = (quantity, price) => {
    return quantity * price;
  };

  const tax = (price, taxRate = 0.0725) => {
    return price * taxRate;
  };

  const totalSum = (a, b) => {
    return a + b;
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
            <div>
              <IMG alt="" src={p.image} />
            </div>
            <CardHeader>
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
              <ItemTotal>${itemTotal(p.count, p.price).toFixed(2)}</ItemTotal>
            </ItemInput>
          </Card>
        ))}
        <TotalCheckout>
          <div />
          <ValueContainer>
            <CheckoutValues>Subtotal:</CheckoutValues>
            <CheckoutValues>Shipping:</CheckoutValues>
            <CheckoutValues
              style={{
                borderBottom: "1px solid black",
                paddingBottom: "1rem",
              }}>
              Tax:
            </CheckoutValues>
            <CheckoutValues
              style={{
                paddingTop: "1rem",
              }}>
              Total:
            </CheckoutValues>
          </ValueContainer>
          <CheckoutContainer>
            <CheckoutValues>${cartTotalPrice().toFixed(2)}</CheckoutValues>
            <CheckoutValues>Free</CheckoutValues>
            <CheckoutValues
              style={{
                borderBottom: "1px solid black",
                width: "100%",
                textAlign: "right",
                paddingBottom: "1rem",
              }}>
              ${tax(cartTotalPrice()).toFixed(2)}
            </CheckoutValues>
            <CheckoutValues
              style={{
                fontSize: "24px",
                fontWeight: "600",
                paddingTop: "1rem",
              }}>
              ${totalSum(cartTotalPrice(), tax(cartTotalPrice())).toFixed(2)}
            </CheckoutValues>
          </CheckoutContainer>
        </TotalCheckout>
        <ButtonContainer>
          <CheckoutButton>Checkout</CheckoutButton>
        </ButtonContainer>
      </CartWrapper>
    </React.Fragment>
  );
};

export default Cart;
