import React from "react";
import HomeCard from "./components/prodCard/homeCard/HomeCard";
import Carousel from "./components/carousel/Carousel";

import { CardWrapper } from "../pages/components/prodCard/ProductSylesheet";

const Home = ({ items }) => {
  const ImageData = [
    {
      description: "Styles that stack up",
      image: `${items[14].image}`,
    },
    {
      image: `${items[12].image}`,
    },
    {
      image: `${items[6].image}`,
    },
  ];

  return (
    <React.Fragment>
      <Carousel slides={ImageData} />
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
