import React from "react";
import Nav from "./components/nav/Nav";
import HomeCard from "./components/prodCard/homeCard/HomeCard";

const Home = ({ items }) => {
  return (
    <div>
      <Nav />
      <HomeCard items={items} />
    </div>
  );
};

export default Home;
