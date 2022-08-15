import styled from "styled-components";

export const SliderWrapper = styled.div`
  font-family: "Playfair Display", serif;
  height: 400px;
  width: 100%;
  position: relative;
`;

export const DisplayWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  justify-content: center;
`;

export const DisplayBody = styled.div`
  width: 100%;
  display: flex;
  flex-flow: ${(props) => (props.even ? "row-reverse" : "row")};
  justify-content: space-between;
  align-items: center;
  padding: 0px 150px;

  background-color: ;
`;

export const SlideImage = styled.img`
  height: 300px;
  width: 250px;
`;

export const InfoBox = styled.div``;

export const Intro = styled.h1`
  font-size: 50px;
`;

export const Description = styled.div``;
