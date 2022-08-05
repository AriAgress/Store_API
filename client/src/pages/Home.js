import React from "react";
import HomeCard from "./components/prodCard/homeCard/HomeCard";

import { CardWrapper } from "../pages/components/prodCard/ProductSylesheet";

const Home = ({ items }) => {
  return (
    <React.Fragment>
      <CardWrapper>
        {items.map((p, i) => (
          <HomeCard
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

export default Home;
