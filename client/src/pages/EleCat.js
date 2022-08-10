import React from "react";
import ElectronicsCard from "./components/prodCard/electronicCard/ElectronicsCard";

import { CardWrapper } from "../pages/components/prodCard/ProductSylesheet";

const EleCat = ({ eCat }) => {
  return (
    <React.Fragment>
      <CardWrapper>
        {eCat.map((p, i) => (
          <ElectronicsCard
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

export default EleCat;
