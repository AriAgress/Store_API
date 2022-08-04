import React from "react";
import MensCard from "./components/prodCard/mensCard/MensCard";
import { CardWrapper } from "./components/prodCard/ProductSylesheet";

const MensCat = ({ mCat }) => {
  return (
    <React.Fragment>
      <CardWrapper>
        {mCat.map((p, i) => (
          <MensCard
            key={i}
            src={p.image}
            title={p.title}
            description={p.description}
            price={p.price}
          />
        ))}
      </CardWrapper>
    </React.Fragment>
  );
};

export default MensCat;
