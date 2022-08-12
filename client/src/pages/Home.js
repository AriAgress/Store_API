import React from "react";
import HomeCard from "./components/prodCard/homeCard/HomeCard";
import Carousel from "./components/carousel/Carousel";

import { CardWrapper } from "../pages/components/prodCard/ProductSylesheet";

const Home = ({ items }) => {
  const ImageData = [
    {
      id: 1,
      description: [
        <div>
          Styles that. <br /> stack. <br /> up.
        </div>,
      ],
      image: `${items[14]?.image}`,
    },
    {
      id: 2,
      description: [<div>The latest tech.</div>],
      image: `${items[13]?.image}`,
    },
    {
      id: 3,
      description: [
        <div style={{ textAlign: "center" }}>
          We have it all. <br /> SHOP NOW!
        </div>,
      ],
      image: `${items[4]?.image}`,
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
