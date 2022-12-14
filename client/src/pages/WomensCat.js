import React from "react";
import WomensCard from "./components/prodCard/womensCard/WomensCard";

import { CardWrapper } from "../pages/components/prodCard/ProductSylesheet";

const WomensCat = ({ fCat, numTag, setNumTag }) => {
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
            numTag={numTag}
            setNumTag={setNumTag}
          />
        ))}
      </CardWrapper>
    </React.Fragment>
  );
};

export default WomensCat;
