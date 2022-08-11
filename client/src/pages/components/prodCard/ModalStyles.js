import styled from "styled-components";
import { MdClose } from "react-icons/md";

export const Background = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  top: 0;
  left: 0;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
`;

export const ModalWrapper = styled.div`
  width: 80vw;
  display: flex;
  flex-flow: column;
  position: relative;
  align-items: center;
  background: #f5f5f5;
  padding: 40px;
  z-index: 10;
`;

export const ModalImg = styled.img`
  width: 40%;
  padding: 20px 0px;
`;

export const ModalContent = styled.div`
  display: flex;
  flex-flow: column;
  line-height: 1.8;
  color: #141414;
  padding: 20px 40px;
  border-top: 1px solid #ddd;
`;

export const Title = styled.div`
  font-weight: 700;
  font-size: 30px;
  padding-bottom: 10px;
`;

export const Description = styled.div`
  font-weight: 500;
  padding: 10px 0;
  text-align: justify;
`;

export const PriceContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 10px;
`;

export const Price = styled.div`
  font-weight: 700;
`;

export const ATC = styled.div`
  width: ${(props) => (props.isAlertVisible === true ? "55px" : "40px")};
  height: ${(props) => (props.isAlertVisible === true ? "55px" : "40px")};
  border: 1px solid #252525;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.2rem;
  cursor: pointer;
  border-radius: 50px;
  transition: 0.3s ease-in-out;
  font-size: 24px;

  &:hover {
    border: ${(props) =>
      props.isAlertVisible === true
        ? "1px solid limegreen"
        : "1px solid #ffcaa6"};
    background-color: ${(props) =>
      props.isAlertVisible === true ? "limegreen" : "#ffcaa6"};
  }
`;

export const CloseModalButton = styled(MdClose)`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 32px;
  height: 32px;
  padding: 0;
  z-index: 10;
`;
