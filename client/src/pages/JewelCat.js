import React from "react";
import JeweleryCard from "./components/prodCard/jeweleryCard/JeweleryCard";

import { CardWrapper } from "../pages/components/prodCard/ProductSylesheet";

const JewelCat = ({ jCat }) => {
  return (
    <React.Fragment>
      <CardWrapper>
        {jCat.map((p, i) => (
          <JeweleryCard
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

export default JewelCat;
