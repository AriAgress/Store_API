import React from "react";

import {
  CardWrapper,
  Card,
  IMG,
  CardInfo,
  TextTile,
  TextBody,
  CardFooter,
  CardButton,
} from "../Product";

const HomeCard = () => {
  return (
    <CardWrapper>
      <Card>
        <IMG />
        <CardInfo>
          <TextTile>Product title </TextTile>
          <TextBody>Product description and details</TextBody>
        </CardInfo>
        <CardFooter>
          <TextTile>$499.49</TextTile>
          <CardButton></CardButton>
        </CardFooter>
      </Card>
    </CardWrapper>
  );
};

export default HomeCard;
