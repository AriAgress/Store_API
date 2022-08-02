import React from "react";
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
      <Logo></Logo>
      <NavItems>
        <Category>Men</Category>
        <Category>Woman</Category>
        <Category>Jewelery</Category>
        <Category>Electronics</Category>
        <Cart></Cart>
      </NavItems>
    </NavBar>
  );
};

export default Nav;
