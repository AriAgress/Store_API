import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { AiFillStar } from "react-icons/ai";
import { FaStore } from "react-icons/fa";
import { GiShoppingCart } from "react-icons/gi";

const StoreLogoWrapper = styled.div`
  width: 100%;
  padding-top: 2rem;
`;
const StoreLogoContainer = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;
const StoreLogo = styled.div`
  display: flex;
  align-items: center;
  font-size: 3rem;
  font-family: "Bebas Neue", cursive;
  color: #14213d;
`;

const NavBar = styled.div`
  font-family: "Source Sans Pro", sans-serif;
  font-weight: 800;
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.div`
  font-size: 5rem;
  color: black;
  &:hover {
    color: #fca311;
  }
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
    color: #fca311;
  }
`;

const CartLogo = styled.div`
  font-size: 1.5rem;
  color: black;
  &:hover {
    color: #fca311;
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
    <React.Fragment>
      <StoreLogoWrapper>
        <StoreLogoContainer>
          <StoreLogo>
            <AiFillStar style={{ fontSize: "1rem", paddingRight: "1rem" }} />
            AllStore
            <AiFillStar style={{ fontSize: "1rem", paddingLeft: "1rem" }} />
          </StoreLogo>
        </StoreLogoContainer>
      </StoreLogoWrapper>
      <NavBar>
        <Link to="/" style={{ textDecoration: "none" }}>
          <Logo>
            <FaStore />
          </Logo>
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
    </React.Fragment>
  );
};

export default Nav;
