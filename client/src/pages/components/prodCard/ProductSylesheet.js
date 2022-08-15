import styled from "styled-components";

export const CardWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: auto;
  grid-gap: 1rem;
  padding: 50px 0px;
`;

export const Card = styled.div`
  width: 200px;
  padding: 0.8rem;
  background: #f5f5f5;
  position: relative;
  overflow: visible;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);

  display: flex;
  flex-flow: column;
  justify-content: space-between;
`;

export const CardHeader = styled.div`
  display: flex;
  flex-flow: column;
`;

export const IMG = styled.img`
  height: 200px;
  width: 100%;
  border-radius: 0.5rem;
  border: none;
  transition: 0.3s ease;

  &:hover {
    transform: translateY(-25%);
    box-shadow: rgba(226, 196, 63, 0.25) 0px 13px 47px -5px,
      rgba(180, 71, 71, 0.3) 0px 8px 16px -8px;
    cursor: pointer;
  }
`;

export const CardInfo = styled.div`
  padding-top: 10%;
`;

export const TextTile = styled.p`
  font-family: "Playfair Display", serif;
  font-weight: 800;
  font-size: 1em;
  line-height: 1.5;
`;

export const TextBody = styled.p`
  font-family: "Source Sans Pro", sans-serif;
  font-weight: 600;
  font-size: 0.9em;
  padding-bottom: 10px;
  color: #14213d;

  overflow: hidden;
  text-overflow: ellipsis;
  -o-text-overflow: ellipsis;
  display: -webkit-box;
  line-height: 16px;
  max-height: 37px;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
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
  width: ${(props) => (props.isAlertVisible === true ? "35px" : "20px")};
  height: ${(props) => (props.isAlertVisible === true ? "35px" : "20px")};

  border: 1px solid #252525;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.3em;
  cursor: pointer;
  border-radius: 50px;
  transition: 0.3s ease-in-out;

  &:hover {
    border: ${(props) =>
      props.isAlertVisible === true
        ? "1px solid limegreen"
        : "1px solid #ffcaa6"};
    background-color: ${(props) =>
      props.isAlertVisible === true ? "limegreen" : "#fca311"};
  }
`;
