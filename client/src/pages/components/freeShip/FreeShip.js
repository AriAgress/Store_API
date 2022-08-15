import React from "react";
import styled from "styled-components";

const ShipWrapper = styled.div`
  width: 100%;
  padding: 0.5rem 0;
  background-color: black;
`;
const ShipContainer = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ShipText = styled.div`
  font-family: "Source Sans Pro", sans-serif;
  font-weight: 700;
  color: white;
  font-size: 2rem;
`;

const FreeShip = () => {
  return (
    <React.Fragment>
      <ShipWrapper>
        <ShipContainer>
          <ShipText>FREE shipping on all orders</ShipText>
        </ShipContainer>
      </ShipWrapper>
    </React.Fragment>
  );
};

export default FreeShip;
