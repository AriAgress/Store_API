import React from "react";
import HomeCard from "./components/prodCard/homeCard/HomeCard";

import { CardWrapper } from "../pages/components/prodCard/ProductSylesheet";

const Home = ({ items }) => {
  return (
    <>
      <CardWrapper>
        {items.map((p, i) => (
          <HomeCard
            items={items}
            key={i}
            src={p.image}
            title={p.title}
            description={p.description}
            price={p.price}
          />
        ))}
      </CardWrapper>
    </>
  );
};

export default Home;
