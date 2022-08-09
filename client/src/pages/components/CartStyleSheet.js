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
  padding: 0.8em;
  background: #f5f5f5;
  position: relative;
  overflow: visible;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);

  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
`;

export const CardHeader = styled.div`
  display: flex;
  flex-flow: row;
`;

export const IMG = styled.img`
  height: 200px;
  width: 100%;
  border-radius: 0.5rem;
  border: none;
`;

export const ItemDescription = styled.div`
  width: 50%;
  padding: 1.5rem;
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  text-align: justify;
`;

export const RemoveButton = styled.button`
  width: 40%;
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
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const InputContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
`;

export const InputButton = styled.button`
  position: relative;
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

export const ItemTotal = styled.div``;
