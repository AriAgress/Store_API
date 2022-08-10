import React from "react";
import WomensCard from "./components/prodCard/womensCard/WomensCard";

import { CardWrapper } from "../pages/components/prodCard/ProductSylesheet";

const WomensCat = ({ fCat }) => {
  return (
    <React.Fragment>
      <CardWrapper>
        {fCat.map((p, i) => (
          <WomensCard
            key={i}
            src={p.image}
            title={p.title}
            description={p.description}
            price={p.price}
            product={p}
          />
        ))}
      </CardWrapper>
    </React.Fragment>
  );
};

export default WomensCat;
