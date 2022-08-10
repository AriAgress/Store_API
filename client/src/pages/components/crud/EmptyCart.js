import React from "react";
import { Link } from "react-router-dom";
import { CartWrapper, CartAlert, HomeLink } from "../CartStyleSheet";

const EmptyCart = () => {
  return (
    <React.Fragment>
      <CartWrapper>
        <CartAlert>
          Uh oh! There is nothing in your cart.
          <Link to="/" style={{ textDecoration: "none" }}>
            <HomeLink>Continue Shopping</HomeLink>
          </Link>
        </CartAlert>
      </CartWrapper>
    </React.Fragment>
  );
};

export default EmptyCart;
