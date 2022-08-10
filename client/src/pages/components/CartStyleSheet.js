import styled from "styled-components";

export const CartWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(1fr);
  grid-auto-rows: auto;
  grid-gap: 2rem;
  padding: 50px 0px;
`;

export const Card = styled.div`
  width: 100%;
  padding: 0.8rem 0;
  background: #f5f5f5;
  position: relative;
  overflow: visible;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);

  display: grid;
  grid-template-columns: 0.7fr 1.3fr 1fr 1fr;
`;

export const CardHeader = styled.div`
  display: flex;
  flex-flow: row;
  padding-left: 1rem;
`;

export const IMG = styled.img`
  height: 200px;
  width: 100%;
  border-radius: 0.5rem;
  border: none;
  padding-left: 1rem;
`;

export const ItemDescription = styled.div`
  width: 100%;
  padding: 1.5rem;
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  text-align: justify;
`;

export const RemoveButton = styled.button`
  width: 60%;
  padding: 0.5rem;
  border: none;
  border-radius: 25px;
  background-color: none;
  transition: 0.3s ease-in-out;

  &:hover {
    background-color: #ffcaa6;
  }
`;

export const ItemInput = styled.div`
  width: 100%;
  padding-top: 1.5rem;
  display: flex;
  justify-content: flex-end;
`;

export const InputContainer = styled.div`
  height: 20%;
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
`;

export const InputButton = styled.button`
  height: 100%;
  background-color: white;
  font-size: 24px;

  transition: all 0.2s ease-out;

  &:hover {
    background-color: #ffcaa6;
  }
`;

export const NumberInput = styled.div`
  width: 100%;

  display: flex;
  flex-direction: row;
`;

export const Input = styled.input`
  width: 100%;
  height: 48px;
  border-left: none;
  border-right: none;

  font-size: 16px;
  line-height: 24px;
  text-align: center;
  transition: all 0.2s ease-out;

  &:hover {
    background-color: #ffcaa6;
  }
`;

export const ItemTotal = styled.div`
  font-weight: 700;
  padding-right: 1.5rem;
`;

export const TotalCheckout = styled.div`
  width: 100%;
  padding: 0.8rem 0;
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  line-height: 2rem;
`;

export const ValueContainer = styled.div``;

export const CheckoutContainer = styled.div`
  display: flex;
  flex-flow: column;
  align-items: flex-end;
  padding-right: 1.5rem;
`;

export const CheckoutValues = styled.div``;

export const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

export const CheckoutButton = styled.button`
  width: 50%;
  font-weight: 800;
  font-size: 18px;
  padding: 1rem;
  background-color: #f5f5f5;
  transition: 0.3s ease-in-out;

  &:hover {
    background-color: #ffcaa6;
  }
`;
