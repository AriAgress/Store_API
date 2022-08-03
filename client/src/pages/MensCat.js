import React from "react";
import { GiShoppingCart } from "react-icons/gi";
import Nav from "./components/nav/Nav";
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
} from "./components/prodCard/Product.js";

const MensCat = ({ mCat }) => {
  return (
    <div>
      <Nav />
      <div>
        <CardWrapper>
          {mCat.map((p, i) => (
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
    </div>
  );
};

export default MensCat;
