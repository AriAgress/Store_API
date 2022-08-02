import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

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
`;

const Cart = styled.div`
  border: 1px solid blue;
  height: 1rem;
  width: 1rem;
`;

const Nav = () => {
  return (
    <NavBar>
      <Link to="/">
        <Logo></Logo>
      </Link>
      <NavItems>
        <Link to="/mens">
          <Category>Men</Category>
        </Link>
        <Link to="/womens">
          <Category>Woman</Category>
        </Link>
        <Link to="/jewelery">
          <Category>Jewelery</Category>
        </Link>
        <Link to="/electronics">
          <Category>Electronics</Category>
        </Link>
        <Cart></Cart>
      </NavItems>
    </NavBar>
  );
};

export default Nav;
