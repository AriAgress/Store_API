import React from "react";
import styled from "styled-components";

const ShipWrapper = styled.div`
  width: 100%;
  height: 5vh;
  background-color: black;
`;
const ShipContainer = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ShipText = styled.h2`
  color: white;
  font-size: 2rem;
  font-weight: 500;
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
