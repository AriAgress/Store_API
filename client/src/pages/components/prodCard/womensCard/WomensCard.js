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
} from "../ProductSylesheet";

const WomensCard = ({ fCat }) => {
  return (
    <React.Fragment>
      <CardWrapper>
        {fCat.map((p, i) => (
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
    </React.Fragment>
  );
};

export default WomensCard;
