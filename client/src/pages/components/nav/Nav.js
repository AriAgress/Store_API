import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { GiShoppingCart } from "react-icons/gi";

const NavBar = styled.div`
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 2rem;
`;

const Logo = styled.div`
  border: 1px solid blue;
  height: 5rem;
  width: 5rem;
`;

const NavItems = styled.ul`
  display: flex;
  flex-flow: row;
  list-style: none;
`;

const Category = styled.li`
  margin: 0rem 1rem;
  color: black;
  &:hover {
    color: #ffcaa6;
  }
`;

const CartLogo = styled.div`
  font-size: 1.5rem;
  color: black;
  &:hover {
    color: #ffcaa6;
  }
`;

const CartNum = styled.div``;

const Nav = () => {
  // const [numTag, setNumTag] = useState();

  // useEffect(() => {
  //   cartTotalCount();
  //   setNumTag(cartTotalCount());
  // }, []);

  // console.log("yo", cartTotalCount());

  return (
    <NavBar>
      <Link to="/" style={{ textDecoration: "none" }}>
        <Logo></Logo>
      </Link>
      <NavItems>
        <Link to="/mens" style={{ textDecoration: "none" }}>
          <Category>Men</Category>
        </Link>
        <Link to="/womens" style={{ textDecoration: "none" }}>
          <Category>Woman</Category>
        </Link>
        <Link to="/jewelery" style={{ textDecoration: "none" }}>
          <Category>Jewelery</Category>
        </Link>
        <Link to="/electronics" style={{ textDecoration: "none" }}>
          <Category>Electronics</Category>
        </Link>
        <Link to="/cart" style={{ textDecoration: "none" }}>
          <CartLogo>
            <CartNum>
              <GiShoppingCart />
            </CartNum>
          </CartLogo>
        </Link>
      </NavItems>
    </NavBar>
  );
};

export default Nav;
