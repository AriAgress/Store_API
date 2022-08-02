import styled from "styled-components";

export const CardWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: auto;
  grid-gap: 1rem;
  padding-top: 50px;
`;

export const Card = styled.div`
  height: 350px;
  padding: 0.8em;
  background: #f5f5f5;
  position: relative;
  overflow: visible;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
`;

export const IMG = styled.div`
  background-color: #ffcaa6;
  height: 40%;
  width: 100%;
  border-radius: 0.5rem;
  transition: 0.3s ease;

  &:hover {
    transform: translateY(-25%);
    box-shadow: rgba(226, 196, 63, 0.25) 0px 13px 47px -5px,
      rgba(180, 71, 71, 0.3) 0px 8px 16px -8px;
  }
`;

export const CardInfo = styled.div`
  padding-top: 10%;
`;

export const TextTile = styled.p`
  font-weight: 900;
  font-size: 1.2em;
  line-height: 1.5;
`;

export const TextBody = styled.p`
  font-size: 0.9em;
  padding-bottom: 10px;
`;

export const CardFooter = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 10px;
  border-top: 1px solid #ddd;
`;

export const CardButton = styled.div`
  width: 20px;
  height: 20px;
  border: 1px solid #252525;
  display: flex;
  padding: 0.3em;
  cursor: pointer;
  border-radius: 50px;
  transition: 0.3s ease-in-out;

  &:hover {
    border: 1px solid #ffcaa6;
    background-color: #ffcaa6;
  }
`;
