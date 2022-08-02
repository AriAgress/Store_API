import React from "react";
import { GiShoppingCart } from "react-icons/gi";

import {
  CardWrapper,
  Card,
  CardHeader,
  IMG,
  CardInfo,
  TextTile,
  TextBody,
  CardFooter,
  CardButton,
} from "../Product";

const HomeCard = ({ items }) => {
  return (
    <div>
      <CardWrapper>
        {items.map((p, i) => (
          <Card key={i}>
            <CardHeader>
              <IMG src={p.image} />
              <CardInfo>
                <TextTile>{p.title} </TextTile>
                <TextBody>{p.description}</TextBody>
              </CardInfo>
            </CardHeader>
            <div>
              <CardFooter>
                <TextTile>${p.price}</TextTile>
                <CardButton>
                  <GiShoppingCart />
                </CardButton>
              </CardFooter>
            </div>
          </Card>
        ))}
      </CardWrapper>
    </div>
  );
};

export default HomeCard;
